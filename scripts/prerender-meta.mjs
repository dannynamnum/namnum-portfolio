/**
 * Prerender share-preview metadata.
 *
 * Runs after `vite build`. For every Insights post and case study it writes a
 * static index.html under dist/public/<route>/ that is byte-identical to the
 * SPA shell except for the <head> tags link previewers read without running
 * JavaScript (title, description, Open Graph, Twitter card, canonical).
 * Vercel serves these files before falling back to the SPA rewrite, so
 * iMessage, LinkedIn, Slack and search engines see each page's own preview.
 */
import { build } from "esbuild";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://namnum.net";
const DEFAULT_IMAGE = `${SITE}/assets/danny-headshot.jpg`;
const OUT = path.resolve("dist/public");
const TMP = path.resolve("dist/.prerender");

async function loadData() {
  await mkdir(TMP, { recursive: true });
  const out = path.join(TMP, "data.mjs");
  await build({
    stdin: {
      contents: `
        export { blogPosts } from "./client/src/lib/blogPosts";
        export { caseStudies } from "./client/src/lib/caseStudies";
        export { CASE_STUDY_SEO } from "./client/src/lib/caseStudySeo";
      `,
      resolveDir: process.cwd(),
      loader: "ts",
    },
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: out,
    logLevel: "silent",
  });
  return import(pathToFileURL(out).href);
}

/**
 * Link previewers (LinkedIn in particular) are unreliable with WebP. When a
 * .jpg sibling of a .webp share image exists in the build output, use it.
 */
function shareImage(url) {
  if (!url.endsWith(".webp")) return url;
  const jpg = url.slice(0, -5) + ".jpg";
  const local = path.join(OUT, jpg.replace(SITE, ""));
  return existsSync(local) ? jpg : url;
}

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function setTag(html, attr, value, content) {
  const re = new RegExp(`<meta\\s+${attr}="${value}"[^>]*>`);
  const tag = `<meta ${attr}="${value}" content="${esc(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function render(shell, meta) {
  let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setTag(html, "name", "description", meta.description);
  html = setTag(html, "property", "og:title", meta.title);
  html = setTag(html, "property", "og:description", meta.description);
  html = setTag(html, "property", "og:type", meta.type);
  html = setTag(html, "property", "og:url", meta.url);
  html = setTag(html, "property", "og:image", meta.image);
  html = setTag(html, "name", "twitter:card", "summary_large_image");
  html = setTag(html, "name", "twitter:title", meta.title);
  html = setTag(html, "name", "twitter:description", meta.description);
  html = setTag(html, "name", "twitter:image", meta.image);
  const canonical = `<link rel="canonical" href="${esc(meta.url)}" />`;
  html = /<link\s+rel="canonical"[^>]*>/.test(html)
    ? html.replace(/<link\s+rel="canonical"[^>]*>/, canonical)
    : html.replace("</head>", `    ${canonical}\n  </head>`);
  return html;
}

async function writeRoute(route, html) {
  const dir = path.join(OUT, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
}

const shell = await readFile(path.join(OUT, "index.html"), "utf8");
const { blogPosts, caseStudies, CASE_STUDY_SEO } = await loadData();

const pages = [];

for (const post of blogPosts) {
  pages.push({
    route: `insights/${post.slug}`,
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    type: "article",
    url: `${SITE}/insights/${post.slug}`,
    image: post.image ? `${SITE}${post.image}` : DEFAULT_IMAGE,
  });
}

for (const cs of caseStudies) {
  const m = CASE_STUDY_SEO[cs.slug] || {};
  pages.push({
    route: `work/${cs.slug}`,
    title: m.title || `${cs.title} — Danny Namnum`,
    description: m.description || cs.oneLiner,
    type: "article",
    url: `${SITE}/work/${cs.slug}`,
    image: m.ogImage || (cs.hero ? `${SITE}${cs.hero}` : DEFAULT_IMAGE),
  });
}

// Index and about pages, mirroring the <SEO> props in their page components.
pages.push(
  {
    route: "insights",
    title: "Insights — UX & Website Design Notes",
    description:
      "Field notes on real estate website design, kiosk UX, and hospitality personalization from Danny Namnum, UX and website design consultant.",
    type: "website",
    url: `${SITE}/insights`,
    image: DEFAULT_IMAGE,
  },
  {
    route: "work",
    title: "Portfolio — Real Estate & Kiosk Design Work",
    description:
      "Case studies in real estate website design, kiosk UX, fintech apps, and hospitality. See how better design drives real business outcomes.",
    type: "website",
    url: `${SITE}/work`,
    image: DEFAULT_IMAGE,
  },
  {
    route: "about",
    title: "About Danny Namnum — Fractional Head of UX",
    description:
      "15+ years designing websites and digital products. Stanford AI UX Certified. One senior partner — no agency layers, no handoffs.",
    type: "website",
    url: `${SITE}/about`,
    image: DEFAULT_IMAGE,
  },
);

for (const page of pages) {
  await writeRoute(page.route, render(shell, { ...page, image: shareImage(page.image) }));
}

await rm(TMP, { recursive: true, force: true });
console.log(`prerender-meta: wrote ${pages.length} routes`);
