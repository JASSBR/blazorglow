import { CopyBlock } from "@/components/CopyBlock";

export default function FeatureGridBlockPage() {
  const components = ["CardHoverEffect", "GlowingStars"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Feature Grid</h1>
      <p className="text-text-muted text-lg mb-10">
        A bento-style grid layout for showcasing product features. Each cell uses card hover effects
        with glowing star accents for an eye-catching presentation.
      </p>

      <div className="rounded-2xl border border-border overflow-hidden mb-10">
        <div className="h-64 bg-gradient-to-br from-primary/5 via-accent/3 to-bg flex items-center justify-center">
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
        <CopyBlock code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    @foreach (var feature in Features)
    {
        <CardHoverEffect Class="p-6 rounded-xl">
            <GlowingStars Count="3" />
            <div class="relative z-10">
                <div class="text-2xl mb-3">@feature.Icon</div>
                <h3 class="text-lg font-semibold mb-2">@feature.Title</h3>
                <p class="text-gray-400 text-sm">@feature.Description</p>
            </div>
        </CardHoverEffect>
    }
</div>

@code {
    private List<Feature> Features = new()
    {
        new("Fast", "Blazor WASM for near-native speed."),
        new("Animated", "60fps animations out of the box."),
        new("Accessible", "ARIA-compliant components.")
    };

    record Feature(string Title, string Description, string Icon = "✦");
}`} />
      </section>
    </div>
  );
}
