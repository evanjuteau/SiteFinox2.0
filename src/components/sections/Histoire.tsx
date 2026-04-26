import Reveal from "@/components/ui/Reveal";

const items = [
  {
    year: "2022",
    title: "La conviction",
    body: "Evan et Dany se rencontrent avec une conviction commune : l'industrie financière québécoise **peut et doit être différente**. Plus transparente. Plus humaine. Plus vraiment au service du client. Finox prend forme autour de cette idée.",
    tag: "L'origine",
  },
  {
    year: "2023",
    title: "Le premier client",
    body: "La première vraie conversation — pas un pitch de produit, mais une discussion à table sur comment **protéger une famille** si l'imprévu arrivait. Ce client-là, on l'a encore aujourd'hui. Ça a défini pour toujours ce que Finox allait être.",
    tag: "Les fondations",
  },
  {
    year: "2024",
    title: "Le réseau prend forme",
    body: "Étienne rejoint l'équipe et **les partenariats stratégiques se construisent** un à un — chaque CPA, notaire, courtier choisi parce qu'il partage la même vision du service. Pas pour grossir vite. Pour grossir bien. L'expertise en planification financière s'ajoute pour donner aux clients une vision globale et long terme.",
    tag: "La croissance",
  },
  {
    year: "2026",
    title: "Finox 2.0",
    body: "Le cabinet se redéfinit. **On reste petits par choix** — une équipe resserrée, des standards élevés, un accompagnement qui n'existe nulle part ailleurs au Québec. Finox 2.0 c'est pas juste un nouveau site. C'est une promesse renouvelée envers chaque client qu'on accompagne.",
    tag: "Aujourd'hui",
  },
];

function renderBody(body: string) {
  const parts = body.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${part}-${i}`} className="text-cream font-medium">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${i}`}>{part}</span>
    )
  );
}

export default function Histoire() {
  return (
    <section
      className="bg-navy-50 border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="histoire"
    >
      <div
        className="absolute -bottom-10 -right-10 font-display pointer-events-none select-none tracking-[0.06em]"
        aria-hidden="true"
        style={{
          fontSize: "min(20vw, 280px)",
          color: "rgba(212,168,67,0.025)",
        }}
      >
        FINOX
      </div>

      <div className="container-fx relative">
        <Reveal>
          <p className="sec-eyebrow">05 — Notre histoire</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-heading text-[clamp(38px,4.5vw,62px)] max-w-[600px] mb-20">
            D&apos;une conviction
            <br />à un <em>cabinet</em>
          </h2>
        </Reveal>

        <div className="relative pl-14 max-[980px]:pl-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,168,67,0.35) 10%, rgba(212,168,67,0.35) 90%, transparent)",
            }}
          />
          {items.map((it, i) => (
            <Reveal key={it.year} delay={i * 0.12}>
              <div className="relative mb-14 pb-14 border-b border-gold/5 last:border-b-0 last:mb-0 last:pb-0 group">
                <span
                  className="absolute -left-[62px] top-2 w-3 h-3 rounded-full bg-navy-50 border-2 border-gold-dark transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_16px_rgba(212,168,67,0.5)] group-hover:scale-125 z-10 max-[980px]:-left-[38px]"
                  aria-hidden="true"
                />
                <div className="font-display text-[56px] text-gold/20 leading-none mb-2 transition-colors duration-300 group-hover:text-gold/40">
                  {it.year}
                </div>
                <h3 className="font-serif text-[26px] font-bold text-cream mb-3 leading-tight">
                  {it.title}
                </h3>
                <p className="text-[15px] text-muted leading-[1.85] max-w-[640px]">
                  {renderBody(it.body)}
                </p>
                <span className="inline-flex mt-4 text-[9px] tracking-[0.18em] uppercase text-gold border border-gold/20 px-3 py-1">
                  {it.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
