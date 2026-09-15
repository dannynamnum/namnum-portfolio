/**
 * Editorial Monochrome — scroll-triggered reveal wrapper.
 * Fade-up 26px, 700ms ease-out, optional stagger delay.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          // Blocks taller than the viewport (long article bodies) can never
          // reach a 12% ratio on a phone, so reveal those as soon as they enter.
          const viewportH = e.rootBounds?.height ?? window.innerHeight;
          const tall = e.boundingClientRect.height > viewportH;
          if (tall || e.intersectionRatio >= 0.12) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error dynamic tag ref
      ref={ref}
      className={`${shown ? "reveal-in" : "reveal-init"} ${className}`}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
