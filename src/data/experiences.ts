/**
 * ISLAND EXPERIENCES — illustrative activity content (licensed placeholder
 * photography). Swap images/copy with owner-supplied details later.
 */

export interface Experience {
  title: string;
  blurb: string;
  icon: string;
  image: { src: string; alt: string };
}

export const experiences: Experience[] = [
  {
    title: "Beachfront Relaxation",
    blurb:
      "Claim your patch of Thompson Bay sand and do gloriously little. The hardest decision: sun or shade.",
    icon: "Sun",
    image: {
      src: "https://images.pexels.com/photos/5007449/pexels-photo-5007449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Gentle turquoise waves lapping a quiet white-sand beach",
    },
  },
  {
    title: "Snorkel the Shallows",
    blurb:
      "Slide into clear, calm water and meet the locals — the finned kind. Bring a mask; the bay does the rest.",
    icon: "Fish",
    image: {
      src: "https://images.pexels.com/photos/6149500/pexels-photo-6149500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "A snorkeller collecting seashells over a shallow reef",
    },
  },
  {
    title: "Kayaks & Ocean Adventures",
    blurb:
      "Paddle the coastline, chase the horizon and earn your sunset cocktail the honest way.",
    icon: "Sailboat",
    image: {
      src: "https://images.pexels.com/photos/14622038/pexels-photo-14622038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "A bright kayak cutting across open turquoise water",
    },
  },
  {
    title: "Explore Long Island",
    blurb:
      "Cliffs, coves, blue holes and bakeries — Long Island rewards the curious. We'll point you down the right road.",
    icon: "Compass",
    image: {
      src: "https://images.pexels.com/photos/843643/pexels-photo-843643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "An island lighthouse and turquoise coastline waiting to be explored",
    },
  },
];
