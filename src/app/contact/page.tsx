import { pageMetadata } from "@/lib/site";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";

export const metadata = pageMetadata({
  title: "Parle à l'équipe",
  description:
    "Premier échange confidentiel, sans frais, sans engagement. Cabinet inscrit AMF Québec à Mascouche, dessert Rive-Nord, Lanaudière, Laurentides et tout le Québec.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="py-12 max-[980px]:py-8">
        <div className="container-fx text-center">
          <Reveal>
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-cream mb-4">
              On parle <em className="text-gold">quand?</em>
            </h1>
            <p className="text-base text-muted leading-[1.7] max-w-[620px] mx-auto">
              Cabinet de services financiers à <strong className="text-cream font-medium">Mascouche</strong>,
              au cœur de la Rive-Nord. On dessert Lanaudière, les Laurentides,
              Montréal et tout le Québec — en personne ou virtuellement.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </div>
  );
}
