/**
 * Editorial Monochrome — the one "alive" element: pulsing green availability dot.
 */
export function AvailabilityDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full bg-green-500 pulse-dot ${className}`}
      aria-hidden="true"
    />
  );
}

export function AvailabilityBadge({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="https://fantastical.app/Namnum/Launch-Strategy"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 border px-4 py-2 transition-colors duration-200 ${
        dark
          ? "border-paper/20 text-paper hover:border-paper/50"
          : "border-ink/15 text-ink hover:border-ink/40"
      }`}
    >
      <AvailabilityDot />
      <span className="font-meta text-[11px]">Available for projects</span>
    </a>
  );
}
