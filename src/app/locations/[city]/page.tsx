import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

type CityKey = "cardiff" | "newport" | "swansea";

interface CityContent {
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  subtitle: string;
  intro: string[];
  landmarks: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
}

const CITIES: Record<CityKey, CityContent> = {
  cardiff: {
    name: "Cardiff",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Cardiff, South Wales",
    metaDescription:
      "Looking for a portrait photographer in Cardiff? Maleek offers portrait, family, maternity, graduation, and pre-wedding photography sessions around Cardiff Bay, Bute Park, and the city centre.",
    heroImage: "/portfolio/lifestyle/lifestyle2.jpeg",
    heroAlt: "Portrait photographer in Cardiff, South Wales",
    subtitle: "Portrait, family, and lifestyle photography around Cardiff, Wales' capital.",
    intro: [
      "Maleek is a South Wales portrait photographer working with clients across Cardiff — from studio sessions to on-location shoots around the city's waterfront and parks.",
      "Cardiff's mix of green space and modern architecture makes it a versatile backdrop: Bute Park and Roath Park for soft, natural light; Cardiff Bay and the city centre for a sharper, contemporary look.",
    ],
    landmarks: [
      { title: "Cardiff Bay", desc: "Waterfront backdrops and golden-hour light, a favourite for pre-wedding and couple sessions." },
      { title: "Bute Park", desc: "Tree-lined paths and open lawns right in the city centre — ideal for family and maternity shoots." },
      { title: "Cardiff Castle & City Centre", desc: "Historic architecture for portraits with a distinctly Cardiff character." },
      { title: "Roath Park", desc: "A quieter, greener setting for relaxed family and children's sessions." },
    ],
    gallery: [
      { src: "/portfolio/portraits/IMG_5477.jpg", alt: "Portrait photography session in Cardiff" },
      { src: "/portfolio/family/IMG_7435.jpg", alt: "Family photography session in Cardiff" },
      { src: "/portfolio/fashion/IMG_4530.jpg", alt: "Fashion photography shoot in Cardiff" },
    ],
    faqs: [
      {
        q: "Do you travel to Cardiff for photography sessions?",
        a: "Yes — Cardiff is one of the main areas I shoot in across South Wales, whether that's a studio session or on-location around Cardiff Bay, Bute Park, or the city centre.",
      },
      {
        q: "What's the best location in Cardiff for a portrait shoot?",
        a: "It depends on the look you want. Bute Park and Roath Park work well for soft, natural-light portraits, while Cardiff Bay gives a more polished, contemporary backdrop — I'll help you pick based on your session.",
      },
      {
        q: "How much does a photography session in Cardiff cost?",
        a: "Pricing depends on the type of session — see the full breakdown on the pricing page, or get in touch for a quote specific to what you have in mind.",
      },
    ],
  },
  newport: {
    name: "Newport",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Newport, South Wales",
    metaDescription:
      "Portrait, family, maternity, and graduation photography in Newport, South Wales, by Maleek — sessions around the Transporter Bridge, Newport Wetlands, and the River Usk.",
    heroImage: "/portfolio/events/IMG_7020.jpg",
    heroAlt: "Portrait photographer in Newport, South Wales",
    subtitle: "Portrait, family, and event photography across Newport and the Usk valley.",
    intro: [
      "Maleek photographs clients across Newport, South Wales — from milestone family sessions to graduation portraits, in the studio or on location around the city.",
      "Newport's riverside setting and industrial heritage give it a distinctive character: the Transporter Bridge and River Usk for striking, structural backdrops; Newport Wetlands and Tredegar House for something greener.",
    ],
    landmarks: [
      { title: "Transporter Bridge", desc: "A genuinely unique, one-of-a-kind backdrop for couples and creative portrait sessions." },
      { title: "Newport Wetlands", desc: "Open skies and natural light for relaxed family and maternity shoots." },
      { title: "Tredegar House & Park", desc: "Historic grounds for portraits with room to move and play — great for children's sessions." },
      { title: "River Usk & City Centre", desc: "Everyday Newport streets and riverside views for lifestyle and event coverage." },
    ],
    gallery: [
      { src: "/portfolio/maternity/IMG_2363.jpg", alt: "Maternity photography session in Newport" },
      { src: "/portfolio/graduation/IMG_2526.jpg", alt: "Graduation photography session in Newport" },
      { src: "/portfolio/children/IMG_4688.jpg", alt: "Children's photography session in Newport" },
    ],
    faqs: [
      {
        q: "Do you offer photography sessions in Newport?",
        a: "Yes — Newport is a regular part of where I shoot across South Wales, including studio sessions and on-location shoots around the Transporter Bridge, Newport Wetlands, and Tredegar House.",
      },
      {
        q: "What makes Newport a good location for photos?",
        a: "Newport has a mix most cities don't: the industrial character of the Transporter Bridge and riverside, alongside genuinely green spaces like the Wetlands and Tredegar House — good range for different styles of shoot.",
      },
      {
        q: "How do I book a session in Newport?",
        a: "Get in touch through the contact page with what you have in mind, and I'll help you pick the right package and location around Newport.",
      },
    ],
  },
  swansea: {
    name: "Swansea",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Swansea, South Wales",
    metaDescription:
      "Portrait, family, pre-wedding, and lifestyle photography in Swansea, South Wales, by Maleek — sessions around Swansea Bay, Mumbles, and Singleton Park.",
    heroImage: "/portfolio/pre-wedding/IMG_1629.jpg",
    heroAlt: "Portrait photographer in Swansea, South Wales",
    subtitle: "Portrait, pre-wedding, and lifestyle photography along Swansea Bay.",
    intro: [
      "Maleek shoots portrait, pre-wedding, and lifestyle sessions across Swansea, South Wales — making the most of the coastline as much as the studio.",
      "Swansea's coastal setting is hard to match: Swansea Bay and Mumbles for beach and sunset sessions, Singleton Park for greenery closer to the city centre.",
    ],
    landmarks: [
      { title: "Swansea Bay", desc: "Beach and promenade sessions with reliable golden-hour light over the water." },
      { title: "Mumbles", desc: "The pier, seafront, and village streets for relaxed couple and pre-wedding shoots." },
      { title: "Singleton Park", desc: "Botanical gardens and open lawns for family and maternity sessions in the city." },
      { title: "Gower Peninsula", desc: "For clients wanting a short trip out for dramatic coastal and countryside backdrops." },
    ],
    gallery: [
      { src: "/portfolio/pre-wedding/IMG_1606.jpg", alt: "Pre-wedding photography session in Swansea" },
      { src: "/portfolio/lifestyle/lifestyle1.jpeg", alt: "Lifestyle photography session in Swansea" },
      { src: "/portfolio/birthday/IMG_2519.jpg", alt: "Birthday photography session in Swansea" },
    ],
    faqs: [
      {
        q: "Do you travel to Swansea for shoots?",
        a: "Yes — Swansea and the surrounding coast are a regular part of where I photograph across South Wales, from Swansea Bay and Mumbles to Singleton Park.",
      },
      {
        q: "Is Swansea Bay good for a pre-wedding or couple shoot?",
        a: "Very — the beach, promenade, and Mumbles pier give a relaxed, romantic backdrop that works especially well around sunset.",
      },
      {
        q: "Can you shoot further out towards the Gower Peninsula?",
        a: "Yes, for clients after a coastal or countryside look beyond the city — just mention it when you get in touch and we'll plan around it.",
      },
    ],
  },
};

const CITY_KEYS = Object.keys(CITIES) as CityKey[];

export function generateStaticParams() {
  return CITY_KEYS.map((city) => ({ city }));
}

function getCity(slug: string): CityContent | undefined {
  return CITIES[slug as CityKey];
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
