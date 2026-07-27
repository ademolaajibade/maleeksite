import Image from "next/image";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
}

export default function PageHeader({ eyebrow, title, accent, subtitle, image, imageAlt }: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt ?? `${title} ${accent}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="text-accent text-xs tracking-[0.4em] uppercase mb-3">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-none mb-4">
          {title} <span className="italic text-accent">{accent}</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
