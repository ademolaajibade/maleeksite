"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)";
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/portfolio/pre-wedding/IMG_1594.jpg"
          alt="Portrait and pre-wedding photographer in South Wales, UK"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-8 font-sans font-medium">
          Cardiff · Newport · Swansea
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground leading-none mb-6 tracking-tight">
          South Wales’
          <br />
          <span className="italic text-accent">Portrait</span>
          <br />
          Photographer
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Capturing timeless moments — every portrait tells a story, with
          light, emotion, and artistry that lasts a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300 w-full sm:w-auto text-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border border-foreground/40 text-foreground text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto text-center"
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
