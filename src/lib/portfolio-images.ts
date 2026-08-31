import fs from "fs";
import path from "path";

export const CATEGORY_FOLDERS: { folder: string; label: string }[] = [
  { folder: "portraits", label: "Portraits" },
  { folder: "fashion", label: "Fashion" },
  { folder: "pre-wedding", label: "Pre-Wedding" },
  { folder: "events", label: "Events" },
  { folder: "maternity", label: "Maternity" },
  { folder: "birthday", label: "Birthday" },
  { folder: "graduation", label: "Graduation" },
  { folder: "children", label: "Children" },
  { folder: "family", label: "Family" },
  { folder: "lifestyle", label: "Lifestyle" },
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export interface PortfolioImageMeta {
  src: string;
  alt: string;
  category: string;
  /** 0-based index of this image within its own category folder. */
  indexInCategory: number;
}

/** Every portfolio image across all category folders, read directly from /public/portfolio. */
export function getAllPortfolioImages(): PortfolioImageMeta[] {
  return CATEGORY_FOLDERS.flatMap(({ folder, label }) => {
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

    return files.map((file, indexInCategory) => ({
      src: `/portfolio/${folder}/${file}`,
      alt: `${label} photography by Maleek in South Wales, UK — sample ${indexInCategory + 1}`,
      category: label,
      indexInCategory,
    }));
  });
}
