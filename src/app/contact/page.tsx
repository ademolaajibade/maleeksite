import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a photography session with Maleek — portrait, family, fashion, event, and pre-wedding shoots in South Wales, UK.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
