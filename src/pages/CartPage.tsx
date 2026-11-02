import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";

export default function CartPage() {
  useSEO({
    title: "Your Cart",
    description:
      "Your Tiny's Bahamas sample merch cart — checkout integration coming soon.",
    path: "/cart",
  });

  const { items, updateQty, removeItem, subtotal, count, clearCart } = useCart();

  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="The Tiny's Shop"
        title={
          <>
            Your Little <em className="text-coral">Haul</em>.
          </>
        }
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          {items.length === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-ink/30 bg-sand-light px-8 py-20 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-ink bg-white shadow-hard">
                  <ShoppingBag className="h-10 w-10 text-teal" />
                </span>
                <h2 className="font-display mt-6 text-3xl font-black">
                  Empty as a beach at sunrise
                </h2>
                <p className="mt-3 max-w-sm text-ink/65">
                  Beautiful, but let's fix it. The shop has hats, tees and
                  beach-day extras with your name on them.
                </p>
                <Button to="/shop" variant="coral" size="lg" className="mt-7">
                  Browse the Shop
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
              {/* Items */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-ink/50">
                    {count} item{count === 1 ? "" : "s"}
                  </p>
                  <button
                    onClick={clearCart}
                    className="cursor-pointer text-sm font-bold text-ink/50 underline decoration-wavy underline-offset-4 transition-colors hover:text-coral"
                  >
                    Clear cart
                  </button>
                </div>
                <ul className="mt-5 space-y-4">
                  {items.map((item) => (
                    <Reveal key={item.id}>
                      <li className="flex flex-col gap-4 rounded-xl border-2 border-ink bg-white p-4 shadow-hard sm:flex-row sm:items-center">
                        <Link
                          to={`/shop/${item.slug}`}
                          className="shrink-0 overflow-hidden rounded-lg border-2 border-ink/10"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-24 w-24 object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <Link
                            to={`/shop/${item.slug}`}
                            className="font-display text-xl font-bold hover:text-teal"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-0.5 text-sm font-semibold text-ink/55">
                            {item.color} · Size {item.size}
                          </p>
                          <p className="mt-1 text-sm font-extrabold text-teal sm:hidden">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                          <p className="hidden font-display text-lg font-black text-teal sm:block">
                            {formatPrice(item.price * item.qty)}
                          </p>
                          <div className="flex items-center gap-1 rounded-full border-2 border-ink/15 bg-cream px-1">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              aria-label="Decrease quantity"
                              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-sand-light"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-7 text-center font-extrabold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              aria-label="Increase quantity"
                              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-sand-light"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="flex h-9 w-9 cursor-pointer items-center justify-center self-end rounded-full border-2 border-transparent text-ink/40 transition-colors hover:border-ink hover:bg-coral hover:text-ink sm:self-center"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              <Reveal delay={0.1}>
                <div className="rounded-xl border-2 border-ink bg-sand-light p-7 shadow-hard lg:sticky lg:top-32">
                  <h2 className="font-display text-2xl font-black">Summary</h2>
                  <div className="mt-5 space-y-2.5 text-[15px] font-semibold text-ink/70">
                    <div className="flex justify-between">
                      <span>Subtotal ({count} items)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-dashed border-ink/20 pb-3">
                      <span>Shipping / pickup</span>
                      <span className="text-teal">Arranged at checkout</span>
                    </div>
                    <div className="flex justify-between pt-1.5">
                      <span className="font-display text-lg font-black text-ink">
                        Total
                      </span>
                      <span className="font-display text-2xl font-black text-ink">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                  </div>
                  <Button to="/checkout" variant="coral" size="lg" className="mt-6 w-full">
                    Go to Checkout
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </Button>
                  <Button to="/shop" variant="outline" size="sm" className="mt-3 w-full">
                    Keep Browsing
                  </Button>
                  <p className="mt-4 text-center text-xs font-semibold text-ink/50">
                    Sample shop — checkout integration coming soon. No payment
                    is taken.
                  </p>
                </div>
              </Reveal>
            </div>
          )}
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
