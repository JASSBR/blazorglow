import { CopyBlock } from "@/components/CopyBlock";

export default function DashboardTemplatePage() {
  const stack = ["Blazor WASM", "BlazorGlow", "MudBlazor"];
  const sections = [
    "Sidebar navigation with spotlight hover effects and collapsible groups",
    "Animated stat cards with number counters and trend indicators",
    "Data tables with card hover effects and sortable columns",
    "Chart placeholder areas with shimmer loading states",
    "Top navigation bar with search and user profile dropdown",
  ];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Template</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-text-muted text-lg mb-10">
        A full-featured admin dashboard template with animated stat cards, data tables, sidebar navigation,
        and chart areas. Built on BlazorGlow and MudBlazor for a polished admin experience.
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
        <CopyBlock code="dotnet new blazorglow-dashboard -o MyDashboard" prefix="$" />
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
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Animated Stat Cards", "Sortable Data Tables", "Collapsible Sidebar", "Shimmer Loading States"].map((f) => (
            <div key={f} className="p-4 rounded-xl border border-border bg-bg-card/50">
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-3">
        <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">Clone Template</button>
        <button className="px-5 py-2.5 rounded-xl border border-border text-sm text-text-muted hover:text-text transition-colors">Live Preview</button>
      </div>
    </div>
  );
}
