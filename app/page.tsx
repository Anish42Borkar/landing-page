"use client";
import Navbar from "@/components/navbar";
import BrandSection from "@/components/page/brand-section";
import DetailSection from "@/components/page/detail-section";
import DontMissSection from "@/components/page/dont-miss-section";
import FooterSection from "@/components/page/footer-section";
// import HeroSection from "@/components/page/hero-section";
import SpeakersSection from "@/components/page/speakers-section";
import TicketSection from "@/components/page/ticket-section";
import WelcomeSection from "@/components/page/welcome-section";
import WhatWeOfferSection from "@/components/page/what-we-offer-section";
import dynamic from "next/dynamic";

// export const dynamic = "force-dynamic";

const HeroSection = dynamic(() => import("@/components/page/hero-section"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className="relative xl:container mx-auto">
      <div className="z-30 hidden md:block">
        <Navbar />{" "}
      </div>

      <HeroSection />
      <BrandSection />
      <WelcomeSection />
      <SpeakersSection />
      <DetailSection />
      <TicketSection />
      <WhatWeOfferSection />
      <DontMissSection />
      <FooterSection />
    </main>
  );
}
