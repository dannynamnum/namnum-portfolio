/**
 * Editorial Monochrome — fixed top nav. Transparent over hero (dark),
 * transitions to opaque paper with hairline on scroll.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Wordmark } from "./Logo";
import { AvailabilityDot } from "./AvailabilityBadge";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Nav({ overDark = false }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkText = overDark && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/92 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link href="/" onClick={() => setOpen(false)}>
          <Wordmark dark={darkText} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={location.startsWith(l.href)}
              className={`link-underline font-meta text-xs ${
                darkText ? "text-paper/85 hover:text-paper" : "text-ink/75 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://fantastical.app/Namnum/Intro-conversation"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 border px-4 py-2 transition-all duration-200 active:scale-[0.97] ${
              darkText
                ? "border-paper/25 text-paper hover:bg-paper hover:text-ink"
                : "border-ink/20 text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            <AvailabilityDot />
            <span className="font-meta text-[11px]">Book a call</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 -mr-2 ${darkText && !open ? "text-paper" : "text-ink"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-b border-ink/10 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-ink py-2.5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://fantastical.app/Namnum/Intro-conversation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-2.5 border border-ink/20 px-5 py-3 text-ink"
            >
             <AvailabilityDot />
              <span className="font-meta text-xs">Available · book a call</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
