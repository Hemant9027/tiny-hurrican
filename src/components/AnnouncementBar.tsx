import { Sun, Waves } from "lucide-react";
import { announcement } from "@/config/siteConfig";

/** Scrolling announcement strip above the header. */
export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-ink py-2 text-cream">
      <span className="sr-only">{announcement}</span>
      <div className="animate-marquee flex w-max items-center" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-3 pr-3 text-[11px] font-extrabold uppercase tracking-[0.28em] whitespace-nowrap"
          >
            {announcement}
            <Sun className="h-3.5 w-3.5 text-sunshine" strokeWidth={2.5} />
            <span>Toes in the Sand. Good Times by the Sea.</span>
            <Waves className="h-3.5 w-3.5 text-turquoise" strokeWidth={2.5} />
          </span>
        ))}
      </div>
    </div>
  );
}
