"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Particles from "@/components/ui/Particles";

const ease = [0.23, 1, 0.32, 1] as const;

function appear(delay: number, shouldReduceMotion: boolean) {
  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.9, delay: shouldReduceMotion ? 0 : delay, ease },
  };
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section
      ref={ref}
      style={shouldReduceMotion ? undefined : { opacity }}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden text-center"
      id="hero"
    >
      <Particles />

      <div
        className="absolute inset-0 z-[1] animate-glow-pulse"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 30%, rgba(212,168,67,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 80%, rgba(212,168,67,0.04) 0%, transparent 60%)
          `,
        }}
      />

      <div
        className="absolute left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          top: "28%",
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,67,0.08), rgba(212,168,67,0.15), rgba(212,168,67,0.08), transparent)",
        }}
      />
      <div
        className="absolute left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          top: "72%",
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,67,0.08), rgba(212,168,67,0.15), rgba(212,168,67,0.08), transparent)",
        }}
      />

      <motion.div
        style={shouldReduceMotion ? undefined : { scale, y }}
        className="relative z-[3] flex flex-col items-center px-6"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease }}
          className="animate-logo-glow"
        >
          <Image
            src="/images/logo.png"
            alt="Finox — Services Financiers"
            width={860}
            height={270}
            priority
            className="w-[min(72vw,860px)] h-auto"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.4, ease }}
          className="w-20 h-px my-7"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }}
        />

        <motion.p
          {...appear(0.5, shouldReduceMotion)}
          className="font-serif text-[clamp(26px,3.2vw,44px)] font-normal italic text-cream-dim leading-[1.4] max-w-[520px]"
        >
          Plus qu&apos;un cabinet,
          <br />
          un véritable partenaire.
        </motion.p>

        <motion.p
          {...appear(0.65, shouldReduceMotion)}
          className="text-sm font-light text-muted leading-relaxed max-w-[420px] mt-4 mb-10"
        >
          Pas de jargon. Pas de bullshit. Une vraie conversation avec
          quelqu&apos;un qui connaît son affaire — et qui est là pour toi à
          chaque étape.
        </motion.p>

        <motion.div
          {...appear(0.8, shouldReduceMotion)}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="/contact" className="btn-gold">
            Prendre rendez-vous
          </Link>
          <Link href="/services#parcours" className="btn-outline">
            Mon parcours de vie →
          </Link>
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: shouldReduceMotion ? 0 : 0.95 }}
          className="text-[11px] tracking-[0.3em] uppercase mt-7"
          style={{ color: "rgba(212,168,67,0.65)" }}
        >
          Cabinet multiservices · Québec · Licencié AMF
        </motion.p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.22em] uppercase text-muted">
          Défiler
        </span>
        <div
          className="w-px h-14 animate-scroll-drop"
          style={{
            background:
              "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
