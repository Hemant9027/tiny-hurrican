import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Info, UtensilsCrossed } from "lucide-react";
import { menuCategories, menuNote } from "@/data/menu";
import { site } from "@/config/siteConfig";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Sticker, WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

export default function MenuPage() {
  useSEO({
    title: "Beach Bar Menu",
    description:
      "Seafood, burgers, pizza, local Bahamian favorites and cold drinks at Tiny's Beach Bar, Thompson Bay, Long Island. Ask about today's catch.",
    path: "/beach-bar/menu",
  });

  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active)!;
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        tone="sand"
        eyebrow="Tiny's Beach Bar"
        title={
          <>
            The <em className="text-coral">Menu</em> — Island Style.
          </>
        }
        copy="Five corners of the kitchen, one golden rule: fresh, hearty and made for eating within sight of the sea."
        waveTo="#fff8eb"
      >
        <Button to="/beach-bar/reservations" variant="coral" size="md">
          Reserve a Table
        </Button>
      </PageHero>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            {/* Category rail — sticky on desktop, horizontal pills on mobile */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-ink/50">
                Categories
              </p>
              <div
                className="no-scrollbar flex gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible"
                role="tablist"
                aria-label="Menu categories"
              >
                {menuCategories.map((c) => (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={active === c.id}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "flex shrink-0 cursor-pointer items-center justify-between gap-3 rounded-full border-2 border-ink px-5 py-3 text-left text-[15px] font-extrabold tracking-tight transition-all lg:w-full",
                      active === c.id
                        ? "bg-teal text-cream shadow-hard"
                        : "bg-white text-ink hover:bg-sunshine",
                    )}
                  >
                    {c.name}
                    {active === c.id && (
                      <UtensilsCrossed className="h-4 w-4 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Active category panel */}
            <div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={category.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard-lg"
                >
                  <div className="relative aspect-[16/8] overflow-hidden border-b-2 border-ink">
                    <img
                      src={category.image.src}
                      alt={category.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Sticker color="bg-sunshine">{category.tagline}</Sticker>
                    </div>
                  </div>
                  <div className="p-7 md:p-10">
                    <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                      {category.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
                      {category.description}
                    </p>

                    {/* Itemised menu slots — filled when the owner supplies dishes & prices */}
                    <div className="mt-8 space-y-3" aria-hidden>
                      {[82, 68, 74].map((w) => (
                        <div key={w} className="flex items-center gap-4">
                          <span
                            className="h-3.5 rounded-full bg-sand"
                            style={{ width: `${w}%` }}
                          />
                          <span className="h-3.5 w-10 rounded-full bg-sand" />
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 flex items-start gap-2 rounded-lg border-2 border-dashed border-ink/25 bg-sand-light p-4 text-sm leading-relaxed font-semibold text-ink/65">
                      <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal" />
                      <span>
                        {menuNote} The itemised menu with prices is coming soon
                        — everything is chalked up at the bar in the meantime.
                      </span>
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        href={site.barWhatsApp.href}
                        external
                        variant="teal"
                        size="sm"
                      >
                        Ask About Today's Specials
                      </Button>
                      <Button to="/beach-bar/reservations" variant="outline" size="sm">
                        Reserve a Table
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
