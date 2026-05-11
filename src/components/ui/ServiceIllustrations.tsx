"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Editorial SVG illustrations — one per service.
 * navy bg + gold accents (1.5px stroke), geometric, line-art.
 * Each animates on scroll-in: lines trace, shapes scale, dots ripple.
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

const easeOut = [0.23, 1, 0.32, 1] as const;

// --- Animation helpers --------------------------------------------------

/** Common draw-on-scroll wrapper. */
function AnimatedSvg({ children, ariaLabel }: { children: ReactNode; ariaLabel: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion() ?? false;
  return (
    <svg {...SVGProps} ref={ref} role="img" aria-label={ariaLabel}>
      {/* Inject inView + reduced-motion into descendants via context-like prop drilling */}
      <SceneContext.Provider value={{ inView, shouldReduceMotion }}>
        {children}
      </SceneContext.Provider>
    </svg>
  );
}

import { createContext, useContext } from "react";

interface SceneContextValue {
  inView: boolean;
  shouldReduceMotion: boolean;
}
const SceneContext = createContext<SceneContextValue>({
  inView: false,
  shouldReduceMotion: false,
});
function useScene() {
  return useContext(SceneContext);
}

/** Path drawn via stroke-dashoffset animation. */
function DrawPath({
  d,
  delay = 0,
  duration = 1.2,
  ...rest
}: {
  d: string;
  delay?: number;
  duration?: number;
} & React.SVGProps<SVGPathElement>) {
  const { inView, shouldReduceMotion } = useScene();
  if (shouldReduceMotion) {
    return <path d={d} {...rest} />;
  }
  return (
    <motion.path
      d={d}
      {...(rest as Record<string, unknown>)}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{
        pathLength: { delay, duration, ease: easeOut },
        opacity: { delay, duration: 0.3 },
      }}
    />
  );
}

function DrawLine(props: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  duration?: number;
} & React.SVGProps<SVGLineElement>) {
  const { inView, shouldReduceMotion } = useScene();
  const { x1, y1, x2, y2, delay = 0, duration = 0.8, ...rest } = props;
  if (shouldReduceMotion) {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} {...rest} />;
  }
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      {...(rest as Record<string, unknown>)}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{
        pathLength: { delay, duration, ease: easeOut },
        opacity: { delay, duration: 0.3 },
      }}
    />
  );
}

function PopShape({
  children,
  delay = 0,
  origin,
  spring = { stiffness: 220, damping: 16 },
}: {
  children: ReactNode;
  delay?: number;
  origin?: { x: number; y: number };
  spring?: { stiffness: number; damping: number };
}) {
  const { inView, shouldReduceMotion } = useScene();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.g
      style={
        origin
          ? { transformOrigin: `${origin.x}px ${origin.y}px` }
          : undefined
      }
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : undefined}
      transition={{
        type: "spring",
        delay,
        ...spring,
      }}
    >
      {children}
    </motion.g>
  );
}

function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  const { inView, shouldReduceMotion } = useScene();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ delay, duration }}
    >
      {children}
    </motion.g>
  );
}

// --- Frame + stars (shared, animated subtly) -----------------------------

