"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { CloseIcon, MinimizeIcon } from "@/components/ui/Icon";

// When you have the video, replace `null` below with the public path:
// e.g. "/videos/finox-intro.mp4"
const VIDEO_SRC: string | null = null;
const POSTER_SRC = "/images/logo.png"; // placeholder poster

export default function VideoIntro() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(true);
  const [pipDismissed, setPipDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e) setInView(e.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) setPipDismissed(false);
  }, [inView]);

  const showPip = !inView && !pipDismissed && !shouldReduceMotion && !isMobile && isPlaying;

  const handlePlayClick = () => {
    if (!VIDEO_SRC) return; // placeholder mode — no actual video yet
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      className="bg-navy relative overflow-hidden py-24 max-[980px]:py-16"
      id="video"
      aria-labelledby="video-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,67,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-fx relative">
        <div className="grid grid-cols-2 gap-16 items-end mb-14 max-[980px]:grid-cols-1 max-[980px]:gap-8">
          <div>
            <Reveal>
              <p className="sec-eyebrow">Le mot d&apos;Evan</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="video-heading"
                className="section-heading text-[clamp(34px,4.4vw,56px)] leading-[1.02]"
              >
                Pourquoi
                <br />
                Finox <em>existe</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[15px] text-muted leading-[1.85] max-w-[440px]">
              60 secondes pour comprendre ce qu&apos;on fait différemment — et
              pourquoi nos clients restent.
            </p>
          </Reveal>
        </div>

        {/* Inline video container */}
        <Reveal>
          <div
            ref={wrapperRef}
            className="relative w-full max-w-[1000px] mx-auto aspect-video"
          >
            {/* Placeholder when PiP is active */}
            {showPip && (
              <div
                className="absolute inset-0 border border-gold/15 bg-navy-50 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-[10px] tracking-[0.22em] uppercase text-muted-dark">
                  Vidéo épinglée en bas à droite
                </span>
              </div>
            )}

            <motion.div
              layout
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 180,
                mass: 0.8,
              }}
              className={`overflow-hidden border-2 border-gold/30 bg-navy-100 ${
                showPip
                  ? "fixed bottom-5 right-5 w-[340px] aspect-video z-[700] shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  : "absolute inset-0 shadow-[0_30px_70px_-20px_rgba(212,168,67,0.25),0_20px_50px_rgba(0,0,0,0.45)] hover:shadow-[0_35px_80px_-20px_rgba(212,168,67,0.4),0_20px_50px_rgba(0,0,0,0.55)] hover:border-gold/60 transition-shadow duration-500"
              }`}
              style={{
                borderRadius: showPip ? 4 : 2,
              }}
            >
              {/* The real video element (will load when src is set) */}
              {VIDEO_SRC ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={VIDEO_SRC}
                  poster={POSTER_SRC}
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                /* Placeholder visual while no video file */
                <div
                  className="w-full h-full flex items-center justify-center relative"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,67,0.12) 0%, rgba(8,12,20,1) 75%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>\")",
                    }}
                  />
                  <div className="absolute top-5 left-6 text-[10px] tracking-[0.22em] uppercase text-gold/70" aria-hidden="true">
                    Bientôt
                  </div>
                </div>
              )}

              {/* Play overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    type="button"
                    onClick={handlePlayClick}
                    aria-label={VIDEO_SRC ? "Lire la vidéo" : "Vidéo bientôt disponible"}
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-5 group cursor-pointer bg-navy/30 hover:bg-navy/15 transition-colors"
                  >
                    <span
                      className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center transition-transform group-hover:scale-110 max-[760px]:w-16 max-[760px]:h-16"
                      style={{
                        boxShadow:
                          "0 0 0 0 rgba(212,168,67,0.6), 0 8px 28px rgba(212,168,67,0.45)",
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-full"
                        aria-hidden="true"
                        style={{
                          animation: shouldReduceMotion
                            ? undefined
                            : "playPulse 2.4s ease-out infinite",
                        }}
                      />
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-navy ml-1"
                        aria-hidden="true"
                      >
                        <polygon points="6,4 20,12 6,20" />
                      </svg>
                    </span>
                    <span className="font-serif text-[18px] italic text-cream-dim max-[760px]:text-[14px]">
                      {VIDEO_SRC ? "Regarder l'intro · 60s" : "Vidéo bientôt disponible"}
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* PiP controls */}
              {showPip && (
                <div className="absolute top-2 right-2 flex gap-1.5 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      const v = videoRef.current;
                      if (v) {
                        v.pause();
                        setIsPlaying(false);
                      }
                      setPipDismissed(true);
                    }}
                    aria-label="Fermer la mini vidéo"
                    className="w-7 h-7 rounded-full bg-navy/80 backdrop-blur border border-gold/30 text-cream hover:bg-gold hover:text-navy transition-colors flex items-center justify-center"
                  >
                    <CloseIcon size={14} />
                  </button>
                </div>
              )}

              {showPip && (
                <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-gold bg-navy/80 px-2 py-1 rounded-sm flex items-center gap-1.5">
                    <MinimizeIcon size={10} />
                    Mini
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        @keyframes playPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(212, 168, 67, 0.55);
          }
          70% {
            box-shadow: 0 0 0 22px rgba(212, 168, 67, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(212, 168, 67, 0);
          }
        }
      `}</style>
    </section>
  );
}
