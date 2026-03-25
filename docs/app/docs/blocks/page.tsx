const blocks = [
  { name: "Hero Section", desc: "Landing page hero with animated gradient background, headline with text generate effect, and shimmer CTA buttons.", components: ["BackgroundGradient", "TextGenerateEffect", "ShimmerButton"] },
  { name: "Feature Grid", desc: "Bento-style grid layout with card hover effects. Each cell highlights features with icons and descriptions.", components: ["CardHoverEffect", "GlowingStars"] },
  { name: "Pricing Cards", desc: "Three-tier pricing comparison with moving border on the popular plan. Includes feature lists and CTA buttons.", components: ["MovingBorder", "ShimmerButton", "Card3D"] },
  { name: "Testimonials", desc: "Auto-rotating testimonial cards with fade transitions. Customer quotes with avatar and company info.", components: ["FlipWords", "CardHoverEffect"] },
  { name: "Footer", desc: "Modern footer with link groups, social icons, and subtle glow effect on the newsletter input.", components: ["Spotlight", "ShimmerButton"] },
  { name: "Navbar", desc: "Animated navigation bar with spotlight hover effect on links and moving border on the active item.", components: ["Spotlight", "MovingBorder"] },
];

export default function BlocksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Blocks</h1>
      <p className="text-text-muted text-lg mb-10">Pre-built page sections combining multiple BlazorGlow components. Drop them into any Blazor app.</p>

      <div className="space-y-6">
        {blocks.map((block) => (
          <div key={block.name} className="rounded-2xl border border-border overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary/5 via-accent/3 to-bg flex items-center justify-center text-text-muted text-sm">
              Live preview coming soon
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{block.name}</h3>
              <p className="text-text-muted mb-4">{block.desc}</p>
              <div className="flex flex-wrap gap-2">
                {block.components.map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
