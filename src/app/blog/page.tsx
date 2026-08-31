import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const pageTitle = "Photography Tips & Guides | South Wales Photographer";
const pageDescription =
  "Portrait photography tips, location guides, and pricing advice from Maleek — a photographer based in South Wales, UK, covering Cardiff, Newport, and Swansea.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    siteName: "Maleek Shot It Photography",
    url: "/blog",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/portfolio/portraits/portraits-photography-south-wales-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/portfolio/portraits/portraits-photography-south-wales-1.jpg"],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-background pt-16 min-h-screen">
      {/* Header */}
      <div className="pt-20 pb-12 max-w-7xl mx-auto px-6">
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Tips & Guides</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-none mb-8">
          The <span className="italic text-accent">Blog</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
          Location guides, outfit advice, and pricing tips for portrait, family, and event
          photography across South Wales.
        </p>
      </div>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-border hover:border-accent/40 transition-colors duration-300"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-xs tracking-[0.2em] uppercase">
                    {post.category}
                  </span>
                  <span className="text-muted text-xs">{formatDate(post.date)}</span>
                </div>
                <h2 className="font-serif text-xl text-foreground font-light mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-surface-alt py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-5">
            Ready to Book <span className="italic text-accent">Your Session?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Send me a message and let&apos;s plan a session that fits your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
