"use client";

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Top-of-page horizontal progress bar that fills as the user scrolls.
 * Hidden while still in the hero (first 100vh) to avoid visual noise.
 * Sits between the sticky nav and content (z-index 480).
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Spring-smoothed scroll progress for buttery fill.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  // Fade in only after the user has scrolled past the hero.
  const opacity = useTransform(scrollYProgress, [0.04, 0.08], [0, 1]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[480] pointer-events-none origin-left"
      style={{
        scaleX: smooth,
        opacity,
        background:
          "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-dark))",
        boxShadow: "0 0 12px rgba(212, 168, 67, 0.5)",
      }}
    />
  );
}
