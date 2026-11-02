import { useId } from "react";
import { Sun } from "lucide-react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/*  WaveDivider — solid SVG wave used to transition between sections   */
/* ------------------------------------------------------------------ */
export function WaveDivider({
  fill,
  className,
  flip = false,
}: {
  /** CSS colour the wave is filled with (the colour of the section below). */
  fill: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "block h-[44px] w-full md:h-[72px]",
        flip && "rotate-180",
        className,
      )}
      fill={fill}
    >
      <path d="M0,52 C240,96 480,4 720,46 C960,88 1200,10 1440,52 L1440,90 L0,90 Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SunBadge — rotating circular wordmark around a little sun          */
/* ------------------------------------------------------------------ */
export function SunBadge({
  className,
  size = 124,
}: {
  className?: string;
  size?: number;
}) {
  const id = useId();
  return (
    <div
      className={cn("relative text-ink", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        className="animate-spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id={id}
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text className="fill-current text-[10px] font-extrabold uppercase tracking-[0.26em]">
          <textPath href={`#${id}`}>
            Tiny's Bahamas · Toes in the Sand ·
          </textPath>
        </text>
      </svg>
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-sunshine shadow-hard-sm"
        style={{ width: size * 0.44, height: size * 0.44 }}
      >
        <Sun className="h-1/2 w-1/2 text-ink" strokeWidth={2.2} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticker — rotated label chip                                       */
/* ------------------------------------------------------------------ */
export function Sticker({
  children,
  color = "bg-sunshine",
  rotate = "-rotate-2",
  className,
}: {
  children: React.ReactNode;
  color?: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "shadow-hard-sm inline-block rounded-full border-2 border-ink px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink",
        color,
        rotate,
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Squiggle — hand-drawn underline for display headings               */
/* ------------------------------------------------------------------ */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 20"
      fill="none"
      aria-hidden="true"
      className={cn("h-3 w-44 md:h-4 md:w-56", className)}
    >
      <path
        d="M4 12C30 4 54 18 80 10C106 2 132 18 158 10C184 2 200 14 216 8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
