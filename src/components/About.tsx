"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "1.2K+", label: "Sessions Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "5+", label: "Awards Won" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "all 0.9s ease",
          }}
        >
          {/* Image column */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Maleek — Portrait Photographer"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Gold accent frame */}
            <div className="hidden lg:block absolute inset-0 border border-accent/30 pointer-events-none" />
            {/* Years badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-accent text-black px-6 py-4">
              <p className="font-serif text-4xl font-semibold leading-none">
                5
              </p>
              <p className="text-xs tracking-widest uppercase font-medium mt-1">
                Years of Art
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:pl-8">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4 font-sans">
              About the Photographer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-8">
              I Photograph
              <br />
              <span className="italic text-accent">Authentic</span> Souls
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi, I&apos;m Lukmon, a portrait and lifestyle photographer based in the
              southwales UK, specializing in portraits, fashion, events, and
              pre-wedding shoots. My goal is to create images that feel
              authentic, timeless, and cinematic.{" "}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              My approach is intimate and intentional. I create a space where
              you feel comfortable being completely yourself, so what emerges on
              camera is nothing short of genuine. Whether it&apos;s a solo
              session, family portrait, or professional headshot — I bring
              artistry and care to every frame.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <p className="font-serif text-4xl text-foreground font-light">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 group"
            >
              Work With Me. 
              <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
