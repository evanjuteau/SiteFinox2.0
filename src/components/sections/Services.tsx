import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="bg-navy-50 grain border-t border-gold/10 py-32 max-[980px]:py-20" id="services">
      <div className="container-fx relative">
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
                pour t&apos;accompagner à chaque étape. Clique sur un service pour
                voir comment on l&apos;aborde.
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
              <Reveal key={s.num} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  data-hover
                  className="flex items-center gap-6 py-7 border-b border-gold/5 transition-all duration-300 relative overflow-hidden group hover:pl-5 no-underline"
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span className="font-display text-3xl text-gold/20 leading-none min-w-[44px] group-hover:text-gold/60 transition-colors">
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <div className="font-serif text-[22px] font-bold text-cream group-hover:text-gold transition-colors mb-1">
                      {s.name}
                    </div>
                    <p className="text-[13px] text-muted-dark leading-[1.6] mb-2 max-w-[480px]">
                      {s.short}
                    </p>
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
