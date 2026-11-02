/**
 * MERCHANDISE — FRONTEND-ONLY SAMPLE CATALOGUE.
 * All products, prices and photography are ILLUSTRATIVE placeholders until the
 * owner supplies the real range. Cart state lives in localStorage only; no
 * payment or order processing exists in this phase.
 */

export type ProductCategory = "Shirts" | "Hats" | "Accessories";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number; // USD, illustrative
  blurb: string;
  description: string;
  image: { src: string; alt: string };
  sizes: string[];
  colors: ProductColor[];
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "coral-palm-tee",
    name: "Coral Palm Tee",
    category: "Shirts",
    price: 34,
    blurb: "The unofficial uniform of beach-bar afternoons.",
    description:
      "A soft, sun-faded tee with a little embroidered palm on the chest. Wear it to the bar, then wear it home and confuse everyone's winter.",
    image: {
      src: "/images/merchandise/tee-coral.jpg",
      alt: "Coral Tiny's t-shirt with a small embroidered palm tree, folded on cream linen",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Coral", hex: "#E97862" },
      { name: "Cream", hex: "#FFF8EB" },
      { name: "Ink", hex: "#25342E" },
    ],
    badge: "Best Seller",
  },
  {
    slug: "sunshine-wave-cap",
    name: "Sunshine Wave Cap",
    category: "Hats",
    price: 28,
    blurb: "Keeps the sun off. Keeps the vibe on.",
    description:
      "A sunshine-yellow cap with a tiny turquoise wave stitched up front. Adjustable, packable, and basically mandatory after your second day on the island.",
    image: {
      src: "/images/merchandise/cap-sunshine.jpg",
      alt: "Sunshine-yellow Tiny's cap with an embroidered turquoise wave, on a turquoise background",
    },
    sizes: ["One Size"],
    colors: [
      { name: "Sunshine", hex: "#F2CA68" },
      { name: "Turquoise", hex: "#67B8B1" },
    ],
    badge: "New",
  },
  {
    slug: "thompson-straw-hat",
    name: "Thompson Straw Hat",
    category: "Hats",
    price: 30,
    blurb: "Serious shade for unserious afternoons.",
    description:
      "A breezy woven straw hat named after our bay. Wide enough to hide a nap, light enough to forget you're wearing it.",
    image: {
      src: "https://images.pexels.com/photos/5038138/pexels-photo-5038138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Woven straw sun hat resting on a striped beach towel",
    },
    sizes: ["One Size"],
    colors: [{ name: "Natural", hex: "#E9D8BD" }],
  },
  {
    slug: "beach-day-tote",
    name: "Beach Day Tote",
    category: "Accessories",
    price: 26,
    blurb: "Fits a towel, a novel and three kinds of snacks.",
    description:
      "A sturdy carry-everything tote that swallows beach gear whole and shrugs off sand. The bag you reach for every single morning.",
    image: {
      src: "https://images.pexels.com/photos/3850490/pexels-photo-3850490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Cream canvas tote bag with sunglasses tucked inside, flat lay",
    },
    sizes: ["One Size"],
    colors: [
      { name: "Cream", hex: "#FFF8EB" },
      { name: "Palm", hex: "#456D4C" },
    ],
  },
  {
    slug: "palm-canvas-tote",
    name: "Palm Canvas Tote",
    category: "Accessories",
    price: 29,
    blurb: "Groceries on Thursday, beach gear on Friday.",
    description:
      "A natural canvas tote with long handles and plenty of room. Equally happy carrying limes from the market or towels to the bay.",
    image: {
      src: "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Natural canvas tote bag beside a leafy green plant",
    },
    sizes: ["One Size"],
    colors: [{ name: "Natural", hex: "#E9D8BD" }],
  },
  {
    slug: "island-explorer-kit",
    name: "Island Explorer Kit",
    category: "Accessories",
    price: 42,
    blurb: "Hat, sunnies-pocket pouch and beach-day extras, together.",
    description:
      "A bundle of Tiny's favourites for long island days — pack it in your bag and you're ready for whatever the road (or the tide) decides.",
    image: {
      src: "https://images.pexels.com/photos/10874298/pexels-photo-10874298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Flat lay of travel essentials including a hat, camera and cup",
    },
    sizes: ["One Size"],
    colors: [{ name: "Mixed", hex: "#67B8B1" }],
    badge: "Limited",
  },
];

export const productCategories: ("All" | ProductCategory)[] = [
  "All",
  "Shirts",
  "Hats",
  "Accessories",
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
