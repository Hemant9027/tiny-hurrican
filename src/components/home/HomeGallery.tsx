import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { homeGalleryImages } from "@/data/gallery";
import { Gallery } from "@/components/Gallery";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";

export function HomeGallery() {
  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            dark
            eyebrow="Postcards From Tiny's"
            stickerColor="bg-coral"
            title={
              <>
                Little Moments, <em className="text-sunshine">Big Smiles</em>.
              </>
            }
              copy="Beach mornings, bar nights and everything in between — straight from our little corner of Long Island."
          />
          <Reveal delay={0.15}>
            <Link
              to="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 text-base font-extrabold text-cream underline decoration-coral decoration-wavy underline-offset-8 transition-colors hover:text-sunshine"
            >
              View the full gallery
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14">
          <Gallery images={homeGalleryImages} />
        </div>
      </div>

      <WaveDivider fill="#fff8eb" />
    </section>
  );
}
