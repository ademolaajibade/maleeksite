import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const locationLinks = [
  { label: "Cardiff Photographer", href: "/locations/cardiff" },
  { label: "Newport Photographer", href: "/locations/newport" },
  { label: "Swansea Photographer", href: "/locations/swansea" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/maleekshot_it",
    icon: (
       <Image
                                              src='/instagram.png'
                                              alt='instagram'
                                              
                                              width="28" 
                                              height="28"
                                              // className="object-cover object-center"
                                              className="text-accent"
                                            />
      // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
  },

  {
    label: "TikTok",
    href: "https://tiktok.com/@maleekshot_it",
    icon: (
       <Image
                                              src='/tiktok.png'
                                              alt='tiktok'
                                              
                                              width="28" 
                                              height="28"
                                              // className="object-cover object-center"
                                              className="text-accent"
                                            />
      // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <span className="inline-flex rounded-lg overflow-hidden shrink-0 ring-1 ring-accent/30">
                <Image
                  src="/logo.png"
                  alt="Maleek Shot it Photography logo"
                  width={56}
                  height={37}
                  className="object-cover w-[56px] h-[37px]"
                />
              </span>
              <span className="font-serif text-xl tracking-[0.3em] text-foreground font-light group-hover:text-accent transition-colors duration-300">
                MALEEK
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Portrait photographer based in Southwales, UK. Capturing authentic souls with light, emotion, and artistry.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-6 mt-10">Locations</p>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-6">Get in Touch</p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li>Southwales, United Kingdom</li>
              <li>+44 7402 059301 </li>
              <li>
                <a
                  href="mailto:maleekshots@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  maleekshots@gmail.com
                </a>
              </li>
              <li>Available for travel across the UK</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-black transition-all duration-300 font-medium"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Maleek Shot it Photography. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Southwales, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
