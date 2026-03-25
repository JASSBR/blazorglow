import { CopyBlock } from "@/components/CopyBlock";

export default function TestimonialsBlockPage() {
  const components = ["FlipWords", "CardHoverEffect"];

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Block</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
      <p className="text-text-muted text-lg mb-10">
        An auto-rotating testimonial section with fade transitions. Displays customer quotes with
        avatars and company info, using flip word animations for dynamic emphasis.
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
        <CopyBlock code={`<section class="py-20 px-8">
    <h2 class="text-3xl font-bold text-center mb-4">
        Loved by <FlipWords Words="@(new[] { "developers", "designers", "teams" })" />
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        @foreach (var testimonial in Testimonials)
        {
            <CardHoverEffect Class="p-6 rounded-xl">
                <p class="text-gray-300 mb-4 italic">"@testimonial.Quote"</p>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gray-700" />
                    <div>
                        <p class="font-medium text-sm">@testimonial.Name</p>
                        <p class="text-xs text-gray-500">@testimonial.Company</p>
                    </div>
                </div>
            </CardHoverEffect>
        }
    </div>
</section>

@code {
    record Testimonial(string Quote, string Name, string Company);

    private List<Testimonial> Testimonials = new()
    {
        new("BlazorGlow transformed our UI.", "Sarah Chen", "TechCorp"),
        new("The animations are buttery smooth.", "Alex Rivera", "StartupIO"),
        new("Best component library for Blazor.", "Jordan Lee", "DevStudio")
    };
}`} />
      </section>
    </div>
  );
}
