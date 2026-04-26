"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  as = "h1",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            delayChildren: delay,
            staggerChildren: stagger,
          },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 40,
      rotateX: shouldReduceMotion ? 0 : -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
          },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={container}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={child}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            transformOrigin: "50% 100%",
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
