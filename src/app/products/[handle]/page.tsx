import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle || p.id === params.handle);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
             <img
              src={product.image || "/images/placeholder.png"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
             <div className="mb-2">
                 <span className="text-sm tracking-[0.2em] uppercase text-[var(--gold-dark)]">
                     {product.category}
                 </span>
             </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--navy)' }}
            >
              {product.name}
            </h1>
            
            <p className="text-2xl font-light mb-8" style={{ color: 'var(--gold-dark)' }}>
              {product.price}
            </p>

            <div className="prose prose-lg mb-12 text-[var(--muted-foreground)] font-light">
              <p>
                A masterpiece of craftsmanship, this {product.name.toLowerCase()} exemplifies 
                the Davidae commitment to luxury and timeless elegance. Each stone is hand-selected 
                for its exceptional quality and brilliance.
              </p>
            </div>

            <Button 
                className="w-full md:w-auto px-10 py-6 bg-[var(--navy)] text-white text-sm tracking-[0.2em] font-medium hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors duration-300 rounded-none"
            >
                INQUIRE FOR PURCHASE
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
