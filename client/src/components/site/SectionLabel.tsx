/**
 * Editorial Monochrome — folio-style section label:
 * red square marker + index number + uppercase meta text.
 */
export function SectionLabel({
  index,
  children,
  dark = false,
}: {
  index: string;
  children: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 bg-coral shrink-0" aria-hidden="true" />
      <span
        className={`font-meta text-[11px] md:text-xs ${dark ? "text-paper/60" : "text-ink/55"}`}
      >
        {index} — {children}
      </span>
    </div>
  );
}
