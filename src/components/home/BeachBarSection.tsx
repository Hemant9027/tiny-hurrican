import { ArrowRight, Shell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";

const offerings = [
  "Fresh Seafood",
  "Burgers",
  "Pizza",
  "Local Bahamian Food",
  "Cold Drinks",
  "Special Events",
  "Catering",
];

export function BeachBarSection() {
  return (
    <section className="relative overflow-hidden bg-teal">
      <div
        className="texture-dots pointer-events-none absolute inset-0 text-cream opacity-[0.05]"
        aria-hidden
      />
      <Shell
        className="animate-float absolute -left-8 top-16 h-40 w-40 text-cream/10"
        aria-hidden
      />
      <Shell
        className="animate-bob absolute right-6 bottom-24 h-24 w-24 rotate-12 text-cream/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              dark
              eyebrow="Tiny's Beach Bar"
              stickerColor="bg-sunshine"
              title={
                <>
                  Good Food. Cold Drinks.{" "}
                  <em className="text-sunshine">Barefoot Vibes.</em>
                </>
              }
              copy="Pull up a chair, feel the ocean breeze and enjoy the laid-back atmosphere of Tiny's Beach Bar — where lunch turns into sunset drinks and nobody's counting."
            />
            <Reveal delay={0.16}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {offerings.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border-2 border-cream/35 px-4 py-1.5 text-sm font-bold text-cream/85 transition-colors hover:border-sunshine hover:text-sunshine"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                <Button to="/beach-bar/menu" variant="sunshine" size="lg">
                  Explore Our Menu
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </Button>
                <Button to="/beach-bar/reservations" variant="outlineLight" size="lg">
                  Reserve a Table
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Collage */}
          <div className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none">
            <Reveal className="relative z-10 w-[72%] rotate-1" delay={0.08}>
              <img
                src="/images/beach-bar/cocktails.jpg"
                alt="Two tropical cocktails catching the light at Tiny's Beach Bar"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-xl border-2 border-ink object-cover shadow-hard-lg"
              />
            </Reveal>
            <Reveal
              className="absolute right-0 bottom-0 z-20 w-[52%] -rotate-2"
              delay={0.2}
            >
              <img
                src="https://images.pexels.com/photos/36857725/pexels-photo-36857725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Island cooking fresh from the Tiny's Beach Bar kitchen"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-xl border-2 border-ink bg-white object-cover p-2 shadow-hard"
              />
            </Reveal>
            <div className="absolute -top-5 right-8 z-30">
              <Sticker color="bg-coral" rotate="rotate-3">
                Barefoot vibes
              </Sticker>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#e9d8bd" />
    </section>
  );
}
