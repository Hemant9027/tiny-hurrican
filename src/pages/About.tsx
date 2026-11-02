import { ArrowRight, HeartHandshake, Sun, Waves } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { cottages } from "@/data/cottages";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeader } from "@/components/ui/Reveal";
import { Sticker, WaveDivider } from "@/components/ui/decor";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Sun,
    title: "Easy, always",
    copy: "No dress codes, no itineraries, no fuss. Island time is the only schedule we keep.",
  },
  {
    icon: Waves,
    title: "Feet in the sand",
    copy: "Everything at Tiny's happens within steps of Thompson Bay — sleeping, eating, toasting the sunset.",
  },
  {
    icon: HeartHandshake,
    title: "Hosted like family",
    copy: "We live here and we love it. Ask us anything — the best spots rarely make it onto maps.",
  },
];

export default function About() {
  useSEO({
    title: "About Tiny's",
    description:
      "Tiny's Bahamas on Long Island — three beachfront cottages (Tiny's Hurricane Hole) and one laid-back beach bar, sharing one stretch of Thompson Bay sand.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        tone="palm"
        eyebrow="About Tiny's"
        title={
          <>
            One Beach. Three Cottages.{" "}
            <em className="text-sunshine">One Very Good Bar.</em>
          </>
        }
        copy="Tiny's is what happens when a family decides their favourite stretch of beach is too good not to share."
        waveTo="#fff8eb"
      />

      {/* Story */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="The Story"
                stickerColor="bg-turquoise"
                title={
                  <>
                    Hospitality,{" "}
                    <em className="text-coral">Backyard-Bahamas</em> Style.
                  </>
                }
              />
              <Reveal delay={0.12}>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/72">
                  <p>
                    On Thompson Bay's bright shallows we built the kind of
                    place we always wished existed on holiday: cottages close
                    enough to hear the water, a bar that feeds you properly,
                    and hosts who actually live here.
                  </p>
                  <p>
                    {`Tiny's Hurricane Hole`} is the cottage side of the family
                    — Key Lime, Sea Grape and The Palms.{" "}
                    {`Tiny's Beach Bar`} is the kitchen, the drinks and the
                    gossip. Together they're one small, sunny hospitality
                    experience that never takes itself too seriously.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.08} className="relative">
              <img
                src="/images/gallery/sunset.jpg"
                alt="A golden Bahamas sunset over calm turquoise water with silhouetted palms"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full -rotate-1 rounded-xl border-2 border-ink object-cover shadow-hard-lg transition-transform duration-500 hover:rotate-0"
              />
              <div className="absolute -bottom-5 right-8 rotate-3">
                <Sticker color="bg-sunshine">Home sweet home</Sticker>
              </div>
            </Reveal>
          </div>

          {/* The family */}
          <div className="mt-24">
            <SectionHeader
              align="center"
              eyebrow="The Family"
              stickerColor="bg-sand"
              title={
                <>
                  Pick a Door, <em className="text-teal">Any Door</em>.
                </>
              }
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cottages.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.07}>
                  <Link
                    to={`/stay/${c.slug}`}
                    className="group block h-full overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard-lg"
                  >
                    <img
                      src={c.hero.src}
                      alt={c.hero.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <h3 className="font-display text-xl font-black">
                        {c.name}
                      </h3>
                      <p className="font-display mt-1 text-[15px] italic text-teal">
                        {c.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
              <Reveal delay={0.24}>
                <Link
                  to="/beach-bar"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-teal shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard-lg"
                >
                  <img
                    src="/images/beach-bar/bar.jpg"
                    alt="Tiny's Beach Bar with colourful stools facing the sea"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-black text-cream">
                      Tiny's Beach Bar
                    </h3>
                    <p className="font-display mt-1 text-[15px] italic text-sunshine">
                      Where everyone ends up.
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-extrabold text-cream">
                      Visit the bar
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border-2 border-ink bg-sand-light p-7 shadow-hard">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-turquoise text-ink">
                    <v.icon className="h-5.5 w-5.5" strokeWidth={2.3} />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-black">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink/70">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#e97862" />
      </section>

      <FinalCTA />
    </>
  );
}
