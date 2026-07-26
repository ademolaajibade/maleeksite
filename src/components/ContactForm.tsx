"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";


const services = [
  "Portrait Session",
  "Family Portrait",
  "Professional Headshot",
  "Fashion & Editorial",
  "Pre-Wedding Shoot",
  "Event Coverage",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-300";

  return (
    <div className="bg-background pt-16">
      <PageHeader
        eyebrow="Let's Talk"
        title="Book a"
        accent="Session"
        subtitle="Fill in the form and I'll get back to you within 24 hours."
        image="/about.png"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-accent text-xs tracking-[0.4em] uppercase mb-6">Contact Info</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                     <Image
                                        src='/location.png'
                                        alt='location'
                                        
                                        width="28" 
                                        height="28"
                                        // className="object-cover object-center"
                                        className="text-accent"
                                      />
                      {/* <MapPin size={14} className="text-accent" strokeWidth={1.5} /> */}
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium mb-1">Location</p>
                      <p className="text-muted-foreground text-sm">Southwales, United Kingdom</p>
                      <p className="text-muted text-xs mt-1">Available for travel across the UK</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                     <Image
                                        src='/email.png'
                                        alt='email'
                                        
                                        width="28" 
                                        height="28"
                                        // className="object-cover object-center"
                                        className="text-accent"
                                      />
                      {/* <Mail size={14} className="text-accent" strokeWidth={1.5} /> */}
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium mb-1">Email</p>
                      <a
                        href="mailto:hello@maleekshots@gmail.com"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                      >
                        maleekshots@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                       <Image
                                        src='/instagram.png'
                                        alt='instagram'
                                        
                                        width="28" 
                                        height="28"
                                        // className="object-cover object-center"
                                        className="text-accent"
                                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> */}
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium mb-1">Instagram</p>
                      <a
                        href="https://instagram.com/maleekshot_it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                      >
                        @maleekshot_it
                      </a>
                    </div>
                  </li> <li className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    <Image
                                        src='/tiktok.png'
                                        alt='tiktok'
                                        
                                        width="28" 
                                        height="28"
                                        // className="object-cover object-center"
                                        className="text-accent"
                                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> */}
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium mb-1">TikTok</p>
                      <a
                        href="https://tiktok.com/maleekshot_it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                      >
                        @maleekshot_it
                      </a>
                    </div>
                  </li>
                  

                   <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                     <Image
                                        src='/phone.png'
                                        alt='phone'
                                        
                                        width="28" 
                                        height="28"
                                        // className="object-cover object-center"
                                        className="text-accent"
                                      />
                      {/* <Clock size={14} className="text-accent" strokeWidth={1.5} /> */}
                    </div>
                    <div >
                      <p className="text-foreground text-sm font-medium mb-1">Phone Number</p>
                     <p>+44 7402 059301</p>
                    </div>
                  </li>




               
                </ul>
              </div>

              <div className="border-t border-border pt-10">
                <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Before You Book</p>
                <ul className="space-y-3">
                  {[
                    "A 40% non-refundable deposit is required to secure your booking.",
                    "Remaining balance must be paid before or on shoot day.",
                    "RAW/Unedited images are not delivered.",
                    "Travel fees may apply outside Cardiff/South Wales.",
                    "Delivery timeframe: 2-5 working days.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <span className="w-4 h-px bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-16 h-16 border border-accent/40 flex items-center justify-center mb-6">
                    <Mail size={24} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl font-light text-foreground mb-4">
                    Message <span className="italic text-accent">Sent</span>
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                    Thank you, {form.name}! I&apos;ll review your enquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 000 000 0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                      Service *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted mb-2">
                      Tell Me About Your Vision *
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Describe what you have in mind — location ideas, mood, occasion, anything that helps me understand your vision..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs border border-red-400/40 bg-red-400/10 px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-accent text-black text-xs tracking-[0.3em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
