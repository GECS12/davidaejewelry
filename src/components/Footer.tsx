import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Mail } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Jewelry", href: "/" },
    { name: "Rings", href: "/#rings" },
    { name: "Pendants", href: "/#pendants" },
    { name: "New Arrivals", href: "/" },
  ],
  about: [
    { name: "Our Story", href: "/philosophy" },
    { name: "Commitments", href: "/commitments" },
    { name: "Craftsmanship", href: "/philosophy" },
    { name: "Contact", href: "/contacts" },
  ],
  help: [
    { name: "Shipping & Returns", href: "/" },
    { name: "Care Guide", href: "/" },
    { name: "Ring Size Guide", href: "/" },
    { name: "FAQ", href: "/" },
  ],
};

export function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-2xl tracking-[0.3em] font-light"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--cream)",
                }}
              >
                DAVIDAE
              </span>
            </Link>
            <p
              className="text-sm font-light leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--cream)", opacity: 0.7 }}
            >
              Crafting timeless pieces that celebrate the extraordinary beauty
              of nature&apos;s finest gemstones.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-[var(--gold)]/30 rounded-full transition-all hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
                style={{ color: "var(--cream)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-[var(--gold)]/30 rounded-full transition-all hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
                style={{ color: "var(--cream)" }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@davidae.com"
                className="p-2 border border-[var(--gold)]/30 rounded-full transition-all hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
                style={{ color: "var(--cream)" }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] mb-6"
              style={{ color: "var(--gold)" }}
            >
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light transition-colors hover:opacity-70"
                    style={{ color: "var(--cream)", opacity: 0.8 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] mb-6"
              style={{ color: "var(--gold)" }}
            >
              ABOUT
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light transition-colors hover:opacity-70"
                    style={{ color: "var(--cream)", opacity: 0.8 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] mb-6"
              style={{ color: "var(--gold)" }}
            >
              NEWSLETTER
            </h4>
            <p
              className="text-sm font-light mb-4"
              style={{ color: "var(--cream)", opacity: 0.7 }}
            >
              Subscribe for exclusive previews and offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-[var(--gold)]/30 text-[var(--cream)] placeholder:text-[var(--cream)]/50 rounded-none focus:border-[var(--gold)]"
              />
              <Button className="btn-gold px-4 rounded-none">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-[var(--gold)]/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs font-light"
            style={{ color: "var(--cream)", opacity: 0.5 }}
          >
            © 2026 DaVidae Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-xs font-light transition-colors hover:opacity-70"
              style={{ color: "var(--cream)", opacity: 0.5 }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs font-light transition-colors hover:opacity-70"
              style={{ color: "var(--cream)", opacity: 0.5 }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
