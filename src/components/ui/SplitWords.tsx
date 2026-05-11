"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SplitWordsProps {
  text: string;
  /** Delay before the first word reveals (seconds). */
  delay?: number;
  /** Stagger between words (seconds). */
  stagger?: number;
  /** Duration of each word's reveal (seconds). */
  duration?: number;
  /** Extra className applied to the wrapper. */
  className?: string;
  /** Renders <br/> for "\n" in text. */
  preserveLineBreaks?: boolean;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
}

/**
 * Reveals a string word-by-word with a soft blur-to-focus effect.
 * Each word is its own motion.span — no layout shift, only transform/filter/opacity.
 */
export default function SplitWords({
  text,
  delay = 0,
  stagger = 0.06,
  duration = 0.55,
  className,
  preserveLineBreaks = false,
  as = "span",
}: SplitWordsProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const Wrapper = motion[as] as typeof motion.span;

  if (shouldReduceMotion) {
    if (preserveLineBreaks) {
      const lines = text.split("\n");
      return (
        <Wrapper className={className}>
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </Wrapper>
      );
    }
    return <Wrapper className={className}>{text}</Wrapper>;
  }

  const renderLine = (line: string, lineIdx: number, wordOffset: number): ReactNode[] => {
    const words = line.split(" ");
    return words.map((word, i) => (
      <motion.span
        key={`${lineIdx}-${i}`}
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: delay + (wordOffset + i) * stagger,
          duration,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="inline-block"
        style={{ willChange: "transform, opacity, filter" }}
      >
        {word}
        {i < words.length - 1 && " "}
      </motion.span>
    ));
  };

  if (preserveLineBreaks) {
    const lines = text.split("\n");
    let cumulative = 0;
    return (
      <Wrapper className={className}>
        {lines.map((line, i) => {
          const rendered = renderLine(line, i, cumulative);
          cumulative += line.split(" ").length;
          return (
            <span key={i} className="block">
              {rendered}
            </span>
          );
        })}
      </Wrapper>
    );
  }

  return <Wrapper className={className}>{renderLine(text, 0, 0)}</Wrapper>;
}
