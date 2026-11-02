import {
  ArrowUpRight,
  Cake,
  Clock,
  MapPin,
  Music,
  Navigation,
  Sparkles,
  Tent,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { maps, site } from "@/config/siteConfig";
import { beachBarImages } from "@/data/gallery";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/Button";
import { MenuPreview } from "@/components/home/MenuPreview";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";

const highlights = [
  {
    title: "Fresh Seafood",
    copy: "Whatever the sea offered up this morning, grilled and served the Bahamian way.",
    img: "/images/food/seafood-platter.jpg",
    alt: "A Caribbean seafood spread with grilled fish and plantains",
    sticker: "bg-coral",
  },
  {
    title: "Island Classics",
    copy: "Burgers, pizza and local favorites — the plates regulars don't even need to order by name.",
    img: "https://images.pexels.com/photos/36857725/pexels-photo-36857725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "An island-style plate with rice, peas and colourful slaw",
    sticker: "bg-sunshine",
  },
  {
    title: "Cold Drinks",
    copy: "Beers that sweat, tropical pours and refreshments for hammock-dwellers of all ages.",
    img: "/images/beach-bar/cocktails.jpg",
    alt: "Two tropical cocktails on a turquoise table by the sea",
    sticker: "bg-turquoise",
  },
];

const eventChips = [
  "Beach birthdays",
  "Sunset celebrations",
  "Live music nights",
  "Private hire",
  "Off-site catering",
  "Wedding-week hangs",
];

export default function BeachBar() {
  useSEO({
    title: "Tiny's Beach Bar — Eat, Drink & Be Sandy",
    description:
      "Tiny's Beach Bar on Thompson Bay, Long Island: seafood, burgers, pizza, local Bahamian food, cold drinks, events and catering — right on the beach.",
    path: "/beach-bar",
  });

  return (
    <>
      <PageHero
        tone="teal"
        eyebrow={site.barBrand}
        title={
          <>
            Pull Up a Stool. <em className="text-sunshine">Stay a While.</em>
          </>
        }
        copy="An easygoing beachfront bar & grill where lunch turns into sunset drinks, strangers turn into regulars, and shoes are entirely optional."
        waveTo="#fff8eb"
      >
        <Button to="/beach-bar/menu" variant="sunshine" size="lg">
          Explore the Menu
        </Button>
        <Button to="/beach-bar/reservations" variant="outlineLight" size="lg">
          Reserve a Table
        </Button>
      </PageHero>

      {/* --------------------------- Intro split --------------------------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <img
                src="/images/beach-bar/bar.jpg"
                alt="Tiny's Beach Bar counter with colourful stools facing the ocean"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rotate-1 rounded-xl border-2 border-ink object-cover shadow-hard-lg transition-transform duration-500 hover:rotate-0"
              />
              <div className="absolute -bottom-5 left-8 -rotate-3">
                <Sticker color="bg-coral">Right on the sand</Sticker>
              </div>
            </Reveal>
            <div>
              <SectionHeader
                eyebrow="The Bar & Grill"
                stickerColor="bg-sunshine"
                title={
                  <>
                    Where the Island{" "}
                    <em className="text-coral">Comes to Eat</em>.
                  </>
                }
              />
              <Reveal delay={0.12}>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/72">
                  <p>
                    Tiny's Beach Bar is the social heart of our little stretch
                    of Thompson Bay — a relaxed, open-air spot where cottagers,
                    locals and sunburnt explorers all end up sooner or later.
                  </p>
                  <p>
                    The rule of the house is simple: good food, cold drinks and
                    zero hurry. Come sandy, come salty, come as you are.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl border-2 border-ink bg-white p-3 shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard-lg">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={h.img}
                      alt={h.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Sticker color={h.sticker} className="!text-[9px]">
                        {h.title}
                      </Sticker>
                    </div>
                  </div>
                  <div className="p-3.5">
                    <h3 className="font-display text-2xl font-bold">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">
                      {h.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#e9d8bd" />
      </section>

      {/* Interactive menu preview (sand) */}
      <MenuPreview />

      {/* ----------------------------- Gallery ----------------------------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="At the Bar"
            stickerColor="bg-coral"
            title={
              <>
                Golden Hours & <em className="text-teal">Full Plates</em>.
              </>
            }
          />
          <div className="mt-12">
            <Gallery images={beachBarImages} />
          </div>
        </div>
        <WaveDivider fill="#e97862" />
      </section>

      {/* ------------------------- Events & catering ------------------------ */}
      <section className="relative overflow-hidden bg-coral">
        <Music
          className="animate-bob absolute top-10 right-8 hidden h-28 w-28 text-ink/10 lg:block"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Events & Catering"
                stickerColor="bg-sunshine"
                title={
                  <>
                    Bring the Party to{" "}
                    <em className="text-cream drop-shadow-[2px_2px_0_rgba(37,52,46,0.35)]">
                      the Beach
                    </em>
                    .
                  </>
                }
                copy="Birthdays, bonfires, wedding-week gatherings or a full private hire — if it involves food, music and a shoreline, we're in. We also cater off-site across Long Island."
              />
              <Reveal delay={0.15}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {eventChips.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 rounded-full border-2 border-ink bg-cream/60 px-4 py-1.5 text-sm font-bold text-ink"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-teal" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8">
                  <Button href={site.barWhatsApp.href} external variant="teal" size="lg">
                    <Cake className="h-5 w-5" strokeWidth={2.3} />
                    Plan It on WhatsApp
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <img
                src="https://images.pexels.com/photos/14519339/pexels-photo-14519339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Friends gathered at a beachside bar as the sun sets"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full -rotate-1 rounded-xl border-2 border-ink bg-white object-cover p-2.5 shadow-hard-lg transition-transform duration-500 hover:rotate-0"
              />
            </Reveal>
          </div>
        </div>
        <WaveDivider fill="#226a68" />
      </section>

      {/* ------------------------- Location & hours ------------------------- */}
      <section className="bg-teal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            dark
            eyebrow="Find the Bar"
            stickerColor="bg-sunshine"
            title={
              <>
                Follow the Music Down{" "}
                <em className="text-sunshine">Indian Point Hole Road</em>.
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="shadow-hard-cream h-full rounded-xl border-2 border-cream bg-teal-deep/60 p-7 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink">
                  <MapPin className="h-5.5 w-5.5" strokeWidth={2.3} />
                </span>
                <h3 className="font-display mt-5 text-2xl font-bold">
                  Where we are
                </h3>
                <p className="mt-2.5 leading-relaxed text-cream/80">
                  {site.address.line1}, {site.address.line2},{" "}
                  {site.address.island}, {site.address.country}
                </p>
                <div className="mt-5">
                  <Button href={maps.directions} external variant="sunshine" size="sm">
                    <Navigation className="h-4 w-4" /> Get Directions
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="shadow-hard-cream h-full rounded-xl border-2 border-cream bg-teal-deep/60 p-7 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-coral text-ink">
                  <Clock className="h-5.5 w-5.5" strokeWidth={2.3} />
                </span>
                <h3 className="font-display mt-5 text-2xl font-bold">
                  When we're open
                </h3>
                <p className="mt-2.5 leading-relaxed text-cream/80">
                  Island hours drift with the season — message us on WhatsApp
                  before you set out and we'll confirm today's opening times.
                </p>
                <div className="mt-5">
                  <Button href={site.barWhatsApp.href} external variant="outlineLight" size="sm">
                    <Tent className="h-4 w-4" /> WhatsApp the Bar
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl border-2 border-dashed border-cream/40 p-7 text-center md:flex-row md:text-left">
              <div>
                <h3 className="font-display text-2xl font-black">
                  Hungry already?
                </h3>
                <p className="mt-1 text-cream/75">
                  Request a table in under a minute — the team confirms by reply.
                </p>
              </div>
              <Button to="/beach-bar/reservations" variant="sunshine" size="lg" className="shrink-0">
                Reserve a Table
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </Button>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
