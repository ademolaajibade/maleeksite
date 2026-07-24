import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Camera, Heart, Eye, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Maleek Photography",
  description:
    "Learn about Maleek — portrait photographer based in Southwales, UK. My story, philosophy, and approach to capturing authentic people.",
};

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "1.2K+", label: "Sessions Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "5+", label: "Awards Won" },
];

const values = [
  {
    icon: Eye,
    title: "Seeing the Unseen",
    desc: "I look for the moments between moments — the fleeting glance, the quiet exhale, the half-smile that says everything. These are the images that move people.",
  },
  {
    icon: Heart,
    title: "Genuine Connection",
    desc: "Before I pick up the camera, I listen. Understanding who you are and what you want to convey is what separates a photograph from a portrait.",
  },
  {
    icon: Camera,
    title: "Light as Language",
    desc: "Every mood, every emotion, every personality has a light that fits it perfectly. I speak fluent light — natural, artificial, and everything between.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "From the session itself to the final retouched gallery, every step of my process is held to the highest standard. You deserve nothing less.",
  },
];

const process = [
  {
    step: "01",
    title: "Inquiry & Consultation",
    desc: "We start with a conversation — over call, DM, or email. I learn about you, your vision, and what you want to feel when you look at these images.",
  },
  {
    step: "02",
    title: "Planning & Preparation",
    desc: "Once booked, I send a detailed style guide and we nail down the location, outfits, and timeline. No surprises on session day.",
  },
  {
    step: "03",
    title: "The Session",
    desc: "I create a comfortable, creative environment where you can relax and be yourself. Expect direction, laughter, and a lot of great light.",
  },
  {
    step: "04",
    title: "Gallery Delivery",
    desc: "Within 2–3 weeks, your curated gallery of fully retouched images is ready. Every photo is an artwork you'll be proud to share.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background pt-16">
      <PageHeader
        eyebrow="The Photographer"
        title="About"
        accent="Maleek"
        subtitle="Portrait photographer, light chaser, and storyteller based in Southwales, UK."
        image="/about.png"
      />

      {/* Main story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative lg:sticky lg:top-28">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src="/ppic.png"
                  alt="Maleek — Portrait Photographer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 border border-accent/25 pointer-events-none" />
            </div>

            {/* Text */}
            <div>
              <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">My Story</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
                I Didn&apos;t Choose Photography.
                <br />
                <span className="italic text-accent">It Chose Me.</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
                <p>
                    Photography wasn’t a career I planned to pursue. I started learning it several times, but I kept stopping because I simply wasn’t interested. Somehow, life kept bringing me back to it.
                </p>
                <p>
                    Over time, what felt like an obligation became a passion. The more I learned, the more I fell in love with the art of capturing people, emotions, and moments that last forever.
                </p>
                <p>
                    Today, photography is more than just what I do, it’s how I tell stories. Every session is a chance to create memories that my clients can cherish for a lifetime, and I’m grateful I gave this journey one more chance.
                </p>
                {/* <p>
                  Whether you&apos;re here for a headshot, a family memory, or a full editorial project, you&apos;re getting the same level of attention, care, and artistry. That&apos;s not a promise — it&apos;s just how I work.
                </p> */}
              </div>





              {/* Stats */}
              <div className="grid grid-cols-2 gap-5 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-4xl text-foreground font-light">{stat.value}</p>
                    <p className="text-muted text-xs tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / values */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">How I Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              The Values That{" "}
              <span className="italic text-accent">Drive My Lens</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="flex gap-6 p-8 border border-border hover:border-accent/40 transition-colors duration-300"
              >
               
                <div>
                  <h3 className="font-serif text-xl text-foreground font-light mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">The Experience</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Working Together,{" "}
              <span className="italic text-accent">Step by Step</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <p className="font-serif text-6xl font-light text-accent/20 mb-4 leading-none">
                  {p.step}
                </p>
                <h3 className="font-serif text-xl text-foreground font-light mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl md:text-4xl text-foreground font-light leading-snug italic mb-8">
            &ldquo;The best portrait isn&apos;t the most technically perfect one. It&apos;s the one where the person forgets the camera exists.&rdquo;
          </p>
          <p className="text-accent text-xs tracking-[0.3em] uppercase">— Maleek</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-foreground mb-6">
            Ready to Work <span className="italic text-accent">Together?</span>
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Whether you know exactly what you want or you&apos;re starting from scratch, I&apos;ll guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
            >
              Book a Session
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-4 border border-border text-muted-foreground text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
