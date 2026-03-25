import { CopyBlock } from "@/components/CopyBlock";

export default function SaasTemplatePage() {
  const stack = ["Blazor WASM", "BlazorGlow", "Tailwind CSS"];
  const sections = [
    "Hero with animated gradient background and shimmer CTA",
    "Feature grid with card hover effects and glowing stars",
    "Three-tier pricing with moving border highlights",
    "Testimonials carousel with flip word transitions",
    "Footer with spotlight glow and newsletter input",
  ];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Template</span>
        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">Popular</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">SaaS Landing Page</h1>
      <p className="text-text-muted text-lg mb-10">
        A complete, production-ready landing page for SaaS products. Includes hero, features, pricing,
        testimonials, and footer — all built with BlazorGlow animated components and Tailwind CSS.
      </p>

      <div className="rounded-2xl border border-border overflow-hidden mb-10">
        <div className="h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-bg flex items-center justify-center">
          <span className="text-text-muted text-sm">Template preview coming soon</span>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-bg-hover text-text-muted font-mono">{s}</span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Clone Template</h2>
        <CopyBlock code="dotnet new blazorglow-saas -o MyApp" prefix="$" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sections Included</h2>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-text-muted">{section}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <CopyBlock code={`dotnet new blazorglow-saas -o MyApp\ncd MyApp\ndotnet run`} prefix="$" />
      </section>

      <div className="flex gap-3">
        <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">Clone Template</button>
        <button className="px-5 py-2.5 rounded-xl border border-border text-sm text-text-muted hover:text-text transition-colors">Live Preview</button>
      </div>
    </div>
  );
}
