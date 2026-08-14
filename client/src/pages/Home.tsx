/**
 * Editorial Monochrome — Homepage.
 * Dark hero with geometric N-inspired motion → featured work (light) →
 * outcomes (dark) → social proof (light) → what I do → contact (dark).
 * One coral accent per viewport. Left-anchored editorial hierarchy.
 */
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { AvailabilityDot } from "@/components/site/AvailabilityBadge";
import { featuredStudies } from "@/lib/caseStudies";
import { Zap, MessageSquare, Wrench, Gem } from "lucide-react";
import SEO from "@/components/site/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-ink text-paper">
      {/* Geometric motion inspired by the N mark */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="drift absolute right-[12%] top-[16%] h-24 w-24 md:h-40 md:w-40 border border-paper/12" />
        <div className="drift-slow absolute right-[26%] top-[46%] h-10 w-10 md:h-16 md:w-16 bg-coral/90" />
        <div className="drift absolute right-[6%] bottom-[18%] h-32 w-32 md:h-56 md:w-56 border border-paper/8" style={{ animationDelay: "-6s" }} />
        <div className="drift-slow absolute left-[55%] top-[12%] hidden md:block h-6 w-6 bg-paper/10" style={{ animationDelay: "-11s" }} />
        {/* diagonal hairline echoing the N */}
        <div className="absolute right-[-8%] top-[-20%] h-[150%] w-px origin-top rotate-[27deg] bg-gradient-to-b from-transparent via-paper/15 to-transparent" />
        <div className="absolute right-[24%] top-[-20%] h-[150%] w-px origin-top rotate-[27deg] bg-gradient-to-b from-transparent via-paper/8 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10 pt-24 pb-16">
        <div className="hero-rise flex items-center gap-3" style={{ animationDelay: "80ms" }}>
          <AvailabilityDot />
          <span className="font-meta text-[11px] md:text-xs text-paper/60">
            Available for projects
          </span>
        </div>

        <h1
          className="hero-rise mt-7 font-display font-extrabold leading-[0.95] tracking-[-0.035em] text-[clamp(3.2rem,10vw,8rem)]"
          style={{ animationDelay: "180ms" }}
        >
          Danny
          <br />
          Namnum<span className="text-coral">.</span>
        </h1>

        <div
          className="hero-rise mt-9 max-w-xl border-l-2 border-coral pl-5 md:pl-7"
          style={{ animationDelay: "300ms" }}
        >
          <p className="font-display text-xl md:text-3xl font-semibold leading-snug">
            Better websites. Better leads. Better outcomes.
          </p>
          <p className="mt-3 text-paper/60 md:text-lg">
            Clean design. Smart strategy. Built to convert.
          </p>
        </div>

        <div
          className="hero-rise mt-11 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "420ms" }}
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 bg-paper px-7 py-4 font-display font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            View the work
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://fantastical.app/Namnum/Intro-conversation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-paper/25 px-7 py-4 font-display font-semibold text-paper transition-colors duration-200 hover:bg-paper/10 active:scale-[0.97]"
          >
            Get in touch
          </a>
        </div>

        <p
          className="hero-rise mt-16 font-meta text-[11px] text-paper/40"
          style={{ animationDelay: "540ms" }}
        >
          Websites &amp; digital products · Real Estate · Hospitality · Fintech
        </p>

        {/* Factual, AI-readable summary — subtle by design, fully crawlable */}
        <p
          className="hero-rise mt-5 max-w-2xl text-[13px] leading-relaxed text-paper/35"
          style={{ animationDelay: "600ms" }}
        >
          I'm a UX and website designer specializing in real estate websites,
          interactive kiosks, and lead conversion optimization for builders,
          brokerages, and hospitality brands. Based in South Florida, I've
          designed digital experiences for Babcock Ranch, PENN Entertainment,
          and GL Homes. Stanford AI UX Certified.
        </p>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="01">Featured Work</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
            Work that earns
            <br />
            its budget back<span className="text-coral">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 flex flex-col gap-20 md:gap-28">
          {featuredStudies.map((cs, i) => (
            <Reveal key={cs.slug}>
              <Link
                href={`/work/${cs.slug}`}
                className={`group grid items-center gap-7 md:gap-14 lg:grid-cols-12`}
              >
                <div
                  className={`overflow-hidden bg-ink/5 lg:col-span-8 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={cs.cardImage}
                    alt={cs.heroAlt}
                    loading="eager"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <div className={`flex items-center gap-3 ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <span className="font-meta text-[11px] text-ink/45">{cs.index}</span>
                    <span className="font-meta text-[11px] border border-ink/15 px-2.5 py-1 text-ink/60">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-ink">
                    {cs.title}
                  </h3>
                  <p className={`mt-3 text-ink/60 leading-relaxed max-w-sm ${i % 2 === 1 ? "lg:ml-auto" : ""}`}>
                    {cs.oneLiner}
                  </p>
                  <span className={`mt-5 inline-flex items-center gap-2 font-display font-semibold text-ink ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="link-underline">View case study</span>
                    <ArrowUpRight className="h-4 w-4 text-coral transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 border border-ink/20 px-7 py-4 font-display font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper active:scale-[0.97]"
          >
            All case studies
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const outcomes = [
  {
    icon: Zap,
    title: "Fast and premium",
    text: "Sites that load fast and look premium. Speed is the first thing a buyer feels.",
  },
  {
    icon: MessageSquare,
    title: "Leads that convert",
    text: "Inquiries that actually turn into conversations. Higher intent, not just higher volume.",
  },
  {
    icon: Wrench,
    title: "Yours to maintain",
    text: "A system your team can update and grow without calling a developer.",
  },
  {
    icon: Gem,
    title: "Brand-true quality",
    text: "A digital presence that matches your brand's real-world quality.",
  },
];

function Outcomes() {
  return (
    <section className="bg-ink py-20 md:py-32 text-paper">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="02" dark>
              Outcomes
            </SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              Every project is different.
              <br />
              The outcomes aren't.
            </h2>
          </Reveal>

          <div className="grid gap-x-10 gap-y-11 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 70}>
                <div className="border-t border-paper/15 pt-5">
                  <o.icon className="h-5 w-5 text-coral" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="03">Trusted By</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-12 gap-y-4 border-b border-ink/10 pb-10">
            {["GL Homes", "Babcock Ranch", "Payology", "Lennar"].map((c) => (
              <span
                key={c}
                className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink/30"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <blockquote className="relative border border-ink/10 bg-white p-8 md:p-10">
              <span className="absolute -top-2 left-8 h-4 w-4 bg-coral" aria-hidden="true" />
              <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink">
                "We redesigned our website and used Namnum Design Co because of
                their reputation for leading edge design. Our website now
                competes more effectively and looks best-in-class. I strongly
                recommend them to any brand looking to lead, rather than
                follow."
              </p>
              <footer className="mt-6">
                <p className="font-display font-bold text-ink">Nicholas Parks</p>
                <p className="font-meta text-[11px] text-ink/50 mt-1">CMO, Babcock Ranch</p>
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="relative border border-ink/10 bg-white p-8 md:p-10">
              <span className="absolute -top-2 left-8 h-4 w-4 bg-coral" aria-hidden="true" />
              <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink">
                "Danny was a critical part of GL Homes' online branding
                modernization for GLHomes.com, providing not only design but
                strategy as well."
              </p>
              <footer className="mt-6">
                <p className="font-display font-bold text-ink">Mike San German</p>
                <p className="font-meta text-[11px] text-ink/50 mt-1">
                  Manager UX/UI &amp; Digital Transformation, GL Homes
                </p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="border-t border-ink/10 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="04">What I Do</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
           <p className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug tracking-[-0.015em] text-ink">
             I design websites and digital products for real estate,
             hospitality, and fintech companies. I take complex products and
              make them simple, beautiful, and high-converting.{" "}
             <span className="text-ink/45">
                One senior partner from strategy through launch, no agency
                overhead.
             </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Real Estate Website Design",
                "Interactive Kiosk Design",
                "Lead Conversion Optimization",
                "Mobile-First UX Design",
                "Hospitality Digital Experience Design",
                "SaaS/App Design",
              ].map((k) => (
                <span
                  key={k}
                  className="border border-ink/15 px-4 py-2 font-meta text-[11px] text-ink/70"
                >
                  {k}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What types of websites do you design?",
    a: "I design websites for real estate brokerages, home builders, and hospitality brands. My focus is on lead conversion, mobile-first UX, and performance optimization for high-traffic real estate sites.",
  },
  {
    q: "Do you design interactive kiosks?",
    a: "Yes. I've designed kiosks for PENN Entertainment's casino floors and GL Homes' sales centers. My kiosk work focuses on usability for all ages, reducing decision time, and turning passive displays into engagement tools.",
  },
  {
    q: "How much does a real estate website redesign cost?",
    a: "A full brokerage or builder website rebuild typically ranges from $50K to $85K depending on scope, integrations, and number of communities. Smaller lead-capture projects start lower.",
  },
  {
    q: "Where are you located?",
    a: "I'm based in South Florida and work with clients nationwide. Most of my real estate and hospitality clients are in Florida.",
  },
  {
    q: "What makes your approach different?",
    a: "I watch real users interact with the product before designing solutions. Every recommendation comes from observed behavior, not assumptions. This approach led to a 60% reduction in buyer decision time at GL Homes.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FAQ() {
  return (
    <section className="border-t border-ink/10 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="05">FAQ</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
              Common questions<span className="text-coral">.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-ink/10">
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold text-ink hover:no-underline hover:text-coral [&>svg]:text-coral">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink/65 text-sm md:text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Danny Namnum — UX & Website Design for Real Estate, Hospitality & Fintech"
        description="Danny Namnum designs websites and kiosks for real estate builders, brokers, and hospitality brands. 15+ years of UX. Stanford AI UX Certified."
        ogUrl="/"
        jsonLd={faqJsonLd}
      />
      <Nav overDark />
      <main>
        <Hero />
        <FeaturedWork />
        <Outcomes />
        <SocialProof />
        <WhatIDo />
        <FAQ />
      </main>
      <ContactSection />
    </div>
  );
}
