"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsLight(true);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border py-3 transition-all duration-300 backdrop-blur-md ${
          scrolled ? "bg-background/60" : "bg-background/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex rounded-lg overflow-hidden shrink-0 ring-1 ring-accent/30 shadow-[0_0_10px_rgba(201,168,76,0.2)]">
              <Image
                src="/logo.png"
                alt="Maleek Shot it Photography logo"
                width={70}
                height={46}
                className="object-cover w-[70px] h-[46px]"
                priority
              />
            </span>
            <span className="font-serif text-2xl tracking-[0.3em] text-foreground font-light group-hover:text-accent transition-colors duration-300">
              MALEEK
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
            >
              {isLight ? (
                <Moon size={15} strokeWidth={1.5} />
              ) : (
                <Sun size={15} strokeWidth={1.5} />
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-black transition-all duration-300 font-medium"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
            >
              {isLight ? (
                <Moon size={15} strokeWidth={1.5} />
              ) : (
                <Sun size={15} strokeWidth={1.5} />
              )}
            </button>
            <button
              className="text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-serif text-3xl font-light tracking-widest text-foreground hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 px-8 py-3 border border-accent text-accent text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-black transition-all duration-300"
        >
          Book Session
        </Link>
      </div>
    </>
  );
}
