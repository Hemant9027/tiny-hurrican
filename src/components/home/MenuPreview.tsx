import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { menuCategories, menuNote } from "@/data/menu";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

/** Interactive menu category preview — full version lives at /beach-bar/menu. */
export function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active)!;
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader
          eyebrow="The Menu"
          stickerColor="bg-coral"
          title={
            <>
              Straight From the <em className="text-teal">Beach Bar</em>{" "}
              Kitchen.
            </>
          }
          copy="Five crowd-pleasing corners of the menu. Pick a lane — or don't, we won't judge."
        />

        {/* Category pills */}
        <Reveal delay={0.1}>
          <div
            className="no-scrollbar mt-10 flex gap-2.5 overflow-x-auto pb-2"
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
                  "shadow-hard-sm shrink-0 cursor-pointer rounded-full border-2 border-ink px-5 py-2.5 text-sm font-extrabold tracking-tight transition-all",
                  active === c.id
                    ? "bg-ink text-cream"
                    : "bg-cream text-ink hover:bg-sunshine",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <Reveal delay={0.18}>
          <div className="mt-8 overflow-hidden rounded-xl border-2 border-ink bg-cream shadow-hard-lg">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={category.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2"
              >
                <div className="relative min-h-60 overflow-hidden max-md:border-b-2 md:border-r-2 border-ink">
                  <img
                    src={category.image.src}
                    alt={category.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <Sticker color="bg-turquoise" rotate="-rotate-2">
                    {category.tagline}
                  </Sticker>
                  <h3 className="font-display mt-4 text-3xl font-black tracking-tight">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {category.description}
                  </p>
                  <p className="mt-4 flex items-start gap-2 rounded-lg border-2 border-dashed border-ink/25 bg-sand-light p-3 text-[13px] leading-relaxed font-semibold text-ink/65">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {menuNote}
                  </p>
                  <div className="mt-6">
                    <Button to="/beach-bar/menu" variant="teal" size="sm">
                      See the Full Menu
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <WaveDivider fill="#fff8eb" />
    </section>
  );
}
