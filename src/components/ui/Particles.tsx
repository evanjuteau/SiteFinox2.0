"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const container = ref.current;
    if (!container || shouldReduceMotion) return;

    let cancelled = false;
    const renderParticles = () => {
      if (cancelled || !container) return;
      container.innerHTML = "";
      const w = window.innerWidth;
      const isCompact = w < 980;
      const isWide = w >= 1440;
      // Two layers — small fast foreground + larger slow background for depth
      const fgCount = isCompact ? 30 : isWide ? 80 : 60;
      const bgCount = isCompact ? 8 : isWide ? 24 : 18;

      for (let i = 0; i < fgCount; i += 1) {
        const particle = document.createElement("div");
        particle.className = "absolute w-[2px] h-[2px] bg-gold rounded-full";
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 2 + Math.random() * 6;
        const delay = Math.random() * 6;
        const opacity = 0.2 + Math.random() * 0.6;
        particle.style.cssText = `left:${x}%;top:${y}%;opacity:0;animation:twinkle ${duration}s ${delay}s ease-in-out infinite;--op:${opacity}`;
        container.appendChild(particle);
      }

      for (let i = 0; i < bgCount; i += 1) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full bg-gold";
        const size = 3 + Math.random() * 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 6 + Math.random() * 8;
        const delay = Math.random() * 8;
        const opacity = 0.06 + Math.random() * 0.18;
        particle.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;opacity:0;filter:blur(1.2px);animation:twinkle ${duration}s ${delay}s ease-in-out infinite;--op:${opacity}`;
        container.appendChild(particle);
      }
    };

    // Defer particle generation until browser is idle — preserves LCP
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const w = window as IdleWindow;
    if (w.requestIdleCallback) {
      w.requestIdleCallback(renderParticles, { timeout: 1500 });
    } else {
      setTimeout(renderParticles, 600);
    }

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: var(--op, 0.6);
            transform: scale(1);
          }
        }
      `}</style>
      <div ref={ref} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true" />
    </>
  );
}
