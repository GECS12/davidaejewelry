import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every minute

interface SanityProduct {
  slug: { current: string };
  name: string;
  price?: string;
  category?: string;
  mainImage?: any;
  images?: any[];
  details?: any;
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Map friendly slugs to data categories in Sanity
  const categoryMap: Record<string, string> = {
    "rings": "ring",
    "pendants": "pendant",
  };

  const category = categoryMap[slug.toLowerCase()];

  if (!category) {
    notFound();
  }

  // Fetch products for this category from Sanity
  const query = `*[_type == "product" && lower(category) == $category] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    category,
    mainImage,
    images,
    details {
      gemstone,
      accentStone,
      preciousMetal,
      totalWeight
    }
  }`;
  
  const products: SanityProduct[] = await client.fetch(query, { category });

  const mapProduct = (p: SanityProduct) => ({
    id: p.slug.current,
    name: p.name,
    price: p.price || "Contact for Price",
    image: p.mainImage ? urlFor(p.mainImage).width(600).url() : "/images/placeholder.png",
    galleryImages: p.images ? p.images.map((img: any) => urlFor(img).width(600).url()) : [],
    details: p.details
  });

  const categoryProducts = products.map(mapProduct);

  return (
    <main className="bg-[var(--cream)]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--navy)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/silk_hero_texture_1769039275627.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] mb-6 uppercase"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--cream)' }}
            >
                {slug}
            </h1>
            <p className="text-[var(--cream)]/85 max-w-xl mx-auto font-light tracking-wide text-lg">
                Discover our exclusive collection of {slug}, each piece a testament to nature&apos;s beauty and refined craftsmanship.
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categoryProducts.map((product, index) => (
                <div 
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        galleryImages={product.galleryImages}
                        details={product.details}
                    />
                </div>
            ))}
        </div>
        
        {categoryProducts.length === 0 && (
            <div className="text-center py-32 text-[var(--muted-foreground)]">
                <p className="text-xl font-light italic">No products found in this collection.</p>
            </div>
        )}
      </div>

    </main>
  );
}
