import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/Button";

/** Slide-in mini cart — frontend-only, persisted to localStorage. */
export function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, subtotal, count } =
    useCart();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[85] bg-ink/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-[26rem] flex-col border-l-4 border-ink bg-cream"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={
              reduce
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 300, damping: 34 }
            }
          >
            <div className="flex items-center justify-between border-b-2 border-ink/10 px-6 py-5">
              <h2 className="font-display flex items-center gap-2.5 text-2xl font-black">
                <ShoppingBag className="h-5.5 w-5.5 text-coral" />
                Your Little Haul
                {count > 0 && (
                  <span className="rounded-full border-2 border-ink bg-sunshine px-2.5 py-0.5 text-xs font-sans font-extrabold">
                    {count}
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="shadow-hard-sm flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-cream transition-colors hover:bg-coral"
              >
                <X className="h-4.5 w-4.5" strokeWidth={2.6} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-sand-light">
                  <ShoppingBag className="h-8 w-8 text-teal" />
                </span>
                <p className="font-display text-2xl font-bold">
                  Nothing in here yet
                </p>
                <p className="text-sm text-ink/60">
                  Hats, tees and beach-day extras are waiting in the shop.
                </p>
                <Button to="/shop" variant="teal" onClick={closeCart}>
                  Browse the Shop
                </Button>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-xl border-2 border-ink/10 bg-white p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 shrink-0 rounded-lg border border-ink/10 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/shop/${item.slug}`}
                            onClick={closeCart}
                            className="font-display truncate text-base leading-tight font-bold hover:text-teal"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="text-ink/40 transition-colors hover:text-coral"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs font-semibold text-ink/55">
                          {item.color} · {item.size}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border-2 border-ink/15">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              aria-label="Decrease quantity"
                              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-sand-light"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-extrabold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              aria-label="Increase quantity"
                              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-sand-light"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm font-extrabold text-teal">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t-2 border-ink/10 bg-sand-light px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink/60">
                      Subtotal
                    </span>
                    <span className="font-display text-2xl font-black">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/55">
                    Illustrative sample shop — checkout integration coming soon;
                    no payment is taken.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button
                      to="/cart"
                      variant="outline"
                      size="sm"
                      onClick={closeCart}
                    >
                      View Cart
                    </Button>
                    <Button
                      to="/checkout"
                      variant="coral"
                      size="sm"
                      onClick={closeCart}
                    >
                      Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
