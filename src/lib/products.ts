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
  // EXISTING PRODUCTS
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

  // NEW PRODUCTS PARSED FROM SITE
  {
    id: "9-2-cts-amazing-opal-set-in-19-2k-gold",
    handle: "9-2-cts-amazing-opal-set-in-19-2k-gold",
    name: "9.2 ct Welo Chaff Rainbow Opal & Tanzanites - 19.2k Yellow Gold Ring",
    price: "Inquire for Price", // Not visible in public metadata
    category: "Ring",
    description: "This superb 9.2 ct Ethiopian Welo Opal exhibits a vibrant chaff pattern with full spectral play-of-color - bursts of reds, greens, oranges, and violets across every perspective. It is carefully set in solid 19.2k yellow gold, and accented with two round 3 mm lavender tanzanites.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "9.20 ct Ethiopian Welo Opal, 16.0x14.0x7.6 mm - untreated",
      accentStone: "0.20 ct total - two Tanzanites, 3.0x3.0 mm - VVS",
      preciousMetal: "3.96 g of solid 19.2k Yellow Gold",
      totalWeight: "5.84 g"
    },
    available: true,
  },
  {
    id: "19-2k-garnet-yellow-gold",
    handle: "19-2k-garnet-yellow-gold",
    name: "4.23 ct Red & Yellow Garnets - 19.2k Yellow Gold",
    price: "Inquire for Price",
    category: "Ring",
    description: "A stunning combination of a pinkish-red Garnet from Tanzania framed by two Mali Yellow Garnets. The unheated stones offer natural brilliance and clarity. Handcrafted in solid 19.2k Yellow Gold.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "4.23 ct Garnet, Tanzania - Pinkish Red, unheated, VVS",
      accentStone: "1.35 ct total - Two 5mm Mali Yellow Garnets, VVS",
      preciousMetal: "4.754 g of Solid 19.2 k Yellow Gold",
      totalWeight: "5.87 g"
    },
    available: true,
  },
  {
    id: "opal-ring-2",
    handle: "opal-ring-2",
    name: "6.8 ct Natural Dark Base Ethiopian Opal - 14k White Gold Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A mesmerizing 6.8 ct Natural Dark Base Ethiopian Welo Opal is the centerpiece of this ring. The stone's natural dark tone enhances its color play. Set in a classic 14k White Gold band.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "6.81 ct Natural Dark Base Ethiopian Welo Opal, 18.5 x 9.35 x 6.73 mm",
      preciousMetal: "2.90 g of Solid White 14K Gold",
      totalWeight: "4.26 g"
    },
    available: true,
  },
  {
    id: "yellow-quartz-trillion",
    handle: "yellow-quartz-trillion",
    name: "18 ct Trillion Lemon Quartz - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A striking, large, trillion-shaped lemon quartz from Brazil, with a complex faceting of intersecting planes that create a structural play of light. Set in solid sterling silver.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "18.23 ct, Natural Lemon Quartz, Brazil, 15.85 x 15.4 x 13.17 mm, VVS",
      preciousMetal: "5.67 g Sterling Silver",
      totalWeight: "5.39 g" // Inferred or default
    },
    available: true,
  },
  {
    id: "opal-ring-3",
    handle: "opal-ring-3",
    name: "3.6 ct Welo Opal Ring - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A delicate 3.6 ct Ethiopian Welo Opal set in polished Sterling Silver. The opal shows lovely flashes of color and is perfect for everyday elegance.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "3.67 ct, Ethiopian Welo Opal, 16.0 x 10.4 x 4.25 mm",
      preciousMetal: "2 g of Sterling Silver",
      totalWeight: "2.76 g"
    },
    available: true,
  },
  {
    id: "fluorite-ring",
    handle: "fluorite-ring",
    name: "8 ct Green and Yellow Fluorite & Peridots - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A unique 8 ct Multicolor Fluorite showing bands of green and yellow. It is accented by vibrant green Peridots that highlight the main stone's hues. Set in Sterling Silver.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "8 ct Multicolor Fluorite , 13.7 x 10.1 x 7.61 mm",
      accentStone: "1.03 ct total - Green Peridots, 5.0 x 5.0 x 5.0 mm - VVS",
      preciousMetal: "3.8 g of Sterling Silver",
      totalWeight: "5.60 g"
    },
    available: true,
  },
  {
    id: "moonstone-ring",
    handle: "moonstone-ring",
    name: "9 ct Moonstone & Orange Zircons - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "This ring features a 9.13 ct Moonstone with a magical blue sheen, contrasted by fiery Imperial Orange Zircons. A captivating combination set in Sterling Silver.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "9.13 ct Moonstone, 13.9x11.0x8.8mm, Untreated, VS",
      accentStone: "1.40 ct Imperial Orange Zircon, 5.0x5.0x5.0mm, VVS",
      preciousMetal: "3.53 g of Sterling Silver",
      totalWeight: "5.64 g"
    },
    available: true,
  },
  {
    id: "moonstone-ring-1",
    handle: "moonstone-ring-1",
    name: "14 ct Flower cut Moonstone - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A large 14.9 ct Moonstone with a unique flower cut that enhances its mystical glow. Set in a substantial Sterling Silver mounting.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "14.9 ct Moonstone, 15.5 x 15.5 x 11.6 mm, VS",
      preciousMetal: "4.55 g of Sterling Silver",
      totalWeight: "7.23 g"
    },
    available: true,
  },
  {
    id: "fluorite-ring-1",
    handle: "fluorite-ring-1",
    name: "11.2 ct Golden Yellow Fluorite - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "The warmth of this 11.2 ct Golden Yellow Fluorite is truly inviting. The untreated gem offers a pure, honey-like hue, set simply in Sterling Silver to let the color shine.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "11.2 ct Golden Yellow Fluorite, 16.2x12.2x7.9 mm, Untreated, VVS",
      preciousMetal: "4.55 g of Sterling Silver",
      totalWeight: "6.69 g"
    },
    available: true,
  },
  {
    id: "fluorite-ring-2",
    handle: "fluorite-ring-2",
    name: "8 ct Green & Yellow Fluorite - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "Another beautiful 8 ct Fluorite displaying the characteristic green and yellow color zoning of the mineral. A perfect choice for a collector of interesting gemstones.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "8 ct Fluorite, 11.9 x 10.1 x 7.6 mm",
      preciousMetal: "4.35 g of Sterling Silver",
      totalWeight: "5.95 g"
    },
    available: true,
  },
  {
    id: "yellow-quartz-ring",
    handle: "yellow-quartz-ring",
    name: "7.5 ct Octogonal Yellow Quartz - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A bright 7.5 ct Natural Lemon Quartz with an octagonal cut for a geometric look. The clean lines of the stone are mirrored in the sleek Sterling Silver setting.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "7.53 ct, Natural Lemon Quartz, Brazil, 11.4x11.15x10.4mm, VVS",
      preciousMetal: "3.91 g of Sterling Silver",
      totalWeight: "5.39 g"
    },
    available: true,
  },
  {
    id: "opal-ring-1",
    handle: "opal-ring-1",
    name: "1.7 ct Dark Base Opal - Sterling Silver Ring",
    price: "Inquire for Price",
    category: "Ring",
    description: "A petite but punchy 1.7 ct Dark Base Ethiopian Opal. The dark body tone makes the color flashes pop even in a smaller stone.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "1.73 ct Dark Base Ethiopian Welo Opal, 12.0 x 8.3 x 3.0 mm",
      preciousMetal: "2.13 g of Sterling Silver",
      totalWeight: "2.47 g"
    },
    available: true,
  },
  {
    id: "opal-pendant-2",
    handle: "opal-pendant-2",
    name: "25 ct Malachite & Topaz - Sterling Silver Pendant",
    price: "Inquire for Price",
    category: "Pendant",
    description: "High quality Russian Malachite with vivid green contrasting bands, accented with sparkling white Topaz. A striking piece of natural art.",
    images: ["/images/placeholder.png"],
    image: "/images/placeholder.png",
    details: {
      gemstone: "25.43 ct, Natural Russian Green Malachite, 17.0 x 17.0 x 7.0 mm",
      accentStone: "0.61 ct Natural White Topaz, 5.0 x 5.0 x 5.0 mm, VVS",
      preciousMetal: "2,0 g of Sterling Silver",
      totalWeight: "7.21 g"
    },
    available: true,
  },
];
