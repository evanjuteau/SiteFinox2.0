import Reveal from "@/components/ui/Reveal";
import { StarIcon } from "@/components/ui/Icon";

interface Review {
  initials: string;
  name: string;
  ago: string;
  reviewCount: string;
  text: string;
  highlight?: boolean;
}

const reviews: Review[] = [
  {
    initials: "JL",
    name: "Jean-Michel Leblanc",
    ago: "Il y a 4 mois",
    reviewCount: "3 avis Google",
    text: "Bonne rapidité de réponses sur les communications et services/conseils adaptés à nos besoins. Evan est très professionnel, chaleureux et à l'écoute de ses clients. Je recommande.",
    highlight: true,
  },
  {
    initials: "NK",
    name: "Nataly Keroack",
    ago: "Il y a un mois",
    reviewCount: "6 avis Google",
    text: "Un service incroyable. Evan Juteau Lapierre, surtout à l'écoute de nos besoins. Merci.",
  },
  {
    initials: "GT",
    name: "Géraldine Turgeon",
    ago: "Il y a un mois",
    reviewCount: "3 avis Google",
    text: "Super expérience ! Merci Evan !",
  },
  {
    initials: "MC",
    name: "Marcel Jr. Custeau",
    ago: "Il y a 3 semaines",
    reviewCount: "3 avis Google",
    text: "Excellent service. Rapide et professionnel.",
  },
  {
    initials: "GF",
    name: "Guillaume Filion",
    ago: "Il y a un mois",
    reviewCount: "7 avis Google",
    text: "Superbe service !",
  },
  {
    initials: "FP",
    name: "Frédérik-Daniel Poirier",
    ago: "Il y a 3 semaines",
    reviewCount: "Local Guide · 19 avis Google",
    text: "Bon service !",
  },
];

const GOOGLE_REVIEWS_URL = "https://share.google/D1somtWzTLnfdIZy9";

export default function Testimonials() {
  return (
    <section className="bg-navy-50 grain border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
        style={{ fontSize: "320px", color: "rgba(212,168,67,0.025)" }}
      >
        ★
      </div>

      <div className="container-fx relative z-10">
        <div className="grid grid-cols-2 gap-12 items-end mb-16 max-[980px]:grid-cols-1 max-[980px]:gap-8">
          <div>
            <Reveal>
              <p className="sec-eyebrow">08 — Ce qu&apos;ils en disent</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(36px,4.5vw,58px)] leading-[1] mb-2">
                100 % d&apos;avis
                <br />
                <em>5 étoiles</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 max-[980px]:items-start items-end">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} size={18} />
                  ))}
                </div>
                <span className="text-cream font-serif text-2xl font-bold">5,0</span>
                <span className="text-muted text-[12px] tracking-[0.14em] uppercase">
                  sur Google
                </span>
              </div>
              <p className="text-[14px] text-muted leading-[1.7] max-w-[380px] max-[980px]:text-left text-right">
                Tous nos avis sont vérifiés et publics sur Google. Aucun témoignage anonyme, aucun copywriter.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article
                data-hover
                className={`relative h-full p-9 transition-all duration-300 hover:-translate-y-1 ${
                  r.highlight
                    ? "bg-navy border-2 border-gold/40 hover:border-gold/70 shadow-[0_18px_50px_-20px_rgba(212,168,67,0.35)]"
                    : "bg-navy border border-gold/10 hover:border-gold/30 shadow-[0_8px_28px_-15px_rgba(0,0,0,0.6)]"
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-display text-[18px] tracking-[2px]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                      color: "var(--navy)",
                    }}
                    aria-hidden="true"
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-serif text-[16px] font-bold text-cream leading-tight truncate">
                      {r.name}
                    </div>
                    <div className="text-[10px] text-muted-dark tracking-[0.06em] mt-0.5">
                      {r.reviewCount}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5 text-gold" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} size={13} />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-dark tracking-[0.1em] uppercase ml-1">
                    {r.ago}
                  </span>
                </div>

                <p className="font-serif text-[15.5px] italic text-cream-dim leading-[1.7]">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
                  }}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex items-center justify-center gap-5 flex-wrap">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-cream hover:text-gold transition-colors no-underline border-b border-gold/30 hover:border-gold pb-1"
            >
              <span>Lire tous les avis sur Google</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
