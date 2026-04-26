import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function Chronique() {
  return (
    <section
      className="bg-navy border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="chronique"
    >
      <div className="container-fx">
        <div className="grid grid-cols-2 gap-20 items-end mb-20 max-[980px]:grid-cols-1 max-[980px]:gap-10">
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

        <div className="grid grid-cols-3 gap-px bg-gold/10 max-[980px]:grid-cols-1">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1}>
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
                <h3 className="font-serif text-[22px] font-bold text-cream leading-[1.25] mb-5">
                  {article.title}
                </h3>
                <p className="text-sm text-muted leading-[1.8] mb-7">
                  {article.excerpt}
                </p>
                <p className="font-serif text-[15px] italic text-cream-dim pt-5 border-t border-gold/10 leading-[1.5]">
                  {article.question}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[11px] text-muted tracking-wide">
                    {article.author}
                  </span>
                  <span className="text-lg text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
