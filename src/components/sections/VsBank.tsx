import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const bankRows = [
  "Lié à un seul assureur — les produits de sa banque",
  "Objectif de vente mensuel à atteindre",
  "Revoir ton conseiller dans 2 ans si t'as de la chance",
  "Un 1-800 quand t'as une question urgente",
  "Assurance hypothécaire bancaire — souvent trop chère",
  "Fonds maison — rarement les meilleurs du marché",
  "Vision cloisonnée — pas de coordination avec ton CPA ou notaire",
];

const finoxRows = [
  "Accès à +50 assureurs & prêteurs — on magasine pour toi",
  "Zéro quota. Notre seul objectif : ton meilleur intérêt",
  "Un numéro de cell, pas un 1-800. On répond",
  "Révision annuelle proactive — c'est nous qui t'appelons",
  "Assurance indépendante — portable, flexible, souvent moins chère",
  "Accès au vrai marché — pas juste les fonds maison",
  "Vision 360° — on coordonne avec ton CPA, notaire, courtier",
];

export default function VsBank() {
  return (
    <section className="bg-navy-50 border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20" id="vs">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display pointer-events-none select-none tracking-[0.1em]"
        aria-hidden="true"
        style={{
          fontSize: "min(30vw, 400px)",
          color: "rgba(212,168,67,0.025)",
        }}
      >
        VS
      </div>

      <div className="container-fx relative">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="section-heading text-[clamp(36px,5vw,68px)] mb-5">
              Pourquoi pas
              <br />
              <em>votre banque?</em>
            </h2>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto leading-[1.8]">
              Bonne question. Voici la réponse honnête — sans attaquer
              personne, juste les faits.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-stretch relative max-[980px]:grid-cols-1">
            <div className="flex flex-col">
              <div className="px-9 py-7 border border-white/5 border-b-0 bg-white/[0.02] flex items-center gap-3.5">
                <div>
                  <div className="font-serif text-xl font-bold text-muted">
                    Votre conseiller bancaire
                  </div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-muted-dark mt-1">
                    Le modèle traditionnel
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                {bankRows.map((row) => (
                  <div
                    key={row}
                    className="px-9 py-5 flex items-center gap-3 border border-white/5 border-t-0 bg-white/[0.01] text-[14px] leading-[1.5] text-muted-dark transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="text-base w-5 text-center shrink-0 text-red-400" aria-hidden="true">
                      ✗
                    </span>
                    {row}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-20 relative z-10 max-[980px]:hidden">
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="w-14 h-14 rounded-full bg-navy-100 border-2 border-gold flex items-center justify-center font-display text-base text-gold tracking-[0.1em] my-4 shadow-[0_0_24px_rgba(212,168,67,0.2)]">
                VS
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            </div>

            <div className="flex flex-col">
              <div className="px-9 py-7 border border-gold/20 border-b-0 bg-gold/5 flex items-center gap-3.5">
                <div>
                  <div className="font-serif text-xl font-bold text-gold">
                    Finox
                  </div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-muted-dark mt-1">
                    Le partenaire indépendant
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                {finoxRows.map((row) => (
                  <div
                    key={row}
                    className="px-9 py-5 flex items-center gap-3 border border-gold/10 border-t-0 bg-gold/[0.03] text-[14px] leading-[1.5] text-cream-dim transition-colors hover:bg-gold/[0.07]"
                  >
                    <span className="text-base w-5 text-center shrink-0 text-gold" aria-hidden="true">
                      ★
                    </span>
                    {row}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mt-14 px-12 py-9 border border-gold/20 grid grid-cols-[1fr_auto] items-center gap-10 max-[980px]:grid-cols-1"
            style={{ background: "rgba(212,168,67,0.04)" }}
          >
            <p className="font-serif text-[19px] italic text-cream-dim leading-[1.55]">
              &ldquo;Ce n&apos;est pas une question de banque contre Finox.
              C&apos;est une question de{" "}
              <strong className="text-gold not-italic">
                qui travaille vraiment pour toi
              </strong>
              .&rdquo;
            </p>
            <Link href="/contact" className="btn-gold">
              Parlons-en →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
