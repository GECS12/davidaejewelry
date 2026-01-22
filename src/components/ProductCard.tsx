"use client";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  galleryImages?: string[];
  category?: "ring" | "pendant";
  details?: {
    gemstone?: string;
    accentStone?: string;
    preciousMetal?: string;
    totalWeight?: string;
  };
}

export function ProductCard({ id, name, price, image, galleryImages = [], category, details }: ProductCardProps) {
  // Combine main image with gallery images
  const allImages = [image, ...galleryImages];

  return (
    <div className="card-wrapper product-card-wrapper underline-links-hover group">
      <Link href={`/products/${id}`} className="block h-full">
        <div className="card card--standard card--media relative flex flex-col h-full bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-[var(--gold)]/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          {/* Card Inner / Media */}
          <div className="card__inner ratio aspect-square relative overflow-hidden bg-[var(--cream)]">
            <div className="card__media absolute inset-0">
              <div className="media media--transparent media--hover-effect h-full w-full relative group">
                {/* Background Image (Primary) */}
                <Image
                  src={allImages[0]}
                  alt={name}
                  fill
                  className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
                
                {/* Hover Image (Secondary) */}
                {allImages.length > 1 && (
                  <Image
                    src={allImages[1]}
                    alt={`${name} secondary view`}
                    fill
                    className="object-cover transition-all duration-1000 ease-in-out absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                )}

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-[var(--navy)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="card__content p-6 flex flex-col flex-grow justify-between text-center bg-[var(--cream)] relative z-10 transition-colors duration-300">
            <div className="card__information">
              <h3 className="card__heading text-sm md:text-base font-medium tracking-wide mb-3 min-h-[3rem] flex items-center justify-center">
                <span 
                  className="full-unstyled-link transition-colors duration-300 group-hover:text-[var(--gold-dark)]"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                >
                  {name}
                </span>
              </h3>
              
              <div className="price flex flex-col items-center gap-1 mt-auto">
                <div className="price__container">
                  <span className="price-item price-item--regular text-sm font-medium tracking-[0.05em]" style={{ color: "var(--navy)" }}>
                    {price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
