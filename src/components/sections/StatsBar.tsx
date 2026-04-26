"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { n: "100", suffix: "%", label: "Indépendant & impartial" },
  { n: "50", prefix: "+", label: "Assureurs & prêteurs" },
  { n: "360", suffix: "°", label: "Accompagnement complet" },
  { n: "AMF", label: "Certifié Québec & N.-B." },
];

export default function StatsBar() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="bg-navy-100 border-t border-b border-gold/15 px-16 flex justify-center max-[980px]:px-6 max-[980px]:flex-wrap">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : i * 0.08 }}
          className="flex-1 max-w-[260px] px-8 py-9 text-center relative overflow-hidden border-r border-gold/10 last:border-r-0 group max-[980px]:min-w-[50%] max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10"
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
          <span className="block font-serif text-[46px] font-black text-cream leading-none">
            {s.prefix && <em className="not-italic text-gold">{s.prefix}</em>}
            {s.n}
            {s.suffix && <em className="not-italic text-gold">{s.suffix}</em>}
          </span>
          <span className="block text-[10px] tracking-[0.2em] uppercase text-muted mt-2">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