function Stars({ count = 14, seed = 1 }: { count?: number; seed?: number }) {
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
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={rad}
            fill="#D4A843"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: op }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 + (i % 6) * 0.07 }}
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
    <AnimatedSvg ariaLabel="Illustration : assurance vie protégeant une famille">
      <Frame />
      <Stars count={20} seed={2} />
      <g transform="translate(300 220)">
        {/* Shield outlines drawn first */}
        <DrawPath
          d="M0 -150 L100 -110 L100 -10 C100 60 50 110 0 130 C-50 110 -100 60 -100 -10 L-100 -110 Z"
          {...stroke}
          delay={0.2}
          duration={1.4}
        />
        <DrawPath
          d="M0 -130 L80 -98 L80 -8 C80 50 40 92 0 110 C-40 92 -80 50 -80 -8 L-80 -98 Z"
          {...strokeFaint}
          delay={0.5}
          duration={1.2}
        />
        {/* Family silhouettes pop in */}
        <g transform="translate(0 -10)">
          <PopShape delay={1.2} origin={{ x: -32, y: -10 }}>
            <circle cx="-32" cy="-25" r="9" {...stroke} />
            <path d="M-46 5 C-46 -5 -38 -10 -32 -10 C-26 -10 -18 -5 -18 5 L-18 30 L-46 30 Z" {...stroke} />
          </PopShape>
          <PopShape delay={1.35} origin={{ x: 32, y: -10 }}>
            <circle cx="32" cy="-25" r="9" {...stroke} />
            <path d="M18 5 C18 -5 26 -10 32 -10 C38 -10 46 -5 46 5 L46 30 L18 30 Z" {...stroke} />
          </PopShape>
          <PopShape delay={1.5} origin={{ x: 0, y: 0 }}>
            <circle cx="0" cy="-12" r="6" {...stroke} />
            <path d="M-9 12 C-9 5 -4 0 0 0 C4 0 9 5 9 12 L9 30 L-9 30 Z" {...stroke} />
          </PopShape>
        </g>
        {/* Checkmark traced LAST */}
        <DrawPath
          d="M-24 60 L-8 75 L24 40"
          stroke="#D4A843"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.9}
          delay={1.9}
          duration={0.7}
        />
      </g>
      <FadeIn delay={2.4}>
        <line x1="100" y1="220" x2="160" y2="220" {...strokeFaint} />
        <line x1="440" y1="220" x2="500" y2="220" {...strokeFaint} />
        <circle cx="155" cy="220" r="2" fill="#D4A843" opacity="0.6" />
        <circle cx="445" cy="220" r="2" fill="#D4A843" opacity="0.6" />
      </FadeIn>
    </AnimatedSvg>
  );
}

// --- 2. Assurance collective : network of people ------------------------

export function AssuranceCollectiveIllustration() {
  const outerNodes = [
    { x: -130, y: -60 },
    { x: 130, y: -60 },
    { x: -150, y: 40 },
    { x: 150, y: 40 },
    { x: -70, y: 100 },
    { x: 70, y: 100 },
  ];
  return (
    <AnimatedSvg ariaLabel="Illustration : groupe d'employés interconnectés">
      <Frame />
      <Stars count={15} seed={3} />
      <g transform="translate(300 210)">
        {/* Center node pops first */}
        <PopShape delay={0.2} origin={{ x: 0, y: 0 }}>
          <circle cx="0" cy="0" r="32" stroke="#D4A843" strokeWidth="2" fill={fillNavy} />
          <circle cx="0" cy="-10" r="9" {...stroke} />
          <path d="M-15 14 C-15 6 -8 0 0 0 C8 0 15 6 15 14 L15 24 L-15 24 Z" {...stroke} />
        </PopShape>
        {/* Lines trace from center to each outer node */}
        {outerNodes.map((p, i) => (
          <DrawLine
            key={`l-${i}`}
            x1={0}
            y1={0}
            x2={p.x}
            y2={p.y}
            {...strokeFaint}
            delay={0.7 + i * 0.1}
            duration={0.6}
          />
        ))}
        {/* Outer nodes pop after their line arrives */}
        {outerNodes.map((p, i) => (
          <PopShape key={`n-${i}`} delay={1.0 + i * 0.1} origin={p}>
            <g transform={`translate(${p.x} ${p.y})`}>
              <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
              <circle cx="0" cy="-6" r="6" {...stroke} />
              <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
            </g>
          </PopShape>
        ))}
      </g>
    </AnimatedSvg>
  );
}

// --- 3. Planification successorale : family tree ------------------------

