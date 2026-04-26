import { pageMetadata } from "@/lib/site";
import Equipe from "@/components/sections/Equipe";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "L'équipe",
  description: 'Evan, Dany et Étienne — des vraies personnes, pas des titres.',
  path: '/equipe',
});

export default function EquipePage() {
  return (
    <div className="pt-32">
      <Equipe />
      <Testimonials />
      <CTA />
    </div>
  );
}
