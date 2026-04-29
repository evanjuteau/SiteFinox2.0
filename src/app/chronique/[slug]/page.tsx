import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { defaultOgImage, organizationJsonLd, siteUrl, toIsoDate } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  const url = `/chronique/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      publishedTime: toIsoDate(article.date),
      authors: [article.author],
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [defaultOgImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const sameTagArticles = articles
    .filter((item) => item.slug !== slug && item.tag === article.tag)
    .slice(0, 4);
  const fallbackArticles = articles
    .filter((item) => item.slug !== slug && !sameTagArticles.includes(item))
    .slice(0, 4 - sameTagArticles.length);
  const otherArticles = [...sameTagArticles, ...fallbackArticles];
  const articleUrl = `${siteUrl}/chronique/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${defaultOgImage}`,
    datePublished: toIsoDate(article.date),
    dateModified: toIsoDate(article.date),
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: organizationJsonLd,
    mainEntityOfPage: articleUrl,
  };

  return (
    <div className="pt-32 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="container-fx max-w-[760px]">
        <Reveal>
          <Link
            href="/chronique"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-muted hover:text-gold transition-colors mb-12"
          >
            ← Toute la chronique
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-5 flex items-center gap-3.5 before:content-[''] before:w-8 before:h-px before:bg-gold">
            <span>{article.tag}</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] font-black leading-[1.1] text-cream mb-8 text-balance">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center gap-6 pb-10 mb-10 border-b border-gold/10 text-[13px] max-[640px]:flex-col max-[640px]:items-start">
            <div>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-muted mb-1">
                Par
              </span>
              <span className="text-cream">{article.author}</span>
            </div>
            <div>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-muted mb-1">
                Publié
              </span>
              <time className="text-muted" dateTime={toIsoDate(article.date)}>
                {article.date}
              </time>
            </div>
            <div>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-muted mb-1">
                Lecture
              </span>
              <span className="text-muted">{article.readTime}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="prose-finox">
            {article.content.split("\n\n").map((para, i) => {
              const trimmed = para.trim();
              if (!trimmed) return null;
              const key = `${trimmed.slice(0, 32)}-${i}`;

              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                const heading = trimmed.slice(2, -2);
                return (
                  <h2
                    key={key}
                    className="font-serif text-2xl font-bold text-cream mt-12 mb-5"
                  >
                    {heading}
                  </h2>
                );
              }

              if (trimmed.startsWith("- ")) {
                const items = trimmed
                  .split("\n")
                  .filter((line) => line.startsWith("- "))
                  .map((line) => line.slice(2));
                return (
                  <ul key={key} className="my-6 space-y-2 text-[15px] text-muted leading-[1.8] list-none pl-0">
                    {items.map((item) => (
                      <li key={item} className="relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gold">
                        {formatInline(item)}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={key}
                  className="text-[15px] text-muted leading-[1.9] mb-5"
                >
                  {formatInline(trimmed)}
                </p>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mt-16 px-9 py-7 border-l-2 border-gold"
            style={{ background: "rgba(212,168,67,0.04)" }}
          >
            <p className="font-serif text-[21px] italic text-cream-dim leading-[1.55]">
              {article.question}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 pt-16 border-t border-gold/10 text-center">
            <p className="font-serif text-xl italic text-cream-dim mb-7">
              Envie d&apos;en parler?
            </p>
            <Link href="/contact" className="btn-gold">
              Prendre rendez-vous
            </Link>
          </div>
        </Reveal>
      </article>

      {otherArticles.length > 0 && (
        <div className="container-fx mt-32">
          <Reveal>
            <p className="sec-eyebrow mb-12">Autres chroniques</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-gold/10 max-[980px]:grid-cols-1">
            {otherArticles.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.1}>
                <Link
                  href={`/chronique/${item.slug}`}
                  data-hover
                  className="bg-navy p-10 px-9 block transition-all duration-300 relative overflow-hidden group no-underline h-full hover:bg-navy-100"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--gold), var(--gold-dark))",
                    }}
                  />
                  <p className="text-[9px] tracking-[0.22em] uppercase text-gold mb-4">
                    {item.tag}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-cream leading-[1.25] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.75] mb-4">
                    {item.excerpt}
                  </p>
                  <span className="text-xs text-muted">
                    Par {item.author}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${part}-${i}`} className="text-cream font-medium">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${i}`}>{part}</span>
    ),
  );
}
