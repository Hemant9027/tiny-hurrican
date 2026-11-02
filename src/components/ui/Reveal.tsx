import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Sticker } from "@/components/ui/decor";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered fade/rise wrapper that respects reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Consistent section heading block: sticker eyebrow + display title + copy. */
export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false,
  stickerColor = "bg-sunshine",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
  stickerColor?: string;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Sticker color={stickerColor}>{eyebrow}</Sticker>
      <h2
        className={cn(
          "font-display mt-5 text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            dark ? "text-cream/80" : "text-ink/75",
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export const easeOut = EASE;
