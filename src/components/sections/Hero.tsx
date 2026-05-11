"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Particles from "@/components/ui/Particles";
import SplitWords from "@/components/ui/SplitWords";
import MagneticCTA from "@/components/ui/MagneticCTA";

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

  // Section-wide fade-out as user scrolls past (more gentle curve)
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  // Main content parallax — fast layer
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  // Horizontal accent lines — medium layer
  const linesY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  // Particles wrapper — slow layer (handled via separate motion.div around <Particles>)
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <motion.section
      ref={ref}
      style={shouldReduceMotion ? undefined : { opacity }}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden text-center"
      id="hero"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={shouldReduceMotion ? undefined : { y: particlesY }}
        aria-hidden="true"
      >
        <Particles />
      </motion.div>

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

      <motion.div
        className="absolute left-0 right-0 h-px z-[1]"
        aria-hidden="true"
        style={{
          top: "28%",
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,67,0.08), rgba(212,168,67,0.15), rgba(212,168,67,0.08), transparent)",
          ...(shouldReduceMotion ? {} : { y: linesY }),
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px z-[1]"
        aria-hidden="true"
        style={{
          top: "72%",
          background:
            "linear-gradient(90deg, transparent, rgba(212,168,67,0.08), rgba(212,168,67,0.15), rgba(212,168,67,0.08), transparent)",
          ...(shouldReduceMotion ? {} : { y: linesY }),
        }}
      />

      <motion.div
        style={shouldReduceMotion ? undefined : { scale: contentScale, y: contentY }}
        className="relative z-[3] flex flex-col items-center px-6"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.3, ease }}
          className="animate-logo-glow"
          style={{ willChange: "transform, opacity, filter" }}
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

        <SplitWords
          as="p"
          text={"Plus qu'un cabinet,\nun véritable partenaire."}
          delay={0.55}
          stagger={0.07}
          duration={0.65}
          preserveLineBreaks
          className="font-serif text-[clamp(26px,3.2vw,44px)] font-normal italic text-cream-dim leading-[1.4] max-w-[520px]"
        />

        <motion.p
          {...appear(0.95, shouldReduceMotion)}
          className="text-sm font-light text-muted leading-relaxed max-w-[420px] mt-4 mb-10"
        >
          Pas de jargon. Pas de bullshit. Une vraie conversation avec
          quelqu&apos;un qui connaît son affaire — et qui est là pour toi à
          chaque étape.
        </motion.p>

        <motion.div
          {...appear(1.1, shouldReduceMotion)}
          className="flex gap-5 justify-center items-center flex-wrap"
        >
          <MagneticCTA
            href="/contact"
            className="btn-gold btn-gold--xl group"
            strength={12}
            radius={110}
          >
            <span>Parle à l&apos;équipe</span>
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
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </MagneticCTA>
          <Link
            href="/services#parcours"
            className="text-[11px] font-light tracking-[0.18em] uppercase text-cream-dim/70 hover:text-gold transition-colors no-underline border-b border-transparent hover:border-gold/40 pb-1"
          >
            Mon parcours de vie
          </Link>
        </motion.div>

        <motion.p
          {...appear(1.2, shouldReduceMotion)}
          className="text-xs text-muted mt-5 max-w-[380px]"
        >
          Pas de centre d&apos;appel. Pas de robot. Tu parles directement à
          nous — du vrai monde qui connaît ton dossier.
        </motion.p>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: shouldReduceMotion ? 0 : 1.3 }}
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
        <motion.div
          className="w-px origin-top"
          style={{
            height: 56,
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          animate={
            shouldReduceMotion
              ? { scaleY: 1 }
              : {
                  scaleY: [0, 1, 1, 0],
                  originY: ["0%", "0%", "100%", "100%"] as unknown as number[],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 2.4,
                  times: [0, 0.45, 0.55, 1],
                  ease: [0.55, 0.085, 0.68, 0.53],
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }
          }
        />
      </motion.div>
    </motion.section>
  );
}
