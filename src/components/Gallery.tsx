import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";
import { cn } from "@/utils/cn";

const spanClasses: Record<string, string> = {
  big: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
  std: "",
};

/**
 * Asymmetric photo grid + accessible lightbox (arrows, Escape, prev/next).
 */
export function Gallery({
  images,
  className,
}: {
  images: GalleryImage[] | { src: string; alt: string; span?: string }[];
  className?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      );
    },
    [images.length],
  );

  // Keyboard support + scroll lock
  useEffect(() => {
    if (index === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <div
        className={cn(
          "grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[170px] md:auto-rows-[190px] md:grid-cols-4",
          className,
        )}
      >
        {images.map((img, i) => (
          <motion.button
            key={img.src + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${img.alt}`}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.06 }}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-xl border-2 border-ink/10 bg-sand focus-visible:outline-4 focus-visible:outline-coral",
              "span" in img && img.span ? spanClasses[img.span as string] : "",
            )}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <span className="absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Expand className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </motion.button>
        ))}
      </div>

      {/* ------------------------------ Lightbox ------------------------------ */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-ink/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={close}
          >
            <div className="flex items-center justify-between px-2 py-2">
              <p className="rounded-full border-2 border-cream/30 px-3 py-1 text-xs font-extrabold tracking-[0.2em] text-cream uppercase">
                {index + 1} / {images.length}
              </p>
              <button
                onClick={close}
                aria-label="Close photo viewer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-coral text-ink shadow-hard-cream transition-transform hover:rotate-90"
              >
                <X className="h-5 w-5" strokeWidth={2.6} />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={index}
                  className="flex max-h-full max-w-5xl flex-col items-center"
                  initial={
                    reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <img
                    src={images[index].src}
                    alt={images[index].alt}
                    className="max-h-[70vh] w-auto max-w-full rounded-xl border-2 border-cream/40 object-contain"
                  />
                  <figcaption className="mt-4 max-w-xl text-center text-sm font-medium text-cream/80">
                    {images[index].alt}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              {/* Prev / next */}
              <button
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-1 sm:left-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink shadow-hard transition-all hover:-translate-x-0.5 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2.6} />
              </button>
              <button
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-1 sm:right-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink shadow-hard transition-all hover:translate-x-0.5 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2.6} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
