"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { isProjectKey, projectKeys, projects, type ProjectKey } from "@/lib/projects";

const gridClassByStepCount: Record<number, string> = {
  4: "grid-cols-4",
  6: "grid-cols-6",
  7: "grid-cols-7",
};

export default function Parcours() {
  const [selected, setSelected] = useState<ProjectKey>("maison");
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const saved = sessionStorage.getItem("finoxProject");
    if (isProjectKey(saved)) setSelected(saved);

    const handler = (e: Event) => {
      const ce = e as CustomEvent<ProjectKey | null>;
      if (ce.detail === null) {
        setSelected("maison");
        return;
      }
      if (ce.detail && projects[ce.detail]) setSelected(ce.detail);
    };
    window.addEventListener("finox:project", handler);
    return () => window.removeEventListener("finox:project", handler);
  }, []);

  const handleSelect = (key: ProjectKey) => {
    setSelected(key);
    sessionStorage.setItem("finoxProject", key);
    window.dispatchEvent(new CustomEvent<ProjectKey>("finox:project", { detail: key }));
  };

  const current = projects[selected];
  const stepCount = current.steps.length;
  const gridCols = gridClassByStepCount[stepCount] ?? "grid-cols-6";

  return (
    <section
      className="bg-navy relative overflow-hidden py-32 max-[980px]:py-20"
      id="parcours"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,67,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="container-fx relative">
        <div className="grid grid-cols-2 gap-20 items-end mb-20 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div>
            <Reveal>
              <p className="sec-eyebrow">02 — Accompagnement 360°</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(38px,4.5vw,62px)]">
                Finox à chaque
                <br />
                étape de
                <br />
                <em>votre projet</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[15px] text-muted leading-[1.88]">
              Chez Finox, on s&apos;adapte à{" "}
              <strong className="text-cream font-medium">votre réalité</strong>{" "}
              — pas l&apos;inverse. Que vous achetiez une maison, lanciez votre
              entreprise ou fondiez une famille, on est là à chaque point de
              contact.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex gap-0 mb-20 border border-gold/15 overflow-hidden max-[980px]:flex-wrap">
            {projectKeys.map((key) => {
              const project = projects[key];
              const isActive = selected === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelect(key)}
                  aria-pressed={isActive}
                  aria-label={`Voir le parcours: ${project.label}`}
                  data-hover
                  className={`flex-1 py-5 px-4 border-r border-gold/10 last:border-r-0 text-center flex flex-col items-center gap-2 relative overflow-hidden transition-all max-[980px]:min-w-[50%] max-[980px]:border-r-0 ${
                    isActive ? "bg-gold/10" : "hover:bg-gold/5"
                  }`}
                >
                  {isActive && !shouldReduceMotion && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                  {isActive && shouldReduceMotion && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" aria-hidden="true" />
                  )}
                  <span
                    className={`text-[22px] relative z-10 transition-transform ${
                      isActive ? "scale-110" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {project.icon}
                  </span>
                  <span
                    className={`text-[10px] font-medium tracking-[0.14em] uppercase relative z-10 transition-colors ${
                      isActive ? "text-gold" : "text-muted"
                    }`}
                  >
                    {project.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative pb-10"
          >
            <div
              className="absolute left-0 right-0 h-px top-7 max-[980px]:hidden"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,67,0.35) 8%, rgba(212,168,67,0.35) 92%, transparent)",
              }}
            />
            <div className={`grid ${gridCols} gap-0 relative max-[980px]:grid-cols-2`}>
              {current.steps.map((step, i) => {
                const isDown = i % 2 === 1;
                return (
                  <motion.div
                    key={`${selected}-${step.num}`}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : i * 0.08 }}
                    className={`flex flex-col items-center px-2 relative group max-[980px]:flex-col ${
                      isDown
                        ? "flex-col-reverse max-[980px]:flex-col"
                        : "flex-col"
                    }`}
                  >
                    <div className="flex flex-col items-center w-full">
                      <span className="font-display text-[9px] tracking-[0.18em] text-gold mb-2">
                        {step.num}
                      </span>
                      <div
                        className="w-3.5 h-3.5 rounded-full bg-navy border-2 border-gold-dark mb-5 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_18px_rgba(212,168,67,0.6)] group-hover:scale-150"
                        aria-hidden="true"
                      />
                      <div
                        data-hover
                        className="bg-navy-50 border border-gold/10 p-5 px-4 w-full transition-all duration-300 relative overflow-hidden text-left group-hover:bg-navy-100 group-hover:border-gold/30 group-hover:-translate-y-0.5"
                      >
                        <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-gold to-gold-dark" aria-hidden="true" />
                        <span className="text-xl mb-2.5 block filter saturate-0 brightness-150 group-hover:saturate-100 transition-all" aria-hidden="true">
                          {step.icon}
                        </span>
                        <h3 className="font-serif text-[13px] font-bold text-cream mb-1.5 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-muted leading-[1.6] mb-3">
                          {step.desc}
                        </p>
                        <span className="inline-flex items-center gap-1 bg-gold/10 border border-gold/20 px-2 py-0.5 text-[9px] tracking-[0.1em] uppercase text-gold before:content-['★'] before:text-[7px]">
                          <span>{step.badge}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal>
          <div className="text-center mt-16 pt-16 border-t border-gold/10">
            <p className="font-serif text-[22px] italic text-cream-dim max-w-[560px] mx-auto mb-7 leading-[1.5]">
              &ldquo;L&apos;achat de maison, l&apos;entreprise, la famille, la
              retraite — c&apos;est nos exemples. Mais on est là pour{" "}
              <em>ton</em> projet, quel qu&apos;il soit.&rdquo;
            </p>
            <Link href="/contact" className="btn-gold">
              Commencer mon projet
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
