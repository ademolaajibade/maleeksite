import Link from "next/link";
import { Camera, Sparkles, Heart, Star, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Portrait Sessions",
    desc: "Solo portraits crafted to reveal who you truly are — studio or outdoor.",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Fashion & Editorial",
    desc: "High-concept fashion photography for brands, creatives, and models.",
    href: "/services",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    desc: "Romantic, effortless sessions that capture the love before the big day.",
    href: "/services",
  },
  {
    icon: Star,
    title: "Events Coverage",
    desc: "Birthdays, graduations, brand launches — every moment documented.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Family Portraits",
    desc: "Candid and timeless. The laughter, chaos, and love — all in one frame.",
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "Professional Headshots",
    desc: "Corporate and LinkedIn portraits that command attention and convey authority.",
    href: "/services",
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">What I Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            My <span className="italic text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mt-5 leading-relaxed">
            Every session is tailored to you — your personality, your vision, your story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-surface-alt p-8 group hover:bg-background transition-colors duration-300"
              >
                <div className="w-11 h-11 border border-accent/30 flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300">
                  <Icon size={16} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <span className="w-6 h-px bg-accent transition-all duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-border text-muted-foreground text-xs tracking-[0.25em] uppercase px-10 py-4 hover:border-accent hover:text-accent transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
