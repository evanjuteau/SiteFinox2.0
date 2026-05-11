"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SplitWords from "@/components/ui/SplitWords";
import {
  defaultCtaContent,
  isProjectKey,
  projects,
  type ProjectKey,
} from "@/lib/projects";

export default function CTA() {
  const [content, setContent] = useState(defaultCtaContent);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const saved = sessionStorage.getItem("finoxProject");
    if (isProjectKey(saved)) setContent(projects[saved].cta);

    const handler = (e: Event) => {
      const ce = e as CustomEvent<ProjectKey | null>;
      if (ce.detail === null) {
        setContent(defaultCtaContent);
        return;
      }
      if (ce.detail && projects[ce.detail]) {
        setContent(projects[ce.detail].cta);
      }
    };
    window.addEventListener("finox:project", handler);
    return () => window.removeEventListener("finox:project", handler);
  }, []);

  const blocks = [
    {
      label: "Contact principal",
      content: (
        <>
          <span className="block text-[13px] text-muted leading-[1.65]">
            {content.contactName}
          </span>
          <span className="block mt-1 text-[11px] text-gold">
            {content.contactTitle}
          </span>
        </>
      ),
    },
    {
      label: "Bureau",
      content: (
        <span className="block text-[13px] text-muted leading-[1.65]">
          3235 Av. de la Gare
          <br />
          Mascouche, QC J7K 3C1
        </span>
      ),
    },
    {
      label: "Courriel",
      content: (
        <a
          href="mailto:service@finox.ca"
          className="block text-[13px] text-muted leading-[1.65] hover:text-gold"
        >
          service@finox.ca
        </a>
      ),
    },
    {
      label: "Licencié",
      content: (
        <span className="block text-[13px] text-muted leading-[1.65]">
          AMF Québec
          <br />
          N.-B. (en cours)
        </span>
      ),
    },
  ];

  return (
    <section
      className="bg-navy-100 relative overflow-hidden py-40 px-16 text-center border-t border-gold/10 max-[980px]:py-24 max-[980px]:px-6"
      id="contact"
    >
      {/* First pulse */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full animate-cta-pulse"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Second counter-rhythm pulse */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)",
          animation: shouldReduceMotion
            ? undefined
            : "ctaPulse 6s ease-in-out 3s infinite alternate",
        }}
      />
      <Reveal>
        <p className="sec-eyebrow center mb-6">09 — Prenons contact</p>
      </Reveal>
      <SplitWords
        as="h2"
        text={"Commence par\nune conversation."}
        delay={0.1}
        stagger={0.06}
        duration={0.6}
        preserveLineBreaks
        className="section-heading text-[clamp(44px,7vw,96px)] mb-6 relative z-10"
      />
      <Reveal delay={0.2}>
        <p className="text-base font-light text-muted leading-[1.8] max-w-[500px] mx-auto mb-14 relative z-10">
          {content.sub}
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="flex gap-4 justify-center mb-4 flex-wrap relative z-10">
          <a
            href="mailto:service@finox.ca"
            className="btn-gold relative overflow-hidden"
          >
            {/* Shimmer sweep */}
            {!shouldReduceMotion && (
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 35%, rgba(255,228,150,0.35) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                  animation: "gold-sweep 4s ease-in-out infinite",
                }}
              />
            )}
            <span className="relative">{content.mainBtn}</span>
          </a>
          <a href="tel:+14382587666" className="btn-outline">
            438-258-7666
          </a>
        </div>
        <p
          className="text-[11px] tracking-[0.18em] uppercase text-center mb-20 relative z-10"
          style={{ color: "rgba(212,168,67,0.65)" }}
        >
          Cabinet de services financiers inscrit à l&apos;AMF du Québec
        </p>
      </Reveal>
      <div className="flex border border-gold/15 max-w-[800px] mx-auto relative z-10 max-[980px]:flex-col">
        {blocks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`flex-1 px-7 py-7 text-left transition-colors hover:bg-gold/5 ${
              i < blocks.length - 1
                ? "border-r border-gold/10 max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10"
                : ""
            }`}
          >
            <span className="block text-[9px] tracking-[0.24em] uppercase text-gold mb-2.5">
              {b.label}
            </span>
            {b.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
