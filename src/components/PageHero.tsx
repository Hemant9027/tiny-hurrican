import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Sticker, SunBadge, WaveDivider } from "@/components/ui/decor";
import { easeOut } from "@/components/ui/Reveal";

type Tone = "cream" | "sand" | "turquoise" | "teal" | "sunshine" | "coral" | "palm" | "ink";

const tones: Record<Tone, { bg: string; text: string; sub: string }> = {
  cream: { bg: "bg-cream", text: "text-ink", sub: "text-ink/70" },
  sand: { bg: "bg-sand", text: "text-ink", sub: "text-ink/70" },
  turquoise: { bg: "bg-turquoise", text: "text-ink", sub: "text-ink/70" },
  teal: { bg: "bg-teal", text: "text-cream", sub: "text-cream/75" },
  sunshine: { bg: "bg-sunshine", text: "text-ink", sub: "text-ink/70" },
  coral: { bg: "bg-coral", text: "text-ink", sub: "text-ink/75" },
  palm: { bg: "bg-palm", text: "text-cream", sub: "text-cream/75" },
  ink: { bg: "bg-ink", text: "text-cream", sub: "text-cream/75" },
};

/** Compact, colourful hero for interior pages. */
export function PageHero({
  tone = "cream",
  eyebrow,
  title,
  copy,
  children,
  waveTo = "#fff8eb",
  className,
}: {
  tone?: Tone;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  children?: ReactNode;
  /** Colour of the section directly below — draws the transition wave. */
  waveTo?: string;
  className?: string;
}) {
  const t = tones[tone];
  const reduce = useReducedMotion();

  return (
    <section className={cn("relative overflow-hidden", t.bg)}>
      <div
        className="texture-dots pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      />
      <SunBadge
        className="absolute right-[6%] top-24 hidden opacity-90 lg:block"
        size={110}
      />
      <div
        className={cn(
          "relative mx-auto max-w-5xl px-6 pt-36 pb-16 text-center md:pt-48 md:pb-24",
          t.text,
          className,
        )}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <Sticker>{eyebrow}</Sticker>
        </motion.div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          className="font-display mx-auto mt-6 max-w-4xl text-5xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {copy && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: easeOut }}
            className={cn(
              "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty",
              t.sub,
            )}
          >
            {copy}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
      <WaveDivider fill={waveTo} className="-mt-px" />
    </section>
  );
}
