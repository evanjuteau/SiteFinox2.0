"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  defaultCtaContent,
  isProjectKey,
  projects,
  type ProjectKey,
} from "@/lib/projects";

export default function CTA() {
  const [content, setContent] = useState(defaultCtaContent);

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

  return (
    <section
      className="bg-navy-100 relative overflow-hidden py-40 px-16 text-center border-t border-gold/10 max-[980px]:py-24 max-[980px]:px-6"
      id="contact"
    >
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full animate-cta-pulse"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />
      <Reveal>
        <p className="sec-eyebrow center mb-6">09 — Prenons contact</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading text-[clamp(44px,7vw,96px)] mb-6 relative z-10">
          Commence par
          <br />
          une <em>conversation</em>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-base font-light text-muted leading-[1.8] max-w-[500px] mx-auto mb-14 relative z-10">
          {content.sub}
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="flex gap-4 justify-center mb-4 flex-wrap relative z-10">
          <a href="mailto:service@finox.ca" className="btn-gold">
            {content.mainBtn}
          </a>
          <a href="tel:+14382587666" className="btn-outline">
            438-258-7666
          </a>
        </div>
        <p className="text-[11px] tracking-[0.18em] uppercase text-center mb-20 relative z-10" style={{ color: "rgba(212,168,67,0.65)" }}>
          Cabinet de services financiers inscrit à l&apos;AMF du Québec
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="flex border border-gold/15 max-w-[800px] mx-auto relative z-10 max-[980px]:flex-col">
          <div className="flex-1 px-7 py-7 border-r border-gold/10 text-left transition-colors hover:bg-gold/5 max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10">
            <span className="block text-[9px] tracking-[0.24em] uppercase text-gold mb-2.5">
              Contact principal
            </span>
            <span className="block text-[13px] text-muted leading-[1.65]">
              {content.contactName}
            </span>
            <span className="block mt-1 text-[11px] text-gold">
              {content.contactTitle}
            </span>
          </div>
          <div className="flex-1 px-7 py-7 border-r border-gold/10 text-left transition-colors hover:bg-gold/5 max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10">
            <span className="block text-[9px] tracking-[0.24em] uppercase text-gold mb-2.5">
              Bureau
            </span>
            <span className="block text-[13px] text-muted leading-[1.65]">
              3235 Av. de la Gare
              <br />
              Mascouche, QC J7K 3C1
            </span>
          </div>
          <div className="flex-1 px-7 py-7 border-r border-gold/10 text-left transition-colors hover:bg-gold/5 max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-gold/10">
            <span className="block text-[9px] tracking-[0.24em] uppercase text-gold mb-2.5">
              Courriel
            </span>
            <a
              href="mailto:service@finox.ca"
              className="block text-[13px] text-muted leading-[1.65] hover:text-gold"
            >
              service@finox.ca
            </a>
          </div>
          <div className="flex-1 px-7 py-7 text-left transition-colors hover:bg-gold/5">
            <span className="block text-[9px] tracking-[0.24em] uppercase text-gold mb-2.5">
              Licencié
            </span>
            <span className="block text-[13px] text-muted leading-[1.65]">
              AMF Québec
              <br />
              N.-B. (en cours)
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
