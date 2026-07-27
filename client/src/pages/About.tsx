/**
 * Editorial Monochrome — About page.
 * Client-facing bio for a CMO reader. Headshot + credentials + approach.
 */
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { A } from "@/lib/assets";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const credentials = [
  { value: "15+", label: "Years designing for major real estate developers and enterprise companies" },
  { value: "Stanford", label: "AI UX Certified" },
  { value: "1", label: "One senior partner from strategy through launch. No agency layers, no handoffs." },
];

const approach = [
  {
    title: "I simplify complexity",
    text: "I take genuinely complex products: master-planned communities, financial platforms, customization tools with 1,299 options. I reduce them to simple, effective designs people actually use.",
  },
  {
    title: "I design for business goals",
    text: "UX aligned with what you're actually trying to achieve: more qualified leads, faster decisions, higher conversions. Not just making things pretty.",
  },
  {
    title: "I build, not just design",
    text: "Design sensibility paired with strong technical ability. What I design, I can ship. Nothing gets lost in translation.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main className="pt-28 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
                  Your website should be your best salesperson
                  <span className="text-coral">.</span>
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-8 max-w-xl space-y-5 text-ink/70 md:text-lg leading-relaxed">
                  <p>
                    I'm Danny Namnum. For 15+ years I've designed websites and
                    digital products for major real estate developers and
                    enterprise companies: GL Homes, Babcock Ranch,
                    Lennar, and Payology.
                  </p>
                  <p>
                    My specialty is simplification. Master-planned communities,
                    financial platforms, home customization tools with over a
                    thousand options. I take products that are genuinely
                    complex and make them feel effortless to the person on the
                    other side of the screen.
                  </p>
                  <p>
                    I work differently than an agency. When you hire me, you
                    get me. One senior partner who handles strategy, design,
                    and build end to end. No account managers, no junior
                    designers, no handoffs. Decisions get made in days, not
                    weeks, and the person who understood your business on day
                    one is the same person who ships the work.
                  </p>
                  <p>
                    I work primarily with real estate, hospitality, and
                    fintech companies. Industries where the website isn't a
                    brochure. It's a sales tool that has to earn its budget
                    back.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <figure className="relative">
                  <span className="absolute -left-2 -top-2 h-5 w-5 bg-coral" aria-hidden="true" />
                  <img
                    src={A.headshot}
                    alt="Danny Namnum, senior UX designer and website consultant"
                    className="w-full border border-ink/10 object-cover"
                  />
                </figure>
                <div className="mt-5 flex items-center justify-between border-b border-ink/10 pb-4">
                  <p className="font-display font-bold text-ink">Danny Namnum</p>
                  <p className="font-meta text-[10px] text-ink/50">Stanford AI UX Certified</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Credentials strip */}
          <div className="mt-20 grid gap-8 border-y border-ink/10 py-10 md:grid-cols-3">
            {credentials.map((c, i) => (
              <Reveal key={c.value} delay={i * 70}>
                <div className="border-l-2 border-coral pl-5">
                  <p className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-ink">
                    {c.value}
                  </p>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Approach */}
          <div className="py-20 md:py-28">
            <Reveal>
              <SectionLabel index="02">How I Work</SectionLabel>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {approach.map((a, i) => (
                <Reveal key={a.title} delay={i * 80}>
                  <div className="border-t border-ink/10 pt-6">
                    <h2 className="font-display text-xl font-bold text-ink">{a.title}</h2>
                    <p className="mt-3 text-sm md:text-base text-ink/60 leading-relaxed">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 border border-ink/20 px-7 py-4 font-display font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper active:scale-[0.97]"
              >
                See the work
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
}

