import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PricingTabs from "@/components/PricingTabs";

const pageTitle = "Photography Pricing & Packages | South Wales Photographer";
const pageDescription =
  "Transparent photography pricing by Maleek — portrait, family, graduation, events, pre-wedding, fashion, lifestyle, and children's photography packages in South Wales, UK.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    siteName: "Maleek Shot It Photography",
    url: "/pricing",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/portfolio/portraits/portraits-photography-south-wales-4.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/portfolio/portraits/portraits-photography-south-wales-4.jpeg"],
  },
};

const addons = [
  { name: "Extra edited image", price: "£20 each" },
  { name: "Express Delivery (24hrs)", price: "£50" },
  { name: "Printed Photo Book", price: "From £200" },
];

export default function PricingPage() {
  return (
    <div className="bg-background pt-16">
      <PageHeader
        eyebrow="Investment"
        title="Simple"
        accent="Pricing"
        subtitle="No hidden fees. No surprises. Just great photography at a fair price."
        image="/about.png"
        imageAlt="Photography pricing and packages — South Wales photographer"
      />

      <PricingTabs />

      {/* Add-ons */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Extras</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
              Optional <span className="italic text-accent">Add-Ons</span>
            </h2>
          </div>
          <div className="divide-y divide-border">
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between py-5">
                <span className="text-muted-foreground text-sm">{addon.name}</span>
                <span className="text-accent font-serif text-lg font-light">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-6">
            Have a <span className="italic text-accent">Custom Request?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Events, brand campaigns, and multi-day projects are priced separately. Reach out and I&apos;ll put together a tailored quote for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-accent text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
            >
              Get a Custom Quote
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-border text-muted-foreground text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
