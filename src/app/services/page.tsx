import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import {
  Camera,
  Users,
  Sparkles,
  Heart,
  CalendarDays,
  GraduationCap,
  Sun,
  Baby,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Maleek Photography",
  description:
    "Portrait sessions, family shoots, events, graduation, fashion, lifestyle, and pre-wedding photography by Maleek — South Wales, UK.",
};

const services = [
  {
    icon: Camera,
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
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
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
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: GraduationCap,
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
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: CalendarDays,
    title: "Events Coverage",
    desc: "Birthdays, corporate events, parties, and engagements — I document events with a photojournalistic eye, capturing the energy, the emotion, and every detail that matters.",
    includes: [
      "Hourly or full-day booking",
      "From £150/hr",
      "Edited highlights",
      "Online gallery delivery",
    ],
    perfectFor: ["Birthdays", "Corporate events", "Parties", "Engagements"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    desc: "Before the big day, a story of the two of you. Intimate, romantic, and effortless — pre-wedding sessions capture the love that led you here in timeless images you'll treasure forever.",
    includes: [
      "Packages from £250",
      "Up to 2 outfits",
      "Creative direction included",
      "Optional photo book (£200)",
    ],
    perfectFor: ["Engaged couples", "Save-the-date photos", "Anniversary portraits"],
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Fashion Collection Shoot",
    desc: "High-concept, visually striking fashion photography for clothing brands, designers, and creatives. From clean studio starter collections to full commercial brand campaigns with social media crops.",
    includes: [
      "Studio or outdoor",
      "From £300 per collection",
      "Model direction",
      "Social media crops included in campaign package",
    ],
    perfectFor: ["Clothing brands", "Fashion designers", "Product campaigns"],
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sun,
    title: "Lifestyle Photography",
    desc: "Natural, authentic, and story-driven. Lifestyle sessions capture you in your element — whether a single-location shoot or a multi-scene narrative across different settings.",
    includes: [
      "Indoor or outdoor",
      "Packages from £150",
      "Natural editing style",
      "Up to 10 edited images",
    ],
    perfectFor: ["Content creators", "Personal brands", "Natural storytelling shoots"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Baby,
    title: "Children Photography",
    desc: "Playful, heartfelt, and full of personality. Children's sessions are handled with patience and creativity, giving your little ones the space to be themselves while I capture the magic.",
    includes: [
      "Studio location",
      "£250 flat rate",
      "2 outfit changes",
      "10 edited images",
    ],
    perfectFor: ["Toddlers & young children", "Birthday portraits", "Milestone memories"],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
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
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reverse = i % 2 !== 0;
            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex lg:flex-row-reverse" : ""}`}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className={reverse ? "lg:pr-8" : "lg:pl-8"}>
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mb-6">
                    <Icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
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
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
