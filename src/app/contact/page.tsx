import { pageMetadata } from "@/lib/site";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: 'Nous joindre',
  description: 'Prenons contact. Premier échange confidentiel, sans frais, sans engagement.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-32">
      <CTA />
    </div>
  );
}
