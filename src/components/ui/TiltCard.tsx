"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on both axes. */
  max?: number;
  /** CSS perspective in pixels (smaller = stronger effect). */
  perspective?: number;
}

/**
 * 3D tilt-on-hover wrapper. Tracks mouse position over the element and
 * applies subtle rotateX/rotateY using Framer Motion springs.
 * Disabled on touch / small screens / reduced-motion.
 */
export default function TiltCard({
  children,
  className,
  max = 8,
  perspective = 1000,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const [enabled, setEnabled] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 980px) and (prefers-reduced-motion: no-preference) and (hover: hover)"
    );
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 22,
    mass: 0.5,
  });
  const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 22,
    mass: 0.5,
  });

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  if (shouldReduceMotion || !enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointer}
        onPointerLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
