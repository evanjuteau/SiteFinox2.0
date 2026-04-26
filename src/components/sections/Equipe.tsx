import Image from "next/image";
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
    name: "Étienne",
    title: "Relations, Expansion & Planification financière",
    bio: "Le moteur des partenariats et la rigueur de la planification. Il construit les ponts entre Finox et les meilleurs professionnels du marché, et s'assure que chaque dossier client est traité avec précision et profondeur.",
  },
];

export default function Equipe() {
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
                className="bg-navy p-11 px-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden group hover:bg-gold/[0.03]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                  }}
                />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold/30 mb-7 transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_24px_rgba(212,168,67,0.3)]">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-gold mb-3.5">
                  {m.role}
                </p>
                <h3 className="font-serif text-[21px] font-bold text-cream mb-1 leading-tight">
                  {m.name}
                </h3>
                <p className="text-xs text-muted italic mb-4">{m.title}</p>
                <p className="text-[13px] text-muted-dark leading-[1.82]">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
