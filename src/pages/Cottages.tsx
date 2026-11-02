import { ArrowUpRight, KeyRound, MessageCircle, MousePointerClick } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { site } from "@/config/siteConfig";
import { PageHero } from "@/components/PageHero";
import { CottageShowcase } from "@/components/home/CottageShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";

const steps = [
  {
    icon: MousePointerClick,
    title: "Pick your cottage",
    copy: "Key Lime, Sea Grape or The Palms — each one beachfront, each one with its own personality.",
  },
  {
    icon: KeyRound,
    title: "Book securely on Airbnb",
    copy: "Every stay is reserved through our official Airbnb listings — dates, pricing and house rules live there.",
  },
  {
    icon: MessageCircle,
    title: "Message us anytime",
    copy: "Questions before you book? Call or email and a real human on Long Island will answer.",
  },
];

export default function Cottages() {
  useSEO({
    title: "Stay — Tiny's Hurricane Hole Cottages",
    description:
      "Three beachfront cottages on Thompson Bay, Long Island: Key Lime, Sea Grape and The Palms. Book securely through Airbnb.",
    path: "/stay",
  });

  return (
    <>
      <PageHero
        tone="turquoise"
        eyebrow={site.stayBrand}
        title={
          <>
            Stay Awhile. The Beach Is{" "}
            <em className="text-teal">Waiting</em>.
          </>
        }
        copy="Three cottages, one stretch of Thompson Bay sand, and a beach bar close enough to wander to barefoot. This is Tiny's Hurricane Hole."
        waveTo="#fff8eb"
      />

      {/* Reuses the homepage showcase — three distinct presentations */}
      <CottageShowcase />

      {/* How booking works */}
      <section className="relative bg-teal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <Sticker color="bg-sunshine">How Booking Works</Sticker>
            <h2 className="font-display mx-auto mt-6 max-w-2xl text-4xl font-black tracking-tight text-balance sm:text-5xl">
              Simple, Secure & <em className="text-sunshine">Sorted.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="shadow-hard-cream h-full rounded-xl border-2 border-cream bg-teal-deep/60 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink">
                    <s.icon className="h-5.5 w-5.5" strokeWidth={2.3} />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold">
                    <span className="mr-2 text-sunshine">0{i + 1}.</span>
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-cream/75">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold text-cream/70">
              Prefer to talk first? Call {site.phone.label} or {site.phoneUS.label}{" "}
              (US) ·
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1 text-sunshine underline decoration-wavy underline-offset-4"
              >
                {site.email}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </Reveal>
        </div>
        <WaveDivider fill="#e97862" />
      </section>

      <FinalCTA />
    </>
  );
}
