const templates = [
  {
    name: "SaaS Landing Page",
    desc: "Complete landing page for SaaS products. Hero with animated background, feature grid, pricing, testimonials, and footer. Ready to deploy.",
    tag: "Popular",
    stack: ["Blazor WASM", "BlazorGlow", "Tailwind CSS"],
  },
  {
    name: "Developer Portfolio",
    desc: "Personal portfolio with 3D card effects, text animations, timeline experience section, and project showcase. Dark mode by default.",
    tag: "New",
    stack: ["Blazor Server", "BlazorGlow", "CSS Isolation"],
  },
  {
    name: "Admin Dashboard",
    desc: "Dashboard template with animated stat cards, chart placeholders, data tables with hover effects, and sidebar navigation.",
    tag: "",
    stack: ["Blazor WASM", "BlazorGlow", "MudBlazor"],
  },
];

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Templates</h1>
      <p className="text-text-muted text-lg mb-10">Full Blazor applications with BlazorGlow pre-configured. Clone, customize, deploy.</p>

      <div className="space-y-8">
        {templates.map((tmpl) => (
          <div key={tmpl.name} className="rounded-2xl border border-border overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-bg flex items-center justify-center relative">
              {tmpl.tag && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">{tmpl.tag}</span>
              )}
              <span className="text-text-muted">Template preview coming soon</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">{tmpl.name}</h3>
              <p className="text-text-muted mb-4">{tmpl.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tmpl.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-bg-hover text-text-muted font-mono">{s}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">Clone Template</button>
                <button className="px-5 py-2.5 rounded-xl border border-border text-sm text-text-muted hover:text-text transition-colors">Live Preview</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
