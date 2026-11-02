import { ArrowRight, Shapes } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";

export function MerchPreview() {
  const featured = products.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-sunshine">
      <Shapes
        className="animate-bob absolute top-14 right-8 hidden h-24 w-24 text-ink/10 lg:block"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="The Tiny's Shop"
            stickerColor="bg-cream"
            title={
              <>
                Take a Little <em className="text-teal">Tiny's</em> Home.
              </>
            }
            copy="Hats, shirts and beach-day extras — a slice of the island that fits in a suitcase. Sample range shown while our full collection is stitched together."
          />
          <Reveal delay={0.15}>
            <Button to="/shop" variant="cream" className="shrink-0">
              Browse the Shop
              <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.5} />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <WaveDivider fill="#25342e" />
    </section>
  );
}
