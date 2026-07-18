import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

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

function firstCategoryImage(folder: string, label: string) {
  const dir = path.join(process.cwd(), "public", "portfolio", folder);
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
      .sort();
  } catch {
    return null;
  }
  if (files.length === 0) return null;
  return {
    src: `/portfolio/${folder}/${files[0]}`,
    alt: `${label} sample`,
    category: label,
  };
}

export default function PortfolioTeaser() {
  const portfolioTeaser = CATEGORY_FOLDERS.map(({ folder, label }) =>
    firstCategoryImage(folder, label)
  ).filter((img): img is NonNullable<typeof img> => img !== null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            The <span className="italic text-accent">Portfolio</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolioTeaser.map((item) => (
            <div key={item.src} className="relative aspect-square overflow-hidden group">
             console.log(item.src)
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs tracking-widest uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 group"
          >
            View Full Portfolio
            <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
