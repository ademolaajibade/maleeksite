import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Let&apos;s Create</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
          Ready to Tell Your <span className="italic text-accent">Story?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you&apos;re planning a portrait session, pre-wedding shoot, or something entirely
          unique — I&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-12 py-4 bg-accent text-black text-xs tracking-[0.3em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center px-12 py-4 border border-border text-muted-foreground text-xs tracking-[0.3em] uppercase hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto justify-center"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
