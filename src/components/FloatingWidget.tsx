"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { isProjectKey, projectKeys, projects, type ProjectKey } from "@/lib/projects";

export default function FloatingWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectKey | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const saved = sessionStorage.getItem("finoxProject");
    if (isProjectKey(saved)) {
      setSelected(saved);
    }

    let shown = false;
    const show = () => {
      if (!shown) {
        setVisible(true);
        shown = true;
      }
    };

    const timer = window.setTimeout(show, 25000);

    const onScroll = () => {
      if (window.scrollY > 500) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const selectProject = (key: ProjectKey) => {
    setSelected(key);
    sessionStorage.setItem("finoxProject", key);
    window.dispatchEvent(new CustomEvent<ProjectKey>("finox:project", { detail: key }));
  };

  const reset = () => {
    setSelected(null);
    sessionStorage.removeItem("finoxProject");
    window.dispatchEvent(new CustomEvent<ProjectKey | null>("finox:project", { detail: null }));
  };

  const motionProps = shouldReduceMotion
    ? {
        initial: false as const,
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 12, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.95 },
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
      };

  if (!visible) return null;

  return (
    <div className="fixed bottom-9 right-9 z-[800] flex flex-col items-end gap-3 max-[980px]:bottom-5 max-[980px]:right-5">
      <AnimatePresence mode="wait">
        {open && !selected && (
          <motion.div
            key="question"
            {...motionProps}
            id="finox-floating-panel"
            className="bg-navy-100 border border-gold/30 px-6 py-5 max-w-[280px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="font-serif text-base font-bold text-cream mb-4 leading-snug">
              Quel est votre prochain projet?
            </div>
            <div className="grid grid-cols-2 gap-2">
              {projectKeys.map((key) => {
                const project = projects[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectProject(key)}
                    aria-label={`Choisir le projet ${project.label}`}
                    className="bg-gold/5 border border-gold/15 px-3 py-2.5 flex flex-col items-center gap-1 transition-all hover:bg-gold/15 hover:border-gold"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {project.icon}
                    </span>
                    <span className="text-[9px] tracking-[0.12em] uppercase text-muted">
                      {project.label.replace("Acheter une ", "")}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {open && selected && (
          <motion.div
            key="response"
            {...motionProps}
            id="finox-floating-panel"
            className="bg-navy-100 border border-gold/30 px-6 py-5 max-w-[280px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="text-2xl mb-3" aria-hidden="true">
              {projects[selected].icon}
            </div>
            <div className="font-serif text-[15px] italic text-cream-dim leading-snug mb-4">
              &ldquo;{projects[selected].floatingMsg}&rdquo;
            </div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-gold mb-4">
              {projects[selected].floatingName}
            </div>
            <Link
              href="/contact"
              className="block text-center text-[11px] font-medium tracking-[0.14em] uppercase text-navy bg-gold py-3 px-6 no-underline transition-all hover:bg-cream"
            >
              Commencer →
            </Link>
            <button
              type="button"
              onClick={reset}
              className="block w-full text-[10px] text-muted text-center mt-2.5 hover:text-gold transition-colors"
            >
              ← Changer de projet
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        data-magnetic
        aria-label={open ? "Fermer Mon Finox" : "Ouvrir Mon Finox"}
        aria-expanded={open}
        aria-controls="finox-floating-panel"
        className={`w-14 h-14 rounded-full cursor-none flex items-center justify-center text-2xl transition-all ${
          open
            ? "bg-navy-100 border border-gold/30"
            : "bg-gold shadow-[0_8px_32px_rgba(212,168,67,0.4)] hover:scale-110"
        }`}
      >
        <span aria-hidden="true">{open ? "✕" : "💬"}</span>
      </button>
    </div>
  );
}
