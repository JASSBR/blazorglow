"use client";

import { CopyBlock } from "@/components/CopyBlock";

export default function GettingStarted() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
      <p className="text-text-muted text-lg mb-10">Install BlazorGlow and start building beautiful Blazor apps in minutes.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Install the package</h2>
          <CopyBlock code="dotnet add package BlazorGlow" prefix="$" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Register services</h2>
          <p className="text-text-muted mb-4">In your <code className="px-1.5 py-0.5 rounded bg-bg-card text-sm">Program.cs</code>:</p>
          <CopyBlock code={`using BlazorGlow.Extensions;\n\nbuilder.Services.AddBlazorGlow();`} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Add imports</h2>
          <p className="text-text-muted mb-4">In your <code className="px-1.5 py-0.5 rounded bg-bg-card text-sm">_Imports.razor</code>:</p>
          <CopyBlock code="@using BlazorGlow.Components" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Add assets</h2>
          <p className="text-text-muted mb-4">In your host page:</p>
          <CopyBlock code={`<link href="_content/BlazorGlow/blazorglow.css" rel="stylesheet" />\n<script src="_content/BlazorGlow/blazorglow.js" type="module"></script>`} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Use a component</h2>
          <CopyBlock code={`<ShimmerButton OnClick="HandleClick">\n    Get Started\n</ShimmerButton>\n\n<Card3D MaxRotate="15">\n    <div class="p-8">\n        <h3>Hover me</h3>\n    </div>\n</Card3D>`} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compatibility</h2>
          <ul className="space-y-2 text-text-muted">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Blazor Server (.NET 8+)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Blazor WebAssembly (.NET 8+)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Blazor United / Interactive SSR (.NET 8+)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
