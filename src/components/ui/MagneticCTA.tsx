"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";

interface MagneticCTAProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Maximum displacement in pixels when the cursor is near the button. */
  strength?: number;
  /** Radius (px) within which the magnetic effect engages. */
  radius?: number;
  external?: boolean;
}

/**
 * Anchor with magnetic mouse follow + a soft gold trail that tracks the
 * cursor inside the button. Trail is an absolute radial gradient that softly
 * follows the local mouse position via Framer Motion's useMotionTemplate.
 *
 * Active only on ≥980px with prefers-reduced-motion: no-preference.
 */
export default function MagneticCTA({
  href,
  children,
  className,
  strength = 14,
  radius = 90,
  external = false,
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const trailX = useMotionValue(50);
  const trailY = useMotionValue(50);
  const [enabled, setEnabled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const xSpring = useSpring(x, { stiffness: 160, damping: 18, mass: 0.6 });
  const ySpring = useSpring(y, { stiffness: 160, damping: 18, mass: 0.6 });
  const trailXSpring = useSpring(trailX, { stiffness: 120, damping: 22, mass: 0.4 });
  const trailYSpring = useSpring(trailY, { stiffness: 120, damping: 22, mass: 0.4 });

  const trailBg = useMotionTemplate`radial-gradient(circle 80px at ${trailXSpring}% ${trailYSpring}%, rgba(255, 230, 160, 0.5), transparent 70%)`;

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 980px) and (prefers-reduced-motion: no-preference)"
    );
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        const f = (radius - dist) / radius;
        x.set((dx / radius) * strength * f);
        y.set((dy / radius) * strength * f);
      } else {
        x.set(0);
        y.set(0);
      }

      const localX = ((e.clientX - rect.left) / rect.width) * 100;
      const localY = ((e.clientY - rect.top) / rect.height) * 100;
      trailX.set(Math.max(0, Math.min(100, localX)));
      trailY.set(Math.max(0, Math.min(100, localY)));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, radius, strength, x, y, trailX, trailY]);

  const sharedAttrs = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  if (shouldReduceMotion || !enabled) {
    return (
      <Link href={href} className={className} {...sharedAttrs}>
        {children}
      </Link>
    );
  }

  return (
    <motion.div style={{ x: xSpring, y: ySpring, display: "inline-block" }}>
      <Link
        href={href}
        ref={ref}
        className={`${className ?? ""} relative overflow-hidden`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          x.set(0);
          y.set(0);
        }}
        {...sharedAttrs}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: trailBg,
            opacity: isHover ? 0.6 : 0,
            transition: "opacity 0.3s ease",
            mixBlendMode: "screen",
          }}
        />
        <span className="relative inline-flex items-center gap-3">{children}</span>
      </Link>
    </motion.div>
  );
}
