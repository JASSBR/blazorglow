import { CopyBlock } from "@/components/CopyBlock";

export default function HeroBlockPage() {
  const components = ["BackgroundGradient", "TextGenerateEffect", "ShimmerButton"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hero Section</h1>
      <p className="text-text-muted text-lg mb-10">
        A landing page hero section with an animated gradient background, headline with text generate effect,
        and shimmer CTA buttons. Drop it into any Blazor page for an instant premium feel.
      </p>

      <div className="rounded-2xl border border-border overflow-hidden mb-10">
        <div className="h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-bg flex items-center justify-center">
          <span className="text-text-muted text-sm">Live preview coming soon</span>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Components Used</h2>
        <div className="flex flex-wrap gap-2">
          {components.map((c) => (
            <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono">{c}</span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CopyBlock code="dotnet add package BlazorGlow" prefix="$" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CopyBlock code={`<BackgroundGradient Class="min-h-[80vh] flex items-center justify-center">
    <div class="text-center max-w-3xl mx-auto px-6">
        <TextGenerateEffect
            Words="Build beautiful Blazor apps with animated components"
            Class="text-5xl font-bold mb-6" />
        <p class="text-lg text-gray-400 mb-8">
            Production-ready UI components with stunning animations.
        </p>
        <ShimmerButton Text="Get Started" Class="px-8 py-3" />
    </div>
</BackgroundGradient>`} />
      </section>
    </div>
  );
}
