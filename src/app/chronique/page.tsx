import { pageMetadata } from "@/lib/site";
import Chronique from "@/components/sections/Chronique";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'La Chronique',
  description: "On parle vrai, on écrit pareil. Notes courtes sur la finance, l'assurance, et ce que l'industrie ne dit pas.",
  path: '/chronique',
});

export default function ChroniquePage() {
  return (
    <div className="pt-32">
      <Chronique />
      <CTA />
    </div>
  );
}
