/**
 * COTTAGES — static content for Tiny's Hurricane Hole.
 * FRONTEND-ONLY: exterior photos are brand renders awaiting owner photography;
 * lifestyle/interior shots are licensed placeholders (Pexels). Capacities are
 * intentionally omitted until verified — do not add unverified specs.
 * Booking is external via Airbnb.
 */
import { site } from "@/config/siteConfig";

export interface Cottage {
  slug: string;
  name: string;
  shortName: string;
  /** Accent colour token used across the cottage's layouts. */
  accent: "sunshine" | "turquoise" | "coral";
  tagline: string;
  intro: string;
  description: string[];
  airbnb: string;
  hero: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  amenities: { icon: string; label: string }[];
}

export const cottages: Cottage[] = [
  {
    slug: "key-lime-cottage",
    name: "Key Lime Cottage",
    shortName: "Key Lime",
    accent: "sunshine",
    tagline: "Zesty, bright and barefoot-close to the sea.",
    intro:
      "A cheerful little hideaway with a squeeze of citrus colour — wake up, wander down the sandy path, and you're on the beach.",
    description: [
      "Key Lime Cottage is the morning person of our three cottages — bright, breezy and impossible to be grumpy in. Island colour, salt air and a porch made for slow coffee set the tone for easy days on Thompson Bay.",
      "Days here are simple: swim before breakfast, nap through the heat, then wander over to Tiny's Beach Bar when the light turns golden. No schedules, no shoes required.",
    ],
    airbnb: site.airbnb.keyLime,
    hero: {
      src: "/images/cottages/key-lime/exterior.jpg",
      alt: "Key Lime Cottage — cream beach cottage with lime-green shutters, a sandy path and palms, with the turquoise sea behind.",
    },
    gallery: [
      {
        src: "https://images.pexels.com/photos/14025910/pexels-photo-14025910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Breezy cottage bedroom with wooden details and a white canopy bed",
      },
      {
        src: "https://images.pexels.com/photos/6389020/pexels-photo-6389020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Sun-soaked bed with island pillows and a straw hat, ready for the beach",
      },
      {
        src: "https://images.pexels.com/photos/5007449/pexels-photo-5007449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        alt: "Gentle waves rolling onto the white sand of Thompson Bay",
      },
      {
        src: "https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Colourful sundown cocktails waiting at Tiny's Beach Bar, a short stroll away",
      },
    ],
    amenities: [
      { icon: "Waves", label: "Beachfront setting on Thompson Bay" },
      { icon: "Footprints", label: "Sandy path straight to the sea" },
      { icon: "UtensilsCrossed", label: "Tiny's Beach Bar a stroll away" },
      { icon: "Sun", label: "Sunrise coffee, sunset skies" },
      { icon: "Fish", label: "Swim & snorkel at your doorstep" },
      { icon: "Wind", label: "Cooled by the ocean breeze" },
    ],
  },
  {
    slug: "sea-grape-cottage",
    name: "Sea Grape Cottage",
    shortName: "Sea Grape",
    accent: "turquoise",
    tagline: "Shaded by sea grapes, kissed by the sea.",
    intro:
      "Tucked beneath sprawling sea grape trees with the turquoise Atlantic as its front yard — the shady, breezy one of the family.",
    description: [
      "Sea Grape Cottage sits in the dappled shade of its namesake trees, where the light flickers green and gold and the sea keeps murmuring a few sandy steps away. It's the cottage for readers, dreamers and afternoon nappers.",
      "Claim the deck with a cold drink, watch the tide change its mind, and let the island set the pace. When hunger calls, the Beach Bar is close enough to wander over barefoot.",
    ],
    airbnb: site.airbnb.seaGrape,
    hero: {
      src: "/images/cottages/sea-grape/exterior.jpg",
      alt: "Sea Grape Cottage — beachfront cottage with turquoise shutters under sea grape trees, facing the ocean.",
    },
    gallery: [
      {
        src: "https://images.pexels.com/photos/11479315/pexels-photo-11479315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Warm wooden cottage interior looking through to a cosy living space",
      },
      {
        src: "https://images.pexels.com/photos/15699338/pexels-photo-15699338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Vintage-style island bedroom with a wooden headboard and soft light",
      },
      {
        src: "https://images.pexels.com/photos/15902765/pexels-photo-15902765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        alt: "Turquoise waves washing over white sand at the cottage's doorstep",
      },
      {
        src: "https://images.pexels.com/photos/5560905/pexels-photo-5560905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Snorkelling in clear water just off the beach",
      },
    ],
    amenities: [
      { icon: "Waves", label: "Beachfront setting on Thompson Bay" },
      { icon: "Shell", label: "Shaded by native sea grape trees" },
      { icon: "UtensilsCrossed", label: "Tiny's Beach Bar a stroll away" },
      { icon: "Sun", label: "Deck made for slow afternoons" },
      { icon: "Fish", label: "Swim & snorkel at your doorstep" },
      { icon: "Wind", label: "Cooled by the ocean breeze" },
    ],
  },
  {
    slug: "the-palms",
    name: "The Palms",
    shortName: "The Palms",
    accent: "coral",
    tagline: "Hammock hours under a coconut grove.",
    intro:
      "Wrapped in a grove of tall coconut palms with a hammock that practically insists you lie down — The Palms is island time, distilled.",
    description: [
      "The Palms hides beneath towering coconut trees, where the fronds clatter softly in the trade winds and the hammock is the hardest-working piece of furniture on the property. Golden light, green shade, blue sea — that's the whole colour wheel here.",
      "It's the spot for travellers who like their days unscripted: beach in the morning, hammock by noon, and dinner with sandy feet at Tiny's Beach Bar.",
    ],
    airbnb: site.airbnb.thePalms,
    hero: {
      src: "/images/cottages/the-palms/exterior.jpg",
      alt: "The Palms — cosy cottage with coral accents beneath tall coconut palms, a hammock strung between the trees.",
    },
    gallery: [
      {
        src: "https://images.pexels.com/photos/30413719/pexels-photo-30413719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Warm rustic bedroom with natural wood and colourful island bedding",
      },
      {
        src: "https://images.pexels.com/photos/4571798/pexels-photo-4571798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Slow morning in a leafy green cottage room surrounded by tropical forest",
      },
      {
        src: "https://images.pexels.com/photos/4784391/pexels-photo-4784391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        alt: "Aerial view of turquoise water and palms along the Long Island shoreline",
      },
      {
        src: "https://images.pexels.com/photos/14622038/pexels-photo-14622038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Afternoon kayak drifting across the bright ocean in front of The Palms",
      },
    ],
    amenities: [
      { icon: "Waves", label: "Beachfront setting on Thompson Bay" },
      { icon: "Shell", label: "Hammock under the coconut palms" },
      { icon: "UtensilsCrossed", label: "Tiny's Beach Bar a stroll away" },
      { icon: "Sun", label: "Golden light through the fronds" },
      { icon: "Fish", label: "Swim & snorkel at your doorstep" },
      { icon: "Wind", label: "Cooled by the ocean breeze" },
    ],
  },
];

export const getCottage = (slug: string) =>
  cottages.find((c) => c.slug === slug);
