import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";


export const metadata: Metadata = {
  title: "Photography Services | Portrait, Family, Maternity & Wedding — South Wales",
  description:
    "Portrait sessions, family shoots, maternity, events, graduation, fashion, lifestyle, and pre-wedding photography by Maleek, a professional photographer serving South Wales, UK.",
  alternates: {
    canonical: "/services",
  },
};

function randomPortfolioImage(category: string): string {
  const dir = path.join(process.cwd(), "public", "portfolio", category);
  const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  console.log(files)
  const file = files[Math.floor(Math.random() * files.length)];
  return `/portfolio/${category}/${file}`;
}

const services = [
  {
    title: "Portrait Photography",
    desc: "Individual portrait sessions crafted to capture who you truly are. Studio-based, relaxed, and tailored to your personality — whether it's personal branding, creative portraits, birthday, graduation, or maternity shoots.",
    includes: [
      "Studio location",
      "Packages from £140",
      "Professionally edited images",
      "Optional BTS reel video (15–20 sec)",
    ],
    perfectFor: [
      "Personal branding",
      "Creative portraits",
      "Birthday & graduation shoots",
      "Maternity shoots",
    ],
    image: "/portfolio/portraits/IMG_5478.jpg",
  },
  {
    title: "Family Photography",
    desc: "Candid, joyful, and timeless. Family sessions capture the chaos, the laughter, and the love that make your family uniquely yours — all within a relaxed studio environment.",
    includes: [
      "Studio location",
      "Packages from £160",
      "Professionally edited images",
      "BTS/Reel clips included in select packages",
    ],
    perfectFor: [
      "Families of all sizes",
      "Multi-generational portraits",
      "Annual family portraits",
    ],
    image: "/portfolio/family/IMG_7441.jpg",
  },
  {
    title: "Maternity Photography",
    desc: "Celebrating the beauty of expecting a new life. Relaxed outdoor sessions designed to capture the glow of this season — solo or with your partner, with a natural, timeless feel.",
    includes: [
      "Outdoor location",
      "Packages from £165",
      "Professionally retouched images",
      "Personal & couple images included",
    ],
    perfectFor: ["Baby bump shoots", "Couple maternity portraits", "Maternity announcements"],
    image: "/portfolio/maternity/IMG_2363.jpg",
  },
  {
    title: "Convocation & Graduation",
    desc: "Mark your academic achievement with portraits that do the moment justice. From solo campus shoots to group graduation packages, I capture the pride and joy of graduation day.",
    includes: [
      "Campus or studio location",
      "Packages from £140",
      "Friends & family welcome",
      "Group packages available from £350",
    ],
    perfectFor: [
      "University & college graduations",
      "Group class photos",
      "Solo graduation portraits",
    ],
    image: "/portfolio/graduation/IMG_3771.jpg",
  },
  {
    title: "Events Coverage",
    desc: "Birthdays, corporate events, parties, and engagements — I document events with a photojournalistic eye, capturing the energy, the emotion, and every detail that matters.",
    includes: [
      "Hourly or full-day booking",
      "From £150/hr",
      "Edited highlights",
      "Online gallery delivery",
    ],
    perfectFor: ["Birthdays", "Corporate events", "Parties", "Engagements"],
    image: "/portfolio/events/IMG_7008.jpg",
  },
  {
    title: "Pre-Wedding Shoots",
    desc: "Before the big day, a story of the two of you. Intimate, romantic, and effortless — pre-wedding sessions capture the love that led you here in timeless images you'll treasure forever.",
    includes: [
      "Packages from £250",
      "Up to 2 outfits",
      "Creative direction included",
      "Optional photo book (£200)",
    ],
    perfectFor: ["Engaged couples", "Save-the-date photos", "Anniversary portraits"],
    image: "/portfolio/pre-wedding/IMG_1604.jpg",
  },
  {
    title: "Fashion Collection Shoot",
    desc: "High-concept, visually striking fashion photography for clothing brands, designers, and creatives. From clean studio starter collections to full commercial brand campaigns with social media crops.",
    includes: [
      "Studio or outdoor",
      "From £300 per collection",
      "Model direction",
      "Social media crops included in campaign package",
    ],
    perfectFor: ["Clothing brands", "Fashion designers", "Product campaigns"],
    image: "/portfolio/fashion/IMG_4545.jpg",
  },
  {
    title: "Lifestyle Photography",
    desc: "Natural, authentic, and story-driven. Lifestyle sessions capture you in your element — whether a single-location shoot or a multi-scene narrative across different settings.",
    includes: [
      "Indoor or outdoor",
      "Packages from £150",
      "Natural editing style",
      "Up to 10 edited images",
    ],
    perfectFor: ["Content creators", "Personal brands", "Natural storytelling shoots"],
    image: "/portfolio/portraits/IMG_8518.jpg",
  },
  {
    title: "Children Photography",
    desc: "Playful, heartfelt, and full of personality. Children's sessions are handled with patience and creativity, giving your little ones the space to be themselves while I capture the magic.",
    includes: [
      "Studio location",
      "£250 flat rate",
      "2 outfit changes",
      "10 edited images",
    ],
    perfectFor: ["Toddlers & young children", "Birthday portraits", "Milestone memories"],
    image: "/portfolio/children/IMG_4702.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background pt-16">
      <PageHeader
        eyebrow="What I Offer"
        title="My"
        accent="Services"
        subtitle="Every session is tailored to you — your personality, your vision, your story."
        image={randomPortfolioImage("birthday")}
        imageAlt="Photography services by Maleek in South Wales, UK"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, i) => {
            const reverse = i % 2 !== 0;
            return (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative aspect-4/5 overflow-hidden ${reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className={reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}>
               
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-5">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-4 h-px bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Perfect for</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.perfectFor.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-accent text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 group"
                  >
                    Book This Service
                    <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
            Not Sure Which Service <span className="italic text-accent">Fits You?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Send me a message and we&apos;ll figure it out together. Every project is custom — I&apos;m happy to build something that works exactly for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
          >
            Get in Touch. 
          </Link>
        </div>
      </section>
    </div>
  );
}
