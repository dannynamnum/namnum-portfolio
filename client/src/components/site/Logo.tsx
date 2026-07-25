/**
 * Editorial Monochrome — geometric "N" mark rebuilt as inline SVG.
 * Two vertical strokes + diagonal, with the signature coral square.
 * Uses currentColor for strokes so it inverts cleanly on dark sections.
 */
export function NMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* left vertical stroke */}
      <rect x="8" y="8" width="20" height="84" fill="currentColor" />
      {/* diagonal stroke */}
      <polygon points="28,8 48,8 92,92 72,92" fill="currentColor" />
      {/* right vertical stroke, shortened — coral square sits at its top */}
      <rect x="72" y="36" width="20" height="36" fill="currentColor" />
      {/* the signature coral square */}
      <rect x="72" y="8" width="20" height="20" fill="#E63946" />
    </svg>
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <NMark className={`h-7 w-7 md:h-8 md:w-8 ${dark ? "text-paper" : "text-ink"}`} />
      <span
        className={`font-display text-[17px] md:text-lg font-bold tracking-tight ${dark ? "text-paper" : "text-ink"}`}
      >
        Danny Namnum
      </span>
    </span>
  );
}
