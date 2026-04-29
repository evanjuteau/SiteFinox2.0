import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { articles } from "@/lib/articles";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "La Chronique",
  description:
    "On parle vrai, on écrit pareil. Notes éditoriales sur la finance, l'assurance, l'hypothèque et la planification — écrites par Evan, Dany et Étienne Lejeune.",
  path: "/chronique",
});

export default function ChroniquePage() {
  // Group articles by tag for navigation
  const tags = Array.from(new Set(articles.map((a) => a.tag)));
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="pt-32">
      {/* Hero */}
      <header className="bg-navy relative overflow-hidden py-20 max-[980px]:py-12">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(212,168,67,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container-fx relative">
          <div className="grid grid-cols-2 gap-20 items-end mb-12 max-[980px]:grid-cols-1 max-[980px]:gap-8">
            <div>
              <Reveal>
                <p className="sec-eyebrow">La chronique Finox</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="section-heading text-[clamp(46px,6vw,84px)] leading-[1] mb-2">
                  On parle vrai,
                  <br />
                  on écrit
                  <br />
                  <em>pareil</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div>
                <p className="text-[16px] text-cream-dim leading-[1.85] max-w-[460px] mb-4">
                  Des notes éditoriales sur la finance, l&apos;assurance, l&apos;hypothèque
                  et la planification. Écrites par Evan, Dany et Étienne Lejeune
                  — du vrai monde, pas un copywriter.
                </p>
                <p className="text-[12px] tracking-[0.16em] uppercase text-gold">
                  {articles.length} articles · mis à jour chaque mois
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="divider-fox my-2" aria-hidden="true" />

      {/* Featured article */}
      <section className="bg-navy-50 grain border-t border-gold/10 py-20 max-[980px]:py-12 relative">
        <div className="container-fx relative">
          <Reveal>
            <p className="sec-eyebrow mb-7">À la une</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={`/chronique/${featuredArticle.slug}`}
              data-hover
              className="block group no-underline border border-gold/15 hover:border-gold/40 transition-colors overflow-hidden"
            >
              <div className="grid grid-cols-[1.1fr_1fr] gap-0 max-[860px]:grid-cols-1">
                <div className="bg-navy p-12 max-[860px]:p-8 flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-5">
                      {featuredArticle.tag}
                    </p>
                    <h2 className="font-serif text-[clamp(28px,3.4vw,40px)] font-bold text-cream group-hover:text-gold transition-colors leading-[1.15] mb-5">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-[15px] text-muted leading-[1.85] mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gold/10 pt-5">
                    <div>
                      <div className="text-[12px] text-cream-dim font-medium">
                        {featuredArticle.author}
                      </div>
                      <div className="text-[10px] tracking-[0.14em] uppercase text-muted-dark mt-0.5">
                        {featuredArticle.readTime} · {featuredArticle.date}
                      </div>
                    </div>
                    <span className="text-2xl text-gold opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
                <div
                  className="relative bg-navy-100 min-h-[280px] flex items-center justify-center overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,168,67,0.18) 0%, transparent 70%)",
                    }}
                  />
                  <p
                    className="font-display text-[180px] max-[860px]:text-[120px] leading-none text-gold/15 select-none"
                  >
                    01
                  </p>
                  <p className="absolute bottom-6 right-6 text-[10px] tracking-[0.22em] uppercase text-gold/60">
                    {featuredArticle.tag}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Tags filter (visual marker) */}
      <section className="bg-navy py-10 max-[980px]:py-6 border-t border-gold/10">
        <div className="container-fx">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] tracking-[0.18em] uppercase text-muted-dark mr-3">
              Catégories :
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.14em] uppercase text-cream-dim border border-gold/15 px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All articles grid */}
      <section className="bg-navy-50 grain py-20 max-[980px]:py-12 border-t border-gold/10 relative">
        <div className="container-fx relative">
          <Reveal>
            <p className="sec-eyebrow mb-10">Tous les articles</p>
          </Reveal>

          <div className="grid grid-cols-3 gap-px bg-gold/10 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
            {otherArticles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/chronique/${article.slug}`}
                  data-hover
                  className="bg-navy p-9 block h-full transition-all duration-300 relative overflow-hidden group no-underline hover:bg-navy-100"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                    }}
                  />
                  <p className="text-[9px] tracking-[0.22em] uppercase text-gold mb-5 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-gold">
                    <span>{article.tag}</span>
                  </p>
                  <h3 className="font-serif text-[18px] font-bold text-cream leading-[1.3] mb-4 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-[1.7] mb-5">
                    {article.excerpt}
                  </p>
                  <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-cream-dim">
                        {article.author}
                      </div>
                      <div className="text-[9px] tracking-[0.14em] uppercase text-muted-dark mt-0.5">
                        {article.readTime} · {article.date}
                      </div>
                    </div>
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

      <CTA />
    </div>
  );
}
