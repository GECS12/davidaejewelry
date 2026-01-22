"use client";

import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

import { cn } from "@/lib/utils";

interface CollectionSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  id?: string;
  viewAllLink?: string;
  className?: string;
}

export function CollectionSection({
  title,
  subtitle,
  products,
  id,
  viewAllLink,
  className,
}: CollectionSectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 bg-[var(--cream)]", className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider mb-6" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--navy)",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-base font-light max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
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
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {viewAllLink && (
          <div className="text-center mt-12">
            <a
              href={viewAllLink}
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] font-light transition-colors hover:opacity-70 border-b border-[var(--gold)] pb-1"
              style={{ color: "var(--navy)" }}
            >
              VIEW ALL {title.toUpperCase()}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
