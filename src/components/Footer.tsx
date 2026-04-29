import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/ui/Icon";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/services-financiers-finox/",
    Icon: LinkedInIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580103755968",
    Icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/servicesfinanciersfinox/",
    Icon: InstagramIcon,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/FinanceFinox",
    Icon: XIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ServicesFinancierFinox",
    Icon: YouTubeIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@servicesfinanciersfinox",
    Icon: TikTokIcon,
  },
];

const BOOKING_URL =
  "https://finox-crm.pages.dev/booking.html?a=evan-juteaulapierre";

const GOOGLE_BUSINESS_URL = "https://share.google/D1somtWzTLnfdIZy9";

const navLinks = [
  { href: "/cabinet", label: "Cabinet" },
  { href: "/services", label: "Services" },
  { href: "/reseau", label: "Réseau" },
  { href: "/equipe", label: "Équipe" },
  { href: "/histoire", label: "Histoire" },
  { href: "/chronique", label: "Chronique" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const recentArticles = articles.slice(0, 3);

  return (
    <footer className="bg-navy border-t border-gold/15 px-16 py-20 max-[980px]:px-6 max-[980px]:py-14 relative overflow-hidden">
      <div
        className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none opacity-50"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto relative">
        {/* CTA strip — Booking */}
        <div className="mb-14 pb-14 border-b border-gold/15">
          <div className="grid grid-cols-[1fr_auto] gap-10 items-center max-[860px]:grid-cols-1 max-[860px]:gap-6 max-[860px]:text-center">
            <div>
              <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">
                Prochain pas
              </p>
              <p className="font-serif text-[28px] font-bold text-cream leading-tight max-[860px]:text-[22px]">
                Réserve un appel dans l&apos;agenda d&apos;Evan
              </p>
              <p className="text-[13px] text-muted mt-2 max-w-[480px] max-[860px]:mx-auto">
                Premier échange confidentiel · 30 min · Sans frais, sans engagement
              </p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3"
            >
              <span>Choisir mon créneau</span>
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main grid: 4 columns */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-12 mb-14 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1 max-[1100px]:gap-10">
          {/* Col 1: Brand + tagline + socials */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo.png"
              alt="Finox — Services Financiers"
              width={150}
              height={48}
              className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,168,67,0.18)]"
            />
            <p className="text-[13px] text-muted leading-[1.7] max-w-[280px]">
              Cabinet multiservices indépendant. Plus qu&apos;un cabinet, un
              véritable partenaire.
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center border border-gold/15 text-muted hover:text-navy hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-muted-dark hover:text-gold transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Latest articles */}
          <div>
            <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-5">
              Chronique
            </p>
            <ul className="flex flex-col gap-3.5">
              {recentArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/chronique/${a.slug}`}
                    className="group block no-underline"
                  >
                    <span className="text-[8px] tracking-[0.2em] uppercase text-gold/70 mb-1 block">
                      {a.tag}
                    </span>
                    <span className="text-[12.5px] text-cream-dim group-hover:text-gold transition-colors leading-[1.45] block">
                      {a.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="mt-1">
                <Link
                  href="/chronique"
                  className="text-[10px] tracking-[0.18em] uppercase text-gold border-b border-gold/30 hover:border-gold pb-0.5 inline-block no-underline"
                >
                  Voir tous les articles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact + Hours + Map link */}
          <div>
            <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-5">
              Bureau Mascouche
            </p>
            <address className="not-italic text-[13px] text-muted-dark leading-[1.7]">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors no-underline"
              >
                3235 Av. de la Gare
                <br />
                Mascouche, QC J7K 3C1
                <br />
                <span className="text-[11px] tracking-[0.1em] uppercase text-gold/70 inline-flex items-center gap-1.5 mt-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Voir sur Google Maps
                </span>
              </a>
            </address>

            <div className="mt-5 pt-5 border-t border-gold/10">
              <p className="text-[10px] tracking-[0.18em] uppercase text-muted-dark mb-2">
                Téléphone
              </p>
              <a
                href="tel:+14382587666"
                className="text-[15px] text-cream font-serif font-bold hover:text-gold transition-colors no-underline"
              >
                438-258-7666
              </a>
            </div>

            <div className="mt-5 pt-5 border-t border-gold/10">
              <p className="text-[10px] tracking-[0.18em] uppercase text-muted-dark mb-2">
                Heures d&apos;ouverture
              </p>
              <p className="text-[13px] text-cream-dim leading-[1.6]">
                Tous les jours
                <br />
                <span className="text-gold font-mono">9 h — 20 h</span>
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-gold/10">
              <p className="text-[10px] tracking-[0.18em] uppercase text-muted-dark mb-2">
                Courriel
              </p>
              <a
                href="mailto:service@finox.ca"
                className="text-[13px] text-cream-dim hover:text-gold transition-colors no-underline"
              >
                service@finox.ca
              </a>
            </div>
          </div>
        </div>

        {/* Service zones */}
        <div className="pt-8 mb-8 border-t border-gold/10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-3">
            Zones desservies
          </p>
          <p className="text-[12px] text-muted-dark leading-[1.7]">
            Mascouche · Terrebonne · Repentigny · Lanaudière · Laurentides · Laval · Montréal · Rive-Nord ·{" "}
            <span className="text-cream">Tout le Québec</span> · Nouveau-Brunswick (en cours)
          </p>
        </div>

        {/* Bottom legal bar */}
        <div className="flex items-center justify-between gap-6 pt-8 border-t border-gold/15 max-[760px]:flex-col max-[760px]:text-center">
          <div className="text-[11px] text-muted-dark tracking-[0.06em] leading-relaxed">
            Services Financiers Finox Inc. · Cabinet inscrit à l&apos;AMF Québec
            <br />
            <span className="text-muted-dark/70">
              © {new Date().getFullYear()} Finox — Tous droits réservés
            </span>
          </div>
          <div className="flex gap-5 flex-wrap max-[760px]:justify-center">
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
