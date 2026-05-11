"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative giant "01" number for the featured chronique article hero.
 * Subtle vertical parallax as user scrolls past the section.
 */
export default function FeaturedNumberParallax({ tag }: { tag: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <div
      ref={ref}
      className="relative bg-navy-100 min-h-[280px] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,168,67,0.18) 0%, transparent 70%)",
        }}
      />
      <motion.p
        className="font-display text-[180px] max-[860px]:text-[120px] leading-none text-gold/15 select-none"
        style={
          shouldReduceMotion
            ? undefined
            : { y, scale, willChange: "transform" }
        }
      >
        01
      </motion.p>
      <p className="absolute bottom-6 right-6 text-[10px] tracking-[0.22em] uppercase text-gold/60">
        {tag}
      </p>
    </div>
  );
}
