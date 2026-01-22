import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
