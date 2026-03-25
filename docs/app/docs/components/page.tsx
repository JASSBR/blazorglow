import Link from "next/link";

const components = [
  { slug: "spotlight", name: "Spotlight", category: "Effects", desc: "Cursor-following spotlight glow effect" },
  { slug: "moving-border", name: "Moving Border", category: "Effects", desc: "Animated rotating border gradient" },
  { slug: "card-3d", name: "3D Card", category: "Cards", desc: "Perspective tilt on mouse hover" },
  { slug: "text-generate", name: "Text Generate", category: "Text", desc: "Words fade in sequentially on scroll" },
  { slug: "flip-words", name: "Flip Words", category: "Text", desc: "Cycling words with blur flip animation" },
  { slug: "background-gradient", name: "Background Gradient", category: "Backgrounds", desc: "Animated flowing multi-color gradient" },
  { slug: "meteors", name: "Meteors", category: "Backgrounds", desc: "Falling meteor particle effect" },
  { slug: "glowing-stars", name: "Glowing Stars", category: "Backgrounds", desc: "Pulsing star particle overlay" },
  { slug: "card-hover", name: "Card Hover", category: "Cards", desc: "Spotlight glow effect within card" },
  { slug: "shimmer-button", name: "Shimmer Button", category: "Buttons", desc: "Button with shimmer sweep animation" },
  { slug: "aurora", name: "Aurora", category: "Backgrounds", desc: "Northern lights atmospheric effect" },
  { slug: "typewriter", name: "Typewriter", category: "Text", desc: "Character-by-character typing animation" },
  { slug: "parallax-scroll", name: "Parallax Scroll", category: "Scroll", desc: "Depth-based scroll parallax" },
  { slug: "tracing-beam", name: "Tracing Beam", category: "Scroll", desc: "SVG beam that follows scroll position" },
  { slug: "wavy-background", name: "Wavy Background", category: "Backgrounds", desc: "Flowing animated wave background" },
  { slug: "glare-card", name: "Glare Card", category: "Cards", desc: "Gloss reflection effect on hover" },
  { slug: "hover-border-gradient", name: "Hover Border Gradient", category: "Effects", desc: "Gradient border expanding on hover" },
  { slug: "lamp-effect", name: "Lamp Effect", category: "Effects", desc: "Linear-style lamp for section headers" },
  { slug: "sparkles", name: "Sparkles", category: "Effects", desc: "Configurable sparkle particle overlay" },
  { slug: "animated-modal", name: "Animated Modal", category: "UI", desc: "Modal with smooth open/close transitions" },
];

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Components</h1>
      <p className="text-text-muted text-lg mb-10">20+ animated components for Blazor. Copy the source or install via NuGet.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {components.map((comp) => (
          <Link
            key={comp.slug}
            href={`/docs/components/${comp.slug}`}
            className="group p-5 rounded-xl border border-border bg-bg-card/50 hover:bg-bg-hover hover:border-white/15 transition-all duration-200"
          >
            <span className="text-[10px] uppercase tracking-wider text-primary font-medium">{comp.category}</span>
            <h3 className="font-semibold mt-1 mb-1 group-hover:text-primary transition-colors">{comp.name}</h3>
            <p className="text-sm text-text-muted">{comp.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
