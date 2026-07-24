import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import PortfolioGrid, { type PortfolioImage } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse portrait, fashion, family, events, maternity, and pre-wedding photography by Maleek — South Wales, UK.",
  alternates: {
    canonical: "/portfolio",
  },
};

const CATEGORY_FOLDERS: { folder: string; label: string }[] = [
  { folder: "portraits", label: "Portraits" },
  { folder: "fashion", label: "Fashion" },
  { folder: "pre-wedding", label: "Pre-Wedding" },
  { folder: "events", label: "Events" },
  { folder: "maternity", label: "Maternity" },
  { folder: "birthday", label: "Birthday" },
  { folder: "graduation", label: "Graduation" },
  { folder: "children", label: "Children" },
  { folder: "family", label: "Family" },
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function readCategoryImages(folder: string, label: string): PortfolioImage[] {
  const dir = path.join(process.cwd(), "public", "portfolio", folder);
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
      .sort();
  } catch {
    return [];
  }

  return files.map((file, i) => ({
    src: `/portfolio/${folder}/${file}`,
    alt: path
      .basename(file, path.extname(file))
      .replace(/[-_]/g, " ")
      .trim() || `${label} photo`,
    category: label,
    span: i % 5 === 0 ? "row-span-2" : undefined,
  }));
}

export default function PortfolioPage() {
  const images = CATEGORY_FOLDERS.flatMap(({ folder, label }) =>
    readCategoryImages(folder, label)
  );
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
