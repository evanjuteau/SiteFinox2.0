"use client";

import { KeyboardEvent, MouseEvent, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const nodes = [
  { id: "cpa", label: "CPA", name: "Comptables partenaires", cat: "Fiscalité", desc: "Stratégies fiscales intégrées et optimisation corporative.", when: "Incorporation, planification retraite, Holdco", angle: 300 },
  { id: "notaire", label: "⚖️", name: "Notaires & avocats", cat: "Droit", desc: "Conventions, testaments, fiducies, actes hypothécaires.", when: "Achat de maison, succession, convention actionnaires", angle: 240 },
  { id: "gfs", label: "GFS", name: "Groupe Financier Signature", cat: "Immobilier", desc: "Opportunités immobilières résidentielles et commerciales.", when: "Achat de propriété, investissement immobilier", angle: 180 },
  { id: "courtiers", label: "🏦", name: "Courtiers hypothécaires", cat: "Financement", desc: "+50 prêteurs. On trouve le vrai meilleur taux du marché.", when: "Achat maison, refinancement, projet immobilier", angle: 120 },
  { id: "assureurs", label: "🛡️", name: "Assureurs multimarché", cat: "Assurance", desc: "Manulife, iA, CPP, Specialty Life, TuGo et plus encore.", when: "Toutes les situations — on magasine pour toi", angle: 60 },
  { id: "planif", label: "📊", name: "Planificateurs certifiés", cat: "Planification", desc: "Pour les dossiers complexes qui demandent une vision globale.", when: "Retraite, planification successorale complexe", angle: 0 },
];

const cx = 500;
const cy = 260;
const r = 220;

type Node = (typeof nodes)[number];

function nodePos(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function Reseau() {
  const [hover, setHover] = useState<Node | null>(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const placeTooltipFromMouse = (event: MouseEvent<SVGGElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    setTipPos({ x: event.clientX - rect.left + 20, y: event.clientY - rect.top - 20 });
  };

  const handleEnter = (node: Node, event: MouseEvent<SVGGElement>) => {
    setHover(node);
    placeTooltipFromMouse(event);
  };

  const handleFocus = (node: Node) => {
    const point = nodePos(node.angle);
    setHover(node);
    setTipPos({ x: point.x / 1.2, y: Math.max(24, point.y / 1.25) });
  };

  const handleNodeKey = (event: KeyboardEvent<SVGGElement>, node: Node) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFocus(node);
    }
    if (event.key === "Escape") setHover(null);
  };

  return (
    <section
      className="bg-navy border-t border-gold/10 relative overflow-hidden py-32 max-[980px]:py-20"
      id="reseau"
    >
      <div className="container-fx">
        <div className="grid grid-cols-2 gap-20 items-end mb-20 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div>
            <Reveal>
              <p className="sec-eyebrow">04 — Notre réseau</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-[clamp(38px,4.5vw,62px)]">
                Un réseau bâti
                <br />
                avec soin,
                <br />
                <em>pour toi</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[15px] text-muted leading-[1.85]">
              Chaque partenaire de notre réseau a été choisi pour une raison
              précise — pas par défaut. Survole les nœuds pour découvrir leur
              rôle dans ton accompagnement.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            ref={wrapRef}
            className="relative w-full max-w-[900px] mx-auto aspect-[1000/520] max-[980px]:hidden"
            onMouseLeave={() => setHover(null)}
          >
            <svg
              viewBox="0 0 1000 520"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
              role="img"
              aria-labelledby="reseau-title reseau-desc"
            >
              <title id="reseau-title">Constellation du réseau Finox</title>
              <desc id="reseau-desc">
                Six partenaires autour de Finox: CPA, notaires, immobilier,
                courtiers hypothécaires, assureurs et planification avancée.
              </desc>
              <defs>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4A843" stopOpacity=".25" />
                  <stop offset="100%" stopColor="#D4A843" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g opacity={0.35} aria-hidden="true">
                {nodes.map((node, i) => {
                  const point = nodePos(node.angle);
                  const isHover = hover?.id === node.id;
                  return (
                    <line
                      key={node.id}
                      x1={cx}
                      y1={cy}
                      x2={point.x}
                      y2={point.y}
                      stroke="#D4A843"
                      strokeWidth={isHover ? 1.5 : 0.6}
                      strokeDasharray="4 6"
                      opacity={isHover ? 1 : 0.35}
                      style={{ transition: "all 0.3s" }}
                    >
                      {!shouldReduceMotion && (
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="-20"
                          dur={`${1.8 + i * 0.25}s`}
                          repeatCount="indefinite"
                        />
                      )}
                    </line>
                  );
                })}
              </g>

              {nodes.map((node) => {
                const point = nodePos(node.angle);
                const isHover = hover?.id === node.id;
                return (
                  <g
                    key={node.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.name}. ${node.desc} Quand: ${node.when}`}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => handleEnter(node, e)}
                    onMouseMove={placeTooltipFromMouse}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => handleFocus(node)}
                    onBlur={() => setHover(null)}
                    onKeyDown={(e) => handleNodeKey(e, node)}
                  >
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="56"
                      fill={isHover ? "rgba(212,168,67,0.14)" : "#0C1220"}
                      stroke="#D4A843"
                      strokeWidth={isHover ? 2.5 : 1.2}
                      style={{ transition: "all 0.3s" }}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="48"
                      fill="rgba(212,168,67,0.05)"
                      stroke="#D4A843"
                      strokeWidth="0.4"
                    />
                    <text
                      x={point.x}
                      y={point.y + 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#D4A843"
                      fontSize="18"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}

              <circle cx={cx} cy={cy} r="90" fill="url(#centerGrad)" aria-hidden="true" />
              <circle cx={cx} cy={cy} r="70" fill="#0C1220" stroke="#D4A843" strokeWidth="1.8" aria-hidden="true" />
              <circle cx={cx} cy={cy} r="62" fill="#0C1220" stroke="#D4A843" strokeWidth="0.4" opacity="0.5" aria-hidden="true" />
              <image href="/images/logo.png" x="412" y="225" width="176" height="70" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
            </svg>

            {hover && (
              <div
                className="absolute pointer-events-none bg-navy-100 border border-gold/30 px-6 py-5 min-w-[240px] z-10 transition-opacity"
                style={{ left: tipPos.x, top: tipPos.y }}
                role="status"
                aria-live="polite"
              >
                <div className="text-[9px] tracking-[0.2em] uppercase text-gold mb-2">
                  {hover.cat}
                </div>
                <div className="font-serif text-lg font-bold text-cream mb-2">
                  {hover.name}
                </div>
                <div className="text-xs text-muted leading-[1.65]">
                  {hover.desc}
                </div>
                <div className="text-[10px] text-gold-dark mt-2.5 italic">
                  Quand : {hover.when}
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Mobile-only: cards en grille au lieu de la constellation */}
        <div className="hidden max-[980px]:block">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gold/15" />
              <div className="w-16 h-16 rounded-full bg-navy-100 border border-gold/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,168,67,0.2)] shrink-0">
                <span className="font-serif text-[15px] font-bold text-gold tracking-wider">
                  Finox
                </span>
              </div>
              <div className="h-px flex-1 bg-gold/15" />
            </div>
            <p className="text-center text-[10px] tracking-[0.22em] uppercase text-muted-dark mb-7">
              Au cœur d&apos;un réseau de 6 partenaires
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
            {nodes.map((node, i) => (
              <Reveal key={node.id} delay={i * 0.05}>
                <div className="bg-navy-50 border border-gold/15 p-5 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-gold/[0.08] border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="text-[15px] font-semibold text-gold">
                        {node.label}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] tracking-[0.22em] uppercase text-gold mb-0.5">
                        {node.cat}
                      </p>
                      <h3 className="font-serif text-[15px] font-bold text-cream leading-tight">
                        {node.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-muted leading-[1.6] mb-2">
                    {node.desc}
                  </p>
                  <p className="text-[10px] text-gold-dark italic mt-auto pt-2 border-t border-gold/10">
                    Quand : {node.when}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
