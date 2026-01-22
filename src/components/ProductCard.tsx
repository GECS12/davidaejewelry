import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  galleryImages?: string[];
  category?: "ring" | "pendant";
}

export function ProductCard({ id, name, price, image, galleryImages = [], category }: ProductCardProps) {
  // Combine main image with gallery images for the carousel
  const allImages = [image, ...galleryImages];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle to next image
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  // Cycle to previous image
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const currentImage = allImages[currentImageIndex];

  return (
    <Link href={`/products/${id}`}>
      <Card 
        className="card-hover border-none shadow-md bg-white group cursor-pointer overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsHovered(false);
            setCurrentImageIndex(0); // Reset to main image on leave? Optional design choice.
        }}
      >
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-[var(--cream)] group">
            
            <Image
              src={currentImage}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/5 transition-all duration-500" />
            
            {/* Carousel Arrows - Only visible if more than 1 image */}
            {allImages.length > 1 && (
                <>
                    <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 text-[var(--navy)]" />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 text-[var(--navy)]" />
                    </button>
                    
                    {/* Dots Indicator */}
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        {allImages.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[var(--gold)]' : 'bg-white/60'}`}
                            />
                        ))}
                    </div>
                </>
            )}


          </div>

          {/* Product Info */}
          <div className="p-5 text-center relative z-10 bg-white">
            <h3
              className="text-sm md:text-base font-medium tracking-wide mb-2 line-clamp-2"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--navy)",
              }}
            >
              {name}
            </h3>
            <p
              className="text-sm font-light tracking-wider"
              style={{ color: "var(--gold-dark)" }}
            >
              {price}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
