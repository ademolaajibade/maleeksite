import Link from "next/link";
import Image from "next/image";

const portfolioTeaser = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait session",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    alt: "Fashion shoot",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    alt: "Pre-wedding shoot",
    category: "Pre-Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    alt: "Studio portrait",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Editorial shoot",
    category: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding moment",
    category: "Events",
  },
];

export default function PortfolioTeaser() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            The <span className="italic text-accent">Portfolio</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolioTeaser.map((item) => (
            <div key={item.src} className="relative aspect-square overflow-hidden group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs tracking-widest uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 group"
          >
            View Full Portfolio
            <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
