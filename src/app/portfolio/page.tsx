"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Portraits", "Fashion", "Pre-Wedding", "Events"] as const;
type Category = (typeof categories)[number];

const images: { src: string; alt: string; category: Exclude<Category, "All">; span?: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    alt: "Solo portrait in natural light",
    category: "Portraits",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    alt: "Fashion editorial",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    alt: "Pre-wedding shoot",
    category: "Pre-Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    alt: "Studio portrait",
    category: "Portraits",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Editorial shoot",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding ceremony",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    alt: "Professional headshot",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&q=80",
    alt: "Dark fashion portrait",
    category: "Fashion",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    alt: "Couple portrait",
    category: "Pre-Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    alt: "Male portrait",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    alt: "Birthday celebration",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&w=800&q=80",
    alt: "Dramatic fashion shoot",
    category: "Fashion",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="bg-background pt-16 min-h-screen">
      {/* Header */}
      <div className="pt-20 pb-12 max-w-7xl mx-auto px-6">
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Selected Work</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-none mb-8">
          The <span className="italic text-accent">Portfolio</span>
        </h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === cat
                  ? "bg-accent text-black border-accent"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] gap-3">
          {filtered.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden group ${img.span ?? ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="text-white text-xs tracking-widest uppercase mb-1">{img.category}</p>
                  <p className="text-white/70 text-xs">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-surface-alt py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-5">
            Like What You <span className="italic text-accent">See?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Let&apos;s create something beautiful together. Book a session or reach out to discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
