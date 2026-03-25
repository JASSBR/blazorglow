import { CopyBlock } from "@/components/CopyBlock";

export default function PricingBlockPage() {
  const components = ["MovingBorder", "ShimmerButton", "Card3D"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Pricing Cards</h1>
      <p className="text-text-muted text-lg mb-10">
        A three-tier pricing comparison section with a moving border highlight on the popular plan.
        Includes feature lists, CTA buttons, and shimmer effects for maximum conversion.
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
        <CopyBlock code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto p-8">
    @foreach (var plan in Plans)
    {
        @if (plan.IsPopular)
        {
            <MovingBorder BorderRadius="1rem" Duration="3000">
                <Card3D Class="p-8 rounded-xl bg-gray-900 h-full">
                    <span class="text-xs text-primary font-medium uppercase">Most Popular</span>
                    <h3 class="text-2xl font-bold mt-2">@plan.Name</h3>
                    <p class="text-4xl font-bold my-4">$@plan.Price<span class="text-sm text-gray-400">/mo</span></p>
                    <ul class="space-y-2 mb-8">
                        @foreach (var feature in plan.Features)
                        {
                            <li class="text-sm text-gray-300">✓ @feature</li>
                        }
                    </ul>
                    <ShimmerButton Text="Get Started" Class="w-full py-3" />
                </Card3D>
            </MovingBorder>
        }
        else
        {
            <div class="p-8 rounded-xl border border-gray-800">
                <h3 class="text-2xl font-bold">@plan.Name</h3>
                <p class="text-4xl font-bold my-4">$@plan.Price<span class="text-sm text-gray-400">/mo</span></p>
                <ul class="space-y-2 mb-8">
                    @foreach (var feature in plan.Features)
                    {
                        <li class="text-sm text-gray-400">✓ @feature</li>
                    }
                </ul>
                <button class="w-full py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition">
                    Get Started
                </button>
            </div>
        }
    }
</div>`} />
      </section>
    </div>
  );
}
