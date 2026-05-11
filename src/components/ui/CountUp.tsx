"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
  /** ease-out curve via 1 - (1-t)^p */
  power?: number;
  format?: (n: number) => string;
  className?: string;
}

/**
 * Counts from 0 to `to` once when scrolled into view.
 * Respects prefers-reduced-motion (jumps to final value immediately).
 */
export default function CountUp({
  to,
  duration = 1.2,
  power = 2,
  format,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, power);
      setValue(eased * to);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, power, shouldReduceMotion]);

  const display = format
    ? format(value)
    : Math.round(value).toString();

  return (
    <span ref={ref} className={className} aria-label={String(to)}>
      {display}
    </span>
  );
}
