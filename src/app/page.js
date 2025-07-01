import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import InspirationFeed from "@/components/InspirationFeed";
import LogoQR from "@/components/LogoQR";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <InspirationFeed />
      <LogoQR />
      <FAQ />
      <Pricing />
    </main>
  );
}