"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

interface PartnerNode {
  id: string;
  label: string;
  name: string;
  cat: string;
  desc: string;
  when: string;
}

const nodes: PartnerNode[] = [
  {
    id: "cpa",
    label: "CPA",
    name: "Comptables partenaires",
    cat: "Fiscalité",
    desc: "Stratégies fiscales intégrées et optimisation corporative.",
    when: "Incorporation, planification retraite, Holdco",
  },
  {
    id: "notaire",
    label: "JUR",
    name: "Notaires & avocats",
    cat: "Droit",
    desc: "Conventions, testaments, fiducies, actes hypothécaires.",
    when: "Achat de maison, succession, convention actionnaires",
  },
  {
    id: "gfs",
    label: "GFS",
    name: "Groupe Financier Signature",
    cat: "Immobilier",
    desc: "Opportunités immobilières résidentielles et commerciales.",
    when: "Achat de propriété, investissement immobilier",
  },
  {
    id: "courtiers",
    label: "HYP",
    name: "Courtiers hypothécaires",
    cat: "Financement",
    desc: "+50 prêteurs. On trouve le vrai meilleur taux du marché.",
    when: "Achat maison, refinancement, projet immobilier",
  },
  {
    id: "assureurs",
    label: "ASS",
    name: "Assureurs multimarché",
    cat: "Assurance",
    desc: "Manulife, iA, CPP, Specialty Life, TuGo et plus encore.",
    when: "Toutes les situations — on magasine pour toi",
  },
  {
    id: "planif",
    label: "PLN",
    name: "Planificateurs certifiés",
    cat: "Planification",
    desc: "Pour les dossiers complexes qui demandent une vision globale.",
    when: "Retraite, planification successorale complexe",
  },
];

export default function Reseau() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="bg-navy border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="reseau"
    >
      {/* Soft gold haze on the right side */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-fx relative">
        <div className="grid grid-cols-2 gap-20 items-end mb-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div>
            <Reveal>
              <p className="sec-eyebrow">04 — Notre réseau</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(38px,4.5vw,62px)]">
                Un réseau bâti
                <br />
                avec soin,
                <br />
                <em>pour toi</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div>
              <p className="text-[15px] text-muted leading-[1.85] mb-3">
                Chaque partenaire de notre réseau a été choisi pour une raison
                précise — pas par défaut.
              </p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                6 expertises · 1 cabinet qui coordonne
              </p>
            </div>
          </Reveal>
        </div>

        {/* Premium editorial grid — 3 × 2 */}
        <div className="grid grid-cols-3 gap-px bg-gold/10 border border-gold/15 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
          {nodes.map((node, i) => (
            <Reveal key={node.id} delay={i * 0.06}>
              <PartnerCard node={node} index={i} reduced={shouldReduceMotion} />
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <Reveal>
          <div className="mt-14 grid grid-cols-[auto_1fr_auto] items-center gap-8 max-[760px]:grid-cols-1 max-[760px]:text-center max-[760px]:gap-5">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/40 max-[760px]:hidden" />
            <p
              className="font-serif text-[18px] italic text-cream-dim leading-[1.55] text-center max-w-[640px] mx-auto"
            >
              Au cœur de ce réseau,{" "}
              <strong className="text-gold not-italic font-medium">
                Finox coordonne
              </strong>{" "}
              chaque expertise pour que tu n&apos;aies à parler qu&apos;à une
              seule équipe.
            </p>
            <div className="h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/40 max-[760px]:hidden" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface PartnerCardProps {
  node: PartnerNode;
  index: number;
  reduced: boolean;
}

function PartnerCard({ node, reduced }: PartnerCardProps) {
  return (
    <article
      data-hover
      className="bg-navy-50 px-8 py-10 h-full flex flex-col transition-all duration-300 hover:bg-navy-100 relative overflow-hidden group max-[600px]:px-7 max-[600px]:py-8"
    >
      {/* Top accent line — scales from left on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background:
            "linear-gradient(90deg, var(--gold), var(--gold-dark))",
        }}
      />

      {/* Header — monogram + category */}
      <div className="flex items-start justify-between mb-7">
        <motion.span
          className="font-display text-[68px] leading-[0.85] tracking-[3px] text-gold/30 group-hover:text-gold transition-colors duration-500"
          style={{ display: "inline-block" }}
          whileHover={
            reduced ? undefined : { scale: 1.05 }
          }
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}
        >
          {node.label}
        </motion.span>
        <span className="text-[9px] tracking-[0.22em] uppercase text-gold/60 text-right pt-3 leading-tight">
          {node.cat}
        </span>
      </div>

      {/* Title + description */}
      <h3 className="font-serif text-[20px] font-bold text-cream mb-3 leading-tight">
        {node.name}
      </h3>
      <p className="text-[13.5px] text-muted leading-[1.78] mb-6">
        {node.desc}
      </p>

      {/* Footer "Quand ?" */}
      <div className="mt-auto pt-5 border-t border-gold/10">
        <p className="text-[9px] tracking-[0.22em] uppercase text-gold/70 mb-1.5">
          Quand ?
        </p>
        <p className="text-[12.5px] text-cream-dim leading-[1.6] italic">
          {node.when}
        </p>
      </div>

      {/* Hover gold haze in the background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(212,168,67,0.08) 0%, transparent 60%)",
        }}
      />
    </article>
  );
}
