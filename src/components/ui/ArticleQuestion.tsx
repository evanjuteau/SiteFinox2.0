"use client";

import Typewriter from "@/components/ui/Typewriter";

/**
 * Final article question block — uses Typewriter for the signature reveal.
 */
export default function ArticleQuestion({ question }: { question: string }) {
  return (
    <div
      className="mt-16 px-9 py-7 border-l-2 border-gold"
      style={{ background: "rgba(212,168,67,0.04)" }}
    >
      <p className="font-serif text-[21px] italic text-cream-dim leading-[1.55]">
        <Typewriter text={question} cps={36} delay={150} />
      </p>
    </div>
  );
}
