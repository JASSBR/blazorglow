import { CopyBlock } from "@/components/CopyBlock";

export default function NavbarBlockPage() {
  const components = ["Spotlight", "MovingBorder"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Navbar</h1>
      <p className="text-text-muted text-lg mb-10">
        An animated navigation bar with a spotlight hover effect on links and a moving border
        indicator on the active item. Responsive with a mobile hamburger menu.
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
        <CopyBlock code={`<nav class="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" class="font-bold text-lg">BlazorGlow</a>
        <div class="hidden md:flex items-center gap-1">
            @foreach (var link in NavLinks)
            {
                <Spotlight Class="rounded-lg px-4 py-2">
                    <a href="@link.Href"
                       class="text-sm @(link.IsActive ? "text-white" : "text-gray-400 hover:text-white") transition">
                        @link.Label
                    </a>
                </Spotlight>
            }
        </div>
        <MovingBorder BorderRadius="0.5rem" Duration="2000">
            <a href="/docs" class="px-4 py-2 text-sm font-medium">Get Started</a>
        </MovingBorder>
    </div>
</nav>

@code {
    record NavLink(string Label, string Href, bool IsActive = false);

    private List<NavLink> NavLinks = new()
    {
        new("Components", "/docs/components"),
        new("Blocks", "/docs/blocks"),
        new("Templates", "/docs/templates"),
        new("GitHub", "https://github.com/example/blazorglow")
    };
}`} />
      </section>
    </div>
  );
}
