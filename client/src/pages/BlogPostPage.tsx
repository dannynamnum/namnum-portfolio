/**
 * Editorial Monochrome — blog post detail.
 * Clean, typographically focused reading layout. Narrow measure,
 * generous leading, large featured image, next-post footer link.
 */
import { Fragment } from "react";
import SEO from "@/components/site/SEO";
import { Link, Redirect, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { getBlogPost, nextBlogPost } from "@/lib/blogPosts";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug ?? "");
  if (!post) return <Redirect to="/404" />;
  const next = nextBlogPost(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    ...(post.image ? { image: `https://namnum.net${post.image}` } : {}),
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Danny Namnum",
      url: "https://namnum.net",
    },
    mainEntityOfPage: `https://namnum.net/insights/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        ogUrl={`/insights/${post.slug}`}
        ogImage={post.image ? `https://namnum.net${post.image}` : undefined}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Nav />
      <main className="pt-16 md:pt-[72px]">
        {/* Title block */}
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14">
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-meta text-[11px] text-ink/50 hover:text-ink transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All insights
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-meta text-[11px] border border-ink/15 px-2.5 py-1 text-ink/60">
                {post.category}
              </span>
              <span className="font-meta text-[11px] text-ink/45">
                {formatDate(post.date)} · {post.readTime}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
              {post.title}
            </h1>
          </Reveal>
        </div>

        {/* Featured image */}
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            {post.image ? (
              <img
                src={post.image}
                alt={post.imageAlt ?? ""}
                className="w-full max-h-[540px] border border-ink/10 object-cover object-top"
              />
            ) : (
              <div
                className="relative flex aspect-[16/8.5] max-h-[540px] items-end overflow-hidden border border-ink/10 bg-gradient-to-br from-ink via-ink to-coral/80 p-7 text-paper md:p-12"
                aria-label={`${post.category} insight`}
                role="img"
              >
                <div className="absolute -right-10 -top-10 h-48 w-48 border border-paper/20" />
                <div className="absolute right-[36%] top-[-20%] h-[150%] w-px rotate-[26deg] bg-paper/20" />
                <div>
                  <span className="font-meta text-[11px] tracking-[0.12em] text-paper/60">REAL ESTATE / INSIGHT</span>
                  <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.025em] md:text-5xl">Danny Namnum<span className="text-coral">.</span></p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Body — narrow reading measure */}
        <article className="mx-auto max-w-[720px] px-5 md:px-0 pt-12 md:pt-16 pb-16 md:pb-24">
          <Reveal>
            <div className="space-y-6">
              {post.body.map((para, i) => {
                const inlineLink = post.inlineLinks?.find((link) => link.after === para);
                return (
                  <Fragment key={i}>
                    {para.startsWith("## ") ? (
                      <h2 className="pt-5 font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] text-ink md:text-3xl">
                        {para.slice(3)}
                      </h2>
                    ) : (
                      <p
                        className={
                          i === 0
                            ? "text-ink text-lg md:text-xl leading-relaxed font-medium"
                            : "text-ink/75 text-base md:text-lg leading-relaxed"
                        }
                      >
                        {para}
                      </p>
                    )}
                    {inlineLink && (
                      <Link
                        href={inlineLink.href}
                        className="group inline-flex items-center gap-2 border-b border-coral/40 pb-1 font-meta text-[11px] uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-coral hover:text-coral"
                      >
                        {inlineLink.label}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </Reveal>

          {/* Byline */}
          <Reveal>
            <div className="mt-14 border-t border-ink/10 pt-8 flex items-center gap-4">
              <img
                src="/assets/danny-headshot.jpg"
                alt="Danny Namnum"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-display font-bold text-ink">Danny Namnum</p>
                <p className="font-meta text-[11px] text-ink/50 mt-0.5">
                  Fractional Head of UX · AI UX Strategy
                </p>
              </div>
            </div>
          </Reveal>

          {post.relatedWork && (
            <Reveal>
              <div className="mt-12 border-y border-ink/10 py-7">
                <p className="font-meta text-[10px] uppercase tracking-[0.14em] text-ink/45">Related work</p>
                <Link href={post.relatedWork.href} className="group mt-3 block">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-coral md:text-3xl">
                        {post.relatedWork.label}
                      </h2>
                      <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/65">
                        {post.relatedWork.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </div>
            </Reveal>
          )}

          {post.relatedInsight && (
            <Reveal>
              <div className="mt-5 border-b border-ink/10 pb-7">
                <p className="font-meta text-[10px] uppercase tracking-[0.14em] text-ink/45">Keep reading</p>
                <Link href={post.relatedInsight.href} className="group mt-3 block">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-coral md:text-3xl">
                        {post.relatedInsight.label}
                      </h2>
                      <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/65">
                        {post.relatedInsight.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </div>
            </Reveal>
          )}
        </article>

        {/* Next post */}
        <div className="border-t border-ink/10">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-14 md:py-20">
            <Reveal>
              <Link href={`/insights/${next.slug}`} className="group block">
                <span className="font-meta text-[11px] text-ink/45">Next up</span>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h2 className="max-w-3xl font-display text-3xl md:text-5xl font-extrabold tracking-[-0.025em] text-ink group-hover:text-coral transition-colors duration-300">
                    {next.title}
                  </h2>
                  <ArrowUpRight className="mt-2 h-7 w-7 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
