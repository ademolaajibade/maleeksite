import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book a Session | Photographer in South Wales",
  description:
    "Book a photography session with Maleek — portrait, family, fashion, event, and pre-wedding shoots in South Wales, UK. Get a quote today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
