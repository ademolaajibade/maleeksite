import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { CITIES, CITY_KEYS, getCity } from "@/lib/locations";

export function generateStaticParams() {
  return CITY_KEYS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/locations/${citySlug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const otherCities = CITY_KEYS.filter((key) => key !== citySlug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-background pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow={`${city.region} Photography`}
        title={city.name}
        accent="Photographer"
        subtitle={city.subtitle}
        image={city.heroImage}
        imageAlt={city.heroAlt}
      />

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Local to {city.name}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
            Portrait Photography,{" "}
            <span className="italic text-accent">{city.name} & Beyond</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
            {city.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks / locations */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Where We Shoot</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Favourite Spots Around{" "}
              <span className="italic text-accent">{city.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.landmarks.map((spot) => (
              <div
                key={spot.title}
                className="p-8 border border-border hover:border-accent/40 transition-colors duration-300"
              >
                <h3 className="font-serif text-xl text-foreground font-light mb-3">{spot.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Recent Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Sessions Around <span className="italic text-accent">{city.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {city.gallery.map((img) => (
              <div key={img.src} className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 text-accent text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 group"
            >
              View Full Portfolio
              <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Good to Know</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              {city.name} <span className="italic text-accent">FAQ</span>
            </h2>
          </div>
          <div className="space-y-8">
            {city.faqs.map((faq) => (
              <div key={faq.q} className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground font-light mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">Also Serving</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {otherCities.map((key) => (
              <Link
                key={key}
                href={`/locations/${key}`}
                className="text-foreground text-sm hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent"
              >
                {CITIES[key].name} Photographer
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-foreground mb-6">
            Book Your {city.name} <span className="italic text-accent">Session</span>
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Tell me what you have in mind and I&apos;ll help you plan the right session, package, and location around {city.name}.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
