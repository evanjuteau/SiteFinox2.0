import { pageMetadata } from "@/lib/site";
import Histoire from "@/components/sections/Histoire";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'Notre histoire',
  description: "D'une conviction à un cabinet — l'histoire de Finox racontée autrement.",
  path: '/histoire',
});

export default function HistoirePage() {
  return (
    <div className="pt-32">
      <Histoire />
      <CTA />
    </div>
  );
}