export function PlanificationSuccessoraleIllustration() {
  return (
    <AnimatedSvg ariaLabel="Illustration : arbre généalogique de transmission">
      <Frame />
      <Stars count={16} seed={4} />
      <g transform="translate(300 210)">
        {/* Root testament document — appears first at bottom */}
        <PopShape delay={0.2} origin={{ x: 0, y: 110 }}>
          <g transform="translate(0 110)">
            <rect x="-30" y="-22" width="60" height="44" {...stroke} fill={fillNavy} />
            <line x1="-20" y1="-10" x2="20" y2="-10" {...strokeFaint} />
            <line x1="-20" y1="0" x2="20" y2="0" {...strokeFaint} />
            <line x1="-20" y1="10" x2="10" y2="10" {...strokeFaint} />
            <text x="0" y="-30" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">TESTAMENT</text>
          </g>
        </PopShape>
        {/* Trunk line draws upward */}
        <DrawLine x1={0} y1={80} x2={0} y2={40} {...stroke} delay={0.6} duration={0.5} />
        {/* Mid horizontal */}
        <DrawLine x1={-90} y1={40} x2={90} y2={40} {...stroke} delay={0.9} duration={0.6} />
        <DrawLine x1={-90} y1={40} x2={-90} y2={10} {...stroke} delay={1.3} duration={0.4} />
        <DrawLine x1={90} y1={40} x2={90} y2={10} {...stroke} delay={1.3} duration={0.4} />
        {/* Adult nodes */}
        <PopShape delay={1.5} origin={{ x: -90, y: -15 }}>
          <g transform="translate(-90 -15)">
            <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
            <circle cx="0" cy="-6" r="6" {...stroke} />
            <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
          </g>
        </PopShape>
        <PopShape delay={1.5} origin={{ x: 90, y: -15 }}>
          <g transform="translate(90 -15)">
            <circle cx="0" cy="0" r="22" {...stroke} fill={fillNavy} />
            <circle cx="0" cy="-6" r="6" {...stroke} />
            <path d="M-10 10 C-10 4 -5 -1 0 -1 C5 -1 10 4 10 10 L10 16 L-10 16 Z" {...stroke} />
          </g>
        </PopShape>
        {/* Children gen connectors */}
        <DrawLine x1={-90} y1={-37} x2={-90} y2={-70} {...strokeFaint} delay={1.9} duration={0.3} />
        <DrawLine x1={-130} y1={-70} x2={-50} y2={-70} {...strokeFaint} delay={2.0} duration={0.4} />
        <DrawLine x1={-130} y1={-70} x2={-130} y2={-100} {...strokeFaint} delay={2.2} duration={0.3} />
        <DrawLine x1={-50} y1={-70} x2={-50} y2={-100} {...strokeFaint} delay={2.2} duration={0.3} />
        <DrawLine x1={90} y1={-37} x2={90} y2={-70} {...strokeFaint} delay={1.9} duration={0.3} />
        <DrawLine x1={50} y1={-70} x2={130} y2={-70} {...strokeFaint} delay={2.0} duration={0.4} />
        <DrawLine x1={50} y1={-70} x2={50} y2={-100} {...strokeFaint} delay={2.2} duration={0.3} />
        <DrawLine x1={130} y1={-70} x2={130} y2={-100} {...strokeFaint} delay={2.2} duration={0.3} />
        {/* Children nodes */}
        {[-130, -50, 50, 130].map((x, i) => (
          <PopShape key={i} delay={2.4 + i * 0.05} origin={{ x, y: -118 }}>
            <g transform={`translate(${x} -118)`}>
              <circle cx="0" cy="0" r="14" {...strokeFaint} fill={fillNavy} />
              <circle cx="0" cy="-4" r="4" {...strokeFaint} />
              <path d="M-7 8 C-7 4 -3 1 0 1 C3 1 7 4 7 8 L7 12 L-7 12 Z" {...strokeFaint} />
            </g>
          </PopShape>
        ))}
      </g>
    </AnimatedSvg>
  );
}

// --- 4. Investissement : growth chart + seedling ------------------------

export function InvestissementIllustration() {
  const bars = [
    { x: -150, h: 30 },
    { x: -100, h: 50 },
    { x: -50, h: 60 },
    { x: 0, h: 90 },
    { x: 50, h: 110 },
    { x: 100, h: 145 },
    { x: 150, h: 180 },
  ];
  return (
    <AnimatedSvg ariaLabel="Illustration : croissance d'un investissement">
      <Frame />
      <Stars count={12} seed={5} />
      <g transform="translate(300 210)">
        {/* Axes */}
        <DrawLine x1={-180} y1={100} x2={180} y2={100} {...stroke} delay={0.1} duration={0.6} />
        <DrawLine x1={-180} y1={100} x2={-180} y2={-100} {...stroke} delay={0.3} duration={0.6} />
        {/* Grid lines */}
        {[-50, 0, 50].map((y, i) => (
          <DrawLine
            key={y}
            x1={-180}
            y1={y}
            x2={180}
            y2={y}
            {...strokeFaint}
            strokeDasharray="2 4"
            delay={0.7 + i * 0.1}
            duration={0.5}
          />
        ))}
        {/* Bars grow from bottom — scaleY using transformOrigin at the base */}
        {bars.map((b, i) => (
          <BarGrow key={i} {...b} delay={1.0 + i * 0.08} />
        ))}
        {/* Trendline drawn last */}
        <DrawPath
          d="M-150 70 L-100 50 L-50 40 L0 10 L50 -10 L100 -45 L150 -80"
          stroke="#D4A843"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          delay={1.9}
          duration={1.0}
        />
        {/* Endpoint diamond */}
        <PopShape delay={2.7} origin={{ x: 150, y: -80 }}>
          <g transform="translate(150 -80)">
            <circle r="8" fill={fillNavy} stroke="#D4A843" strokeWidth="2" />
            <path d="M-3 0 L0 -3 L3 0 L0 3 Z" fill="#D4A843" />
          </g>
        </PopShape>
        {/* Seedling */}
        <PopShape delay={1.1} origin={{ x: -150, y: 100 }}>
          <g transform="translate(-150 100)">
            <line x1="0" y1="0" x2="0" y2="-15" stroke="#D4A843" strokeWidth="1.2" />
            <path d="M0 -10 C-5 -12 -8 -8 -6 -3 C-2 -5 0 -8 0 -10 Z" fill="rgba(212,168,67,0.4)" />
            <path d="M0 -10 C5 -12 8 -8 6 -3 C2 -5 0 -8 0 -10 Z" fill="rgba(212,168,67,0.4)" />
          </g>
        </PopShape>
      </g>
    </AnimatedSvg>
  );
}

