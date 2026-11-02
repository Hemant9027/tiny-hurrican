import { Construction, Mail, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";
import { site } from "@/config/siteConfig";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";

/**
 * FRONTEND-ONLY checkout placeholder. Deliberately shows an informational
 * screen — never a fake payment form or fake order confirmation.
 */
export default function Checkout() {
  useSEO({
    title: "Checkout — Coming Soon",
    description:
      "Online checkout is coming soon. Contact Tiny's Bahamas for merchandise inquiries in the meantime.",
    path: "/checkout",
  });

  const { items, subtotal } = useCart();

  return (
    <>
      <PageHero
        tone="sand"
        eyebrow="The Tiny's Shop"
        title={
          <>
            Almost There. <em className="text-coral">Almost.</em>
          </>
        }
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pb-24">
          <Reveal>
            <div className="rounded-2xl border-2 border-ink bg-white p-8 text-center shadow-hard-lg md:p-12">
              <span className="shadow-hard mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-sunshine">
                <Construction className="h-9 w-9 text-ink" strokeWidth={2.2} />
              </span>
              <h2 className="font-display mt-6 text-3xl font-black tracking-tight text-balance sm:text-4xl">
                Online Checkout Is <em className="text-coral">Coming Soon</em>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink/70">
                We're still stitching this part together, so no payment is
                taken here. Please contact Tiny's for merchandise inquiries and
                we'll sort you out personally.
              </p>

              {items.length > 0 && (
                <div className="mx-auto mt-8 max-w-md rounded-xl border-2 border-ink/15 bg-cream p-5 text-left">
                  <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">
                    <ShoppingBag className="h-4 w-4" /> Your saved cart
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm font-semibold text-ink/75">
                    {items.map((i) => (
                      <li key={i.id} className="flex justify-between gap-4">
                        <span>
                          {i.qty}× {i.name} ({i.color}, {i.size})
                        </span>
                        <span>{formatPrice(i.price * i.qty)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 flex justify-between border-t-2 border-dashed border-ink/20 pt-3 font-display text-lg font-black">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold text-ink/50">
                    Your cart is saved on this device — it'll be here when
                    checkout launches.
                  </p>
                </div>
              )}

              <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
                <Button
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Merch inquiry — Tiny's Bahamas",
                  )}`}
                  external
                  variant="teal"
                  size="lg"
                >
                  <Mail className="h-5 w-5" strokeWidth={2.3} />
                  Email About Merch
                </Button>
                <Button href={site.barWhatsApp.href} external variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5" strokeWidth={2.3} />
                  Ask on WhatsApp
                </Button>
              </div>
              <Button to="/shop" variant="cream" size="sm" className="mt-6">
                Back to the Shop
              </Button>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
