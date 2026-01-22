"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "RINGS", href: "/#rings" },
  { name: "PENDANTS", href: "/#pendants" },
  { name: "COMMITMENTS", href: "/commitments" },
  { name: "PHILOSOPHY", href: "/philosophy" },
  { name: "CONTACTS", href: "/contacts" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-2xl md:text-3xl tracking-[0.3em] font-light"
            style={{
              fontFamily: "var(--font-playfair)",
              color: isScrolled ? "var(--cream)" : "var(--cream)",
            }}
          >
            DAVIDAE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-sm tracking-[0.15em] font-light transition-colors"
              style={{
                color: isScrolled ? "var(--cream)" : "var(--cream)",
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 transition-colors hover:opacity-70"
            style={{ color: isScrolled ? "var(--cream)" : "var(--cream)" }}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 transition-colors hover:opacity-70 hidden md:block"
            style={{ color: isScrolled ? "var(--cream)" : "var(--cream)" }}
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            className="p-2 transition-colors hover:opacity-70"
            style={{ color: isScrolled ? "var(--cream)" : "var(--cream)" }}
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
                style={{ color: isScrolled ? "var(--cream)" : "var(--cream)" }}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] border-none"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <div className="flex flex-col h-full pt-12">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl tracking-[0.2em] font-light transition-colors hover:opacity-70"
                      style={{ color: "var(--cream)" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