function BarGrow({
  x,
  h,
  delay,
}: {
  x: number;
  h: number;
  delay: number;
}) {
  const { inView, shouldReduceMotion } = useScene();
  if (shouldReduceMotion) {
    return (
      <rect
        x={x - 12}
        y={100 - h}
        width="24"
        height={h}
        fill="rgba(212,168,67,0.12)"
        stroke="#D4A843"
        strokeWidth="1.2"
      />
    );
  }
  return (
    <motion.rect
      x={x - 12}
      y={100 - h}
      width="24"
      height={h}
      fill="rgba(212,168,67,0.12)"
      stroke="#D4A843"
      strokeWidth="1.2"
      style={{ transformOrigin: `${x}px 100px` }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={inView ? { scaleY: 1, opacity: 1 } : undefined}
      transition={{
        delay,
        duration: 0.7,
        ease: easeOut,
        opacity: { duration: 0.2 },
      }}
    />
  );
}

// --- 5. Assurance voyage : globe + plane glide --------------------------

export function AssuranceVoyageIllustration() {
  return (
    <AnimatedSvg ariaLabel="Illustration : globe et trajectoire de voyage">
      <Frame />
      <Stars count={20} seed={6} />
      <g transform="translate(300 210)">
        {/* Globe — pops in */}
        <PopShape delay={0.2} origin={{ x: 0, y: 0 }}>
          <circle cx="0" cy="0" r="120" {...stroke} fill={fillNavy} />
        </PopShape>
        <FadeIn delay={0.7} duration={0.6}>
          <ellipse cx="0" cy="0" rx="120" ry="50" {...strokeFaint} />
          <ellipse cx="0" cy="0" rx="120" ry="100" {...strokeFaint} />
          <line x1="-120" y1="0" x2="120" y2="0" {...strokeFaint} />
          <line x1="0" y1="-120" x2="0" y2="120" {...strokeFaint} />
          <ellipse cx="0" cy="0" rx="80" ry="120" {...strokeFaint} />
        </FadeIn>
        <FadeIn delay={1.1} duration={0.7}>
          <path d="M-50 -40 C-40 -50 -20 -45 -10 -35 C-5 -20 -20 -10 -40 -15 Z" fill="rgba(212,168,67,0.18)" />
          <path d="M20 -10 C40 -15 55 5 50 25 C30 30 15 15 20 -10 Z" fill="rgba(212,168,67,0.18)" />
          <path d="M-30 30 C-20 25 0 30 5 45 C-15 55 -35 50 -30 30 Z" fill="rgba(212,168,67,0.18)" />
        </FadeIn>
        {/* Origin pin */}
        <PopShape delay={1.5} origin={{ x: -150, y: -100 }}>
          <g transform="translate(-150 -100)">
            <circle r="5" fill="#D4A843" />
            <circle r="10" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.5" />
          </g>
        </PopShape>
        {/* Travel path traces */}
        <DrawPath
          d="M-150 -100 Q0 -180 150 -50"
          stroke="#D4A843"
          strokeWidth={1.5}
          fill="none"
          strokeDasharray="4 4"
          delay={1.7}
          duration={1.4}
        />
        {/* Plane appears at end */}
        <PopShape delay={3.0} origin={{ x: 150, y: -50 }}>
          <g transform="translate(150 -50) rotate(45)">
            <path
              d="M-10 0 L8 0 L12 -3 L8 -8 L-8 -8 L-10 -4 Z M-2 -8 L2 -16 L4 -16 L0 -8 Z M-2 0 L2 8 L4 8 L0 0 Z"
              fill="#D4A843"
            />
          </g>
        </PopShape>
      </g>
    </AnimatedSvg>
  );
}

// --- 6. Stratégies corporatives : corporate structure -------------------

export function StrategiesCorporativesIllustration() {
  return (
    <AnimatedSvg ariaLabel="Illustration : structure corporative en blocs">
      <Frame />
      <Stars count={14} seed={7} />
      <g transform="translate(300 210)">
        {/* HoldCo (top) */}
        <PopShape delay={0.2} origin={{ x: 0, y: -120 }}>
          <g transform="translate(0 -120)">
            <rect x="-70" y="-30" width="140" height="60" {...stroke} fill={fillNavy} />
            <line x1="-50" y1="-12" x2="50" y2="-12" {...strokeFaint} />
            <line x1="-50" y1="0" x2="50" y2="0" {...strokeFaint} />
            <text x="0" y="-40" textAnchor="middle" fontSize="10" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">HOLDCO</text>
            <text x="0" y="20" textAnchor="middle" fontSize="9" fill="rgba(212,168,67,0.6)" fontFamily="Inter, sans-serif">Société de portefeuille</text>
          </g>
        </PopShape>
        {/* Connectors trace */}
        <DrawLine x1={-90} y1={-90} x2={-90} y2={-50} {...stroke} delay={0.7} duration={0.4} />
        <DrawLine x1={-90} y1={-50} x2={90} y2={-50} {...stroke} delay={0.95} duration={0.45} />
        <DrawLine x1={0} y1={-90} x2={0} y2={-30} {...stroke} delay={0.85} duration={0.4} />
        <DrawLine x1={90} y1={-90} x2={90} y2={-50} {...stroke} delay={0.7} duration={0.4} />
        {/* Two operating subs */}
        <PopShape delay={1.3} origin={{ x: -130, y: -10 }}>
          <g transform="translate(-130 -10)">
            <rect x="-50" y="-20" width="100" height="40" {...stroke} fill={fillNavy} />
            <text x="0" y="5" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">OPCO 1</text>
          </g>
        </PopShape>
        <PopShape delay={1.3} origin={{ x: 130, y: -10 }}>
          <g transform="translate(130 -10)">
            <rect x="-50" y="-20" width="100" height="40" {...stroke} fill={fillNavy} />
            <text x="0" y="5" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">OPCO 2</text>
          </g>
        </PopShape>
        {/* Trust at bottom */}
        <DrawLine x1={0} y1={20} x2={0} y2={60} {...strokeFaint} strokeDasharray="3 3" delay={1.7} duration={0.5} />
        <PopShape delay={2.0} origin={{ x: 0, y: 100 }}>
          <g transform="translate(0 100)">
            <rect x="-90" y="-25" width="180" height="50" {...strokeFaint} fill="rgba(212,168,67,0.04)" />
            <text x="0" y="5" textAnchor="middle" fontSize="9" fill="rgba(212,168,67,0.7)" fontFamily="Inter, sans-serif" letterSpacing="1.5">FIDUCIE FAMILIALE</text>
          </g>
        </PopShape>
        {/* Decorative coins */}
        {[-220, 220].map((x, i) => (
          <PopShape key={i} delay={2.4 + i * 0.1} origin={{ x, y: 0 }}>
            <g transform={`translate(${x} 0)`}>
              <circle r="14" {...strokeFaint} />
              <text x="0" y="4" textAnchor="middle" fontSize="13" fill="rgba(212,168,67,0.5)" fontFamily="serif" fontWeight="bold">$</text>
            </g>
          </PopShape>
        ))}
      </g>
    </AnimatedSvg>
  );
}

// --- 7. Hypothèque : house + rate table ---------------------------------

export function HypothequeIllustration() {
  const rows = [
    { y: -28, name: "Banque A", rate: "5,89 %", w: 110 },
    { y: -8, name: "Banque B", rate: "5,79 %", w: 100 },
    { y: 12, name: "Prêteur C", rate: "5,49 %", w: 75 },
    { y: 32, name: "Prêteur D", rate: "5,24 %", w: 50, hi: true },
  ];
  return (
    <AnimatedSvg ariaLabel="Illustration : maison et comparaison de taux">
      <Frame />
      <Stars count={14} seed={8} />
      <g transform="translate(300 210)">
        {/* House — pops first */}
        <PopShape delay={0.2} origin={{ x: -120, y: 0 }}>
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
            <rect x="40" y="-50" width="14" height="22" {...stroke} fill={fillNavy} />
          </g>
        </PopShape>
        {/* Comparison panel frame */}
        <PopShape delay={0.7} origin={{ x: 110, y: 0 }}>
          <g transform="translate(110 0)">
            <rect x="-100" y="-90" width="200" height="180" {...stroke} fill={fillNavy} />
            <text x="0" y="-65" textAnchor="middle" fontSize="9" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="2">TAUX COMPARÉS</text>
            <line x1="-80" y1="-50" x2="80" y2="-50" {...strokeFaint} />
          </g>
        </PopShape>
        {/* Rows fill row by row */}
        <RateRows rows={rows} startDelay={1.2} />
        <FadeIn delay={2.6} duration={0.5}>
          <text x="110" y="60" textAnchor="middle" fontSize="8" fill="#D4A843" fontFamily="Inter, sans-serif" letterSpacing="1.5">★ MEILLEUR TAUX</text>
        </FadeIn>
        {/* Key floating */}
        <PopShape delay={0.5} origin={{ x: 0, y: -10 }}>
          <g transform="translate(0 -10) rotate(-25)">
            <circle cx="-10" cy="0" r="8" {...stroke} />
            <line x1="-2" y1="0" x2="22" y2="0" stroke="#D4A843" strokeWidth="2" />
            <line x1="14" y1="0" x2="14" y2="6" stroke="#D4A843" strokeWidth="2" />
            <line x1="22" y1="0" x2="22" y2="6" stroke="#D4A843" strokeWidth="2" />
          </g>
        </PopShape>
      </g>
    </AnimatedSvg>
  );
}

function RateRows({
  rows,
  startDelay,
}: {
  rows: { y: number; name: string; rate: string; w: number; hi?: boolean }[];
  startDelay: number;
}) {
  const { inView, shouldReduceMotion } = useScene();
  return (
    <g transform="translate(110 0)">
      {rows.map((r, i) => {
        const delay = startDelay + i * 0.18;
        if (shouldReduceMotion) {
          return (
            <g key={i}>
              <rect x={-80} y={r.y - 7} width={r.w} height="10" fill={r.hi ? "#D4A843" : "rgba(212,168,67,0.2)"} />
              <text x={-75} y={r.y + 1} fontSize="8" fill={r.hi ? fillNavy : "rgba(212,168,67,0.7)"} fontFamily="Inter, sans-serif" fontWeight={r.hi ? "600" : "400"}>{r.name}</text>
              <text x={75} y={r.y + 1} textAnchor="end" fontSize="9" fill={r.hi ? fillNavy : "#D4A843"} fontFamily="Inter, sans-serif" fontWeight={r.hi ? "700" : "500"}>{r.rate}</text>
            </g>
          );
        }
        return (
          <g key={i}>
            <motion.rect
              x={-80}
              y={r.y - 7}
              width={r.w}
              height="10"
              fill={r.hi ? "#D4A843" : "rgba(212,168,67,0.2)"}
              style={{ transformOrigin: `-80px ${r.y}px` }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : undefined}
              transition={{ delay, duration: 0.6, ease: easeOut }}
            />
            <motion.text
              x={-75}
              y={r.y + 1}
              fontSize="8"
              fill={r.hi ? fillNavy : "rgba(212,168,67,0.7)"}
              fontFamily="Inter, sans-serif"
              fontWeight={r.hi ? "600" : "400"}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={{ delay: delay + 0.2, duration: 0.3 }}
            >
              {r.name}
            </motion.text>
            <motion.text
              x={75}
              y={r.y + 1}
              textAnchor="end"
              fontSize="9"
              fill={r.hi ? fillNavy : "#D4A843"}
              fontFamily="Inter, sans-serif"
              fontWeight={r.hi ? "700" : "500"}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={{ delay: delay + 0.3, duration: 0.3 }}
            >
              {r.rate}
            </motion.text>
          </g>
        );
      })}
    </g>
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
