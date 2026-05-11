"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const items = [
  {
    year: "2022",
    title: "La conviction",
    body: "Evan et Dany se rencontrent avec une conviction commune : l'industrie financière québécoise **peut et doit être différente**. Plus transparente. Plus humaine. Plus vraiment au service du client. Finox prend forme autour de cette idée.",
    tag: "L'origine",
  },
  {
    year: "2023",
    title: "Le premier client",
    body: "La première vraie conversation — pas un pitch de produit, mais une discussion à table sur comment **protéger une famille** si l'imprévu arrivait. Ce client-là, on l'a encore aujourd'hui. Ça a défini pour toujours ce que Finox allait être.",
    tag: "Les fondations",
  },
  {
    year: "2024",
    title: "Le réseau prend forme",
    body: "Étienne rejoint l'équipe et **les partenariats stratégiques se construisent** un à un — chaque CPA, notaire, courtier choisi parce qu'il partage la même vision du service. Pas pour grossir vite. Pour grossir bien. L'expertise en planification financière s'ajoute pour donner aux clients une vision globale et long terme.",
    tag: "La croissance",
  },
  {
    year: "2026",
    title: "Finox 2.0",
    body: "Le cabinet se redéfinit. **On reste petits par choix** — une équipe resserrée, des standards élevés, un accompagnement qui n'existe nulle part ailleurs au Québec. Finox 2.0 c'est pas juste un nouveau site. C'est une promesse renouvelée envers chaque client qu'on accompagne.",
    tag: "Aujourd'hui",
  },
  {
    year: "2027 +",
    title: "Et toi ?",
    body: "La prochaine page de notre histoire, on l'écrit avec toi. **Chaque client qui nous rejoint** devient une partie permanente de cette histoire. Notre objectif n'a jamais été d'être le plus gros cabinet du Québec — c'est d'être celui que nos clients recommandent les yeux fermés.",
    tag: "La suite",
  },
];

function renderBody(body: string) {
  const parts = body.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${part}-${i}`} className="text-cream font-medium">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${i}`}>{part}</span>
    )
  );
}

export default function Histoire() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Vertical timeline draw — scoped to the timeline column
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="bg-navy-50 border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="histoire"
    >
      <div
        className="absolute -bottom-10 -right-10 font-display pointer-events-none select-none tracking-[0.06em]"
        aria-hidden="true"
        style={{
          fontSize: "min(20vw, 280px)",
          color: "rgba(212,168,67,0.025)",
        }}
      >
        FINOX
      </div>

      <div className="container-fx relative">
        <Reveal>
          <p className="sec-eyebrow">05 — Notre histoire</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-heading text-[clamp(38px,4.5vw,62px)] max-w-[600px] mb-20">
            D&apos;une conviction
            <br />à un <em>cabinet</em>
          </h2>
        </Reveal>

        <div className="relative pl-14 max-[980px]:pl-8">
          {/* Static base line — barely visible */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,168,67,0.1) 10%, rgba(212,168,67,0.1) 90%, transparent)",
            }}
          />
          {/* Scroll-linked drawn line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px origin-top"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,168,67,0.55) 10%, rgba(212,168,67,0.55) 90%, transparent)",
              scaleY: shouldReduceMotion ? 1 : lineScaleY,
              boxShadow: "0 0 6px rgba(212, 168, 67, 0.3)",
            }}
          />
          {items.map((it, i) => {
            const isFuture = it.year.includes("+");
            return (
              <Reveal key={it.year} delay={i * 0.12}>
                <TimelineItem item={it} isFuture={isFuture} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: (typeof items)[number];
  isFuture: boolean;
}

function TimelineItem({ item, isFuture }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div
      ref={itemRef}
      className="relative mb-14 pb-14 border-b border-gold/5 last:border-b-0 last:mb-0 last:pb-0 group"
    >
      {/* Bullet point */}
      <span
        className={`absolute -left-[62px] top-2 w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125 z-10 max-[980px]:-left-[38px] ${
          isFuture
            ? "bg-gold border-2 border-gold shadow-[0_0_18px_rgba(212,168,67,0.7)]"
            : "bg-navy-50 border-2 border-gold-dark group-hover:bg-gold group-hover:shadow-[0_0_16px_rgba(212,168,67,0.5)]"
        }`}
        aria-hidden="true"
      />
      {/* Ripple on scroll-in */}
      {inView && !shouldReduceMotion &&
        [0, 0.25, 0.5].map((d) => (
          <span
            key={d}
            className="absolute -left-[62px] top-2 w-3 h-3 rounded-full border-2 border-gold pointer-events-none max-[980px]:-left-[38px]"
            style={{
              animation: `timeline-ripple 1.2s ${d}s ease-out forwards`,
              opacity: 0,
            }}
            aria-hidden="true"
          />
        ))}

      {/* Year with heartbeat color on scroll-in */}
      <motion.div
        className={`font-display text-[56px] leading-none mb-2 transition-colors duration-300 ${
          isFuture
            ? "text-gold/60 group-hover:text-gold"
            : "text-gold/20 group-hover:text-gold/40"
        }`}
        animate={
          inView && !shouldReduceMotion && !isFuture
            ? { color: ["rgba(212,168,67,0.2)", "rgba(212,168,67,0.6)", "rgba(212,168,67,0.2)"] }
            : undefined
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {item.year}
      </motion.div>

      <h3 className="font-serif text-[26px] font-bold text-cream mb-3 leading-tight">
        {item.title}
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-[640px]">
        {renderBody(item.body)}
      </p>
      <span className="inline-flex mt-4 text-[9px] tracking-[0.18em] uppercase text-gold border border-gold/20 px-3 py-1">
        {item.tag}
      </span>

      {isFuture && (
        <div className="mt-7">
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 relative overflow-hidden">
            {/* Permanent shine sweep */}
            {!shouldReduceMotion && (
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,228,150,0.4) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "gold-sweep 5s ease-in-out infinite",
                }}
              />
            )}
            <span className="relative">Faire partie de la suite</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="relative"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
