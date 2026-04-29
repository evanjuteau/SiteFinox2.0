import { pageMetadata } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import VideoIntro from "@/components/sections/VideoIntro";
import About from "@/components/sections/About";
import Parcours from "@/components/sections/Parcours";
import Services from "@/components/sections/Services";
import Reseau from "@/components/sections/Reseau";
import VsBank from "@/components/sections/VsBank";
import Insurers from "@/components/sections/Insurers";
import Histoire from "@/components/sections/Histoire";
import Equipe from "@/components/sections/Equipe";
import Chronique from "@/components/sections/Chronique";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Finox — Services Financiers",
  description:
    "Cabinet multiservices au Québec. Assurance, investissement, planification financière et stratégies corporatives. Pas de jargon. Pas de bullshit.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <VideoIntro />
      <About />
      <Parcours />
      <Services />
      <Reseau />
      <VsBank />
      <Insurers />
      <Histoire />
      <Equipe />
      <Chronique />
      <Testimonials />
      <CTA />
    </>
  );
}
