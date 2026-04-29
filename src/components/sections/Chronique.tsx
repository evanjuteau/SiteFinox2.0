import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { articles } from "@/lib/articles";

interface ChroniqueProps {
  /** Maximum number of articles to render. Omit for all. */
  limit?: number;
  /** Hide the section heading (useful when used as part of a bigger page). */
  compact?: boolean;
}

export default function Chronique({ limit = 6, compact = false }: ChroniqueProps) {
  const displayed = limit ? articles.slice(0, limit) : articles;

  return (
    <section
      className="bg-navy border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="chronique"
    >
      <div className="container-fx">
        {!compact && (
          <div className="grid grid-cols-2 gap-20 items-end mb-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div>
              <Reveal>
                <p className="sec-eyebrow">07 — La chronique Finox</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="section-heading text-[clamp(38px,4.5vw,62px)]">
                  On parle vrai,
                  <br />
                  on écrit
                  <br />
                  <em>pareil</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="text-[15px] text-muted leading-[1.85]">
                Des notes courtes, sans jargon, écrites comme on parlerait à un
                ami. Sur la finance, l&apos;assurance, et tout ce que
                l&apos;industrie ne te dira jamais.
              </p>
            </Reveal>
          </div>
        )}

        <div className="grid grid-cols-3 gap-px bg-gold/10 max-[980px]:grid-cols-1">
          {displayed.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.06}>
              <Link
                href={`/chronique/${article.slug}`}
                data-hover
                className="bg-navy p-11 px-9 block transition-all duration-300 relative overflow-hidden group no-underline h-full hover:bg-navy-100"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                  }}
                />
                <p className="text-[9px] tracking-[0.22em] uppercase text-gold mb-5 flex items-center gap-2 before:content-[''] before:w-5 before:h-px before:bg-gold">
                  <span>{article.tag}</span>
                </p>
                <h3 className="font-serif text-[20px] font-bold text-cream leading-[1.3] mb-4">
                  {article.title}
                </h3>
                <p className="text-[13.5px] text-muted leading-[1.75] mb-6">
                  {article.excerpt}
                </p>
                <p className="font-serif text-[14px] italic text-cream-dim pt-5 border-t border-gold/10 leading-[1.5]">
                  {article.question}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.06em] text-muted">
                      {article.author}
                    </span>
                    <span className="text-[9px] tracking-[0.14em] uppercase text-muted-dark mt-0.5">
                      {article.readTime} · {article.date}
                    </span>
                  </div>
                  <span className="text-lg text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {limit && articles.length > limit && (
          <Reveal>
            <div className="text-center mt-14">
              <Link
                href="/chronique"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-cream hover:text-gold transition-colors no-underline border-b border-gold/30 hover:border-gold pb-1"
              >
                <span>Voir les {articles.length} articles</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
