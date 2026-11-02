import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SunBadge, WaveDivider } from "@/components/ui/decor";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-coral">
      <div
        className="texture-dots pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <SunBadge className="mx-auto" size={100} />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 text-5xl leading-[1.02] font-black tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
            Your Island Escape{" "}
            <em className="text-cream drop-shadow-[3px_3px_0_rgba(37,52,46,0.35)]">
              Starts Here.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed font-medium text-ink/80">
            Pick a cottage, pack light, and leave the rest to the island. We'll
            keep a stool and a sunset waiting at the bar.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/stay" variant="cream" size="lg">
              Explore the Cottages
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Button>
            <Button to="/beach-bar" variant="teal" size="lg">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2.4} />
              Visit Tiny's Beach Bar
            </Button>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#25342e" />
    </section>
  );
}
