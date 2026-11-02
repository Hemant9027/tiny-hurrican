import { galleryImages } from "@/data/gallery";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { WaveDivider } from "@/components/ui/decor";

export default function GalleryPage() {
  useSEO({
    title: "Gallery",
    description:
      "Postcards from Tiny's Bahamas — beach mornings, bar nights, cottages and sunsets on Thompson Bay, Long Island.",
    path: "/gallery",
  });

  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Gallery"
        title={
          <>
            Sunsets We've <em className="text-sunshine">Known</em>.
          </>
        }
        copy="A scrapbook of Tiny's days — tap any photo to see it bigger."
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Gallery images={galleryImages} />
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
