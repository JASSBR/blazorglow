import { CopyBlock } from "@/components/CopyBlock";

export default function FooterBlockPage() {
  const components = ["Spotlight", "ShimmerButton"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Footer</h1>
      <p className="text-text-muted text-lg mb-10">
        A modern footer section with link groups, social icons, and a subtle spotlight glow effect
        on the newsletter input. Clean layout with shimmer CTA for email signup.
      </p>

      <div className="rounded-2xl border border-border overflow-hidden mb-10">
        <div className="h-48 bg-gradient-to-br from-primary/5 via-accent/3 to-bg flex items-center justify-center">
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
        <CopyBlock code={`<footer class="border-t border-gray-800 py-16 px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
            <h3 class="font-bold text-lg mb-4">BlazorGlow</h3>
            <p class="text-sm text-gray-400">Beautiful animated components for Blazor applications.</p>
        </div>
        <div>
            <h4 class="font-semibold mb-3">Product</h4>
            <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="/docs/components">Components</a></li>
                <li><a href="/docs/blocks">Blocks</a></li>
                <li><a href="/docs/templates">Templates</a></li>
            </ul>
        </div>
        <div>
            <h4 class="font-semibold mb-3">Resources</h4>
            <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="/docs">Documentation</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Discord</a></li>
            </ul>
        </div>
        <div>
            <h4 class="font-semibold mb-3">Newsletter</h4>
            <Spotlight Class="rounded-lg">
                <div class="flex gap-2">
                    <input type="email" placeholder="you@example.com"
                           class="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm" />
                    <ShimmerButton Text="Join" Class="px-4 py-2" />
                </div>
            </Spotlight>
        </div>
    </div>
</footer>`} />
      </section>
    </div>
  );
}
