export default function SectionFallback({ label }: { label: string }) {
  return (
    <section className="bg-navy py-24 border-t border-gold/10" aria-label={label}>
      <div className="container-fx">
        <div className="h-28 animate-pulse rounded-sm border border-gold/10 bg-gold/[0.03]" />
      </div>
    </section>
  );
}
