"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds a soft gold radial spotlight that follows the user's mouse.
 * Sits ABOVE all page content but BELOW the existing custom cursor.
 * Disabled below 980px and when prefers-reduced-motion is set.
 *
 * Implementation: a single fixed div with a radial-gradient background
 * whose position is updated via CSS variables on requestAnimationFrame.
 * No re-render — zero React perf cost.
 */
export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 980px) and (prefers-reduced-motion: no-preference)"
    );
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", `${pendingX}px`);
          el.style.setProperty("--my", `${pendingY}px`);
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[450]"
      style={{
        mixBlendMode: "screen",
        background:
          "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(212, 168, 67, 0.06), transparent 65%)",
      }}
    />
  );
}
