/**
 * TINY'S BAHAMAS — central site configuration.
 * Every business fact lives here so components never hardcode details.
 * FRONTEND-ONLY phase: swap these values as the owner confirms them.
 */

export interface NavLink {
  label: string;
  to: string;
  /** When true, `to` is a home-page anchor such as "/#experiences". */
  anchor?: boolean;
}

export const site = {
  name: "Tiny's Bahamas",
  shortName: "Tiny's",
  stayBrand: "Tiny's Hurricane Hole",
  barBrand: "Tiny's Beach Bar",
  tagline: "Toes in the Sand. Good Times by the Sea.",
  brandMessage: "Three Beachfront Cottages. One Beach Bar. Endless Island Vibes.",
  url: "https://www.tinysbahamas.com",

  email: "tiny@tinysbahamas.com",

  /** Bahamas cottage line */
  phone: { label: "+1 242-472-8104", href: "tel:+12424728104" },
  /** US cottage line */
  phoneUS: { label: "+1 754-327-2743", href: "tel:+17543272743" },
  /** Beach Bar WhatsApp — used for table reservation requests */
  barWhatsApp: {
    label: "+1 242-828-9324",
    number: "12428289324",
    href: "https://wa.me/12428289324",
  },

  address: {
    line1: "Indian Point Hole Road",
    line2: "Thompson Bay",
    island: "Long Island",
    country: "The Bahamas",
    mapsQuery: "Thompson Bay, Long Island, The Bahamas",
  },

  /** Airbnb listings — booking is handled entirely on Airbnb (external). */
  airbnb: {
    keyLime: "https://airbnb.com/h/tinysbahamas-keylime-cottage",
    seaGrape: "https://airbnb.com/h/tinysbahamas-seagrape-cottage",
    thePalms: "https://www.airbnb.com/h/tinysbahamas-thepalms-cottage",
  },

  /**
   * Social profiles — FRONTEND-ONLY rule: icons render ONLY when a verified
   * URL is configured here. Add verified destinations when supplied.
   */
  socials: [] as { label: string; href: string }[],
};

export const maps = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery,
  )}&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    site.address.mapsQuery,
  )}`,
};

export const nav = {
  left: [
    { label: "Stay", to: "/stay" },
    { label: "Beach Bar", to: "/beach-bar" },
    { label: "Experiences", to: "/#experiences", anchor: true },
  ] as NavLink[],
  right: [
    { label: "Shop", to: "/shop" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ] as NavLink[],
  mobile: [
    { label: "Stay", to: "/stay" },
    { label: "Beach Bar", to: "/beach-bar" },
    { label: "Menu", to: "/beach-bar/menu" },
    { label: "Reserve a Table", to: "/beach-bar/reservations" },
    { label: "Experiences", to: "/#experiences", anchor: true },
    { label: "Shop", to: "/shop" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ] as NavLink[],
};

export const announcement =
  "Long Island, The Bahamas — Your Beach Escape Awaits";
