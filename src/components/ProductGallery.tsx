"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

interface ProductGalleryProps {
  images: any[]; // Sanity image objects
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  // Filter out any invalid images just in case
  const validImages = images.filter(Boolean);
  
  const [mainIndex, setMainIndex] = useState(0);

  if (validImages.length === 0) {
    return (
       <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm flex items-center justify-center text-gray-400">
          No Image
       </div>
    );
  }

  const mainImageUrl = urlFor(validImages[mainIndex]).width(1200).url();

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full bg-white/5 rounded-lg overflow-hidden shadow-sm">
        <Image
          src={mainImageUrl}
          alt={productName}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainIndex(idx)}
              className={cn(
                "relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all",
                mainIndex === idx
                  ? "border-[var(--gold)] opacity-100"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={urlFor(img).width(200).url()}
                alt={`${productName} view ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
