import { HeroSection } from "@/components/HeroSection";
import { CollectionSection } from "@/components/CollectionSection";
import { PhilosophyPreview } from "@/components/PhilosophyPreview";
import { CheckerboardSection } from "@/components/CheckerboardSection";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define a minimal interface for the product data coming from Sanity
interface SanityProduct {
  slug: { current: string };
  name: string;
  price?: string;
  category?: string;
  mainImage?: any;
  images?: any[];
  isFeatured?: boolean;
  details?: {
    gemstone?: string;
    accentStone?: string;
    preciousMetal?: string;
    totalWeight?: string;
  };
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  galleryImages: string[];
  details?: any;
}

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  // Update query to fetch Featured status and Images
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    category,
    isFeatured,
    mainImage,
    images,
    details {
      gemstone,
      accentStone,
      preciousMetal,
      totalWeight
    }
  }`;
  
  const products: SanityProduct[] = await client.fetch(query);

  const mapProduct = (p: SanityProduct) => ({
    id: p.slug.current,
    name: p.name,
    price: p.price || "Contact for Price",
    image: p.mainImage ? urlFor(p.mainImage).width(600).url() : "/images/placeholder.png",
    galleryImages: p.images ? p.images.map((img: any) => urlFor(img).width(600).url()) : [],
    details: p.details
  });

  // Featured Products (limit 8)
  const featuredRaw = products.filter((p: any) => p.isFeatured === true);
  const featuredProducts = (featuredRaw.length > 0 ? featuredRaw : products)
    .slice(0, 8)
    .map(mapProduct);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection */}
      <CollectionSection
        id="featured"
        title="Featured Pieces"
        subtitle="Discover our most coveted creations, each one a masterpiece of design and craftsmanship."
        products={featuredProducts}
      />

      {/* Philosophy Preview */}
      <PhilosophyPreview />

      {/* Rings Checkerboard Section */}
      <CheckerboardSection
        id="rings"
        title="Rings"
        subtitle="Gemstone Centric"
        description="Carefully Crafted. Distinct Combinations. Our rings serve as a testament to the beauty of nature’s finest stones, set in designs that are both timeless and contemporary."
        image="/images/emerald_gold_ring_1769039350067.png" // Using existing emerald ring image
        link="/collections/rings"
        linkText="Explore Rings"
        imagePosition="right"
        theme="light"
      />

      {/* Pendants Checkerboard Section */}
      <CheckerboardSection
        id="pendants"
        title="Pendants"
        subtitle="Captivating Details"
        description="Finest Materials. Lasting Enjoyment. Drapes of gold and blue frame these exquisite pendants, designed to rest close to your heart."
        image="/images/amethyst_pendant_1769039364639.png" // Using existing amethyst pendant image
        link="/collections/pendants"
        linkText="Explore Pendants"
        imagePosition="left"
        theme="light" 
      />
    </main>
  );
}
