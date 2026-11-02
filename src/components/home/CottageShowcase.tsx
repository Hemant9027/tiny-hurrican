import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cottages, type Cottage } from "@/data/cottages";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";

const stickerByAccent = {
  sunshine: "bg-sunshine",
  turquoise: "bg-turquoise",
  coral: "bg-coral",
} as const;

function CottageActions({ cottage }: { cottage: Cottage }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <Button to={`/stay/${cottage.slug}`} variant="teal">
        View Cottage
        <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.5} />
      </Button>
      <Button href={cottage.airbnb} external variant="outline">
        Book on Airbnb
        <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.5} />
      </Button>
    </div>
  );
}

function CottageText({ cottage }: { cottage: Cottage }) {
  return (
    <div>
      <Sticker color={stickerByAccent[cottage.accent]}>{cottage.shortName}</Sticker>
      <h3 className="font-display mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        {cottage.name}
      </h3>
      <p className="font-display mt-3 text-xl italic text-teal">
        {cottage.tagline}
      </p>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">
        {cottage.intro}
      </p>
      <CottageActions cottage={cottage} />
    </div>
  );
}

export function CottageShowcase() {
  const [keyLime, seaGrape, thePalms] = cottages;

  return (
    <section className="relative overflow-hidden bg-cream" id="cottages">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow="Three little cottages"
          stickerColor="bg-sunshine"
          title={
            <>
              Pick Your Little Piece of <em className="text-coral">Paradise</em>.
            </>
          }
          copy="Each cottage has its own personality — same beach, same bar, same big island sky. All stays are booked securely through our Airbnb listings."
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {/* -------- Key Lime — polaroid, leaning left -------- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="mx-auto w-full max-w-lg -rotate-2 rounded-lg border-2 border-ink bg-white p-3 pb-8 shadow-hard-lg transition-transform duration-500 hover:rotate-0">
                <img
                  src={keyLime.hero.src}
                  alt={keyLime.hero.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
                <p className="font-display mt-4 text-center text-lg font-bold text-ink/70">
                  mornings at {keyLime.shortName}
                </p>
              </div>
              <div className="absolute -top-5 left-6 -rotate-6">
                <Sticker color="bg-sunshine">Beachfront</Sticker>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <CottageText cottage={keyLime} />
            </Reveal>
          </div>

          {/* -------- Sea Grape — arch frame, flip side -------- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal delay={0.12} className="order-last lg:order-first">
              <CottageText cottage={seaGrape} />
            </Reveal>
            <Reveal className="relative">
              <div
                className="absolute inset-x-8 top-10 bottom-0 rounded-t-full bg-sand"
                aria-hidden
              />
              <div className="relative mx-auto w-full max-w-md rotate-1 overflow-hidden rounded-t-full border-2 border-ink shadow-hard-lg transition-transform duration-500 hover:rotate-0">
                <img
                  src={seaGrape.hero.src}
                  alt={seaGrape.hero.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute right-10 bottom-8 rotate-3">
                <Sticker color="bg-turquoise">Sea grape shade</Sticker>
              </div>
            </Reveal>
          </div>

          {/* -------- The Palms — wide banner with overlap card -------- */}
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-xl border-2 border-ink shadow-hard-lg">
                <img
                  src={thePalms.hero.src}
                  alt={thePalms.hero.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-103 sm:aspect-[21/9]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative z-10 mx-4 -mt-16 rounded-xl border-2 border-ink bg-white p-7 shadow-hard sm:mx-10 sm:-mt-20 md:p-9 lg:max-w-2xl">
                <Sticker color="bg-coral" rotate="-rotate-2">
                  {thePalms.shortName}
                </Sticker>
                <h3 className="font-display mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  {thePalms.name}
                </h3>
                <p className="font-display mt-2 text-lg italic text-teal">
                  {thePalms.tagline}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {thePalms.intro}
                </p>
                <CottageActions cottage={thePalms} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <WaveDivider fill="#226a68" />
    </section>
  );
}
