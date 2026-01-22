export interface Product {
  id: string;
  handle: string;
  name: string;
  price?: string;
  category: "Ring" | "Pendant" | "Other";
  image?: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "topaz-ring",
    handle: "topaz-ring",
    name: "20 ct Swiss Blue Topaz - Sterling Silver Ring",
    price: "€850.00 EUR",
    category: "Ring",
    image: "/images/products/topaz-ring.png",
    available: true,
  },
  {
    id: "lemon-quartz-ring",
    handle: "lemon-quartz-ring",
    name: "30 ct Portuguese-Cut Lemon Quartz - Sterling Silver Ring",
    price: "€920.00 EUR",
    category: "Ring",
    available: true,
  },
  {
    id: "highest-quality-amethyst",
    handle: "highest-quality-23-15-cts-rwanda-amethyst-set-in-14k-yellow-gold-with-peridots",
    name: "23 ct Royal Purple Amethyst & Peridots - 14k Yellow Gold",
    price: "€1,450.00 EUR",
    category: "Ring",
    image: "/images/products/highest-quality-amethyst.png",
    available: true,
  },
  {
    id: "kunzite-ring",
    handle: "kunzite-ring",
    name: "5.5 Cts Light Pink Kunzite & Sky Blue Topaz Ring - Sterling Silver",
    price: "€780.00 EUR",
    category: "Ring",
    available: true,
  },
  {
    id: "opal-pendant-19-2k",
    handle: "opal-pendant-19-2k",
    name: "27.2 ct Dark Base Honeycomb Opal - 19.2k Yellow Gold Pendant",
    price: "€3,450.00 EUR",
    category: "Pendant",
    image: "/images/products/opal-pendant-19-2k.png",
    available: true,
  },
  {
    id: "malachite-pendant",
    handle: "malachite-pendant",
    name: "25.4 ct Malachite & Citrine - Sterling Silver Pendant",
    price: "€650.00 EUR",
    category: "Pendant",
    image: "/images/products/malachite-pendant.png",
    available: true,
  },
  {
    id: "amethyst-ring-peridots",
    handle: "amethyst-ring",
    name: "6 ct Dark Violet Amethyst & Peridots - Sterling Silver Ring",
    price: "€540.00 EUR",
    category: "Ring",
    available: true,
  },
  {
    id: "opal-ring-4-ethiopian",
    handle: "opal-ring-4",
    name: "5 ct Ethiopian Welo Opal - Sterling Silver Ring",
    price: "€1,150.00 EUR",
    category: "Ring",
    available: true,
  },
];
