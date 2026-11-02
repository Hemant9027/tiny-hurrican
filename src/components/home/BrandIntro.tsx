import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, Squiggle, WaveDivider } from "@/components/ui/decor";

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-turquoise">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeader
              eyebrow="Welcome to Tiny's"
              stickerColor="bg-sunshine"
              title={
                <>
                  Your Own Little Piece{" "}
                  <span className="relative inline-block">
                    of the{" "}
                    <em className="text-teal">Bahamas</em>.
                    <Squiggle className="absolute -bottom-3 left-0 text-coral" />
                  </span>
                </>
              }
            />
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
                Whether you're here for a beachfront cottage stay or a
                laid-back afternoon at the beach bar, Tiny's brings together
                everything we love about island living — good food, cold drinks,
                warm sand and company that feels like family.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Sticker color="bg-sunshine" rotate="-rotate-3">
                  Stay
                </Sticker>
                <Sticker color="bg-coral" rotate="rotate-2">
                  Eat
                </Sticker>
                <Sticker color="bg-cream" rotate="-rotate-1">
                  Relax
                </Sticker>
                <Link
                  to="/about"
                  className="group ml-1 inline-flex items-center gap-1.5 text-sm font-extrabold tracking-tight text-ink underline decoration-coral decoration-wavy underline-offset-6 hover:text-teal"
                >
                  Our story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Editorial images — mismatched proportions, straight frames */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Reveal
              className="relative z-10 ml-auto w-[62%] rotate-2"
              delay={0.1}
            >
              <img
                src="/images/beach-bar/bar.jpg"
                alt="Colourful stools at Tiny's Beach Bar facing the turquoise sea"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-xl border-2 border-ink object-cover shadow-hard-lg"
              />
              <div className="absolute -top-4 -right-3">
                <Sticker color="bg-coral" rotate="rotate-6" className="!text-[9px]">
                  Eat
                </Sticker>
              </div>
            </Reveal>
            <Reveal
              className="relative z-20 -mt-[26%] w-[58%] -rotate-2"
              delay={0.22}
            >
              <img
                src="/images/cottages/key-lime/exterior.jpg"
                alt="Sunshine outside Key Lime Cottage on a bright Bahamas morning"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-xl border-2 border-ink bg-white object-cover p-2 shadow-hard"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Wave back into cream */}
      <WaveDivider fill="#fff8eb" />
    </section>
  );
}
