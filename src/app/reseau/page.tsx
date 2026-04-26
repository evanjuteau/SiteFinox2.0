import { pageMetadata } from "@/lib/site";
import Reseau from "@/components/sections/Reseau";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'Notre Réseau',
  description: 'CPA, notaires, courtiers, assureurs — un réseau bâti avec soin pour un accompagnement 360°.',
  path: '/reseau',
});

export default function ReseauPage() {
  return (
    <div className="pt-32">
      <Reseau />
      <CTA />
    </div>
  );
}
