import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

import { use } from "react";

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  // Map friendly slugs to data categories
  const categoryMap: Record<string, string> = {
    "rings": "Ring",
    "pendants": "Pendant",
  };

  const category = categoryMap[slug.toLowerCase()];

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Header />
      
      <div className="pt-24 md:pt-32 pb-12 bg-[var(--navy)] text-white text-center">
         <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
         >
             {slug.charAt(0).toUpperCase() + slug.slice(1)}
         </h1>
         <p className="text-white/80 max-w-xl mx-auto px-6 font-light">
             Discover our exclusive collection of {slug}, crafted with precision and passion.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categoryProducts.map((product, index) => (
                <div 
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <ProductCard
                        id={product.handle}
                        name={product.name}
                        price={product.price || "Inquire for Price"}
                        image={product.image || "/images/placeholder.png"}
                    />
                </div>
            ))}
        </div>
        
        {categoryProducts.length === 0 && (
            <div className="text-center py-20 text-[var(--muted-foreground)]">
                <p>No products found in this collection.</p>
            </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
