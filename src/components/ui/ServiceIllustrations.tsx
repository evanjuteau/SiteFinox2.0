"use client";

/**
 * Custom-built editorial SVG illustrations — one per service.
 * All in the Finox visual language: navy bg + gold accents (1.5px stroke),
 * geometric, line-art, with subtle decorative dots/lines.
 *
 * Each illustration is 600x420 viewBox, scales fluidly.
 */

const SVGProps = {
  viewBox: "0 0 600 420",
  fill: "none",
  width: "100%",
  height: "100%",
  preserveAspectRatio: "xMidYMid meet" as const,
};

const stroke = {
  stroke: "#D4A843",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const strokeFaint = {
  stroke: "rgba(212,168,67,0.35)",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const fillNavy = "#0C1220";

// --- Decorative shared elements -------------------------------------------

function Stars({ count = 14, seed = 1 }: { count?: number; seed?: number }) {
  // deterministic pseudo-random (no hydration mismatch)
  const r = (i: number) => {
    const x = Math.sin(i * 9.31 + seed) * 10000;
    return x - Math.floor(x);
  };
  return (
    <g aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const cx = 30 + r(i * 2) * 540;
        const cy = 30 + r(i * 3 + 1) * 360;
        const rad = 0.8 + r(i * 5 + 2) * 1.4;
        const op = 0.15 + r(i * 7 + 3) * 0.45;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={rad}
            fill="#D4A843"
            opacity={op}
          />
        );
      })}
    </g>
  );
}

function Frame() {
  return (
    <g aria-hidden>
      <rect x="0.5" y="0.5" width="599" height="419" stroke="rgba(212,168,67,0.12)" fill={fillNavy} />
      <line x1="40" y1="40" x2="60" y2="40" {...strokeFaint} />
      <line x1="40" y1="40" x2="40" y2="60" {...strokeFaint} />
      <line x1="540" y1="40" x2="560" y2="40" {...strokeFaint} />
      <line x1="560" y1="40" x2="560" y2="60" {...strokeFaint} />
      <line x1="40" y1="380" x2="40" y2="360" {...strokeFaint} />
      <line x1="40" y1="380" x2="60" y2="380" {...strokeFaint} />
      <line x1="540" y1="380" x2="560" y2="380" {...strokeFaint} />
      <line x1="560" y1="380" x2="560" y2="360" {...strokeFaint} />
    </g>
  );
}

// --- 1. Assurance vie : Shield + family silhouettes -----------------------

export function AssuranceVieIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : assurance vie protégeant une famille">
      <Frame />
      <Stars count={20} seed={2} />
      {/* Shield outline */}
      <g transform="translate(300 220)">
        <path
          d="M0 -150 L100 -110 L100 -10 C100 60 50 110 0 130 C-50 110 -100 60 -100 -10 L-100 -110 Z"
          {...stroke}
        />
        <path
          d="M0 -130 L80 -98 L80 -8 C80 50 40 92 0 110 C-40 92 -80 50 -80 -8 L-80 -98 Z"
          {...strokeFaint}
        />
        {/* Family silhouettes inside */}
        <g transform="translate(0 -10)">
          {/* Adult left */}
          <circle cx="-32" cy="-25" r="9" {...stroke} />
          <path d="M-46 5 C-46 -5 -38 -10 -32 -10 C-26 -10 -18 -5 -18 5 L-18 30 L-46 30 Z" {...stroke} />
          {/* Adult right */}
          <circle cx="32" cy="-25" r="9" {...stroke} />
          <path d="M18 5 C18 -5 26 -10 32 -10 C38 -10 46 -5 46 5 L46 30 L18 30 Z" {...stroke} />
          {/* Child */}
          <circle cx="0" cy="-12" r="6" {...stroke} />
          <path d="M-9 12 C-9 5 -4 0 0 0 C4 0 9 5 9 12 L9 30 L-9 30 Z" {...stroke} />
        </g>
        {/* Checkmark on shield */}
        <path d="M-24 60 L-8 75 L24 40" stroke="#D4A843" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </g>
      {/* Side ornaments */}
      <line x1="100" y1="220" x2="160" y2="220" {...strokeFaint} />
      <line x1="440" y1="220" x2="500" y2="220" {...strokeFaint} />
      <circle cx="155" cy="220" r="2" fill="#D4A843" opacity="0.6" />
      <circle cx="445" cy="220" r="2" fill="#D4A843" opacity="0.6" />
    </svg>
  );
}

