import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10 px-16 py-12 max-[980px]:px-6">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-6 max-[980px]:flex-col max-[980px]:text-center">
        <Image
          src="/images/logo.png"
          alt="Finox"
          width={140}
          height={44}
          className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,168,67,0.15)]"
        />
        <div className="text-[11px] text-muted-dark tracking-[0.08em] leading-relaxed text-center">
          Services Financiers Finox Inc. · Licencié AMF Québec
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
    </footer>
  );
}
