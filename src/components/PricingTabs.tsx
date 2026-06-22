"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
};

type ServicePricing = {
  id: string;
  label: string;
  tiers: Tier[];
  perfectFor?: string[];
  note?: string;
};

const servicePricing: ServicePricing[] = [
  {
    id: "portrait",
    label: "Portrait",
    tiers: [
      {
        name: "Essential Portrait",
        price: "£140",
        features: [
          "1 Hour Session",
          "1 Outfit",
          "4 professionally edited images",
          "Extra images at £15 each",
          "Studio location",
          "Add-on: BTS/Reel video (15–20 sec)",
        ],
      },
      {
        name: "Signature Portrait",
        price: "£250",
        highlight: true,
        features: [
          "2 Hour Session",
          "Up to 2 Outfits",
          "9 professionally edited images",
          "Extra images at £15 each",
          "Studio location",
          "Add-on: BTS/Reel video (15–20 sec)",
        ],
      },
      {
        name: "Premium Portrait",
        price: "£400",
        features: [
          "3–4 Hour Session",
          "Multiple Looks",
          "15–20 professionally edited images",
          "Creative Direction Included",
          "Studio location",
          "Add-on: BTS/Reel video (15–20 sec)",
        ],
      },
    ],
    perfectFor: [
      "Personal branding",
      "Studio portraits",
      "Creative portraits",
      "Birthday shoot",
      "Graduation shoot",
      "Maternity shoot",
    ],
  },
  {
    id: "family",
    label: "Family",
    tiers: [
      {
        name: "Essential Family",
        price: "£160",
        features: [
          "1 Hour Session",
          "1 Outfit",
          "5 professionally edited images",
          "Extra images at £20 each",
          "Studio location",
          "Add-on: BTS/Reel video (15–20 sec)",
        ],
      },
      {
        name: "Signature Family",
        price: "£300",
        highlight: true,
        features: [
          "2 Hour Session",
          "Two Outfits",
          "11 professionally edited images",
          "Studio location",
          "BTS/Reels Clips Included",
        ],
      },
      {
        name: "Premium Family",
        price: "£450",
        features: [
          "3–4 Hour Session",
          "Full Creative Planning",
          "Multiple Setups",
          "Multiple Outfit Changes (3–4)",
          "Studio location",
        ],
      },
    ],
  },
  {
    id: "graduation",
    label: "Graduation",
    tiers: [
      {
        name: "Graduate",
        price: "£140",
        features: [
          "1 Hour Shoot",
          "5 Edited Images",
          "Campus or Studio Location",
        ],
      },
      {
        name: "Graduate Plus",
        price: "£250",
        highlight: true,
        features: [
          "2 Hour Session",
          "10 Edited Images",
          "Friends & Family Included",
        ],
      },
      {
        name: "Group Graduation",
        price: "From £350",
        features: [
          "Group Coverage",
          "Individual Portraits",
          "Team / Class Photos",
        ],
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    tiers: [
      {
        name: "Hourly Coverage",
        price: "£150/hr",
        features: [
          "Professional Event Coverage",
          "Edited Highlights",
          "Online Gallery",
        ],
      },
      {
        name: "Half-Day Event",
        price: "£400",
        highlight: true,
        features: [
          "Up to 4 Hours",
          "Professional Event Coverage",
          "Edited Highlights",
          "Online Gallery",
        ],
      },
      {
        name: "Full-Day Event",
        price: "£800",
        features: [
          "Up to 8 Hours",
          "Professional Event Coverage",
          "Edited Highlights",
          "Online Gallery",
        ],
      },
    ],
    perfectFor: ["Birthdays", "Corporate events", "Parties", "Engagements"],
  },
  {
    id: "prewedding",
    label: "Pre-Wedding",
    tiers: [
      {
        name: "Classic Pre-Wedding",
        price: "£250",
        features: [
          "2 Hour Session",
          "1 Outfit",
          "7 Edited Images",
        ],
      },
      {
        name: "Signature Love Story",
        price: "£450",
        highlight: true,
        features: [
          "2 Outfits",
          "Creative Direction",
          "Cinematic Editing",
          "15 Edited Images",
        ],
      },
    ],
    note: "Optional Photo Book add-on — £200",
  },
  {
    id: "fashion",
    label: "Fashion",
    tiers: [
      {
        name: "Starter Collection",
        price: "£300",
        features: [
          "Up to 5 Looks",
          "Model Direction",
          "Clean Studio / Outdoor Shots",
        ],
      },
      {
        name: "Brand Campaign",
        price: "£600+",
        highlight: true,
        features: [
          "Campaign Creative Direction",
          "Retouched Commercial Images",
          "Social Media Crops Included",
        ],
      },
    ],
    perfectFor: ["Clothing brands", "Designers", "Product campaigns"],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    tiers: [
      {
        name: "Lifestyle Session",
        price: "£150",
        features: [
          "1 Hour Session",
          "Natural / Outdoor Style",
          "5 Edited Images",
        ],
      },
      {
        name: "Premium Lifestyle",
        price: "£280",
        highlight: true,
        features: [
          "Multiple Locations",
          "Storytelling Approach",
          "10 Edited Images",
        ],
      },
    ],
  },
  {
    id: "children",
    label: "Children",
    tiers: [
      {
        name: "Children Shoot",
        price: "£250",
        highlight: true,
        features: [
          "2 Hour Session",
          "2 Outfits",
          "10 Edited Images",
          "Studio location",
        ],
      },
    ],
  },
];

export default function PricingTabs() {
  const [active, setActive] = useState(servicePricing[0].id);
  const current = servicePricing.find((s) => s.id === active)!;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab bar */}
        <div className="overflow-x-auto -mx-6 px-6 mb-14">
          <div className="flex gap-0 border-b border-border min-w-max">
            {servicePricing.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-200 whitespace-nowrap border-b-[1.5px] -mb-px ${
                  active === s.id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tier cards */}
        <div
          className={`grid grid-cols-1 gap-6 ${
            current.tiers.length === 1
              ? "md:grid-cols-1 max-w-sm mx-auto"
              : current.tiers.length === 2
              ? "md:grid-cols-2 max-w-2xl mx-auto"
              : "md:grid-cols-3"
          }`}
        >
          {current.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 border transition-colors duration-300 ${
                tier.highlight
                  ? "border-accent bg-surface-alt"
                  : "border-border hover:border-accent/40"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-8 bg-accent text-black text-xs tracking-[0.2em] uppercase font-semibold px-4 py-1">
                  Most Popular
                </span>
              )}
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">{tier.name}</p>
              <p className="font-serif text-5xl font-light text-foreground mb-8">{tier.price}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={14} className="text-accent mt-0.5 shrink-0" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`text-center py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                  tier.highlight
                    ? "bg-accent text-black hover:bg-accent-light"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        {/* Note (e.g. pre-wedding photo book) */}
        {current.note && (
          <p className="text-center text-xs text-muted-foreground mt-8 tracking-wide">
            {current.note}
          </p>
        )}

        {/* Perfect for tags */}
        {current.perfectFor && (
          <div className="mt-10 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Perfect for</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {current.perfectFor.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