// --- 2. Assurance collective : grid of people connected -------------------

export function AssuranceCollectiveIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : groupe d'employés interconnectés">
      <Frame />
      <Stars count={15} seed={3} />
      {/* Network of 7 people */}
      <g transform="translate(300 210)">
        {/* Connections first (under) */}
        <g {...strokeFaint}>
          <line x1="0" y1="0" x2="-130" y2="-60" />
          <line x1="0" y1="0" x2="130" y2="-60" />
          <line x1="0" y1="0" x2="-150" y2="40" />
          <line x1="0" y1="0" x2="150" y2="40" />
          <line x1="0" y1="0" x2="-70" y2="100" />
          <line x1="0" y1="0" x2="70" y2="100" />
        </g>
        {/* Center node — bigger */}
        <circle cx="0" cy="0" r="32" stroke="#D4A843" strokeWidth="2" fill={fillNavy} />
        <circle cx="0" cy="-10" r="9" {...stroke} />
        <path d="M-15 14 C-15 6 -8 0 0 0 C8 0 15 6 15 14 L15 24 L-15 24 Z" {...stroke} />
        {/* 6 outer nodes */}
        {[
          { x: -130, y: -60 },
          { x: 130, y: -60 },
          { x: -150, y: 40 },
          { x: 150, y: 40 },
          { x: -70, y: 100 },
          { x: 70, y: 100 },
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y})`}>
            <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
            <circle cx="0" cy="-6" r="6" {...stroke} />
            <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
          </g>
        ))}
      </g>
    </svg>
  );
}

// --- 3. Planification successorale : tree branching ----------------------

export function PlanificationSuccessoraleIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : arbre généalogique de transmission">
      <Frame />
      <Stars count={16} seed={4} />
      {/* Family tree */}
      <g transform="translate(300 210)">
        {/* Root document */}
        <g transform="translate(0 110)">
          <rect x="-30" y="-22" width="60" height="44" {...stroke} fill={fillNavy} />
          <line x1="-20" y1="-10" x2="20" y2="-10" {...strokeFaint} />
          <line x1="-20" y1="0" x2="20" y2="0" {...strokeFaint} />
          <line x1="-20" y1="10" x2="10" y2="10" {...strokeFaint} />
          <text x="0" y="-30" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">TESTAMENT</text>
        </g>
        {/* Trunk */}
        <line x1="0" y1="80" x2="0" y2="40" {...stroke} />
        {/* Mid generation */}
        <line x1="-90" y1="40" x2="90" y2="40" {...stroke} />
        <line x1="-90" y1="40" x2="-90" y2="10" {...stroke} />
        <line x1="90" y1="40" x2="90" y2="10" {...stroke} />
        {/* Adult nodes */}
        <g transform="translate(-90 -15)">
          <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
          <circle cx="0" cy="-6" r="6" {...stroke} />
          <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
        </g>
        <g transform="translate(90 -15)">
          <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
          <circle cx="0" cy="-6" r="6" {...stroke} />
          <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
        </g>
        {/* Children gen lines */}
        <line x1="-90" y1="-37" x2="-90" y2="-70" {...strokeFaint} />
        <line x1="-130" y1="-70" x2="-50" y2="-70" {...strokeFaint} />
        <line x1="-130" y1="-70" x2="-130" y2="-100" {...strokeFaint} />
        <line x1="-50" y1="-70" x2="-50" y2="-100" {...strokeFaint} />
        <line x1="90" y1="-37" x2="90" y2="-70" {...strokeFaint} />
        <line x1="50" y1="-70" x2="130" y2="-70" {...strokeFaint} />
        <line x1="50" y1="-70" x2="50" y2="-100" {...strokeFaint} />
        <line x1="130" y1="-70" x2="130" y2="-100" {...strokeFaint} />
        {/* Children nodes (smaller) */}
        {[-130, -50, 50, 130].map((x, i) => (
          <g key={i} transform={`translate(${x} -118)`}>
            <circle cx="0" cy="0" r="14" {...strokeFaint} fill={fillNavy} />
            <circle cx="0" cy="-4" r="4" {...strokeFaint} />
            <path d="M-7 8 C-7 4 -3 1 0 1 C3 1 7 4 7 8 L7 12 L-7 12 Z" {...strokeFaint} />
          </g>
        ))}
      </g>
    </svg>
  );
}

// --- 4. Investissement : growing chart with seedling ----------------------

export function InvestissementIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : croissance d'un investissement">
      <Frame />
      <Stars count={12} seed={5} />
      {/* Growth chart */}
      <g transform="translate(300 210)">
        {/* Axis */}
        <line x1="-180" y1="100" x2="180" y2="100" {...stroke} />
        <line x1="-180" y1="100" x2="-180" y2="-100" {...stroke} />
        {/* Grid lines */}
        {[-50, 0, 50].map((y) => (
          <line key={y} x1="-180" y1={y} x2="180" y2={y} {...strokeFaint} strokeDasharray="2 4" />
        ))}
        {/* Bars */}
        {[
          { x: -150, h: 30 },
          { x: -100, h: 50 },
          { x: -50, h: 60 },
          { x: 0, h: 90 },
          { x: 50, h: 110 },
          { x: 100, h: 145 },
          { x: 150, h: 180 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x - 12}
            y={100 - b.h}
            width="24"
            height={b.h}
            fill="rgba(212,168,67,0.12)"
            stroke="#D4A843"
            strokeWidth="1.2"
          />
        ))}
        {/* Trendline overlay */}
        <path
          d="M-150 70 L-100 50 L-50 40 L0 10 L50 -10 L100 -45 L150 -80"
          stroke="#D4A843"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Endpoint diamond */}
        <g transform="translate(150 -80)">
          <circle r="8" fill={fillNavy} stroke="#D4A843" strokeWidth="2" />
          <path d="M-3 0 L0 -3 L3 0 L0 3 Z" fill="#D4A843" />
        </g>
        {/* Seedling at base */}
        <g transform="translate(-150 100)">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#D4A843" strokeWidth="1.2" />
          <path d="M0 -10 C-5 -12 -8 -8 -6 -3 C-2 -5 0 -8 0 -10 Z" fill="rgba(212,168,67,0.4)" />
          <path d="M0 -10 C5 -12 8 -8 6 -3 C2 -5 0 -8 0 -10 Z" fill="rgba(212,168,67,0.4)" />
        </g>
      </g>
    </svg>
  );
}

// --- 5. Assurance voyage : globe + plane path ----------------------------

export function AssuranceVoyageIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : globe et trajectoire de voyage">
      <Frame />
      <Stars count={20} seed={6} />
      <g transform="translate(300 210)">
        {/* Globe */}
        <circle cx="0" cy="0" r="120" {...stroke} fill={fillNavy} />
        <ellipse cx="0" cy="0" rx="120" ry="50" {...strokeFaint} />
        <ellipse cx="0" cy="0" rx="120" ry="100" {...strokeFaint} />
        <line x1="-120" y1="0" x2="120" y2="0" {...strokeFaint} />
        <line x1="0" y1="-120" x2="0" y2="120" {...strokeFaint} />
        <ellipse cx="0" cy="0" rx="80" ry="120" {...strokeFaint} />
        {/* Continents abstract */}
        <path d="M-50 -40 C-40 -50 -20 -45 -10 -35 C-5 -20 -20 -10 -40 -15 Z" fill="rgba(212,168,67,0.18)" />
        <path d="M20 -10 C40 -15 55 5 50 25 C30 30 15 15 20 -10 Z" fill="rgba(212,168,67,0.18)" />
        <path d="M-30 30 C-20 25 0 30 5 45 C-15 55 -35 50 -30 30 Z" fill="rgba(212,168,67,0.18)" />
        {/* Travel path (dashed arc) */}
        <path
          d="M-150 -100 Q0 -180 150 -50"
          stroke="#D4A843"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Origin pin */}
        <g transform="translate(-150 -100)">
          <circle r="5" fill="#D4A843" />
          <circle r="10" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.5" />
        </g>
        {/* Plane */}
        <g transform="translate(150 -50) rotate(45)">
          <path
            d="M-10 0 L8 0 L12 -3 L8 -8 L-8 -8 L-10 -4 Z M-2 -8 L2 -16 L4 -16 L0 -8 Z M-2 0 L2 8 L4 8 L0 0 Z"
            fill="#D4A843"
          />
        </g>
      </g>
    </svg>
  );
}

// --- 6. Stratégies corporatives : layered building blocks ----------------

export function StrategiesCorporativesIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : structure corporative en blocs">
      <Frame />
      <Stars count={14} seed={7} />
      <g transform="translate(300 210)">
        {/* HoldCo at top */}
        <g transform="translate(0 -120)">
          <rect x="-70" y="-30" width="140" height="60" {...stroke} fill={fillNavy} />
          <line x1="-50" y1="-12" x2="50" y2="-12" {...strokeFaint} />
          <line x1="-50" y1="0" x2="50" y2="0" {...strokeFaint} />
          <text x="0" y="-40" textAnchor="middle" fontSize="10" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">HOLDCO</text>
          <text x="0" y="20" textAnchor="middle" fontSize="9" fill="rgba(212,168,67,0.6)" fontFamily="Inter, sans-serif">Société de portefeuille</text>
        </g>
        {/* Connectors */}
        <line x1="-90" y1="-90" x2="-90" y2="-50" {...stroke} />
        <line x1="-90" y1="-50" x2="90" y2="-50" {...stroke} />
        <line x1="0" y1="-90" x2="0" y2="-30" {...stroke} />
        <line x1="90" y1="-90" x2="90" y2="-50" {...stroke} />
        {/* Two operating subs */}
        <g transform="translate(-130 -10)">
          <rect x="-50" y="-20" width="100" height="40" {...stroke} fill={fillNavy} />
          <text x="0" y="5" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">OPCO 1</text>
        </g>
        <g transform="translate(130 -10)">
          <rect x="-50" y="-20" width="100" height="40" {...stroke} fill={fillNavy} />
          <text x="0" y="5" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">OPCO 2</text>
        </g>
        {/* Trust at bottom */}
        <line x1="0" y1="20" x2="0" y2="60" {...strokeFaint} strokeDasharray="3 3" />
        <g transform="translate(0 100)">
          <rect x="-90" y="-25" width="180" height="50" {...strokeFaint} fill="rgba(212,168,67,0.04)" />
          <text x="0" y="5" textAnchor="middle" fontSize="9" fill="rgba(212,168,67,0.7)" fontFamily="Inter, sans-serif" letterSpacing="1.5">FIDUCIE FAMILIALE</text>
        </g>
        {/* Decorative coins on left/right */}
        {[-220, 220].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <circle r="14" {...strokeFaint} />
            <text x="0" y="4" textAnchor="middle" fontSize="13" fill="rgba(212,168,67,0.5)" fontFamily="serif" fontWeight="bold">$</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// --- 7. Hypothèque : house with key + comparing rates --------------------

export function HypothequeIllustration() {
  return (
    <svg {...SVGProps} role="img" aria-label="Illustration : maison et comparaison de taux">
      <Frame />
      <Stars count={14} seed={8} />
      <g transform="translate(300 210)">
        {/* House */}
        <g transform="translate(-120 0)">
          <path d="M-90 0 L0 -80 L90 0 L70 0 L70 80 L-70 80 L-70 0 Z" {...stroke} fill={fillNavy} />
          <rect x="-15" y="20" width="30" height="60" {...stroke} />
          <line x1="0" y1="20" x2="0" y2="80" {...strokeFaint} />
          <rect x="-55" y="15" width="22" height="22" {...stroke} />
          <line x1="-55" y1="26" x2="-33" y2="26" {...strokeFaint} />
          <line x1="-44" y1="15" x2="-44" y2="37" {...strokeFaint} />
          <rect x="33" y="15" width="22" height="22" {...stroke} />
          <line x1="33" y1="26" x2="55" y2="26" {...strokeFaint} />
          <line x1="44" y1="15" x2="44" y2="37" {...strokeFaint} />
          {/* Smoke from chimney */}
          <rect x="40" y="-50" width="14" height="22" {...stroke} fill={fillNavy} />
        </g>
        {/* Comparison panel */}
        <g transform="translate(110 0)">
          <rect x="-100" y="-90" width="200" height="180" {...stroke} fill={fillNavy} />
          <text x="0" y="-65" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">TAUX COMPARÉS</text>
          <line x1="-80" y1="-50" x2="80" y2="-50" {...strokeFaint} />
          {/* Banks rows */}
          {[
            { y: -28, name: "Banque A", rate: "5,89 %", w: 110 },
            { y: -8, name: "Banque B", rate: "5,79 %", w: 100 },
            { y: 12, name: "Prêteur C", rate: "5,49 %", w: 75 },
            { y: 32, name: "Prêteur D", rate: "5,24 %", w: 50, hi: true },
          ].map((r, i) => (
            <g key={i}>
              <rect x="-80" y={r.y - 7} width={r.w} height="10" fill={r.hi ? "#D4A843" : "rgba(212,168,67,0.2)"} />
              <text x={-75} y={r.y + 1} fontSize="8" fill={r.hi ? fillNavy : "rgba(212,168,67,0.7)"} fontFamily="Inter, sans-serif" fontWeight={r.hi ? "600" : "400"}>{r.name}</text>
              <text x={75} y={r.y + 1} textAnchor="end" fontSize="9" fill={r.hi ? fillNavy : "#D4A843"} fontFamily="Inter, sans-serif" fontWeight={r.hi ? "700" : "500"}>{r.rate}</text>
            </g>
          ))}
          {/* Best label */}
          <text x="0" y="60" textAnchor="middle" fontSize="8" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">★ MEILLEUR TAUX</text>
        </g>
        {/* Key floating between */}
        <g transform="translate(0 -10) rotate(-25)">
          <circle cx="-10" cy="0" r="8" {...stroke} />
          <line x1="-2" y1="0" x2="22" y2="0" stroke="#D4A843" strokeWidth="2" />
          <line x1="14" y1="0" x2="14" y2="6" stroke="#D4A843" strokeWidth="2" />
          <line x1="22" y1="0" x2="22" y2="6" stroke="#D4A843" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}

export type IllustrationKey =
  | "assurance-vie"
  | "assurance-collective"
  | "planification-successorale"
  | "investissement"
  | "assurance-voyage"
  | "strategies-corporatives"
  | "hypotheque";

export function ServiceIllustration({ name }: { name: IllustrationKey }) {
  switch (name) {
    case "assurance-vie":
      return <AssuranceVieIllustration />;
    case "assurance-collective":
      return <AssuranceCollectiveIllustration />;
    case "planification-successorale":
      return <PlanificationSuccessoraleIllustration />;
    case "investissement":
      return <InvestissementIllustration />;
    case "assurance-voyage":
      return <AssuranceVoyageIllustration />;
    case "strategies-corporatives":
      return <StrategiesCorporativesIllustration />;
    case "hypotheque":
      return <HypothequeIllustration />;
    default:
      return null;
  }
}
