import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    n: "01",
    t: "Indépendance totale",
    p: "Aucun lien avec un assureur. On choisit ce qui est le mieux pour toi, point final.",
  },
  {
    n: "02",
    t: "Réseau d'élite",
    p: "CPA, notaires, courtiers — les bons partenaires, pas n'importe qui.",
  },
  {
    n: "03",
    t: "Sur mesure, toujours",
    p: "Ta situation est unique. Ta solution l'est aussi. On bâtit des stratégies.",
  },
  {
    n: "04",
    t: "Rigueur & transparence",
    p: "Licencié AMF Québec. Zéro surprise dans les petits caractères.",
  },
];

export default function About() {
  return (
    <section
      className="bg-navy-50 relative overflow-hidden py-32 max-[980px]:py-20"
      id="cabinet"
    >
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="container-fx relative">
        <Reveal>
          <p className="sec-eyebrow">01 — Le cabinet</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-24 items-center mb-20 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <Reveal delay={0.1}>
            <h2 className="section-heading text-[clamp(40px,5vw,68px)]">
              Soudés,
              <br />
              ambitieux,
              <br />
              <em>humains.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <p className="text-[15px] leading-[1.9] text-muted mb-5">
                Finox, c&apos;est pas un cabinet comme les autres. On est une
                équipe réduite,{" "}
                <strong className="text-cream font-medium">soudée</strong>, qui
                a choisi de rester petite pour rester{" "}
                <strong className="text-cream font-medium">excellente</strong>.
              </p>
              <p className="text-[15px] leading-[1.9] text-muted mb-5">
                Notre vision est simple : t&apos;offrir un accompagnement{" "}
                <strong className="text-cream font-medium">
                  digne d&apos;un ami qui s&apos;y connaît
                </strong>
                . Quelqu&apos;un qui te parle vrai, qui comprend ta réalité, et
                qui est là pour les grandes décisions comme pour les petites
                questions du quotidien.
              </p>
              <p className="text-[15px] leading-[1.9] text-muted">
                On arrive avec un regard neuf sur cette industrie —{" "}
                <strong className="text-cream font-medium">
                  jeunes mais maîtrisés
                </strong>
                . L&apos;ambition d&apos;une startup, la rigueur d&apos;un
                cabinet établi.
              </p>

              <div
                className="mt-9 px-9 py-7 border-l-2 border-gold"
                style={{ background: "rgba(212,168,67,0.04)" }}
              >
                <p className="font-serif text-[21px] italic text-cream-dim leading-[1.55]">
                  &ldquo;Plus qu&apos;un cabinet, un véritable
                  partenaire.&rdquo;
                </p>
                <cite className="block mt-3.5 text-[10px] tracking-[0.18em] uppercase text-muted-dark not-italic">
                  — Finox, Services Financiers
                </cite>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div
                className="p-11 px-8 border border-gold/10 border-l-0 first:border-l bg-navy-50 transition-all duration-300 hover:bg-navy-100 hover:-translate-y-1 relative overflow-hidden group h-full"
                data-hover
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                  }}
                />
                <span className="block font-display text-[52px] text-gold/10 leading-none mb-4">
                  {p.n}
                </span>
                <h3 className="font-serif text-[19px] font-bold text-cream mb-2.5">
                  {p.t}
                </h3>
                <p className="text-[13px] text-muted leading-[1.78]">{p.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
