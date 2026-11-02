import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { site } from "@/config/siteConfig";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CottageShowcase } from "@/components/home/CottageShowcase";
import { BeachBarSection } from "@/components/home/BeachBarSection";
import { MenuPreview } from "@/components/home/MenuPreview";
import { Experiences } from "@/components/home/Experiences";
import { MerchPreview } from "@/components/home/MerchPreview";
import { HomeGallery } from "@/components/home/HomeGallery";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  useSEO({
    title: `${site.name} — Beachfront Cottages & Beach Bar on Long Island`,
    description:
      "Three beachfront cottages and a laid-back beach bar on Thompson Bay, Long Island, The Bahamas. Book Tiny's Hurricane Hole on Airbnb; pull up a stool at Tiny's Beach Bar.",
    path: "/",
  });

  const location = useLocation();

  // Smooth-scroll to a section when navigated here with state.scrollTo
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const timer = window.setTimeout(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "");
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Hero />
      <BrandIntro />
      <CottageShowcase />
      <BeachBarSection />
      <MenuPreview />
      <Experiences />
      <MerchPreview />
      <HomeGallery />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
