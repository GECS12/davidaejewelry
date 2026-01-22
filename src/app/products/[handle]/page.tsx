"use client";

import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle || p.id === params.handle);

  if (!product) {
    notFound();
  }

  // Ensure images array exists, fallback to single image or placeholder
  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image || "/images/placeholder.png"];

  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Gallery (7/12) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full bg-black rounded-lg overflow-hidden shadow-sm">
               <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={cn(
                      "relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all",
                      mainImage === img 
                        ? "border-[var(--gold)] opacity-100" 
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Details (5/12) */}
          <div className="lg:col-span-5 flex flex-col pt-4">
             {/* Brand Eyebrow */}
             <div className="mb-4">
                 <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted-foreground)]">
                     DAVIDIAE
                 </span>
             </div>

            <h1 
              className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-normal mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--navy)' }}
            >
              {product.name}
            </h1>

            {/* Description */}
            <div className="prose prose-sm text-base leading-relaxed text-[var(--muted-foreground)] font-light mb-8">
              <p>{product.description || "A masterpiece of craftsmanship, this piece exemplifies the Davidae commitment to luxury and timeless elegance."}</p>
            </div>

            {/* Technical Details Grid */}
            {product.details && (
                <div className="space-y-3 mb-10 text-sm font-light text-[var(--navy)]">
                    {product.details.gemstone && (
                        <div className="flex flex-col gap-1">
                            <span className="font-medium text-[var(--gold-dark)]">Gemstone:</span>
                            <span>{product.details.gemstone}</span>
                        </div>
                    )}
                    {product.details.accentStone && (
                        <div className="flex flex-col gap-1">
                            <span className="font-medium text-[var(--gold-dark)]">Accent Stone:</span>
                            <span>{product.details.accentStone}</span>
                        </div>
                    )}
                    {product.details.preciousMetal && (
                        <div className="flex flex-col gap-1">
                            <span className="font-medium text-[var(--gold-dark)]">Precious Metal:</span>
                            <span>{product.details.preciousMetal}</span>
                        </div>
                    )}
                    {product.details.totalWeight && (
                        <div className="flex flex-col gap-1">
                            <span className="font-medium text-[var(--gold-dark)]">Total Weight:</span>
                            <span>{product.details.totalWeight}</span>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-auto">
                <p className="text-xl font-normal mb-2 text-[var(--navy)] font-serif">
                {product.price}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] mb-6">Taxes included.</p>

                <Button 
                    className="w-full h-12 bg-[#4a5e4d] hover:bg-[#3a4b3d] text-white text-sm tracking-[0.1em] font-medium transition-all duration-300 rounded mb-4"
                >
                    Add to cart
                </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
