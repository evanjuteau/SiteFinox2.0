"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

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

        <Reveal delay={0.3}>
          <div className="grid grid-cols-8 gap-px bg-gold/10 border border-gold/15 max-[1180px]:grid-cols-6 max-[980px]:grid-cols-4 max-[600px]:grid-cols-3">
            {insurers.map((ins) => (
              <div
                key={ins.slug}
                className="bg-navy-100 aspect-[3/2] flex items-center justify-center p-5 transition-all duration-500 hover:bg-cream group relative"
                title={ins.name}
              >
                <Image
                  src={`/images/insurers/${ins.slug}.png`}
                  alt={ins.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-[42px] w-auto h-auto object-contain transition-all duration-500 grayscale brightness-200 contrast-50 opacity-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-center text-[11px] tracking-[0.2em] uppercase mt-10 text-muted-dark">
            Et plus de 50 prêteurs hypothécaires sur demande
          </p>
        </Reveal>
      </div>
    </section>
  );
}
