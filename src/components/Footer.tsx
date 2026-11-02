import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarHeart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { site, maps } from "@/config/siteConfig";
import { cottages } from "@/data/cottages";
import { Logo } from "@/components/Logo";
import { SmartAnchor } from "@/components/SmartAnchor";

const linkCls =
  "group inline-flex items-center gap-1.5 text-cream/75 transition-colors hover:text-sunshine text-[15px] font-medium w-fit";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="texture-dots relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          {/* Brand block */}
          <div className="flex flex-col items-center text-center">
            <Logo tone="cream" />
            <p className="font-display mt-4 text-xl italic text-sunshine">
              {site.tagline}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/60">
              {site.stayBrand} & {site.barBrand} — three beachfront cottages and
              one very laid-back beach bar on Long Island, The Bahamas.
            </p>
          </div>

          {/* Link columns */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-turquoise">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link to="/stay" className={linkCls}>
                    Stay With Us
                  </Link>
                </li>
                <li>
                  <Link to="/beach-bar" className={linkCls}>
                    Tiny's Beach Bar
                  </Link>
                </li>
                <li>
                  <Link to="/beach-bar/menu" className={linkCls}>
                    Menu
                  </Link>
                </li>
                <li>
                  <SmartAnchor to="/#experiences" className={linkCls}>
                    Experiences
                  </SmartAnchor>
                </li>
                <li>
                  <Link to="/shop" className={linkCls}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={linkCls}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={linkCls}>
                    About Tiny's
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={linkCls}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-turquoise">
                Our Cottages
              </h3>
              <ul className="mt-4 space-y-4">
                {cottages.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/stay/${c.slug}`}
                      className="font-display text-lg font-bold text-cream transition-colors hover:text-sunshine"
                    >
                      {c.name}
                    </Link>
                    <a
                      href={c.airbnb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 flex items-center gap-1 text-[13px] font-semibold text-cream/55 transition-colors hover:text-sunshine"
                    >
                      Book on Airbnb
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-turquoise">
                Beach Bar
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link to="/beach-bar" className={linkCls}>
                    Good food. Cold drinks. Barefoot vibes.
                  </Link>
                </li>
                <li>
                  <Link to="/beach-bar/reservations" className={linkCls}>
                    Reserve a table
                  </Link>
                </li>
                <li>
                  <a
                    href={site.barWhatsApp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCls}
                  >
                    WhatsApp {site.barWhatsApp.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <Link to="/beach-bar/menu" className={linkCls}>
                    Events & catering — just ask
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-turquoise">
                Say Hello
              </h3>
              <address className="mt-4 space-y-3 not-italic">
                <p className="flex items-start gap-2 text-[15px] leading-relaxed text-cream/75">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-coral" />
                  <span>
                    {site.address.line1}, {site.address.line2},
                    <br />
                    {site.address.island}, {site.address.country}
                  </span>
                </p>
                <a href={`mailto:${site.email}`} className={linkCls}>
                  <Mail className="h-4 w-4 text-coral" /> {site.email}
                </a>
                <a href={site.phone.href} className={linkCls}>
                  <Phone className="h-4 w-4 text-coral" /> {site.phone.label}
                </a>
                <a href={site.phoneUS.href} className={linkCls}>
                  <Phone className="h-4 w-4 text-coral" /> {site.phoneUS.label}{" "}
                  (US)
                </a>
                <a
                  href={maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Get directions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </address>
            </div>
          </div>

          {/* Verified socials only — renders when URLs are configured */}
          {site.socials.length > 0 && (
            <div className="mt-12 flex justify-center gap-4">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cream/70 hover:text-sunshine"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Giant watermark */}
        <div
          className="font-display pointer-events-none -mb-6 text-center text-[18vw] leading-[0.75] font-black tracking-tight text-cream/[0.06] select-none md:-mb-10"
          aria-hidden="true"
        >
          TINY'S
        </div>

        <div className="border-t-2 border-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[13px] font-medium text-cream/50 sm:flex-row">
            <p>
              © {year} {site.name} · {site.address.island},{" "}
              {site.address.country}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <p className="flex items-center gap-2">
                <CalendarHeart className="h-4 w-4 text-sunshine" />
                Toes in the sand. Good times by the sea.
              </p>
              <span className="hidden text-cream/20 sm:inline">·</span>
              <p>
                Designed & developed by{" "}
                <a
                  href="https://infycrestsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cream/70 transition-colors hover:text-sunshine"
                >
                  Infycrest Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
