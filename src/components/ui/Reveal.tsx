"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 0.9,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: !shouldReduceMotion && direction === "up" ? 30 : 0,
      x:
        !shouldReduceMotion && direction === "left"
          ? -30
          : !shouldReduceMotion && direction === "right"
            ? 30
            : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration,
            delay,
            ease: [0.23, 1, 0.32, 1],
          },
    },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
