"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CheckerboardSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  imagePosition: "left" | "right";
  className?: string;
  theme?: "light" | "dark"; // Light = cream bg, dark = navy bg
}

export function CheckerboardSection({
  id,
  title,
  subtitle,
  description,
  image,
  link,
  linkText,
  imagePosition,
  className,
  theme = "light",
}: CheckerboardSectionProps) {
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-0",
        isDark ? "bg-[var(--navy)] text-[var(--cream)]" : "bg-[var(--cream)] text-[var(--navy)]",
        className
      )}
    >
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
        {/* Content Side */}
        <div
          className={cn(
            "flex-1 flex flex-col justify-center items-center text-center p-12 md:p-20 order-2",
            imagePosition === "right" ? "md:order-1" : "md:order-2"
          )}
        >
          <div className="max-w-md mx-auto space-y-8 animate-fade-in-up">
            <h3
              className={cn(
                "text-lg uppercase tracking-[0.2em] font-light",
                isDark ? "text-[var(--gold)]" : "text-[var(--gold-dark)]"
              )}
            >
              {subtitle}
            </h3>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h2>

            <div 
              className={cn(
                "w-16 h-[1px] mx-auto",
                isDark ? "bg-[var(--gold)]" : "bg-[var(--navy)]"
              )} 
            />

            <p className={cn(
              "text-lg leading-relaxed font-light",
              isDark ? "text-[var(--cream)]/80" : "text-[var(--navy)]/80"
            )}>
              {description}
            </p>

            <Link href={link} className="inline-block pt-4">
              <span 
                className={cn(
                  "inline-block px-8 py-4 border transition-all duration-300 tracking-[0.1em] text-sm hover:-translate-y-1",
                   isDark 
                    ? "border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)]" 
                    : "border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--cream)]"
                )}
              >
                {linkText}
              </span>
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div
          className={cn(
            "flex-1 relative min-h-[400px] md:min-h-[600px] w-full order-1",
            imagePosition === "right" ? "md:order-2" : "md:order-1"
          )}
        >
           {/* Image Frame/Shadow Effect */}
            <div className="absolute inset-0 bg-black/10 z-10" />
            
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </div>
    </section>
  );
}
