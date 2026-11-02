import { Compass, Fish, Sailboat, Sun, type LucideIcon } from "lucide-react";
import { experiences } from "@/data/experiences";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

const icons: Record<string, LucideIcon> = { Sun, Fish, Sailboat, Compass };

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Out & About"
            stickerColor="bg-turquoise"
            title={
              <>
                Make Yourself at Home in{" "}
                <em className="text-coral">Paradise</em>.
              </>
            }
            copy="The cottage is home base — the island is the playground. Here's how days around Tiny's tend to unfold."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {experiences.map((exp, i) => {
            const Icon = icons[exp.icon] ?? Sun;
            return (
              <Reveal
                key={exp.title}
                delay={(i % 2) * 0.1}
                className={cn(spans[i], "group")}
              >
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border-2 border-ink shadow-hard md:min-h-[340px]">
                  <img
                    src={exp.image.src}
                    alt={exp.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink shadow-hard-sm">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2.3} />
                  </span>
                  <span className="font-display absolute top-4 right-4 text-4xl font-black text-cream/80 drop-shadow-[2px_2px_0_rgba(37,52,46,0.6)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-ink/70 p-5 backdrop-blur-[2px]">
                    <h3 className="font-display text-2xl font-black text-cream">
                      {exp.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream/85">
                      {exp.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-base font-semibold text-ink/60">
            Curious about gear or island tips? Ask at the bar — we love this
            island and we'll happily overshare.
          </p>
        </Reveal>
      </div>

      <WaveDivider fill="#f2ca68" />
    </section>
  );
}
