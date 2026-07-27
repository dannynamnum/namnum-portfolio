/**
 * Editorial Monochrome — Work index.
 * Light page, editorial list of all six case studies with industry filter.
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { caseStudies } from "@/lib/caseStudies";

const filters = [
  { id: "all", label: "All" },
  { id: "real-estate", label: "Real Estate" },
  { id: "hospitality", label: "Hospitality" },
  { id: "saas", label: "SaaS" },
  { id: "kiosks", label: "Kiosks" },
] as const;

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const shown = caseStudies.filter((c) => filter === "all" || c.tags.includes(filter));

  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main className="pt-28 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionLabel index="01">Case Studies</SectionLabel>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-ink">
              Selected work<span className="text-coral">.</span>
            </h1>
           <p className="mt-5 max-w-xl text-ink/60 md:text-lg leading-relaxed">
             Websites and digital products for real estate, hospitality, and
              fintech. Each one built to convert.
           </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`border px-4 py-2 font-meta text-[11px] transition-all duration-200 active:scale-[0.97] ${
                    filter === f.id
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 md:mt-16 grid gap-x-10 gap-y-16 pb-24 md:grid-cols-2">
            {shown.map((cs, i) => (
              <Reveal
                key={cs.slug}
                delay={(i % 2) * 80}
                className={i % 3 === 0 ? "md:col-span-2" : ""}
              >
                <Link href={`/work/${cs.slug}`} className="group block">
                  <div className="overflow-hidden bg-ink/5">
                    <img
                      src={cs.cardImage}
                      alt={cs.heroAlt}
                      loading="eager"
                      className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
                        i % 3 === 0 ? "aspect-[16/8.5]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-meta text-[11px] text-ink/45">{cs.index}</span>
                        <span className="font-meta text-[11px] border border-ink/15 px-2.5 py-1 text-ink/60">
                          {cs.industry}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-ink">
                        {cs.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm md:text-base text-ink/60 leading-relaxed">
                        {cs.oneLiner}
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
