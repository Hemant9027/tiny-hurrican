import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Fish,
  Footprints,
  MapPin,
  Navigation,
  Shell,
  Sun,
  UtensilsCrossed,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cottages, getCottage } from "@/data/cottages";
import { maps, site } from "@/config/siteConfig";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/Button";
import { Gallery } from "@/components/Gallery";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, SunBadge, WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";
import NotFound from "@/pages/NotFound";

const icons: Record<string, LucideIcon> = {
  Waves,
  Footprints,
  UtensilsCrossed,
  Sun,
  Fish,
  Wind,
  Shell,
  Compass,
  MapPin,
};

const accentStyles = {
  sunshine: { sticker: "bg-sunshine", blob: "bg-sunshine/50", band: "bg-sunshine", waveFromBand: "#f2ca68" },
  turquoise: { sticker: "bg-turquoise", blob: "bg-turquoise/50", band: "bg-turquoise", waveFromBand: "#67b8b1" },
  coral: { sticker: "bg-coral", blob: "bg-coral/50", band: "bg-coral", waveFromBand: "#e97862" },
} as const;

const gallerySpans = ["wide", "std", "std", "tall", "std"] as const;

export default function CottageDetail() {
  const { slug = "" } = useParams();
  const cottage = getCottage(slug);

  useSEO({
    title: cottage ? cottage.name : "Cottage",
    description: cottage
      ? `${cottage.name} at Tiny's Hurricane Hole — ${cottage.tagline} Book securely on Airbnb.`
      : "Beachfront cottages on Long Island, The Bahamas.",
    path: `/stay/${slug}`,
  });

  if (!cottage) return <NotFound />;

  const accent = accentStyles[cottage.accent];
  const galleryImages = [
    { src: cottage.hero.src, alt: cottage.hero.alt, span: gallerySpans[0] },
    ...cottage.gallery.map((g, i) => ({ ...g, span: gallerySpans[i + 1] ?? "std" })),
  ];
  const related = cottages.filter((c) => c.slug !== cottage.slug);

  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-44 lg:pb-24">
          <Link
            to="/stay"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-ink/60 transition-colors hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" /> All cottages
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Sticker color={accent.sticker}>Tiny's Hurricane Hole</Sticker>
                <h1 className="font-display mt-5 text-5xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  {cottage.name.replace(" Cottage", "")}
                  {cottage.name.includes("Cottage") && (
                    <em className="block text-teal">Cottage</em>
                  )}
                </h1>
                <p className="font-display mt-4 text-2xl italic text-coral">
                  {cottage.tagline}
                </p>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70">
                  {cottage.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Button href={cottage.airbnb} external variant="coral" size="lg">
                    Book on Airbnb
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                  </Button>
                  <Button href={site.phone.href} external variant="outline" size="lg">
                    {site.phone.label}
                  </Button>
                </div>
                <p className="mt-4 text-xs font-semibold text-ink/50">
                  Availability, exact capacity and house rules live on our
                  official Airbnb listing.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div
                className={cn(
                  "absolute inset-0 translate-x-4 translate-y-4 rounded-2xl",
                  accent.blob,
                )}
                aria-hidden
              />
              <img
                src={cottage.hero.src}
                alt={cottage.hero.alt}
                className="relative aspect-[4/3] w-full rounded-2xl border-2 border-ink object-cover shadow-hard-lg"
                fetchPriority="high"
              />
              <SunBadge className="absolute -bottom-8 -left-4 hidden md:block" size={96} />
            </Reveal>
          </div>
        </div>
        <WaveDivider fill="#fff8eb" />
      </section>

      {/* ------------------------- Story + amenities ------------------------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
                The <em className="text-coral">Vibe</em>
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink/75">
                {cottage.description.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-xl border-2 border-ink bg-white p-7 shadow-hard md:p-8">
                <h3 className="font-display text-2xl font-bold">
                  Why you'll love it
                </h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {cottage.amenities.map((a) => {
                    const Icon = icons[a.icon] ?? Sun;
                    return (
                      <li key={a.label} className="flex items-start gap-3">
                        <span
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink text-ink",
                            accent.sticker,
                          )}
                        >
                          <Icon className="h-4.5 w-4.5" strokeWidth={2.3} />
                        </span>
                        <span className="pt-1.5 text-sm leading-snug font-bold text-ink/75">
                          {a.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ Gallery ------------------------------ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <SectionHeader
            eyebrow="Wander Through"
            stickerColor={accent.sticker}
            title={
              <>
                Around <em className="text-teal">{cottage.shortName}</em>.
              </>
            }
          />
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* ------------------------- Location strip ------------------------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl border-2 border-dashed border-ink/30 bg-sand-light p-7 md:flex-row md:items-center md:p-9">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white">
                  <MapPin className="h-5 w-5 text-coral" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Indian Point Hole Road, Thompson Bay
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink/60">
                    {site.address.island}, {site.address.country} — your exact
                    pin arrives with your Airbnb booking.
                  </p>
                </div>
              </div>
              <Button href={maps.directions} external variant="outline" size="sm">
                <Navigation className="h-4 w-4" /> Directions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- Booking band --------------------------- */}
      <section className={cn("relative", accent.band)}>
        <div className="mx-auto max-w-5xl px-6 py-18 text-center md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-ink text-balance sm:text-5xl">
              Ready for <em className="text-cream drop-shadow-[2px_2px_0_rgba(37,52,46,0.4)]">{cottage.shortName}</em>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-ink/75">
              Dates and rates live on Airbnb — see you on the sand.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href={cottage.airbnb} external variant="teal" size="lg">
                Check Dates on Airbnb
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline" size="lg">
                Ask a Question
              </Button>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#fff8eb" />
      </section>

      {/* ----------------------------- Related ----------------------------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Keep Looking"
            stickerColor="bg-sand"
            title={
              <>
                Meet the <em className="text-coral">Others</em>.
              </>
            }
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  to={`/stay/${c.slug}`}
                  className="group block overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={c.hero.src}
                      alt={c.hero.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-2xl font-black">
                        {c.name}
                      </h3>
                      <p className="font-display mt-1 text-base italic text-teal">
                        {c.tagline}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sunshine transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
