import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Tiny's wordmark: stacked "TINY'S / BAHAMAS" with a little sun.
 * `tone` switches between ink (on light backgrounds) and cream (on dark).
 */
export function Logo({
  tone = "ink",
  compact = false,
  onClick,
}: {
  tone?: "ink" | "cream";
  compact?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/"
      aria-label="Tiny's Bahamas — home"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5 leading-none"
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-full border-2 bg-sunshine text-ink transition-transform duration-500 group-hover:rotate-90",
          compact ? "h-8 w-8 border-ink" : "h-10 w-10 border-current",
          tone === "cream" ? "border-cream" : "border-ink",
        )}
      >
        <Sun
          className={compact ? "h-4.5 w-4.5" : "h-5.5 w-5.5"}
          strokeWidth={2.4}
        />
      </span>
      <span className="flex flex-col items-start">
        <span
          className={cn(
            "font-display font-black tracking-tight",
            compact ? "text-[1.55rem]" : "text-[1.9rem]",
            tone === "cream" ? "text-cream" : "text-ink",
          )}
        >
          TINY'S
        </span>
        <span
          className={cn(
            "font-sans font-extrabold uppercase",
            compact
              ? "text-[8.5px] tracking-[0.42em]"
              : "text-[10px] tracking-[0.46em]",
            tone === "cream" ? "text-sunshine" : "text-coral",
          )}
        >
          Bahamas
        </span>
      </span>
    </Link>
  );
}
