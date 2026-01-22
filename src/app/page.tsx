import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CollectionSection } from "@/components/CollectionSection";
import { PhilosophyPreview } from "@/components/PhilosophyPreview";
import { Footer } from "@/components/Footer";

import { products } from "@/lib/products";

const featuredProducts = products.filter(p => ["topaz-ring", "opal-pendant-19-2k", "highest-quality-amethyst", "malachite-pendant"].includes(p.id)).map(p => ({
  id: p.id,
  name: p.name,
  price: p.price || "Contact for Price",
  image: p.image || "/images/placeholder.png"
}));

const ringProducts = products.filter(p => p.category === "Ring").map(p => ({
  id: p.id,
  name: p.name,
  price: p.price || "Contact for Price",
  image: p.image || "/images/placeholder.png"
}));

const pendantProducts = products.filter(p => p.category === "Pendant").map(p => ({
  id: p.id,
  name: p.name,
  price: p.price || "Contact for Price",
  image: p.image || "/images/placeholder.png"
}));


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
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

      {/* Rings Collection */}
      <CollectionSection
        id="rings"
        title="Rings"
        subtitle="Timeless elegance for your most precious moments."
        products={ringProducts}
        viewAllLink="/collections/rings"
      />

      {/* Pendants Collection */}
      <CollectionSection
        id="pendants"
        title="Pendants"
        subtitle="Graceful designs that capture light and imagination."
        products={pendantProducts}
        className="bg-[var(--cream-dark)]"
        viewAllLink="/collections/pendants"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
