export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  sections: BlogSection[];
  relatedLinks?: { label: string; href: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-locations-for-portrait-photography-in-south-wales",
    title: "Best Locations for Portrait Photography in South Wales",
    metaTitle: "Best Locations for Portrait Photography in South Wales",
    metaDescription:
      "A guide to the best portrait photography locations across South Wales — from Cardiff Bay and Bute Park to Swansea Bay, Mumbles, and the Newport Transporter Bridge.",
    category: "Guides",
    date: "2026-08-10",
    excerpt:
      "South Wales has more range than people expect — waterfront, parkland, coastline, and industrial character all within an hour's drive. Here's where I actually shoot.",
    coverImage: "/portfolio/portraits/portraits-photography-south-wales-1.jpg",
    coverAlt: "Portrait photography session on location in South Wales",
    sections: [
      {
        heading: "Why location matters more than people think",
        paragraphs: [
          "A great portrait comes down to light and connection before anything else — I'll say that up front because I don't want you thinking the background does the heavy lifting. But it's not nothing either. It sets the mood before anyone's even looked at the person in the frame, and South Wales genuinely spoils you for choice: waterfront, parkland, coastline, even a bit of industrial grit, all within about an hour of each other.",
          "So instead of defaulting to the same field every time, here's where I actually take people, city by city. Each one gets a fuller write-up on its own location page, linked below.",
        ],
      },
      {
        heading: "Cardiff: Cardiff Bay and Bute Park",
        paragraphs: [
          "Cardiff Bay is where I send anyone chasing a clean, contemporary look. The light off the water around golden hour is close to unfair — it does most of the work for me. Bute Park is the opposite mood entirely: tree-lined, soft, right in the middle of the city but somehow doesn't feel like it. That's usually where families and maternity sessions end up, because nobody wants to trek out to the countryside with a toddler in tow.",
          "Cardiff Castle earns its place for anyone who wants a bit of history behind them, and Roath Park is my go-to when a client specifically asks for \"somewhere quiet.\"",
        ],
      },
      {
        heading: "Newport: the Transporter Bridge and the Wetlands",
        paragraphs: [
          "I'll be honest, Newport doesn't get talked about enough in South Wales photography circles, and that's a shame — the Transporter Bridge is unlike anything else I shoot at. There's nothing subtle about it. It's industrial, a bit strange-looking if you've never seen one in person, and it photographs like nowhere else in the region. Pair that with Newport Wetlands or Tredegar House for the softer half of a session and you've genuinely got range in one afternoon.",
        ],
      },
      {
        heading: "Swansea: Swansea Bay and Mumbles",
        paragraphs: [
          "If someone says \"coastal\" before anything else, we're going to Swansea. Swansea Bay and Mumbles give you that relaxed, slightly romantic feel almost automatically, especially near sunset — I don't have to work very hard to make it look good. Singleton Park is there if you want green without the drive, and for clients up for a bit more travel, the Gower Peninsula is worth every extra mile.",
        ],
      },
      {
        heading: "Picking the right one for your session",
        paragraphs: [
          "If you're reading this not sure which fits — that's completely normal, and it's exactly what the planning conversation before your session is for. Have a proper look at each city's page, or just tell me the mood you're after and I'll point you somewhere.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Cardiff Portrait Photographer", href: "/locations/cardiff" },
      { label: "Newport Portrait Photographer", href: "/locations/newport" },
      { label: "Swansea Portrait Photographer", href: "/locations/swansea" },
    ],
  },
  {
    slug: "what-to-wear-for-your-portrait-or-family-photoshoot",
    title: "What to Wear for Your Portrait or Family Photoshoot",
    metaTitle: "What to Wear for a Portrait or Family Photoshoot",
    metaDescription:
      "Practical outfit advice for your portrait, family, or maternity photoshoot — what works in photos, what to avoid, and how to coordinate outfits without matching exactly.",
    category: "Tips",
    date: "2026-08-20",
    excerpt:
      "Outfit questions come up in almost every consultation. Here's the advice I actually give clients before a session.",
    coverImage: "/portfolio/family/family-photography-south-wales-1.jpg",
    coverAlt: "Family photography session showing coordinated outfit choices",
    sections: [
      {
        heading: "Solid colours photograph better than busy patterns",
        paragraphs: [
          "This comes up in almost every single consultation, and I get why — it feels like the one thing you actually control before the day. Here's the honest version: small patterns, logos, big text on a t-shirt, all of it pulls the eye away from your face, which is sort of the opposite of what a portrait is meant to do. Solid colours, or something with just a bit of texture, hold up so much better in photos. They age better too — you won't look back in five years and immediately clock what year it was from the t-shirt.",
        ],
      },
      {
        heading: "Coordinate, don't match",
        paragraphs: [
          "Please don't put everyone in identical white shirts and jeans. I understand the instinct — it feels \"safe\" — but it reads as staged the second you look at the photo. What actually works is picking a small palette, two or three colours, mostly neutrals plus maybe one accent, and letting everyone wear their own version of it. It holds together without looking like a uniform.",
        ],
      },
      {
        heading: "Think about the location",
        paragraphs: [
          "Your outfit and your backdrop are having a conversation whether you plan it or not, so you might as well plan it. Warm, earthy tones sit beautifully against Cardiff Bay or the Transporter Bridge in Newport. Something lighter and breezier works better against Swansea's coastline. If we've already picked a spot, message me — I'd rather help you think it through than have you guess.",
        ],
      },
      {
        heading: "Bring options, especially for maternity and events",
        paragraphs: [
          "For maternity sessions, fitted beats loose almost every time — you want the shape of the bump to actually read in the photo, not disappear into fabric. For events and graduations, if you can manage it, bring a backup outfit. Light changes more than people expect over the course of a day, and having a second option in the car has saved more than one session for me.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse Photography Services", href: "/services" },
      { label: "Book a Session", href: "/contact" },
    ],
  },
  {
    slug: "how-much-does-a-photographer-cost-in-south-wales",
    title: "How Much Does a Photographer Cost in South Wales? A Pricing Guide",
    metaTitle: "How Much Does a Photographer Cost in South Wales?",
    metaDescription:
      "What actually affects photography pricing in South Wales — session length, location, number of edited images, and turnaround — plus how to budget for your shoot.",
    category: "Pricing",
    date: "2026-08-25",
    excerpt:
      "Pricing questions are usually the first thing people ask, and the honest answer is: it depends on a few specific things. Here's what actually moves the number.",
    coverImage: "/portfolio/portraits/portraits-photography-south-wales-4.jpeg",
    coverAlt: "Studio portrait photography session in South Wales",
    sections: [
      {
        heading: "What actually affects the price",
        paragraphs: [
          "This is usually the first question in any enquiry, and fair enough — nobody wants to have the whole conversation and then find out it's out of budget. The honest answer is that four things move the number more than anything else: how long the session runs, whether it's studio or on-location, how many fully edited images you actually need, and how fast you want them back. A quick studio headshot and a full day of event coverage are not the same job, and the price reflects that.",
        ],
      },
      {
        heading: "Studio vs. on-location",
        paragraphs: [
          "Studio sessions tend to be the more affordable starting point — no travel, no weather to gamble on, nothing extra to plan around. Shooting on location, whether that's Cardiff Bay or wherever suits the brief, adds a bit to the cost because it adds time and logistics. But for pre-wedding, maternity, or lifestyle work especially, it's usually worth it — you get a completely different feel out of the images.",
        ],
      },
      {
        heading: "Add-ons worth knowing about",
        paragraphs: [
          "Extra edited images, express 24-hour delivery, printed photo books — these sit on top of a base package, and I'd rather you know about them going in than be surprised by them at the end. None of it is mandatory. It's just there if you want it.",
        ],
      },
      {
        heading: "Where to see actual numbers",
        paragraphs: [
          "I've deliberately kept this one general, because the moment I start quoting exact prices in a blog post, I've created two places for the numbers to go out of date instead of one. The pricing page is where I actually keep that current. If you already know roughly what kind of session you're after, that's the fastest way to see real figures — or just message me and I'll put a quote together for you directly.",
        ],
      },
    ],
    relatedLinks: [
      { label: "See Full Pricing & Packages", href: "/pricing" },
      { label: "Get a Personalised Quote", href: "/contact" },
    ],
  },
  {
    slug: "cardiff-newport-swansea-choosing-your-photoshoot-backdrop",
    title: "Cardiff, Newport, or Swansea: Choosing the Right Backdrop for Your Photoshoot",
    metaTitle: "Cardiff, Newport, or Swansea: Choosing Your Photoshoot Backdrop",
    metaDescription:
      "Cardiff, Newport, or Swansea — a side-by-side look at what each South Wales city offers for portrait, family, and pre-wedding photography, to help you pick.",
    category: "Guides",
    date: "2026-08-30",
    excerpt:
      "Clients often ask which city is 'best' for photos. The honest answer is that each one is best for something different — here's how to think about it.",
    coverImage: "/portfolio/pre-wedding/pre-wedding-photography-south-wales-1.jpg",
    coverAlt: "Pre-wedding photography session on location in South Wales",
    sections: [
      {
        heading: "Cardiff — polished and versatile",
        paragraphs: [
          "Cardiff is what I recommend when someone hasn't quite decided what they want yet, honestly. Cardiff Bay gives you that clean, contemporary look, Bute Park gives you something softer without leaving the city — you get range without having to commit to a single mood upfront. It's also the right call if travel time genuinely matters to you.",
        ],
      },
      {
        heading: "Newport — distinctive and a little unexpected",
        paragraphs: [
          "Newport is for the client who tells me, \"I don't want it to look like everyone else's photos.\" Fair enough — the Transporter Bridge genuinely has no equivalent anywhere else in South Wales, and once you've shot there you understand why I keep bringing it up. Add the Wetlands or Tredegar House into the same session and you've covered two completely different moods in one afternoon.",
        ],
      },
      {
        heading: "Swansea — coastal and relaxed",
        paragraphs: [
          "Swansea wins when the brief is beach, sunset, or just generally relaxed and a bit romantic. It's genuinely my most-requested location for pre-wedding and couple shoots, and it's not close — the coastline does something the other two cities can't quite manage.",
        ],
      },
      {
        heading: "Still not sure?",
        paragraphs: [
          "You don't have to figure this out on your own — that's honestly half of what the initial conversation is for. Tell me the feeling you're going for and I'll point you at a city and a specific spot. Full details on each one are on the location pages below.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Cardiff Portrait Photographer", href: "/locations/cardiff" },
      { label: "Newport Portrait Photographer", href: "/locations/newport" },
      { label: "Swansea Portrait Photographer", href: "/locations/swansea" },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return getAllPosts().filter((post) => post.slug !== slug).slice(0, count);
}
