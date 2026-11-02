import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  Users,
} from "lucide-react";
import { site } from "@/config/siteConfig";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/decor";
import { cn } from "@/utils/cn";

/**
 * WhatsApp reservation REQUESTS — frontend-only. The form builds a
 * URL-encoded message and opens wa.me; the bar team confirms by reply.
 */

interface FormValues {
  name: string;
  phone: string;
  partySize: string;
  date: string;
  time: string;
  requests: string;
}

const inputCls =
  "w-full rounded-lg border-2 border-ink/20 bg-white px-4 py-3 text-[15px] font-semibold text-ink placeholder:text-ink/35 placeholder:font-medium focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30 transition-colors";
const labelCls = "mb-1.5 block text-sm font-extrabold tracking-tight";
const errCls = "mt-1.5 text-xs font-bold text-coral-deep";

export default function Reservations() {
  useSEO({
    title: "Reserve a Table",
    description:
      "Request a table at Tiny's Beach Bar, Thompson Bay, Long Island — your request is sent to the team on WhatsApp and confirmed by reply.",
    path: "/beach-bar/reservations",
  });

  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { partySize: "2" } });

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (v: FormValues) => {
    const lines = [
      "Hello Tiny's Beach Bar! I'd like to request a table.",
      "",
      `Name: ${v.name}`,
      `Contact number: ${v.phone}`,
      `Party size: ${v.partySize}`,
      `Preferred date: ${v.date}`,
      `Preferred time: ${v.time}`,
      v.requests.trim() ? `Special requests: ${v.requests.trim()}` : null,
      "",
      "(Reservation request — please reply to confirm.)",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.barWhatsApp.number}?text=${encodeURIComponent(lines)}`;
    setWaUrl(url);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        tone="coral"
        eyebrow="Tiny's Beach Bar"
        title={
          <>
            Save You a <em className="text-cream drop-shadow-[2px_2px_0_rgba(37,52,46,0.35)]">Seat</em>?
          </>
        }
        copy="Tell us when you're coming and how many sandy feet to expect. Your request goes straight to the bar team on WhatsApp."
        waveTo="#fff8eb"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            {/* ------------ What happens ------------ */}
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-xl border-2 border-ink bg-white p-7 shadow-hard">
                  <h2 className="font-display text-2xl font-black">
                    How it works
                  </h2>
                  <ol className="mt-5 space-y-4">
                    {[
                      "Fill in the request — takes about 30 seconds.",
                      "WhatsApp opens with your message ready to send.",
                      "The team replies to confirm your table. That's it.",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-sm font-black">
                          {i + 1}
                        </span>
                        <span className="pt-1 text-[15px] font-semibold text-ink/75">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={site.barWhatsApp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2.5 rounded-lg border-2 border-ink bg-teal px-5 py-3 font-bold text-cream shadow-hard transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp {site.barWhatsApp.label}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex items-start gap-3 rounded-xl border-2 border-ink bg-sunshine/60 p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
                  <p className="text-sm leading-relaxed font-bold text-ink">
                    Your reservation request will be sent to the Tiny's Beach
                    Bar team through WhatsApp. Your table is confirmed only
                    after the team responds.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex items-start gap-3 rounded-xl border-2 border-ink bg-turquoise/45 p-5">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
                  <p className="text-sm leading-relaxed font-bold text-ink">
                    Big crew, birthday bash or busload of cousins? Mention it in
                    special requests — we cater and host events too.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ---------------- The form ---------------- */}
            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-xl border-2 border-ink bg-white p-7 shadow-hard-lg md:p-9"
              >
                <h2 className="font-display flex items-center gap-2.5 text-2xl font-black">
                  <CalendarCheck className="h-6 w-6 text-coral" />
                  Request a Table
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelCls}>
                      Full name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Sunshine"
                      className={inputCls}
                      {...register("name", { required: "Please tell us your name" })}
                    />
                    {errors.name && <p className={errCls}>{errors.name.message}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelCls}>
                      Contact number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+1 …"
                      className={inputCls}
                      {...register("phone", {
                        required: "We need a number to confirm",
                        minLength: { value: 7, message: "That number looks short" },
                      })}
                    />
                    {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="partySize" className={labelCls}>
                      Party size *
                    </label>
                    <select
                      id="partySize"
                      className={cn(inputCls, "cursor-pointer")}
                      {...register("partySize", { required: true })}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="9+">9+ (we'll make a plan)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className={labelCls}>
                      Preferred date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      className={cn(inputCls, "cursor-pointer")}
                      {...register("date", { required: "Pick a date" })}
                    />
                    {errors.date && <p className={errCls}>{errors.date.message}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="time" className={labelCls}>
                      Preferred time *
                    </label>
                    <input
                      id="time"
                      type="text"
                      placeholder="e.g. around sunset, or 6-ish"
                      className={inputCls}
                      {...register("time", {
                        required: "Give us a rough time — island time counts",
                      })}
                    />
                    {errors.time && <p className={errCls}>{errors.time.message}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="requests" className={labelCls}>
                      Special requests
                    </label>
                    <textarea
                      id="requests"
                      rows={3}
                      placeholder="Celebrations, high chairs, dietary needs…"
                      className={cn(inputCls, "resize-none")}
                      {...register("requests")}
                    />
                  </div>
                </div>

                <Button type="submit" variant="coral" size="lg" className="mt-8 w-full">
                  <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                  Send Request via WhatsApp
                </Button>

                {sent && (
                  <p className="mt-4 flex items-start gap-2.5 rounded-lg border-2 border-ink bg-turquoise/35 p-4 text-sm font-semibold text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span>
                      WhatsApp should now be open with your request. If it
                      didn't open,{" "}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold text-teal underline decoration-wavy underline-offset-4"
                      >
                        tap here to try again
                      </a>
                      . Remember — your table is confirmed once the team replies.
                    </span>
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
