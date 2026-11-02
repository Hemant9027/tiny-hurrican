import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { maps, site } from "@/config/siteConfig";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

interface FormValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const inputCls =
  "w-full rounded-lg border-2 border-ink/20 bg-white px-4 py-3 text-[15px] font-semibold text-ink placeholder:text-ink/35 placeholder:font-medium focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30 transition-colors";
const labelCls = "mb-1.5 block text-sm font-extrabold tracking-tight";
const errCls = "mt-1.5 text-xs font-bold text-coral-deep";

const contactCards = [
  {
    icon: Mail,
    title: "Email us",
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: "Write an email",
    sticker: "bg-coral",
  },
  {
    icon: Phone,
    title: "Cottage questions",
    lines: [site.phone.label, `${site.phoneUS.label} (US)`],
    href: site.phone.href,
    cta: "Call the cottages",
    sticker: "bg-sunshine",
  },
  {
    icon: MessageCircle,
    title: "Beach Bar",
    lines: [`WhatsApp ${site.barWhatsApp.label}`],
    href: site.barWhatsApp.href,
    cta: "Message the bar",
    sticker: "bg-turquoise",
  },
];

export default function Contact() {
  useSEO({
    title: "Contact",
    description:
      "Get in touch with Tiny's Bahamas — cottages, beach bar, events and catering. Thompson Bay, Long Island, The Bahamas.",
    path: "/contact",
  });

  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { topic: "A cottage stay" } });

  /** FRONTEND-ONLY: the inquiry form composes a mailto: message. */
  const onSubmit = (v: FormValues) => {
    const subject = `Website inquiry — ${v.topic}`;
    const body = [
      `Hi Tiny's!`,
      "",
      v.message,
      "",
      `— ${v.name}`,
      `${v.email}`,
      "",
      `Topic: ${v.topic}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        tone="turquoise"
        eyebrow="Say Hello"
        title={
          <>
            We Answer Faster Than the{" "}
            <em className="text-teal">Tide</em>.
          </>
        }
        copy="Cottages, bar, events, catering or just island advice — pick your channel. A real human replies."
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Contact cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border-2 border-ink bg-white p-7 shadow-hard">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink text-ink",
                      c.sticker,
                    )}
                  >
                    <c.icon className="h-5.5 w-5.5" strokeWidth={2.3} />
                  </span>
                  <h2 className="font-display mt-5 text-2xl font-black">
                    {c.title}
                  </h2>
                  <div className="mt-2 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="font-semibold text-ink/70">
                        {l}
                      </p>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-extrabold text-teal"
                  >
                    {c.cta}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Address strip */}
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-xl border-2 border-ink bg-sand-light p-7 shadow-hard sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white">
                  <MapPin className="h-5.5 w-5.5 text-coral" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-black">
                    Find us on Long Island
                  </h2>
                  <p className="mt-1 font-semibold text-ink/65">
                    {site.address.line1}, {site.address.line2},{" "}
                    {site.address.island}, {site.address.country}
                  </p>
                </div>
              </div>
              <a
                href={maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-hard inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-sunshine px-5 py-2.5 font-bold text-ink transition-all hover:-translate-y-0.5"
              >
                <Navigation className="h-4.5 w-4.5" strokeWidth={2.4} />
                Directions
              </a>
            </div>
          </Reveal>

          {/* Inquiry form (mailto) */}
          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-xl border-2 border-ink bg-white p-7 shadow-hard-lg md:p-10"
              >
                <h2 className="font-display text-3xl font-black tracking-tight">
                  Drop Us a <em className="text-coral">Line</em>
                </h2>
                <p className="mt-2 text-sm font-semibold text-ink/60">
                  This opens your email app with everything pre-filled — no
                  forms disappearing into the ocean.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={labelCls}>
                      Your name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      placeholder="Jane Sunshine"
                      className={inputCls}
                      {...register("name", { required: "We'd love a name" })}
                    />
                    {errors.name && <p className={errCls}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className={labelCls}>
                      Your email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      inputMode="email"
                      placeholder="jane@example.com"
                      className={inputCls}
                      {...register("email", {
                        required: "So we can reply",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "That email looks off",
                        },
                      })}
                    />
                    {errors.email && <p className={errCls}>{errors.email.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-topic" className={labelCls}>
                      What's it about?
                    </label>
                    <select
                      id="c-topic"
                      className={cn(inputCls, "cursor-pointer")}
                      {...register("topic")}
                    >
                      <option>A cottage stay</option>
                      <option>Tiny's Beach Bar</option>
                      <option>Events & catering</option>
                      <option>Merch</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className={labelCls}>
                      Message *
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      placeholder="Tell us everything (or just the good bits)…"
                      className={cn(inputCls, "resize-none")}
                      {...register("message", {
                        required: "A tiny message, at least!",
                        minLength: { value: 10, message: "Give us a little more detail" },
                      })}
                    />
                    {errors.message && (
                      <p className={errCls}>{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="shadow-hard mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-2 border-ink bg-coral px-8 py-4 text-lg font-bold text-ink transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-coral-deep hover:text-cream sm:w-auto"
                >
                  <Mail className="h-5 w-5" strokeWidth={2.4} />
                  Compose Email
                </button>

                {sent && (
                  <p className="mt-4 flex items-start gap-2.5 rounded-lg border-2 border-ink bg-turquoise/35 p-4 text-sm font-semibold text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    Your email app should be open with your message ready — hit
                    send and we'll reply soon.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
        <WaveDivider fill="#25342e" />
      </section>
    </>
  );
}
