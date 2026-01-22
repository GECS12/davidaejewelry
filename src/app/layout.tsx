import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Load Playfair Display and Inter locally if possible, or use Google Fonts
// For now assuming existing global CSS handles fonts, but explicit loading is better for performance.

export const metadata: Metadata = {
  title: "DaVidae | Luxury Rings & Pendants",
  description:
    "Discover extraordinary handcrafted jewelry. Each DaVidae piece celebrates the timeless beauty of nature's finest gemstones in 18k gold settings.",
  keywords: [
    "luxury jewelry",
    "gold rings",
    "gold pendants",
    "gemstone jewelry",
    "opal rings",
    "sapphire pendants",
    "handcrafted jewelry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {/* Flex column layout with min-h-screen ensures footer sits at bottom */}
      <body className="antialiased flex flex-col min-h-screen">
          <Header />
            {/* Flex-grow pushes footer down if content is short */}
            <div className="flex-grow">
                {children}
            </div>
          <Footer />
      </body>
    </html>
  );
}
