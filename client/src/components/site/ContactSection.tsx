/**
 * Editorial Monochrome — dark contact/footer band shared across pages.
 * Feels live: pulsing availability, direct channels, 24h response promise.
 */
import { Link } from "wouter";
import { NMark } from "./Logo";
import { AvailabilityDot } from "./AvailabilityBadge";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 md:pt-28 pb-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <AvailabilityDot />
            <span className="font-meta text-[11px] md:text-xs text-paper/60">
              Available for projects
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              Let's talk about
              <br />
              your project<span className="text-coral">.</span>
            </h2>
            <p className="mt-6 max-w-md text-paper/65 leading-relaxed">
              I respond within 24 hours. Tell me what you're building — I'll
              tell you exactly how I'd approach it.
            </p>
            <a
              href="https://fantastical.app/Namnum/Launch-Strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 bg-coral px-7 py-4 text-white font-display font-semibold text-base transition-transform duration-200 hover:translate-y-[-2px] active:scale-[0.97]"
            >
              Book a strategy call
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col gap-6 lg:pt-3">
              <div>
                <p className="font-meta text-[11px] text-paper/45">Email</p>
                <a
                  href="mailto:danny@namnum.net"
                  className="link-underline mt-1.5 inline-block font-display text-xl md:text-2xl font-semibold"
                >
                  danny@namnum.net
                </a>
              </div>
              <div>
                <p className="font-meta text-[11px] text-paper/45">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/dannynamnum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-1.5 inline-block font-display text-xl md:text-2xl font-semibold"
                >
                  /dannynamnum
                </a>
              </div>
              <div>
                <p className="font-meta text-[11px] text-paper/45">Based in</p>
                <p className="mt-1.5 font-display text-xl md:text-2xl font-semibold">
                  South Florida · Working everywhere
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-paper/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <NMark className="h-6 w-6 text-paper" />
            <span className="font-meta text-[11px] text-paper/50">
              © {new Date().getFullYear()} Danny Namnum
            </span>
          </div>
          <nav className="flex items-center gap-7">
            <Link href="/" className="font-meta text-[11px] text-paper/50 hover:text-paper transition-colors">
              Home
            </Link>
            <Link href="/work" className="font-meta text-[11px] text-paper/50 hover:text-paper transition-colors">
              Work
            </Link>
            <Link href="/about" className="font-meta text-[11px] text-paper/50 hover:text-paper transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

