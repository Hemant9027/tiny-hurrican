import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Waves } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Sticker, SunBadge, WaveDivider } from "@/components/ui/decor";
import { easeOut } from "@/components/ui/Reveal";

const lines = [
  { text: "Beach Days.", color: "text-coral" },
  { text: "Bar Nights.", color: "text-teal" },
  { text: "Island Life.", color: "text-palm" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1500px] lg:min-h-[92vh] lg:grid-cols-[44%_56%]">
        {/* ------------------------- Content ------------------------- */}
        <div className="flex flex-col justify-center px-6 pt-32 pb-10 sm:px-10 lg:pt-40 lg:pb-24 lg:pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <Sticker color="bg-coral" rotate="-rotate-2">
              Hey, Paradise.
            </Sticker>
          </motion.div>

          <h1 className="font-display mt-7 text-[13.5vw] leading-[0.98] font-black tracking-tight text-balance sm:text-7xl lg:text-[4rem] xl:text-[5rem]">
            {lines.map((line, i) => (
              <motion.span
                key={line.text}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12 + i * 0.14,
                  ease: easeOut,
                }}
              >
                {line.text.split(" ")[0]}{" "}
                <em className={line.color}>{line.text.split(" ")[1]}</em>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            className="mt-7 max-w-md text-lg leading-relaxed text-ink/75"
          >
            Three beachfront cottages and a laid-back beach bar on Long Island,
            Bahamas. Everything you need for a relaxed island getaway.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: easeOut }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap"
          >
            <Button to="/stay" variant="coral" size="lg">
              Explore Our Cottages
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Button>
            <Button to="/beach-bar" variant="outline" size="lg">
              Discover Tiny's Beach Bar
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex items-center gap-3 text-sm font-bold tracking-tight text-ink/55"
          >
            <Waves className="h-5 w-5 text-turquoise" strokeWidth={2.5} />
            Thompson Bay · Long Island · The Bahamas
          </motion.div>
        </div>

        {/* ------------------------- Photography ------------------------- */}
        <div className="relative px-4 pb-16 sm:px-8 lg:px-0 lg:pt-40 lg:pr-[max(1rem,calc((100vw-1400px)/2))] lg:pb-24">
          {/* Solid colour blob behind the photo */}
          <div
            className="absolute top-1/2 left-6 hidden h-[70%] w-[86%] -translate-y-1/2 rounded-[3rem] bg-turquoise/45 lg:block"
            aria-hidden
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: easeOut }}
            className="relative h-[320px] overflow-hidden rounded-2xl border-2 border-ink shadow-hard-lg sm:h-[420px] lg:h-full lg:min-h-[560px]"
          >
            <img
              src="/images/hero/hero-main.jpg"
              alt="Turquoise water and palms at Tiny's beach on Thompson Bay, Long Island, Bahamas"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </motion.div>

          {/* Rotating sun badge overlapping the photo */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: easeOut }}
            className="absolute -bottom-2 left-6 z-10 lg:bottom-14 lg:-left-2"
          >
            <SunBadge size={118} className="drop-shadow-[3px_3px_0_rgba(37,52,46,0.9)]" />
          </motion.div>
        </div>
      </div>

      {/* Wave into the turquoise brand-intro section */}
      <WaveDivider fill="#67b8b1" />
    </section>
  );
}
