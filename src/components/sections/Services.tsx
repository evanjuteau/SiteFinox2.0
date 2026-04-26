import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const services = [
  { n: "01", name: "Assurance vie & invalidité", tags: ["Individuel", "Corporatif", "Clé-homme"] },
  { n: "02", name: "Assurance collective", tags: ["PME", "Groupes"] },
  { n: "03", name: "Planification successorale", tags: ["Fiducie", "Holdco", "Transfert"] },
  { n: "04", name: "Investissement & épargne", tags: ["REER", "CELI", "CELIAPP"] },
  { n: "05", name: "Assurance voyage", tags: ["Manulife", "TuGo", "iA"] },
  { n: "06", name: "Stratégies corporatives", tags: ["Vie participante", "Convention actionnaires"] },
  { n: "07", name: "Financement hypothécaire", tags: ["+50 prêteurs", "Résidentiel", "Commercial"] },
];

export default function Services() {
  return (
    <section className="bg-navy-50 border-t border-gold/10 py-32 max-[980px]:py-20" id="services">
      <div className="container-fx">
        <div className="grid grid-cols-[380px_1fr] gap-20 items-start max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div className="sticky top-32 max-[980px]:static">
            <Reveal>
              <p className="sec-eyebrow">03 — Nos services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(38px,4.5vw,60px)] mb-6">
                On couvre
                <br />
                <em>tout</em>
                <br />
                le terrain
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] text-muted leading-[1.85] mb-9">
                De la jeune famille à l&apos;entrepreneur — on a les solutions
                pour t&apos;accompagner à chaque étape.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/contact" className="btn-gold">
                Discutons →
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-gold/10">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div
                  className="flex items-center gap-6 py-7 border-b border-gold/5 transition-all duration-300 relative overflow-hidden group hover:pl-5"
                  data-hover
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                  />
                  <span className="font-display text-3xl text-gold/20 leading-none min-w-[44px]">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <div className="font-serif text-[22px] font-bold text-cream group-hover:text-gold transition-colors mb-1">
                      {s.name}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] tracking-[0.14em] uppercase text-muted-dark border border-gold/10 px-2.5 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xl text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
