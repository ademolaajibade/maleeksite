import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getPost, getRelatedPosts } from "@/lib/blog";

const siteUrl = "https://maleekshotit.com";
const siteName = "Maleek Shot It Photography";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      siteName,
      url: `/blog/${slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.coverImage }],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteUrl}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Maleek",
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blog/${slug}`,
  };

  return (
    <div className="bg-background pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Cover */}
      <div className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-14 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs tracking-[0.3em] uppercase">
              {post.category}
            </span>
            <span className="text-muted-foreground text-xs">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <article className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted text-xs tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300 mb-14"
          >
            <ArrowLeft size={14} />
            All Posts
          </Link>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-light mb-5">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed text-sm">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                Related Pages
              </p>
              <div className="flex flex-wrap gap-4">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="w-6 h-px bg-accent group-hover:w-10 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-10 text-center">
              Read Next
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block border border-border hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={r.coverImage}
                      alt={r.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase">
                      {r.category}
                    </span>
                    <h3 className="font-serif text-lg text-foreground font-light mt-3 leading-snug">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="py-24">
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
