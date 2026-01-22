import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CollectionSection } from "@/components/CollectionSection";
import { PhilosophyPreview } from "@/components/PhilosophyPreview";
import { Footer } from "@/components/Footer";

// Sample product data
const featuredProducts = [
  {
    id: "1",
    name: "27.2 ct Dark Base Honeycomb Opal - 19.2k Yellow Gold Pendant",
    price: "€3,450.00 EUR",
    image: "/images/opal_gold_ring_1769039290910.png",
  },
  {
    id: "2",
    name: "Royal Blue Sapphire - 18k Yellow Gold Pendant with Diamonds",
    price: "€4,890.00 EUR",
    image: "/images/sapphire_pendant_1769039309176.png",
  },
  {
    id: "3",
    name: "23 ct Royal Purple Amethyst & Peridots - 14k Yellow Gold",
    price: "€1,450.00 EUR",
    image: "/images/amethyst_pendant_1769039364639.png",
  },
  {
    id: "4",
    name: "Violet-Blue Tanzanite Teardrop - 18k Gold with Diamond Halo",
    price: "€5,200.00 EUR",
    image: "/images/tanzanite_pendant_1769039336646.png",
  },
];

const ringProducts = [
  {
    id: "5",
    name: "Luminous Opal Ring - 18k Yellow Gold Setting",
    price: "€2,490.00 EUR",
    image: "/images/opal_gold_ring_1769039290910.png",
  },
  {
    id: "6",
    name: "Deep Green Emerald - 18k Gold with Diamond Halo",
    price: "€3,890.00 EUR",
    image: "/images/emerald_gold_ring_1769039350067.png",
  },
  {
    id: "7",
    name: "Cushion Cut Ruby - 18k Gold with Pavé Diamonds",
    price: "€6,750.00 EUR",
    image: "/images/ruby_gold_ring_1769039376946.png",
  },
  {
    id: "8",
    name: "Rainbow Fire Opal - 19.2k Rose Gold Statement Ring",
    price: "€2,150.00 EUR",
    image: "/images/opal_gold_ring_1769039290910.png",
  },
];

const pendantProducts = [
  {
    id: "9",
    name: "Royal Sapphire Pendant - 18k Gold Chain",
    price: "€4,890.00 EUR",
    image: "/images/sapphire_pendant_1769039309176.png",
  },
  {
    id: "10",
    name: "Tanzanite Teardrop - Diamond Halo Pendant",
    price: "€5,200.00 EUR",
    image: "/images/tanzanite_pendant_1769039336646.png",
  },
  {
    id: "11",
    name: "Purple Amethyst Pear - 14k Yellow Gold",
    price: "€1,450.00 EUR",
    image: "/images/amethyst_pendant_1769039364639.png",
  },
  {
    id: "12",
    name: "Ceylon Blue Sapphire - Floating Gold Pendant",
    price: "€3,950.00 EUR",
    image: "/images/sapphire_pendant_1769039309176.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection */}
      <CollectionSection
        id="featured"
        title="Featured Pieces"
        subtitle="Discover our most coveted creations, each one a masterpiece of design and craftsmanship."
        products={featuredProducts}
      />

      {/* Philosophy Preview */}
      <PhilosophyPreview />

      {/* Rings Collection */}
      <CollectionSection
        id="rings"
        title="Rings"
        subtitle="Timeless elegance for your most precious moments."
        products={ringProducts}
      />

      {/* Pendants Collection */}
      <section
        id="pendants"
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--cream-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-divider mb-6" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--navy)",
              }}
            >
              Pendants
            </h2>
            <p
              className="text-base font-light max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              Graceful designs that capture light and imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pendantProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-hover border-none shadow-md bg-white group cursor-pointer overflow-hidden rounded-lg">
                  <div className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-[var(--cream)]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/10 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-6 py-3 bg-white/95 text-sm tracking-[0.1em] font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--navy)]">
                          QUICK VIEW
                        </button>
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3
                        className="text-sm md:text-base font-medium tracking-wide mb-2 line-clamp-2"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          color: "var(--navy)",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p
                        className="text-sm font-light tracking-wider"
                        style={{ color: "var(--gold-dark)" }}
                      >
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] font-light transition-colors hover:opacity-70 border-b border-[var(--gold)] pb-1"
              style={{ color: "var(--navy)" }}
            >
              VIEW ALL PENDANTS
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
