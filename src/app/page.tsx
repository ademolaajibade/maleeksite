import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesTeaser from "@/components/ServicesTeaser";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Best Photography in South Wales, UK",
  description:
    "Maleek is a portrait photographer based in South Wales, UK, offering portrait, family, maternity, graduation, fashion, event, and pre-wedding photography across Cardiff, Newport, and Swansea.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesTeaser />
      <PortfolioTeaser />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
