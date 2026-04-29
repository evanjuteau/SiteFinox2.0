import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { ServiceIllustration } from "@/components/ui/ServiceIllustrations";
import { services, getServiceBySlug } from "@/lib/services";
import { pageMetadata, siteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.short} ${service.hero.intro.slice(0, 110)}…`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    provider: {
      "@type": "FinancialService",
      name: "Finox — Services Financiers",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    url: `${siteUrl}/services/${service.slug}`,
    description: service.short,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceJsonLd, faqJsonLd]),
        }}
      />

      <article className="pt-32 pb-0">
        {/* HERO */}
        <header className="relative overflow-hidden bg-navy py-20 max-[980px]:py-12">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(212,168,67,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="container-fx relative">
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors no-underline mb-8"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                <span>Tous les services</span>
              </Link>
            </Reveal>

            <div className="grid grid-cols-[1.05fr_1fr] gap-16 items-center max-[980px]:grid-cols-1 max-[980px]:gap-10">
              <div>
                <Reveal delay={0.05}>
                  <p className="sec-eyebrow">{service.hero.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h1 className="section-heading text-[clamp(40px,5.5vw,76px)] leading-[1] mb-7">
                    {service.hero.title}
                    <br />
                    <em>{service.hero.titleEm}</em>
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[16px] text-cream-dim leading-[1.85] max-w-[520px] mb-9">
                    {service.hero.intro}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="flex gap-4 flex-wrap items-center">
                    <Link href="/contact" className="btn-gold inline-flex items-center gap-2.5">
                      <span>{service.cta.btn}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-[0.16em] uppercase text-muted-dark border border-gold/15 px-3 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <div
                  className="relative w-full aspect-[600/420] border border-gold/20 transition-shadow duration-500 hover:shadow-[0_30px_70px_-20px_rgba(212,168,67,0.3)]"
                  data-hover
                >
                  <ServiceIllustration name={service.slug} />
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        <div className="divider-fox my-2" aria-hidden="true" />

        {/* WHEN TO CONSULT */}
        <section className="bg-navy-50 py-28 max-[980px]:py-16 grain border-t border-gold/10 relative">
          <div className="container-fx relative">
            <div className="grid grid-cols-2 gap-16 items-end mb-14 max-[980px]:grid-cols-1 max-[980px]:gap-8">
              <div>
                <Reveal>
                  <p className="sec-eyebrow">Quand consulter</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="section-heading text-[clamp(32px,4vw,52px)] leading-[1.05]">
                    Trois moments
                    <br />
                    où ça <em>change tout</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.2}>
                <p className="text-[15px] text-muted leading-[1.85] max-w-[440px]">
                  Si tu te reconnais dans une de ces situations, c&apos;est probablement le bon moment d&apos;avoir une conversation.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gold/10 max-[980px]:grid-cols-1">
              {service.whenToConsult.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div
                    data-hover
                    className="bg-navy-50 px-9 py-11 h-full transition-all duration-300 hover:bg-navy-100 group relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-dark))" }}
                      aria-hidden="true"
                    />
                    <span className="font-display text-[44px] text-gold/25 leading-none mb-5 block group-hover:text-gold/50 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[19px] font-bold text-cream mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-muted leading-[1.85]">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINOX DIFFERENCE */}
        <section className="bg-navy py-28 max-[980px]:py-16 border-t border-gold/10 relative overflow-hidden">
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="container-fx relative">
            <Reveal>
              <p className="sec-eyebrow">La différence Finox</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(34px,4vw,54px)] leading-[1.05] mb-14 max-w-[640px]">
                Comment on aborde
                <br />
                <em>{service.name.toLowerCase()}</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-8">
              {service.finoxDifference.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="relative">
                    <div className="font-display text-[58px] text-gold leading-[0.85] mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="w-12 h-px mb-5"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--gold), transparent)",
                      }}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-[22px] font-bold text-cream mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-muted-dark leading-[1.85]">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy-50 grain py-28 max-[980px]:py-16 border-t border-gold/10 relative">
          <div className="container-fx relative">
            <div className="grid grid-cols-[420px_1fr] gap-20 items-start max-[980px]:grid-cols-1 max-[980px]:gap-10">
              <div className="sticky top-32 max-[980px]:static">
                <Reveal>
                  <p className="sec-eyebrow">FAQ</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="section-heading text-[clamp(32px,4vw,48px)] leading-[1.05] mb-7">
                    Les questions
                    <br />
                    qu&apos;on nous pose
                    <br />
                    <em>vraiment</em>
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[14px] text-muted leading-[1.85] mb-7">
                    Si la réponse à ta question n&apos;est pas ici, écris-nous — on te répond personnellement.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <Link href="/contact" className="btn-outline">
                    Poser ma question
                  </Link>
                </Reveal>
              </div>

              <div>
                {service.faq.map((f, i) => (
                  <Reveal key={f.q} delay={i * 0.05}>
                    <details
                      className="group border-b border-gold/10 py-7 first:border-t first:border-t-gold/10"
                      data-hover
                    >
                      <summary className="cursor-pointer list-none flex items-start gap-5">
                        <span className="font-display text-[20px] text-gold/40 leading-none min-w-[36px] mt-1.5 group-hover:text-gold transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-serif text-[18px] font-bold text-cream group-hover:text-gold transition-colors leading-snug">
                          {f.q}
                        </span>
                        <span
                          className="text-gold w-6 h-6 flex items-center justify-center text-2xl leading-none mt-0.5 group-open:rotate-45 transition-transform duration-300"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <div className="pl-[56px] mt-4 max-[600px]:pl-0">
                        <p className="text-[14.5px] text-muted leading-[1.9]">
                          {f.a}
                        </p>
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-100 py-28 max-[980px]:py-16 border-t border-gold/10 relative overflow-hidden text-center">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-cta-pulse pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="container-fx relative">
            <Reveal>
              <p className="sec-eyebrow center mb-5">Prochain pas</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(34px,4.6vw,60px)] mb-5 leading-[1.05]">
                Une vraie conversation,
                <br />
                <em>sans pression</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] text-muted leading-[1.85] max-w-[460px] mx-auto mb-10">
                {service.cta.line}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex gap-4 justify-center flex-wrap items-center">
                <Link href="/contact" className="btn-gold inline-flex items-center gap-2.5">
                  <span>{service.cta.btn}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+14382587666" className="btn-outline">
                  438-258-7666
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 inline-flex flex-col items-center gap-2">
                <p className="text-[10px] tracking-[0.22em] uppercase text-gold/70">Ton interlocuteur</p>
                <p className="font-serif text-[20px] font-bold text-cream">{service.cta.contactName}</p>
                <p className="text-[12px] text-muted italic">{service.cta.contactRole}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-navy py-24 max-[980px]:py-14 border-t border-gold/10">
          <div className="container-fx">
            <div className="flex items-end justify-between mb-10 max-[980px]:flex-col max-[980px]:items-start max-[980px]:gap-4">
              <div>
                <p className="sec-eyebrow">Autres services</p>
                <h2 className="section-heading text-[clamp(28px,3.6vw,42px)] leading-[1.1]">
                  On couvre <em>tout</em> le terrain
                </h2>
              </div>
              <Link
                href="/services"
                className="text-[11px] tracking-[0.18em] uppercase text-cream hover:text-gold border-b border-gold/30 hover:border-gold pb-1 no-underline transition-colors"
              >
                Voir tous les services →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gold/10 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
              {otherServices.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  data-hover
                  className="bg-navy p-7 group transition-all hover:bg-gold/5 no-underline relative overflow-hidden"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-dark))" }}
                    aria-hidden="true"
                  />
                  <span className="font-display text-[18px] text-gold/40 mb-4 block">
                    {s.num}
                  </span>
                  <span className="font-serif text-[16px] font-bold text-cream group-hover:text-gold transition-colors block mb-1.5 leading-snug">
                    {s.name}
                  </span>
                  <span className="text-[12px] text-muted-dark leading-[1.55] block">{s.short}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
