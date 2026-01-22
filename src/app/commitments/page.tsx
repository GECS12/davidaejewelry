import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const commitments = [
  {
    title: "Ethical Sourcing",
    description:
      "Every gemstone in our collection is traceable to its origin. We work exclusively with certified suppliers who adhere to the highest ethical standards, ensuring conflict-free diamonds and responsibly mined gemstones.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Practices",
    description:
      "Our commitment to the planet guides every decision. From recycled gold and platinum to energy-efficient workshops, we minimize our environmental footprint while maximizing the beauty of each creation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Artisan Partnerships",
    description:
      "We believe in preserving traditional craftsmanship. Our partnerships with master artisans around the world support communities and ensure that ancient jewelry-making techniques continue to thrive.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Lifetime Quality",
    description:
      "Every DaVidae piece comes with our lifetime guarantee. We stand behind our craftsmanship with complimentary cleaning, maintenance, and repair services to keep your jewelry radiant for generations.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
        />
      </svg>
    ),
  },
];

export default function CommitmentsPage() {
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
            Our Commitments
          </h1>
          <p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto"
            style={{ color: "var(--cream)", opacity: 0.85 }}
          >
            Beyond beauty, we are dedicated to responsible luxury that honors
            our planet, our communities, and our craft.
          </p>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {commitments.map((commitment, index) => (
              <Card
                key={commitment.title}
                className="border-none shadow-lg bg-white card-hover"
              >
                <CardContent className="p-8 md:p-10">
                  <div
                    className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                  >
                    <div style={{ color: "var(--gold)" }}>{commitment.icon}</div>
                  </div>
                  <h3
                    className="text-2xl font-medium mb-4"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--navy)",
                    }}
                  >
                    {commitment.title}
                  </h3>
                  <p
                    className="text-base font-light leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="relative rounded-sm overflow-hidden p-12 md:p-16 text-center"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--cream)",
                }}
              >
                Join Our Mission
              </h2>
              <Separator className="w-16 bg-[var(--gold)] mx-auto mb-8" />
              <p
                className="text-lg font-light max-w-2xl mx-auto mb-8"
                style={{ color: "var(--cream)", opacity: 0.85 }}
              >
                When you choose DaVidae, you&apos;re not just acquiring a piece
                of jewelry—you&apos;re supporting a vision of luxury that
                respects both people and planet.
              </p>
              <a
                href="/#featured"
                className="inline-block px-8 py-4 text-sm tracking-[0.15em] btn-gold rounded-none"
              >
                EXPLORE OUR COLLECTION
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
