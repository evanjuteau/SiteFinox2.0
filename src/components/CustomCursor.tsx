"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, [data-hover], [data-magnetic]";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 981px) and (prefers-reduced-motion: no-preference)",
    );

    const syncCursorState = () => {
      setEnabled(media.matches);
      document.documentElement.classList.toggle("custom-cursor", media.matches);
    };

    syncCursorState();
    media.addEventListener("change", syncCursorState);

    return () => {
      media.removeEventListener("change", syncCursorState);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const handleMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(loop);
    };

    const expand = (target: Element) => {
      const isMagnetic = target.hasAttribute("data-magnetic");
      ring.style.width = isMagnetic ? "64px" : "52px";
      ring.style.height = isMagnetic ? "64px" : "52px";
      ring.style.borderColor = "rgba(212, 168, 67, 0.75)";
      ring.style.borderRadius = "8px";
    };

    const shrink = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(212, 168, 67, 0.4)";
      ring.style.borderRadius = "50%";
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest(interactiveSelector);
      if (target) expand(target);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const from = (e.target as Element | null)?.closest(interactiveSelector);
      const to = (e.relatedTarget as Element | null)?.closest(interactiveSelector);
      if (from && from !== to) shrink();
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999] opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border rounded-full pointer-events-none z-[9998] opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          borderColor: "rgba(212, 168, 67, 0.4)",
          transition:
            "width 0.35s, height 0.35s, border-color 0.35s, border-radius 0.35s, opacity 0.2s",
        }}
      />
    </>
  );
}
