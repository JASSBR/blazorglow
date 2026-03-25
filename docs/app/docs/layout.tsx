import Link from "next/link";

const sidebar = [
  {
    title: "Getting Started",
    items: [
      { name: "Installation", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Spotlight", href: "/docs/components/spotlight" },
      { name: "Moving Border", href: "/docs/components/moving-border" },
      { name: "3D Card", href: "/docs/components/card-3d" },
      { name: "Text Generate", href: "/docs/components/text-generate" },
      { name: "Flip Words", href: "/docs/components/flip-words" },
      { name: "Background Gradient", href: "/docs/components/background-gradient" },
      { name: "Meteors", href: "/docs/components/meteors" },
      { name: "Glowing Stars", href: "/docs/components/glowing-stars" },
      { name: "Card Hover", href: "/docs/components/card-hover" },
      { name: "Shimmer Button", href: "/docs/components/shimmer-button" },
      { name: "Aurora", href: "/docs/components/aurora" },
      { name: "Typewriter", href: "/docs/components/typewriter" },
      { name: "Parallax Scroll", href: "/docs/components/parallax-scroll" },
      { name: "Tracing Beam", href: "/docs/components/tracing-beam" },
      { name: "Wavy Background", href: "/docs/components/wavy-background" },
      { name: "Glare Card", href: "/docs/components/glare-card" },
      { name: "Hover Border Gradient", href: "/docs/components/hover-border-gradient" },
      { name: "Lamp Effect", href: "/docs/components/lamp-effect" },
      { name: "Sparkles", href: "/docs/components/sparkles" },
      { name: "Animated Modal", href: "/docs/components/animated-modal" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { name: "Hero Section", href: "/docs/blocks/hero" },
      { name: "Feature Grid", href: "/docs/blocks/feature-grid" },
      { name: "Pricing Cards", href: "/docs/blocks/pricing" },
      { name: "Testimonials", href: "/docs/blocks/testimonials" },
      { name: "Footer", href: "/docs/blocks/footer" },
      { name: "Navbar", href: "/docs/blocks/navbar" },
    ],
  },
  {
    title: "Templates",
    items: [
      { name: "SaaS Landing", href: "/docs/templates/saas" },
      { name: "Portfolio", href: "/docs/templates/portfolio" },
      { name: "Dashboard", href: "/docs/templates/dashboard" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto flex min-h-screen">
      <aside className="hidden lg:block w-64 shrink-0 border-r border-border p-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="space-y-8">
          {sidebar.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-1.5 text-sm text-text-muted hover:text-text rounded-lg hover:bg-bg-hover transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <div className="flex-1 p-8 lg:p-12 min-w-0">{children}</div>
    </div>
  );
}
