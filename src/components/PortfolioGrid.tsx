"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type PortfolioImage = {
  src: string;
  alt: string;
  category: string;
  span?: string;
};

export default function PortfolioGrid({
  categories,
  images,
}: {
  categories: readonly string[];
  images: PortfolioImage[];
}) {
  const [active, setActive] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, filtered.length]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              closeLightbox();
            }}
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

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 pt-10">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No photos in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] gap-3">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={`relative overflow-hidden group text-left cursor-zoom-in block w-full h-full p-0 border-0 bg-transparent appearance-none ${img.span ?? ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="text-white text-xs tracking-widest uppercase mb-1">{img.category}</p>
                    <p className="text-white/70 text-xs">{img.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none z-10"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
          >
            &#8249;
          </button>

          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next"
            className="absolute right-4 md:right-8 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
          >
            &#8250;
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white text-xs tracking-widest uppercase mb-1">{activeImage.category}</p>
            <p className="text-white/60 text-xs">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
