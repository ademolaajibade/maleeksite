import type { MetadataRoute } from "next";
import { getAllPortfolioImages } from "@/lib/portfolio-images";
import { CITIES, CITY_KEYS } from "@/lib/locations";

const siteUrl = "https://maleekshotit.com";

const abs = (src: string) => `${siteUrl}${src}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioImages = getAllPortfolioImages().map((img) => abs(img.src));

  const pageImages: Record<string, string[]> = {
    "": [abs("/portfolio/pre-wedding/IMG_1594.jpg")],
    "/about": [abs("/about.png")],
    "/portfolio": portfolioImages,
    "/services": [abs("/portfolio/portraits/portrait1.jpeg")],
    "/pricing": [abs("/portfolio/portraits/p2.jpeg")],
    "/contact": [abs("/profile.jpeg")],
  };

  const routes = Object.keys(pageImages);

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
      images: pageImages[route],
    })),
    ...CITY_KEYS.map((key) => {
      const city = CITIES[key];
      return {
        url: `${siteUrl}/locations/${key}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: [abs(city.heroImage), ...city.gallery.map((img) => abs(img.src))],
      };
    }),
  ];
}
