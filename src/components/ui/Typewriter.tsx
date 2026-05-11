"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface TypewriterProps {
  text: string;
  /** Characters per second. */
  cps?: number;
  /** Delay before typing starts when in view (ms). */
  delay?: number;
  className?: string;
  /** Whether to show a blinking cursor at the end. */
  showCursor?: boolean;
}

/**
 * Typewriter reveal that triggers once when the element scrolls into view.
 * - Respects prefers-reduced-motion (renders full text immediately)
 * - Cursor blinks for 1 second after typing then fades
 */
export default function Typewriter({
  text,
  cps = 26,
  delay = 0,
  className,
  showCursor = true,
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [typed, setTyped] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setTyped(text);
      setCursorVisible(false);
      return;
    }

    let cancelled = false;
    const intervalMs = 1000 / cps;
    let i = 0;
    const start = setTimeout(() => {
      const id = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(id);
          setTimeout(() => {
            if (!cancelled) setCursorVisible(false);
          }, 1000);
        }
      }, intervalMs);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [inView, text, cps, delay, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {typed}
      {showCursor && cursorVisible && !shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1em] bg-gold align-text-bottom ml-1 animate-pulse"
          style={{ animationDuration: "0.9s" }}
        />
      )}
    </span>
  );
}
