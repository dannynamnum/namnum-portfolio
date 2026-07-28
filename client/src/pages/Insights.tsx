/**
 * Editorial Monochrome — Insights index.
 * Light page, editorial card grid of blog posts. First post spans full width,
 * remaining posts in a two-column grid, matching the Work index rhythm.
 */
import SEO from "@/components/site/SEO";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { blogPosts } from "@/lib/blogPosts";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Insights() {
  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Insights — UX & Website Design Notes"
        description="Field notes on real estate website design, kiosk UX, and hospitality personalization from Danny Namnum, UX and website design consultant."
        ogUrl="/insights"
      />
      <Nav />
      <main className="pt-28 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionLabel index="01">Insights</SectionLabel>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-ink">
              Notes from the field<span className="text-coral">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-ink/60 md:text-lg leading-relaxed">
              Short reads on real estate websites, kiosks, and guest
              experience. What I'm seeing in the work, written plainly.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-16 grid gap-x-10 gap-y-16 pb-24 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={(i % 2) * 80}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <Link href={`/insights/${post.slug}`} className="group block">
                  <div className="overflow-hidden bg-ink/5">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
                        i === 0 ? "aspect-[16/8.5]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-meta text-[11px] border border-ink/15 px-2.5 py-1 text-ink/60">
                          {post.category}
                        </span>
                        <span className="font-meta text-[11px] text-ink/45">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-ink">
                        {post.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm md:text-base text-ink/60 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
