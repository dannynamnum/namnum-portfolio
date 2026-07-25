/**
 * Editorial Monochrome — case study detail.
 * Full-width hero image → details strip → problem → solution (with visuals)
 * → before/after → metrics → results → testimonial → next project.
 */
import { Link, useParams, Redirect } from "wouter";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { getCaseStudy, nextCaseStudy, type CaseStudySection } from "@/lib/caseStudies";

function SectionBlock({
  section,
  index,
}: {
  section: CaseStudySection;
  index: string;
}) {
  return (
    <section className="border-t border-ink/10 py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-coral shrink-0" aria-hidden="true" />
              <span className="font-meta text-[11px] md:text-xs text-ink/55">
                {index} — {section.label}
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink">
                {section.heading}
              </h2>
            </Reveal>
            {section.body.map((p, i) => (
              <Reveal key={i} delay={60}>
                <p className="mt-5 max-w-2xl text-ink/65 md:text-lg leading-relaxed">{p}</p>
              </Reveal>
            ))}
            {section.bullets && (
              <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {section.bullets.map((b, i) => (
                  <Reveal key={i} delay={i * 50} as="li">
                    <div className="border-t border-ink/10 pt-4">
                      {b.title && (
                        <p className="font-display font-bold text-ink">{b.title}</p>
                      )}
                      <p className={`text-sm leading-relaxed text-ink/60 ${b.title ? "mt-1.5" : ""}`}>
                        {b.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>

        {section.images && section.images.length > 0 && (
          <div
            className={`mt-14 grid gap-6 ${
              section.images.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {section.images.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 70}
                as="figure"
                className={
                  section.images!.length % 2 === 1 && i === 0 ? "md:col-span-2" : ""
                }
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  className="w-full border border-ink/10 bg-white object-cover transition-transform duration-700"
                />
                {img.caption && (
                  <figcaption className="mt-2.5 font-meta text-[10px] text-ink/45">
                    {img.caption}
                  </figcaption>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudy(slug ?? "");
  if (!cs) return <Redirect to="/404" />;
  const next = nextCaseStudy(cs.slug);

  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main className="pt-16 md:pt-[72px]">
        {/* Title block */}
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-meta text-[11px] text-ink/45">{cs.index}</span>
              <span className="font-meta text-[11px] border border-ink/15 px-2.5 py-1 text-ink/60">
                {cs.industry}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
              {cs.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-ink/60 md:text-lg leading-relaxed">{cs.oneLiner}</p>
          </Reveal>
        </div>

        {/* Hero image */}
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <img
              src={cs.hero}
              alt={cs.heroAlt}
              className="w-full border border-ink/10 object-cover"
            />
          </div>
        </Reveal>

        {/* Details strip */}
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <dl className="mt-10 mb-14 grid gap-6 border-y border-ink/10 py-7 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="font-meta text-[10px] text-ink/45">Role</dt>
                <dd className="mt-1.5 font-display font-semibold text-ink">{cs.details.role}</dd>
              </div>
              <div>
                <dt className="font-meta text-[10px] text-ink/45">Industry</dt>
                <dd className="mt-1.5 font-display font-semibold text-ink">{cs.details.industry}</dd>
              </div>
              <div>
                <dt className="font-meta text-[10px] text-ink/45">Scope</dt>
                <dd className="mt-1.5 font-display font-semibold text-ink">{cs.details.scope}</dd>
              </div>
              {cs.details.timeline && (
                <div>
                  <dt className="font-meta text-[10px] text-ink/45">Timeline</dt>
                  <dd className="mt-1.5 font-display font-semibold text-ink">{cs.details.timeline}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>

        <SectionBlock section={cs.problem} index="01" />
        <SectionBlock section={cs.solution} index="02" />

        {cs.beforeAfter && (
          <section className="border-t border-ink/10 bg-ink py-16 md:py-24 text-paper">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-coral shrink-0" aria-hidden="true" />
                  <span className="font-meta text-[11px] md:text-xs text-paper/60">
                    03 — {cs.beforeAfter.heading}
                  </span>
                </div>
                <p className="mt-6 max-w-2xl font-display text-xl md:text-2xl font-medium leading-relaxed">
                  {cs.beforeAfter.body}
                </p>
              </Reveal>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <Reveal as="figure">
                  <figcaption className="mb-3 font-meta text-[11px] text-paper/50">Before</figcaption>
                  <img
                    src={cs.beforeAfter.before.src}
                    alt={cs.beforeAfter.before.alt}
                    loading="eager"
                    className="w-full border border-paper/15 object-cover opacity-85"
                  />
                </Reveal>
                <Reveal delay={90} as="figure">
                  <figcaption className="mb-3 font-meta text-[11px] text-coral">After</figcaption>
                  <img
                    src={cs.beforeAfter.after.src}
                    alt={cs.beforeAfter.after.alt}
                    loading="eager"
                    className="w-full border border-paper/15 object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {cs.role && <SectionBlock section={cs.role} index={cs.beforeAfter ? "04" : "03"} />}

        {/* Results */}
        <section className="border-t border-ink/10 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            {cs.metrics && (
              <div className="mb-14 grid gap-8 sm:grid-cols-2 max-w-3xl">
                {cs.metrics.map((m, i) => (
                  <Reveal key={m.label} delay={i * 80}>
                    <div className="border-l-2 border-coral pl-6">
                      <p className="font-display text-6xl md:text-7xl font-extrabold tracking-[-0.03em] text-ink">
                        {m.value}
                        {m.suffix && <span className="text-coral">{m.suffix}</span>}
                      </p>
                      <p className="mt-2 font-meta text-[11px] text-ink/55">{m.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-coral shrink-0" aria-hidden="true" />
                  <span className="font-meta text-[11px] md:text-xs text-ink/55">Results</span>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink">
                    {cs.results.heading}
                  </h2>
                </Reveal>
                {cs.results.body.map((p, i) => (
                  <Reveal key={i} delay={60}>
                    <p className="mt-5 max-w-2xl text-ink/65 md:text-lg leading-relaxed">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {cs.testimonial && (
              <Reveal className="mt-16">
                <blockquote className="relative max-w-3xl border border-ink/10 bg-white p-8 md:p-12 lg:ml-auto">
                  <span className="absolute -top-2 left-8 h-4 w-4 bg-coral" aria-hidden="true" />
                  <p className="font-display text-xl md:text-2xl font-medium leading-relaxed text-ink">
                    "{cs.testimonial.quote}"
                  </p>
                  <footer className="mt-7">
                    <p className="font-display font-bold text-ink">{cs.testimonial.name}</p>
                    <p className="mt-1 font-meta text-[11px] text-ink/50">{cs.testimonial.title}</p>
                  </footer>
                </blockquote>
              </Reveal>
            )}
          </div>
        </section>

        {/* Next case study */}
        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group block border-t border-ink/10 bg-paper transition-colors duration-300 hover:bg-ink"
          >
            <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-14 md:px-10 md:py-20">
              <div>
                <p className="font-meta text-[11px] text-ink/50 transition-colors duration-300 group-hover:text-paper/50">
                  Next case study
                </p>
                <p className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-paper">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-8 w-8 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        </Reveal>
      </main>
      <ContactSection />
    </div>
  );
}
