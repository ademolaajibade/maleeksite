import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const pageTitle = "Contact & Book a Session | Photographer in South Wales";
const pageDescription =
  "Book a photography session with Maleek — portrait, family, fashion, event, and pre-wedding shoots in South Wales, UK. Get a quote today.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: "Maleek Shot It Photography",
    url: "/contact",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/profile.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/profile.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
