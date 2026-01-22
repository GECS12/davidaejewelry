"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category?: "ring" | "pendant";
}

export function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <Card className="card-hover border-none shadow-md bg-white group cursor-pointer overflow-hidden rounded-lg">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[var(--cream)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/10 transition-all duration-500" />
          
          {/* Quick View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-6 py-3 bg-white/95 text-sm tracking-[0.1em] font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--navy)]">
              QUICK VIEW
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 text-center">
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
  );
}
