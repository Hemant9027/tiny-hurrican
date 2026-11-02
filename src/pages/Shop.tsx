import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { productCategories, products } from "@/data/products";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

export default function Shop() {
  useSEO({
    title: "The Tiny's Shop",
    description:
      "Tiny's Bahamas merch — hats, shirts and beach-day accessories. Sample range shown while the full collection is prepared; checkout coming soon.",
    path: "/shop",
  });

  const [filter, setFilter] = useState<(typeof productCategories)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        tone="sunshine"
        eyebrow="The Tiny's Shop"
        title={
          <>
            Island Gear, <em className="text-teal">Sunny</em> Side Up.
          </>
        }
        copy="A little Tiny's for the suitcase. Browsing works, carts work — online checkout is on its way."
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter products">
            {productCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "cursor-pointer rounded-full border-2 border-ink px-5 py-2.5 text-sm font-extrabold tracking-tight transition-all",
                  filter === c
                    ? "bg-ink text-cream shadow-hard"
                    : "bg-white text-ink hover:bg-sunshine",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={(i % 3) * 0.07} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex items-start gap-3 rounded-xl border-2 border-dashed border-ink/30 bg-sand-light p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <p className="text-sm leading-relaxed font-semibold text-ink/65">
                The shop you're browsing is a sample range — final designs and
                prices are being stitched together with the owner. Add items to
                your cart to plan your haul; checkout opens soon, and in the
                meantime you can always ask about merch at the bar.
              </p>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
