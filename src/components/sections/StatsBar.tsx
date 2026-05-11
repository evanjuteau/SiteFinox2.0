"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface Stat {
  /** Final number to count up to. Null for letter-by-letter reveal stats. */
  n: number | null;
  /** Static text rendered when `n` is null (e.g. "AMF"). */
  text?: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { n: 100, suffix: "%", label: "Indépendant & impartial" },
  { n: 50, prefix: "+", label: "Assureurs & prêteurs" },
  { n: 360, suffix: "°", label: "Accompagnement complet" },
  { n: null, text: "AMF", label: "Certifié Québec & N.-B." },
];

export default function StatsBar() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="bg-navy-100 border-t border-b border-gold/15 px-16 flex justify-center max-[980px]:px-6 max-[980px]:flex-wrap">
      {stats.map((s, i) => {
        const isOther = activeIdx !== null && activeIdx !== i;
        return (
          <motion.div
            key={s.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : i * 0.08,
            }}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: activeIdx === i ? -4 : 0,
                    opacity: isOther ? 0.55 : 1,
                  }
            }
            style={{ willChange: "transform, opacity" }}
            className="flex-1 max-w-[260px] px-8 py-9 text-center relative overflow-hidden border-r border-gold/10 last:border-r-0 group max-[980px]:min-w-[50%] max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10"
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 origin-center"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
              animate={
                shouldReduceMotion
                  ? { scaleX: 0 }
                  : { scaleX: activeIdx === i ? 1 : 0 }
              }
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,168,67,0.08), transparent 70%)",
                opacity: activeIdx === i ? 1 : 0,
              }}
            />
            <span className="block font-display text-[68px] text-cream leading-none tracking-wide relative">
              {s.prefix && <em className="not-italic text-gold">{s.prefix}</em>}
              {s.n !== null ? (
                <CountUp to={s.n} duration={1.4} power={2.2} />
              ) : (
                <LetterByLetter text={s.text ?? ""} />
              )}
              {s.suffix && <em className="not-italic text-gold">{s.suffix}</em>}
            </span>
            <motion.span
              className="block h-px mt-3 origin-left mx-auto"
              aria-hidden="true"
              style={{
                width: 56,
                background:
                  "linear-gradient(90deg, var(--gold), transparent)",
              }}
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            />
            <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mt-1.5 relative">
              {s.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/** Letter-by-letter reveal — used for the AMF stat. */
function LetterByLetter({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  if (shouldReduceMotion) return <>{text}</>;
  return (
    <>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + i * 0.08,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
