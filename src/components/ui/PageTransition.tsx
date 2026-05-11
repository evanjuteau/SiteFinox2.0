"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Soft fade between Next.js routes.
 * - 0.3s fade-out, 0.5s fade-in
 * - During the transition a tiny gold "F" pulses at viewport center
 * - Fully bypassed when prefers-reduced-motion is set
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
