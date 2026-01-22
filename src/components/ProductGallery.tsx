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
      <div className="relative aspect-square w-full bg-white/5 rounded-lg overflow-hidden shadow-sm group">
        <Image
          src={mainImageUrl}
          alt={productName}
          fill
          className="object-contain"
          priority
        />
        
        {/* Navigation Buttons for Gallery */}
        {validImages.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2 slider-buttons quick-add-hidden">
                <button 
                  type="button" 
                  onClick={() => setMainIndex((prev) => (prev - 1 + validImages.length) % validImages.length)}
                  className="w-10 h-10 flex items-center justify-center bg-white/90 text-[var(--navy)] hover:bg-[var(--gold)] hover:text-white transition-colors rounded-full shadow-md z-10"
                  aria-label="Slide left"
                >
                    <span className="w-4 h-4">
                        <svg className="icon icon-caret" viewBox="0 0 10 6">
                            <path fill="currentColor" fillRule="evenodd" d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" clipRule="evenodd" transform="rotate(90 5 3)"></path>
                        </svg>
                    </span>
                </button>
                
                <div className="flex items-center justify-center px-2 bg-white/90 rounded-full shadow-md text-xs font-medium text-[var(--navy)] min-w-[3rem]">
                    <span>{mainIndex + 1}</span>
                    <span className="mx-1">/</span>
                    <span>{validImages.length}</span>
                </div>

                <button 
                  type="button" 
                  onClick={() => setMainIndex((prev) => (prev + 1) % validImages.length)}
                  className="w-10 h-10 flex items-center justify-center bg-white/90 text-[var(--navy)] hover:bg-[var(--gold)] hover:text-white transition-colors rounded-full shadow-md z-10"
                  aria-label="Slide right"
                >
                    <span className="w-4 h-4">
                        <svg className="icon icon-caret" viewBox="0 0 10 6">
                            <path fill="currentColor" fillRule="evenodd" d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" clipRule="evenodd" transform="rotate(-90 5 3)"></path>
                        </svg>
                    </span>
                </button>
            </div>
        )}
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
