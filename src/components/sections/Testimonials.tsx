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
        <div className="grid grid-cols-3 gap-6 mt-6 max-[980px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                data-hover
                className="bg-navy border border-gold/10 p-11 px-9 relative transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 h-full"
              >
                <div className="font-display text-7xl text-gold/15 leading-[0.8] mb-2" aria-hidden="true">
                  &ldquo;
                </div>
                <div className="text-gold text-xs tracking-[3px] mb-4" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <p className="font-serif text-[17px] italic text-cream-dim leading-[1.65] mb-7">
                  {t.text}
                </p>
                <p className="text-xs font-semibold text-cream mb-1 tracking-wide">
                  {t.name}
                </p>
                <p className="text-[11px] text-muted italic">{t.from}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
