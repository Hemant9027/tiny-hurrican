import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { maps, site } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";

export function LocationSection() {
  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Find Us"
              stickerColor="bg-turquoise"
              title={
                <>
                  Meet Us on <em className="text-teal">Long Island</em>.
                </>
              }
              copy="Down Indian Point Hole Road on Thompson Bay — follow the sand, the music and the smell of the grill. You'll know it when you see it."
            />
            <Reveal delay={0.15}>
              <address className="mt-8 space-y-3 not-italic">
                <p className="flex items-start gap-3 text-lg font-bold">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-coral" />
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.line2}, {site.address.island}
                    <br />
                    {site.address.country}
                  </span>
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 font-semibold text-ink/75 transition-colors hover:text-teal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-sunshine">
                    <Mail className="h-4 w-4 text-ink" />
                  </span>
                  {site.email}
                </a>
                <a
                  href={site.phone.href}
                  className="flex items-center gap-3 font-semibold text-ink/75 transition-colors hover:text-teal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-turquoise">
                    <Phone className="h-4 w-4 text-ink" />
                  </span>
                  {site.phone.label} · Cottages
                </a>
              </address>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8">
                <Button href={maps.directions} external variant="outline">
                  <Navigation className="h-4.5 w-4.5" strokeWidth={2.4} />
                  Get Directions
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Map card */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-xl border-2 border-ink bg-white p-2.5 shadow-hard-lg">
                <iframe
                  title={`Map — ${site.address.mapsQuery}`}
                  src={maps.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3.4] w-full rounded-md border-0"
                  allowFullScreen
                />
              </div>
              <div className="absolute -top-5 right-6 rotate-3">
                <Sticker color="bg-sunshine">Find us here</Sticker>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <WaveDivider fill="#e97862" />
    </section>
  );
}
