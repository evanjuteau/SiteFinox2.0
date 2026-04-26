import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10 px-16 py-14 max-[980px]:px-6 max-[980px]:py-10">
      <div className="max-w-[1180px] mx-auto">
        {/* Top row: logo + tagline + locations */}
        <div className="grid grid-cols-3 gap-12 mb-12 max-[980px]:grid-cols-1 max-[980px]:gap-8 max-[980px]:text-center">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Finox — Services Financiers"
              width={140}
              height={44}
              className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,168,67,0.15)] max-[980px]:mx-auto"
            />
            <p className="text-[12px] text-muted leading-[1.6] max-w-[260px] max-[980px]:mx-auto">
              Cabinet multiservices indépendant. Plus qu&apos;un cabinet, un
              véritable partenaire.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-3">
              Bureau
            </p>
            <p className="text-[12px] text-muted-dark leading-[1.7]">
              3235 Av. de la Gare
              <br />
              Mascouche, QC J7K 3C1
              <br />
              <a
                href="tel:+14382587666"
                className="text-cream hover:text-gold transition-colors"
              >
                438-258-7666
              </a>
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-3">
              On dessert
            </p>
            <p className="text-[12px] text-muted-dark leading-[1.7]">
              Mascouche · Terrebonne · Rive-Nord
              <br />
              Lanaudière · Laurentides · Montréal
              <br />
              <span className="text-cream">Tout le Québec</span> · N.-B. (en cours)
            </p>
          </div>
        </div>

        {/* Bottom row: legal + links */}
        <div className="flex items-center justify-between gap-6 pt-8 border-t border-gold/10 max-[980px]:flex-col max-[980px]:text-center">
          <div className="text-[11px] text-muted-dark tracking-[0.08em] leading-relaxed">
            Services Financiers Finox Inc. · Cabinet inscrit à l&apos;AMF
            Québec
            <br />
            © 2026 Finox — Tous droits réservés
          </div>
          <div className="flex gap-5">
            <Link
              href="/confidentialite"
              className="text-[10px] text-muted-dark no-underline tracking-[0.14em] uppercase hover:text-gold transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/termes"
              className="text-[10px] text-muted-dark no-underline tracking-[0.14em] uppercase hover:text-gold transition-colors"
            >
              Termes
            </Link>
            <a
              href="https://finox.ca"
              className="text-[10px] text-muted-dark no-underline tracking-[0.14em] uppercase hover:text-gold transition-colors"
            >
              finox.ca
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
