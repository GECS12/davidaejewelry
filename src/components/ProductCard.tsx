"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Combine main image with gallery images
  const allImages = [image, ...galleryImages].slice(0, 5); // Limit to 5 for hover performance

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || allImages.length <= 1) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate which segment the mouse is in
    const segmentWidth = width / allImages.length;
    const newIndex = Math.floor(x / segmentWidth);
    
    if (newIndex >= 0 && newIndex < allImages.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setActiveIndex(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div className="card-wrapper product-card-wrapper underline-links-hover group">
      <Link href={`/products/${id}`} className="block h-full">
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="card card--standard card--media relative flex flex-col h-full bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-[var(--gold)]/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Card Inner / Media */}
          <div className="card__inner ratio aspect-square relative overflow-hidden bg-[var(--cream)]">
            <div className="card__media absolute inset-0">
              <div className="media media--transparent h-full w-full relative">
                {allImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${name} view ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-500 ease-in-out absolute inset-0 ${
                      index === activeIndex ? "opacity-100 scale-105" : "opacity-0"
                    }`}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                    priority={index === 0}
                  />
                ))}

                {/* Segmented Indicators */}
                {allImages.length > 1 && (
                  <div 
                    className={`absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
                  >
                    {allImages.map((_, index) => (
                      <div 
                        key={index}
                        className={`image-indicator-dot ${index === activeIndex ? "active" : ""}`}
                      />
                    ))}
                  </div>
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
