"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { RefreshIcon } from "@/components/ui/Icon";

interface Insurer {
  name: string;
  slug: string;
}

const insurers: Insurer[] = [
  { name: "Manuvie", slug: "manuvie" },
  { name: "iA Groupe Financier", slug: "ia" },
  { name: "Sun Life", slug: "sun-life" },
  { name: "Canada Vie", slug: "canada-vie" },
  { name: "Desjardins", slug: "desjardins" },
  { name: "Beneva", slug: "beneva" },
  { name: "Empire Vie", slug: "empire-vie" },
  { name: "RBC Assurances", slug: "rbc" },
  { name: "BMO Assurance", slug: "bmo" },
  { name: "Équitable", slug: "equitable" },
  { name: "Foresters", slug: "foresters" },
  { name: "Humania", slug: "humania" },
  { name: "Ivari", slug: "ivari" },
  { name: "Assomption Vie", slug: "assomption-vie" },
  { name: "UV Assurance", slug: "uv-assurance" },
  { name: "CPP", slug: "cpp" },
];

export default function Insurers() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [heartbeatIdx, setHeartbeatIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Idle heartbeat — a random logo gets a subtle gold glow every 4s
  useEffect(() => {
    if (shouldReduceMotion) return;
    const tick = () => {
      const next = Math.floor(Math.random() * insurers.length);
      setHeartbeatIdx(next);
      window.setTimeout(() => setHeartbeatIdx(null), 1200);
    };
    tick();
    const id = window.setInterval(tick, 4000);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section
      className="bg-navy border-t border-gold/10 relative overflow-hidden py-28 max-[980px]:py-16"
      id="assureurs"
      aria-labelledby="insurers-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,67,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container-fx relative">
        <Reveal>
          <p className="sec-eyebrow center justify-center">Notre marché</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="insurers-heading"
            className="section-heading text-[clamp(32px,4vw,52px)] text-center mb-5 leading-[1.05]"
          >
            On magasine parmi
            <br />
            <em>+50 assureurs & prêteurs</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[14px] text-muted text-center max-w-[560px] mx-auto leading-[1.85] mb-16">
            Tu n&apos;es pas pris avec un seul fournisseur. On compare le marché en
            temps réel pour te trouver le meilleur taux, la meilleure couverture, le meilleur produit.
          </p>
        </Reveal>

        <div
          className="grid grid-cols-8 gap-px bg-gold/10 border border-gold/15 max-[1180px]:grid-cols-6 max-[980px]:grid-cols-4 max-[600px]:grid-cols-3"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {insurers.map((ins, i) => {
            const isHovered = hoveredIdx === i;
            const isHeartbeat = heartbeatIdx === i && hoveredIdx === null;
            const isDimmed = hoveredIdx !== null && !isHovered;
            return (
              <motion.div
                key={ins.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: isDimmed ? 0.35 : 1,
                        scale: isHovered ? 1.04 : 1,
                      }
                }
                onMouseEnter={() => setHoveredIdx(i)}
                className="bg-navy-100 aspect-[3/2] flex items-center justify-center p-5 transition-colors duration-500 hover:bg-cream group relative"
                title={ins.name}
                style={{
                  boxShadow: isHeartbeat
                    ? "0 0 40px rgba(212,168,67,0.25), inset 0 0 30px rgba(212,168,67,0.08)"
                    : undefined,
                  transition: "box-shadow 0.6s ease",
                }}
              >
                <Image
                  src={`/images/insurers/${ins.slug}.png`}
                  alt={ins.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-[42px] w-auto h-auto object-contain transition-all duration-500 grayscale brightness-200 contrast-50 opacity-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <p className="text-center text-[11px] tracking-[0.2em] uppercase mt-10 text-muted-dark inline-flex items-center gap-2 justify-center w-full">
            <motion.span
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 8, ease: "linear", repeat: Infinity }
              }
              className="inline-flex"
            >
              <RefreshIcon size={12} />
            </motion.span>
            Et plus de 50 prêteurs hypothécaires sur demande
          </p>
        </Reveal>
      </div>
    </section>
  );
}
