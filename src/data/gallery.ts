/**
 * PHOTO GALLERY — mix of Tiny's brand renders and licensed placeholder
 * photography (Pexels). FRONTEND-ONLY: replace placeholders with owner
 * photography as it becomes available. `span` drives the asymmetric grid.
 */

export type GallerySpan = "big" | "wide" | "tall" | "std";

export interface GalleryImage {
  src: string;
  alt: string;
  span: GallerySpan;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/sunset.jpg",
    alt: "Golden sunset melting into the sea on Long Island",
    span: "big",
  },
  {
    src: "/images/beach-bar/bar.jpg",
    alt: "Tiny's Beach Bar — colourful stools and thatch roof facing the sea",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/4784391/pexels-photo-4784391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Aerial view of palms and vivid turquoise water along the shore",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/6149500/pexels-photo-6149500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Snorkelling for seashells over a shallow reef",
    span: "tall",
  },
  {
    src: "/images/beach-bar/cocktails.jpg",
    alt: "Tropical cocktails on a turquoise table by the water",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/5007449/pexels-photo-5007449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Soft waves rolling across white sand",
    span: "wide",
  },
  {
    src: "/images/food/seafood-platter.jpg",
    alt: "A Caribbean seafood spread fresh from the grill",
    span: "std",
  },
  {
    src: "/images/cottages/sea-grape/exterior.jpg",
    alt: "Sea Grape Cottage tucked under sea grape trees by the beach",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/14519339/pexels-photo-14519339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Friends lingering at a beachside bar as the sun drops",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/14622038/pexels-photo-14622038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "A kayak gliding over bright open water",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/6389020/pexels-photo-6389020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Cottage bed with a straw hat waiting for the beach",
    span: "std",
  },
  {
    src: "/images/cottages/key-lime/exterior.jpg",
    alt: "Key Lime Cottage bright in the morning sun",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/36857725/pexels-photo-36857725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Island plate with rice, peas and colourful slaw",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/15902765/pexels-photo-15902765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Turquoise water meeting the shoreline from above",
    span: "wide",
  },
  {
    src: "/images/cottages/the-palms/exterior.jpg",
    alt: "The Palms cottage resting beneath tall coconut palms",
    span: "std",
  },
  {
    src: "https://images.pexels.com/photos/27506369/pexels-photo-27506369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Snorkellers and kayaks scattered across clear turquoise water",
    span: "std",
  },
];

/** Compact preview strip for the homepage. */
export const homeGalleryImages = galleryImages.slice(0, 7);

/** Beach Bar page — curated bar, food and atmosphere shots. */
export const beachBarImages: GalleryImage[] = [
  galleryImages[1], // the bar
  galleryImages[6], // seafood platter
  galleryImages[4], // cocktails
  galleryImages[8], // friends at sundown
  galleryImages[0], // sunset
  galleryImages[12], // island plate
];
