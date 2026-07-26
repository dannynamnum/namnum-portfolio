/**
 * Editorial Monochrome — uses the uploaded LogoIcon.svg (geometric N + red square + ®).
 */
import { A } from "@/lib/assets";

export function NMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={A.logo}
      alt="Danny Namnum logo"
      aria-hidden="true"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <NMark className="h-7 w-7 md:h-8 md:w-8" />
      <span
        className={`font-display text-[17px] md:text-lg font-bold tracking-tight ${dark ? "text-paper" : "text-ink"}`}
      >
        Danny Namnum
      </span>
    </span>
  );
}
