export interface ProductDetails {
  gemstone: string;
  accentStone?: string;
  preciousMetal: string;
  totalWeight?: string;
}

export interface Product {
  id: string;
  handle: string;
  name: string;
  price?: string;
  category: "Ring" | "Pendant" | "Other";
  description?: string;
  images: string[];
  image?: string; // Backwards compatibility for list views
  details?: ProductDetails;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "topaz-ring",
    handle: "topaz-ring",
    name: "20 ct Swiss Blue Topaz - Sterling Silver Ring",
    price: "€850.00 EUR",
    category: "Ring",
    description: "A magnificent 20 ct Swiss Blue Topaz, precision-cut to maximize its brilliant azure hue. Set in a sleek, high-polished Sterling Silver mount that emphasizes the stone's impressive clarity and size. This ring is a statement of modern luxury and cool elegance.",
    images: ["/images/products/topaz-ring.png", "/images/products/topaz-ring.png", "/images/products/topaz-ring.png", "/images/products/topaz-ring.png"],
    image: "/images/products/topaz-ring.png",
    details: {
      gemstone: "20 ct Swiss Blue Topaz, Emerald Cut",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "12.5 g"
    },
    available: true,
  },
  {
    id: "lemon-quartz-ring",
    handle: "lemon-quartz-ring",
    name: "30 ct Portuguese-Cut Lemon Quartz - Sterling Silver Ring",
    price: "€920.00 EUR",
    category: "Ring",
    description: "Featuring a stunning 30 ct Lemon Quartz with a mesmerizing Portuguese cut, this ring captures light from every angle. The vibrant yellow gemstone is securely nestled in a handcrafted Sterling Silver setting, offering a blend of bold color and classic craftsmanship.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "30 ct Lemon Quartz, Portuguese Cut",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "15.2 g"
    },
    available: true,
  },
  {
    id: "highest-quality-amethyst",
    handle: "highest-quality-23-15-cts-rwanda-amethyst-set-in-14k-yellow-gold-with-peridots",
    name: "23 ct Royal Purple Amethyst & Peridots - 14k Yellow Gold",
    price: "€1,450.00 EUR",
    category: "Ring",
    description: "A royal masterpiece featuring a 23 ct Deep Purple Amethyst from Rwanda. The center stone is framed by vibrant green Peridots, creating a striking contrast. Set in 14k Yellow Gold, this ring exudes regal charm and sophistication.",
    images: ["/images/products/highest-quality-amethyst.png", "/images/products/highest-quality-amethyst.png"],
    image: "/images/products/highest-quality-amethyst.png",
    details: {
      gemstone: "23.15 ct Rwanda Amethyst, Cushion Cut",
      accentStone: "1.2 ct Peridots",
      preciousMetal: "14k Combined Yellow Gold",
      totalWeight: "9.8 g"
    },
    available: true,
  },
  {
    id: "kunzite-ring",
    handle: "kunzite-ring",
    name: "5.5 Cts Light Pink Kunzite & Sky Blue Topaz Ring - Sterling Silver",
    price: "€780.00 EUR",
    category: "Ring",
    description: "Delicate and feminine, this ring pairs a 5.5 ct Light Pink Kunzite with sparkling Sky Blue Topaz accents. The pastel tones are perfectly complemented by the bright Sterling Silver setting, making it an ideal piece for spring and summer elegance.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "5.5 ct Kunzite, Oval Cut",
      accentStone: "Sky Blue Topaz",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "6.4 g"
    },
    available: true,
  },
  {
    id: "opal-pendant-19-2k",
    handle: "opal-pendant-19-2k",
    name: "27.2 ct Dark Base Honeycomb Opal - 19.2k Yellow Gold Pendant",
    price: "€3,450.00 EUR",
    category: "Pendant",
    description: "A 27.22 ct Welo Ethiopian Opal, with a dark base and honeycomb pattern, showing remarkable fire and play-of-colour, set in 19.2k solid yellow gold and accented with a 5mm Afghani Peridot. This pendant fascinates, because of it's color flashes, large size, and rare materials - a true statement piece.",
    images: ["/images/products/opal-pendant-19-2k.png", "/images/products/opal-pendant-19-2k.png", "/images/products/opal-pendant-19-2k.png", "/images/products/opal-pendant-19-2k.png"],
    image: "/images/products/opal-pendant-19-2k.png",
    details: {
      gemstone: "27.22 ct, Welo Ethiopian Opal, Honeycomb, Dark base, 26.8 x 19.0 x 12.2 mm, Untreated",
      accentStone: "0.5 ct, Afghani Peridot, 5.0 x 5.0 x 5.0 mm, VVS",
      preciousMetal: "3.82 g of 19.2k Solid Yellow Gold",
      totalWeight: "9.34 g"
    },
    available: true,
  },
  {
    id: "malachite-pendant",
    handle: "malachite-pendant",
    name: "25.4 ct Malachite & Citrine - Sterling Silver Pendant",
    price: "€650.00 EUR",
    category: "Pendant",
    description: "An artistic fusion of earth tones, featuring a 25.4 ct Malachite with deep green banding. A bright yellow Citrine adds a pop of sunshine to the piece. Set in a custom Sterling Silver bezel that frames the stones organically.",
    images: ["/images/products/malachite-pendant.png", "/images/products/malachite-pendant.png"],
    image: "/images/products/malachite-pendant.png",
    details: {
      gemstone: "25.4 ct Malachite, Cabochon",
      accentStone: "1.5 ct Citrine",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "8.1 g"
    },
    available: true,
  },
  {
    id: "amethyst-ring-peridots",
    handle: "amethyst-ring",
    name: "6 ct Dark Violet Amethyst & Peridots - Sterling Silver Ring",
    price: "€540.00 EUR",
    category: "Ring",
    description: "A deep, mysterious 6 ct Violet Amethyst lies at the heart of this ring. Surrounded by vibrant green Peridots, the color combination is both classic and enchanting. The Sterling Silver band features intricate detailing.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "6 ct Amethyst, Round Cut",
      accentStone: "Peridots",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "5.5 g"
    },
    available: true,
  },
  {
    id: "opal-ring-4-ethiopian",
    handle: "opal-ring-4",
    name: "5 ct Ethiopian Welo Opal - Sterling Silver Ring",
    price: "€1,150.00 EUR",
    category: "Ring",
    description: "This 5 ct Ethiopian Welo Opal displays a full spectrum of color play. The stone is set in a simple yet elegant Sterling Silver ring that allows the natural beauty of the opal to take center stage.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "5 ct Welo Opal",
      preciousMetal: "925 Sterling Silver",
      totalWeight: "4.2 g"
    },
    available: true,
  },
];
