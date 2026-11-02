/**
 * BEACH BAR MENU — static, owner-editable content.
 * FRONTEND-ONLY: per the owner's direction we intentionally do NOT publish
 * invented dishes or prices. Categories and descriptions are safe; the final
 * itemised menu with prices slots into this file when supplied.
 */

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: { src: string; alt: string };
}

export const menuNote =
  "Our online menu is being finished with the kitchen. Ask our team about today's catch and house specials — or message us on WhatsApp and we'll talk you through it.";

export const menuCategories: MenuCategory[] = [
  {
    id: "seafood",
    name: "Seafood",
    tagline: "Straight off the boat",
    description:
      "The sea decides the special here. Expect the day's catch grilled, cracked or fried the Bahamian way — simple, fresh and best eaten with the sand still on your feet.",
    image: {
      src: "/images/food/seafood-platter.jpg",
      alt: "A Caribbean seafood spread with grilled fish, plantains and fresh sides",
    },
  },
  {
    id: "burgers",
    name: "Burgers",
    tagline: "Two-handed business",
    description:
      "Proper beach-bar burgers — stacked, juicy and built for appetite. The kind you eat leaning over the table while the sun goes down.",
    image: {
      src: "https://images.pexels.com/photos/27588082/pexels-photo-27588082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "A hearty grill plate fresh off the Tiny's Beach Bar kitchen",
    },
  },
  {
    id: "pizza",
    name: "Pizza",
    tagline: "Hot from the oven",
    description:
      "Crisp bases, bubbling cheese and toppings that lean island-side. Easy to share — though you might not want to.",
    image: {
      src: "https://images.pexels.com/photos/36857725/pexels-photo-36857725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "A colourful island-style plate with rice, peas and fresh slaw",
    },
  },
  {
    id: "local-favorites",
    name: "Local Favorites",
    tagline: "Bahamian comfort",
    description:
      "The flavours that make Long Island home — island classics and kitchen staples, cooked the way the locals actually eat them.",
    image: {
      src: "https://images.pexels.com/photos/32793302/pexels-photo-32793302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Island-style dish with plantains and fresh herbs",
    },
  },
  {
    id: "drinks",
    name: "Drinks",
    tagline: "Cold. Very cold.",
    description:
      "Ice-cold beers, island pours, tropical mixes and refreshments for designated hammock-dwellers. If it's not cold, it's not leaving the bar.",
    image: {
      src: "/images/beach-bar/cocktails.jpg",
      alt: "Two tropical cocktails on a turquoise table with the sea behind",
    },
  },
];
