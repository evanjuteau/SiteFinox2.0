import { pageMetadata } from "@/lib/site";
import About from "@/components/sections/About";
import Histoire from "@/components/sections/Histoire";
import Equipe from "@/components/sections/Equipe";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'Le Cabinet',
  description: "Découvrez Finox — un cabinet multiservices soudé, ambitieux, humain. L'ambition d'une startup, la rigueur d'un cabinet établi.",
  path: '/cabinet',
});

export default function CabinetPage() {
  return (
    <div className="pt-32">
      <About />
      <Histoire />
      <Equipe />
      <CTA />
    </div>
  );
}
