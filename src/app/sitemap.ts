import type { MetadataRoute } from "next";
import { getAllPortfolioImages } from "@/lib/portfolio-images";
import { CITIES, CITY_KEYS } from "@/lib/locations";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://maleekshotit.com";

const abs = (src: string) => `${siteUrl}${src}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioImages = getAllPortfolioImages().map((img) => abs(img.src));

  const pageImages: Record<string, string[]> = {
    "": [abs("/portfolio/pre-wedding/pre-wedding-photography-south-wales-1.jpg")],
    "/about": [abs("/about.png")],
    "/portfolio": portfolioImages,
    "/services": [abs("/portfolio/portraits/portraits-photography-south-wales-5.jpeg")],
    "/pricing": [abs("/portfolio/portraits/portraits-photography-south-wales-4.jpeg")],
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
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...getAllPosts().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [abs(post.coverImage)],
    })),
  ];
}
