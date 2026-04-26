"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const links = [
  { href: "/cabinet", label: "Cabinet" },
  { href: "/services", label: "Services" },
  { href: "/reseau", label: "Réseau" },
  { href: "/equipe", label: "Équipe" },
  { href: "/histoire", label: "Histoire" },
  { href: "/chronique", label: "Chronique" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const overlayMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-[500] px-16 py-5 flex items-center justify-between transition-all duration-500 max-[980px]:px-6 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-xl border-b border-gold/10"
            : ""
        }`}
      >
        <Link href="/" className="flex-shrink-0" aria-label="Finox — accueil">
          <Image
            src="/images/logo.png"
            alt="Finox"
            width={180}
            height={56}
            priority
            className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,168,67,0.2)]"
          />
        </Link>

        <ul className="flex gap-7 list-none max-[980px]:hidden">
          {links.map((l) => {
            const isCurrent = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`text-[11px] font-normal tracking-[0.14em] uppercase no-underline transition-colors relative ${
                    isCurrent ? "text-cream" : "text-muted hover:text-cream"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-px bg-gold transition-all duration-300 ${
                      isCurrent ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="text-[11px] font-medium tracking-[0.16em] uppercase text-navy bg-gold px-7 py-3 transition-all border border-gold hover:bg-transparent hover:text-gold max-[980px]:hidden"
        >
          Nous joindre
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="hidden max-[980px]:flex flex-col gap-1.5 bg-transparent border-none p-1"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block w-6 h-px bg-cream transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-px bg-cream transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-px bg-cream transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            {...overlayMotion}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            id="mobile-navigation"
            className="fixed inset-0 bg-navy/98 backdrop-blur-xl z-[490] flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : i * 0.05 }}
              >
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="text-2xl font-serif text-cream hover:text-gold tracking-wider"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : links.length * 0.05 }}
            >
              <Link href="/contact" className="btn-gold">
                Nous joindre
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
