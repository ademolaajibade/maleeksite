const testimonials = [
    {
    quote:
      "My graduation shoot with Maleek was everything I hoped for and more. He captured the joy and pride of that moment in a way that truly felt like me. I'll be framing these photos forever.",
    name: "Ademola A.",
    role: "Graduate Shoot",
    initials: "AA",
  },
  {
    quote:
      "Maleek has an incredible eye for light and emotion. Our pre-wedding shoot was an experience I'll treasure forever — every frame felt like fine art.",
    name: "Amara & Tobi",
    role: "Pre-Wedding Clients",
    initials: "AT",
  },
  {
    quote:
      "I was nervous in front of the camera but Maleek made me feel so at ease. The headshots came out better than I ever imagined. Absolutely worth every penny.",
    name: "James O.",
    role: "Corporate Headshot",
    initials: "JO",
  },
  {
    quote:
      "The fashion editorial he did for my brand was stunning. He understood our vision immediately and delivered something that genuinely stopped people in their tracks.",
    name: "Deola M.",
    role: "Fashion Brand Founder",
    initials: "DM",
  },

];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            What They <span className="italic text-accent">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col p-8 border border-border bg-background">
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                  <span className="text-accent text-xs font-semibold tracking-wide">{t.initials}</span>
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{t.name}</p>
                  <p className="text-muted text-xs tracking-wide mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
