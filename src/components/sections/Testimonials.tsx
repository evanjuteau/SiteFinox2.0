import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    text: "J'avais jamais pensé à l'assurance invalidité avant de parler à Evan. En 30 minutes, j'ai compris pourquoi c'était essentiel. Aucun jargon, juste les faits.",
    name: "M. Tremblay",
    from: "Travailleur autonome, Montréal",
  },
  {
    text: "On a refinancé notre maison, restructuré nos assurances et mis en place une fiducie — tout coordonné par Finox. C'est ça un vrai partenaire financier.",
    name: "Famille Gagnon",
    from: "Entrepreneurs, Laval",
  },
  {
    text: "Dany m'a trouvé un taux hypothécaire que ma banque n'était pas capable de battre. Et il a coordonné l'assurance vie avec la convention d'actionnaires. Impressionnant.",
    name: "S. Bergeron",
    from: "Actionnaire, PME québécoise",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy-50 border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
        style={{ fontSize: "320px", color: "rgba(212,168,67,0.025)" }}
      >
        ★
      </div>
      <div className="container-fx relative">
        <Reveal>
          <p className="sec-eyebrow">08 — Ce qu&apos;ils en disent</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 mt-10 max-[980px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                data-hover
                className="relative flex flex-col h-full transition-all duration-400 hover:-translate-y-1.5 group"
                style={{
                  background: "linear-gradient(135deg, rgba(17,24,41,1) 0%, rgba(12,18,32,1) 100%)",
                  boxShadow: "0 0 0 1px rgba(212,168,67,0.08), 0 24px 48px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.18)" }}
                />

                <div className="p-11 px-9 flex flex-col flex-1">
                  <div className="font-display text-[88px] text-gold/20 leading-[0.75] mb-3 select-none" aria-hidden="true">
                    &ldquo;
                  </div>
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <svg key={k} viewBox="0 0 12 12" className="w-3 h-3 fill-gold" aria-hidden="true">
                        <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9.75 2.25 12l1.5-4.5L0 4.5h4.5z" />
                      </svg>
                    ))}
                    <span className="sr-only">5 étoiles sur 5</span>
                  </div>
                  <p className="font-serif text-[17px] italic text-cream-dim leading-[1.68] mb-8 flex-1">
                    {t.text}
                  </p>
                  <div className="pt-5 border-t border-gold/10">
                    <p className="text-[13px] font-semibold text-cream mb-0.5 tracking-wide">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-muted">{t.from}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
