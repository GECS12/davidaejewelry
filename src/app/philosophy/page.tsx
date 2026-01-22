import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PhilosophyPage() {
  return (
    <main>
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--navy)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/silk_hero_texture_1769039275627.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="section-divider mb-8" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--cream)",
            }}
          >
            Our Philosophy
          </h1>
          <p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto"
            style={{ color: "var(--cream)", opacity: 0.85 }}
          >
            The art of creating jewelry that transcends time, where every
            gemstone tells a story of nature&apos;s extraordinary beauty.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* The Art of DaVidae */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/emerald_gold_ring_1769039350067.png"
                alt="Emerald craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-[var(--gold)]/20" />
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--navy)",
                }}
              >
                The Art of DaVidae
              </h2>
              <Separator className="w-16 bg-[var(--gold)] mb-8" />
              <p
                className="text-base font-light leading-relaxed mb-6"
                style={{ color: "var(--foreground)" }}
              >
                At DaVidae, we believe that true luxury lies in the details.
                Each piece we create is a testament to centuries-old
                craftsmanship, refined by modern sensibilities and an
                unwavering commitment to excellence.
              </p>
              <p
                className="text-base font-light leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Our master jewelers spend countless hours perfecting every
                facet, every setting, every delicate curve. The result is
                jewelry that doesn&apos;t just adorn—it transforms.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "var(--gold)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--navy)",
                  }}
                >
                  Radiance
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Every gemstone is selected for its exceptional brilliance and
                  fire, ensuring your piece captures and reflects light in
                  extraordinary ways.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "var(--gold)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--navy)",
                  }}
                >
                  Passion
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Born from a deep love for the craft, each creation embodies
                  our artisans&apos; dedication to preserving traditional
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "var(--gold)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--navy)",
                  }}
                >
                  Integrity
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  We source only ethically obtained materials, ensuring every
                  piece meets the highest standards of responsibility and
                  transparency.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Heritage Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--navy)",
                }}
              >
                A Legacy of Excellence
              </h2>
              <Separator className="w-16 bg-[var(--gold)] mb-8" />
              <p
                className="text-base font-light leading-relaxed mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Founded on the principles of artisanal excellence, DaVidae
                represents the pinnacle of fine jewelry craftsmanship. Our
                pieces are designed not for trends, but for generations.
              </p>
              <p
                className="text-base font-light leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                From the initial sketch to the final polish, every step is
                executed with precision and care. We create heirlooms that will
                be treasured, passed down, and loved for lifetimes to come.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/ruby_gold_ring_1769039376946.png"
                alt="Ruby ring heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-[var(--gold)]/20" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
