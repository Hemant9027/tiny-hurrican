import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Info,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { formatPrice, getProduct, products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const { addItem } = useCart();

  useSEO({
    title: product ? product.name : "Product",
    description: product
      ? `${product.name} — ${product.blurb} From the Tiny's Bahamas shop.`
      : "Tiny's Bahamas shop",
    path: `/shop/${slug}`,
  });

  const [size, setSize] = useState<string | null>(
    product ? product.sizes[0] : null,
  );
  const [color, setColor] = useState<string | null>(
    product ? product.colors[0]?.name ?? null : null,
  );
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <NotFound />;

  const multiSize = product.sizes.length > 1;
  const needsSize = multiSize; // single-size products preselect automatically
  const canAdd = (!needsSize || size !== null) && color !== null;

  const handleAdd = () => {
    if (!canAdd || !size || !color) return;
    addItem(product, size, color, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div
          className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-44 md:pb-24">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-ink/60 transition-colors hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the shop
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Product image */}
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard-lg">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Sticker color="bg-coral" rotate="-rotate-6">
                      {product.badge}
                    </Sticker>
                  </div>
                )}
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  className="aspect-square w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </Reveal>

            {/* Details */}
            <Reveal delay={0.1}>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-teal">
                {product.category}
              </p>
              <h1 className="font-display mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="font-display mt-3 text-3xl font-black text-coral">
                {formatPrice(product.price)}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                {product.description}
              </p>
              <p className="font-display mt-2 text-base italic text-ink/55">
                {product.blurb}
              </p>

              {/* Colour */}
              <div className="mt-8">
                <p className="text-sm font-extrabold tracking-tight">
                  Colour{": "}
                  <span className="font-bold text-teal">{color}</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      aria-pressed={color === c.name}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-full border-2 px-3.5 py-2 text-sm font-bold transition-all",
                        color === c.name
                          ? "border-ink bg-ink text-cream shadow-hard-sm"
                          : "border-ink/25 bg-white text-ink hover:border-ink",
                      )}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-ink/40"
                        style={{ backgroundColor: c.hex }}
                      />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mt-6">
                <p className="text-sm font-extrabold tracking-tight">Size</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      aria-pressed={size === s}
                      className={cn(
                        "min-w-12 cursor-pointer rounded-lg border-2 px-4 py-2.5 text-sm font-extrabold transition-all",
                        size === s
                          ? "border-ink bg-sunshine text-ink shadow-hard-sm"
                          : "border-ink/25 bg-white text-ink hover:border-ink",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + add */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 rounded-full border-2 border-ink bg-white px-1 py-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-sand-light"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-extrabold">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    aria-label="Increase quantity"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-sand-light"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  variant={added ? "teal" : "coral"}
                  size="lg"
                  onClick={handleAdd}
                  disabled={!canAdd}
                  className="flex-1 sm:flex-none sm:min-w-56"
                >
                  {added ? (
                    <>
                      <Check className="h-5 w-5" strokeWidth={2.6} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
              {!canAdd && (
                <p className="mt-3 text-xs font-bold text-coral-deep">
                  Pick a size and colour first.
                </p>
              )}

              <div className="mt-8 flex items-start gap-3 rounded-xl border-2 border-dashed border-ink/30 bg-sand-light p-4">
                <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal" />
                <p className="text-[13px] leading-relaxed font-semibold text-ink/60">
                  Sample product — final designs and prices coming soon. Online
                  checkout opens shortly; you can also ask about merch in person
                  at the bar.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <WaveDivider fill="#f2ca68" />
      </section>

      {/* Related */}
      <section className="bg-sunshine">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
              Also Worth a <em className="text-teal">Look</em>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 0.07} />
            ))}
          </div>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
