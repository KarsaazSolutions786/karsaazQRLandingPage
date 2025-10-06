"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import InspirationFeed from "@/components/InspirationFeed";
import LogoQR from "@/components/LogoQR";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import ChatbotButton from "@/components/chatbot/ChatbotButton";
import Chatbot from "@/components/chatbot/Chatbot";

export default function Home() {
  const [activeType, setActiveType] = useState("PDF");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <main>
      <Hero activeType={activeType} setActiveType={setActiveType} />
      {/* <Features activeType={activeType} /> */}
      <HowItWorks />
      <InspirationFeed />
      <LogoQR />
      <FAQ />
      <Pricing />
      <ChatbotButton onClick={() => setIsChatbotOpen(true)} />
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </main>
  );
}