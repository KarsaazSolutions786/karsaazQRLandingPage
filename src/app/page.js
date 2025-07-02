"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import InspirationFeed from "@/components/InspirationFeed";
import LogoQR from "@/components/LogoQR";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";

export default function Home() {
  const [activeType, setActiveType] = useState("PDF");

  return (
    <main>
      <Hero activeType={activeType} setActiveType={setActiveType} />
      <Features activeType={activeType} />
      <HowItWorks />
      <InspirationFeed />
      <LogoQR />
      <FAQ />
      <Pricing />
    </main>
  );
}
