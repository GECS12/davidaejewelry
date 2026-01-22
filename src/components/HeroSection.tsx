"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Silk Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/silk_hero_texture_1769039275627.png"
          alt="Luxury silk background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <div className="w-12 h-px bg-[var(--gold)] mb-8" />
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--cream)",
                }}
              >
                Life Giving
                <br />
                <span className="italic">Jewelry</span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md"
              style={{ color: "var(--cream)", opacity: 0.85 }}
            >
              When a gemstone captures your attention, its beauty becomes your
              inner stage. Each piece tells a story of elegance and timeless
              craftsmanship.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="btn-gold px-8 py-6 text-sm tracking-[0.15em] rounded-none"
                asChild
              >
                <a href="#featured">EXPLORE COLLECTION</a>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-sm tracking-[0.15em] rounded-none border-[var(--gold)] bg-transparent hover:bg-[var(--gold)]/10"
                style={{ color: "var(--cream)" }}
                asChild
              >
                <a href="/philosophy">OUR STORY</a>
              </Button>
            </div>
          </div>

          {/* Featured Product Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative animate-float">
              {/* Gold ring around the image */}
              <div className="absolute -inset-4 rounded-full border border-[var(--gold)]/30 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[var(--gold)]/50 shadow-2xl">
                <Image
                  src="/images/opal_gold_ring_1769039290910.png"
                  alt="Featured opal ring"
                  fill
                  className="object-cover scale-125"
                />
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20"
                style={{
                  background:
                      "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
