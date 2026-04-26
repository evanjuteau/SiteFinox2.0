import { pageMetadata } from "@/lib/site";
import Parcours from "@/components/sections/Parcours";
import Services from "@/components/sections/Services";
import VsBank from "@/components/sections/VsBank";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'Services',
  description: 'Assurance, investissement, planification, hypothèque, stratégies corporatives. On couvre tout le terrain.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <Parcours />
      <Services />
      <VsBank />
      <CTA />
    </div>
  );
}
