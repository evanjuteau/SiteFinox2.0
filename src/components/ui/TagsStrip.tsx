"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TagsStrip({ tags }: { tags: string[] }) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <motion.span
        className="text-[10px] tracking-[0.18em] uppercase text-muted-dark mr-3"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Catégories :
      </motion.span>
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.4,
            delay: 0.05 + i * 0.04,
            ease: [0.23, 1, 0.32, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  borderColor: "rgba(212,168,67,0.6)",
                  color: "var(--gold)",
                  scale: 1.04,
                }
          }
          className="text-[10px] tracking-[0.14em] uppercase text-cream-dim border border-gold/15 px-3 py-1.5 cursor-default"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}
