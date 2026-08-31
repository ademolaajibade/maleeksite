import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGrid, { type PortfolioImage } from "@/components/PortfolioGrid";
import { CATEGORY_FOLDERS, getAllPortfolioImages } from "@/lib/portfolio-images";

const pageTitle = "Photography Portfolio | Portraits, Family & Weddings — South Wales";
const pageDescription =
  "Browse real portrait, fashion, family, events, maternity, graduation, and pre-wedding photography by Maleek, a South Wales, UK photographer.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    siteName: "Maleek Shot It Photography",
    url: "/portfolio",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/portfolio/portraits/portraits-photography-south-wales-4.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/portfolio/portraits/portraits-photography-south-wales-4.jpeg"],
  },
};

export default function PortfolioPage() {
  const images: PortfolioImage[] = getAllPortfolioImages().map(({ indexInCategory, ...img }) => ({
    ...img,
    span: indexInCategory % 5 === 0 ? "row-span-2" : undefined,
  }));
  const categories = ["All", ...CATEGORY_FOLDERS.map((c) => c.label)];

  return (
    <div className="bg-background pt-16 min-h-screen">
      {/* Header */}
      <div className="pt-20 pb-12 max-w-7xl mx-auto px-6">
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Selected Work</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-none mb-8">
          The <span className="italic text-accent">Portfolio</span>
        </h1>
      </div>

      <PortfolioGrid categories={categories} images={images} />

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
