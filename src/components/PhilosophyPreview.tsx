import Image from "next/image";

export function PhilosophyPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--navy)" }}
      />
      
      {/* Decorative gold accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/sapphire_pendant_1769039309176.png"
                    alt="Sapphire pendant craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/images/ruby_gold_ring_1769039376946.png"
                    alt="Ruby ring detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/images/emerald_gold_ring_1769039350067.png"
                    alt="Emerald ring craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/tanzanite_pendant_1769039336646.png"
                    alt="Tanzanite pendant detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Gold frame accent */}
            <div className="absolute -inset-4 border border-[var(--gold)]/20 rounded-sm pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="section-divider mb-8 !mx-0" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--cream)",
              }}
            >
              The Art of
              <br />
              <span className="italic text-gold-gradient">DaVidae</span>
            </h2>

            <p
              className="text-lg font-light leading-relaxed mb-6"
              style={{ color: "var(--cream)", opacity: 0.85 }}
            >
              We believe in the extraordinary. Each DaVidae piece is a
              testament to artisanal craftsmanship, using only the finest,
              ethically sourced materials.
            </p>

            <p
              className="text-base font-light leading-relaxed mb-10"
              style={{ color: "var(--cream)", opacity: 0.7 }}
            >
              Our designs blend classic elegance with modern sophistication,
              creating heirloom jewelry meant to be cherished for generations.
            </p>

            <a
              href="/philosophy"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] font-light transition-all hover:gap-5 group"
              style={{ color: "var(--gold)" }}
            >
              DISCOVER OUR PHILOSOPHY
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
}
