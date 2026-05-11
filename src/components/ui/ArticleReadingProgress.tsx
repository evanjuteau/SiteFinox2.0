"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Article-scoped reading progress bar — sits just under the global nav.
 * Tracks scroll progress through the article element.
 *
 * Pass a CSS selector for the article container, otherwise it watches `body`.
 */
export default function ArticleReadingProgress({
  targetSelector = "article",
}: {
  targetSelector?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    ref.current = document.querySelector(targetSelector);
  }, [targetSelector]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[470] pointer-events-none origin-left"
      style={{
        scaleX: smooth,
        background:
          "linear-gradient(90deg, transparent, var(--gold), var(--gold-dark), var(--gold), transparent)",
        boxShadow: "0 0 14px rgba(212, 168, 67, 0.45)",
      }}
    />
  );
}
