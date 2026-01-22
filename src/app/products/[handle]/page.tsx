import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { PRODUCT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { ProductGallery } from "@/components/ProductGallery";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug: handle });

  if (!product) {
    notFound();
  }

  // Combine mainImage and gallery images into one array for the gallery
  const allImages = [
    product.mainImage,
    ...(product.images || [])
  ].filter(Boolean);

  return (
    <main className="bg-[var(--cream)] pt-16 md:pt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Gallery (7/12) */}
          <div className="lg:col-span-7">
             <ProductGallery images={allImages} productName={product.name} />
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
      
    </main>
  );
}
