export type CityKey = "cardiff" | "newport" | "swansea";

export interface CityContent {
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  subtitle: string;
  intro: string[];
  landmarks: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
}

export const CITIES: Record<CityKey, CityContent> = {
  cardiff: {
    name: "Cardiff",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Cardiff, South Wales",
    metaDescription:
      "Looking for a portrait photographer in Cardiff? Maleek offers portrait, family, maternity, graduation, and pre-wedding photography sessions around Cardiff Bay, Bute Park, and the city centre.",
    heroImage: "/portfolio/lifestyle/lifestyle2.jpeg",
    heroAlt: "Portrait photographer in Cardiff, South Wales",
    subtitle: "Portrait, family, and lifestyle photography around Cardiff, Wales' capital.",
    intro: [
      "Maleek is a South Wales portrait photographer working with clients across Cardiff — from studio sessions to on-location shoots around the city's waterfront and parks.",
      "Cardiff's mix of green space and modern architecture makes it a versatile backdrop: Bute Park and Roath Park for soft, natural light; Cardiff Bay and the city centre for a sharper, contemporary look.",
    ],
    landmarks: [
      { title: "Cardiff Bay", desc: "Waterfront backdrops and golden-hour light, a favourite for pre-wedding and couple sessions." },
      { title: "Bute Park", desc: "Tree-lined paths and open lawns right in the city centre — ideal for family and maternity shoots." },
      { title: "Cardiff Castle & City Centre", desc: "Historic architecture for portraits with a distinctly Cardiff character." },
      { title: "Roath Park", desc: "A quieter, greener setting for relaxed family and children's sessions." },
    ],
    gallery: [
      { src: "/portfolio/portraits/IMG_5477.jpg", alt: "Portrait photography session in Cardiff" },
      { src: "/portfolio/family/IMG_7435.jpg", alt: "Family photography session in Cardiff" },
      { src: "/portfolio/fashion/IMG_4530.jpg", alt: "Fashion photography shoot in Cardiff" },
    ],
    faqs: [
      {
        q: "Do you travel to Cardiff for photography sessions?",
        a: "Yes — Cardiff is one of the main areas I shoot in across South Wales, whether that's a studio session or on-location around Cardiff Bay, Bute Park, or the city centre.",
      },
      {
        q: "What's the best location in Cardiff for a portrait shoot?",
        a: "It depends on the look you want. Bute Park and Roath Park work well for soft, natural-light portraits, while Cardiff Bay gives a more polished, contemporary backdrop — I'll help you pick based on your session.",
      },
      {
        q: "How much does a photography session in Cardiff cost?",
        a: "Pricing depends on the type of session — see the full breakdown on the pricing page, or get in touch for a quote specific to what you have in mind.",
      },
    ],
  },
  newport: {
    name: "Newport",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Newport, South Wales",
    metaDescription:
      "Portrait, family, maternity, and graduation photography in Newport, South Wales, by Maleek — sessions around the Transporter Bridge, Newport Wetlands, and the River Usk.",
    heroImage: "/portfolio/events/IMG_7020.jpg",
    heroAlt: "Portrait photographer in Newport, South Wales",
    subtitle: "Portrait, family, and event photography across Newport and the Usk valley.",
    intro: [
      "Maleek photographs clients across Newport, South Wales — from milestone family sessions to graduation portraits, in the studio or on location around the city.",
      "Newport's riverside setting and industrial heritage give it a distinctive character: the Transporter Bridge and River Usk for striking, structural backdrops; Newport Wetlands and Tredegar House for something greener.",
    ],
    landmarks: [
      { title: "Transporter Bridge", desc: "A genuinely unique, one-of-a-kind backdrop for couples and creative portrait sessions." },
      { title: "Newport Wetlands", desc: "Open skies and natural light for relaxed family and maternity shoots." },
      { title: "Tredegar House & Park", desc: "Historic grounds for portraits with room to move and play — great for children's sessions." },
      { title: "River Usk & City Centre", desc: "Everyday Newport streets and riverside views for lifestyle and event coverage." },
    ],
    gallery: [
      { src: "/portfolio/maternity/IMG_2363.jpg", alt: "Maternity photography session in Newport" },
      { src: "/portfolio/graduation/IMG_2526.jpg", alt: "Graduation photography session in Newport" },
      { src: "/portfolio/children/IMG_4688.jpg", alt: "Children's photography session in Newport" },
    ],
    faqs: [
      {
        q: "Do you offer photography sessions in Newport?",
        a: "Yes — Newport is a regular part of where I shoot across South Wales, including studio sessions and on-location shoots around the Transporter Bridge, Newport Wetlands, and Tredegar House.",
      },
      {
        q: "What makes Newport a good location for photos?",
        a: "Newport has a mix most cities don't: the industrial character of the Transporter Bridge and riverside, alongside genuinely green spaces like the Wetlands and Tredegar House — good range for different styles of shoot.",
      },
      {
        q: "How do I book a session in Newport?",
        a: "Get in touch through the contact page with what you have in mind, and I'll help you pick the right package and location around Newport.",
      },
    ],
  },
  swansea: {
    name: "Swansea",
    region: "South Wales",
    metaTitle: "Portrait Photographer in Swansea, South Wales",
    metaDescription:
      "Portrait, family, pre-wedding, and lifestyle photography in Swansea, South Wales, by Maleek — sessions around Swansea Bay, Mumbles, and Singleton Park.",
    heroImage: "/portfolio/pre-wedding/IMG_1629.jpg",
    heroAlt: "Portrait photographer in Swansea, South Wales",
    subtitle: "Portrait, pre-wedding, and lifestyle photography along Swansea Bay.",
    intro: [
      "Maleek shoots portrait, pre-wedding, and lifestyle sessions across Swansea, South Wales — making the most of the coastline as much as the studio.",
      "Swansea's coastal setting is hard to match: Swansea Bay and Mumbles for beach and sunset sessions, Singleton Park for greenery closer to the city centre.",
    ],
    landmarks: [
      { title: "Swansea Bay", desc: "Beach and promenade sessions with reliable golden-hour light over the water." },
      { title: "Mumbles", desc: "The pier, seafront, and village streets for relaxed couple and pre-wedding shoots." },
      { title: "Singleton Park", desc: "Botanical gardens and open lawns for family and maternity sessions in the city." },
      { title: "Gower Peninsula", desc: "For clients wanting a short trip out for dramatic coastal and countryside backdrops." },
    ],
    gallery: [
      { src: "/portfolio/pre-wedding/IMG_1606.jpg", alt: "Pre-wedding photography session in Swansea" },
      { src: "/portfolio/lifestyle/lifestyle1.jpeg", alt: "Lifestyle photography session in Swansea" },
      { src: "/portfolio/birthday/IMG_2519.jpg", alt: "Birthday photography session in Swansea" },
    ],
    faqs: [
      {
        q: "Do you travel to Swansea for shoots?",
        a: "Yes — Swansea and the surrounding coast are a regular part of where I photograph across South Wales, from Swansea Bay and Mumbles to Singleton Park.",
      },
      {
        q: "Is Swansea Bay good for a pre-wedding or couple shoot?",
        a: "Very — the beach, promenade, and Mumbles pier give a relaxed, romantic backdrop that works especially well around sunset.",
      },
      {
        q: "Can you shoot further out towards the Gower Peninsula?",
        a: "Yes, for clients after a coastal or countryside look beyond the city — just mention it when you get in touch and we'll plan around it.",
      },
    ],
  },
};

export const CITY_KEYS = Object.keys(CITIES) as CityKey[];

export function getCity(slug: string): CityContent | undefined {
  return CITIES[slug as CityKey];
}
