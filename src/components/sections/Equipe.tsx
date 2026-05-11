"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const team = [
  {
    photo: "/images/team-evan.png",
    role: "Associé & Courtier Senior",
    name: "Evan Juteau Lapierre",
    title: "Assurance & Croissance",
    bio: "La tête derrière la vision Finox. Spécialiste en acquisition client, stratégies numériques et développement d'affaires. L'énergie du cabinet.",
  },
  {
    photo: "/images/team-dany.png",
    role: "Associé & Courtier Hypothécaire",
    name: "Dany Michaud",
    title: "Financement & Stratégie",
    bio: "L'expérience du cabinet. Expert en financement hypothécaire et stratégies complexes. La mémoire institutionnelle de Finox.",
  },
  {
    photo: "/images/team-etienne.png",
    role: "Directeur Développement & Planification",
    name: "Étienne Lejeune",
    title: "Relations, Expansion & Planification financière",
    bio: "Le moteur des partenariats et la rigueur de la planification. Il construit les ponts entre Finox et les meilleurs professionnels du marché, et s'assure que chaque dossier client est traité avec précision et profondeur.",
  },
];

const fieldStagger = [0, 0.08, 0.16, 0.24] as const;

export default function Equipe() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="bg-navy border-t border-gold/10 relative py-32 max-[980px]:py-20"
      id="equipe"
    >
      <div className="container-fx">
        <div className="grid grid-cols-2 gap-20 items-end mb-20 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div>
            <Reveal>
              <p className="sec-eyebrow">06 — L&apos;équipe</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(38px,4.5vw,60px)]">
                Des vraies
                <br />
                personnes,
                <br />
                <em>pas des titres</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[15px] text-muted leading-[1.85]">
              On est une petite équipe soudée. Chaque membre de Finox est là
              parce qu&apos;il croit dans la vision — pas juste dans le chèque
              de paie.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-px bg-gold/10 max-[980px]:grid-cols-1">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div
                data-hover
                className="team-card bg-navy h-full flex flex-col transition-all duration-300 relative overflow-hidden group"
              >
                {/* Photo container — light cream backdrop merges seamlessly
                    with white-background portraits (or blends transparent PNGs). */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream">
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { scale: [1, 1.035, 1] }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : {
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.6,
                          }
                    }
                  >
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(max-width: 980px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </motion.div>

                  {/* Subtle navy fade at the top — gives the photo a darker frame
                      at the top edge so it joins the section visually. */}
                  <div
                    className="absolute inset-x-0 top-0 h-[18%] pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(8,12,20,0.45) 0%, rgba(8,12,20,0) 100%)",
                    }}
                  />

                  {/* Bottom navy fade — blends photo edge into the dark info card below. */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[14%] pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to top, var(--navy) 0%, transparent 100%)",
                    }}
                  />

                  {/* Hover gold line at the photo/info boundary */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 z-10"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                    }}
                  />
                </div>

                {/* Info card */}
                <div className="p-9 px-8 flex flex-col flex-1 relative bg-navy">
                  {[
                    <p
                      key="role"
                      className="text-[9px] tracking-[0.2em] uppercase text-gold mb-3"
                    >
                      {m.role}
                    </p>,
                    <h3
                      key="name"
                      className="font-serif text-[22px] font-bold text-cream mb-1 leading-tight"
                    >
                      {m.name}
                    </h3>,
                    <p key="title" className="text-xs text-muted italic mb-5">
                      {m.title}
                    </p>,
                    <p
                      key="bio"
                      className="text-[13px] text-muted-dark leading-[1.82] flex-1"
                    >
                      {m.bio}
                    </p>,
                  ].map((node, fi) => (
                    <motion.div
                      key={fi}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 14 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.55,
                        delay: i * 0.1 + fieldStagger[fi],
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      {node}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link href="/equipe" className="btn-outline">
              Rencontrer l&apos;équipe →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
