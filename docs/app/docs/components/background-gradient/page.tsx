import ComponentDoc from "@/components/ComponentDoc";

export default function BackgroundGradientPage() {
  return (
    <ComponentDoc
      name="Background Gradient"
      description="An animated background gradient that smoothly shifts between multiple colors, providing a vibrant, living backdrop for any content."
      category="Backgrounds"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Content rendered on top of the gradient background." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Colors", type: "string[]", default: '["#6366f1","#a855f7","#ec4899"]', desc: "Array of CSS color values for the gradient stops." },
        { name: "Speed", type: "double", default: "5.0", desc: "Duration in seconds for one full gradient animation cycle." },
      ]}
      usage={`<BackgroundGradient Colors='@(new[] { "#6366f1", "#a855f7", "#ec4899" })' Speed="5">
  <div class="p-12 text-center">
    <h2 class="text-3xl font-bold text-white">Gradient Content</h2>
  </div>
</BackgroundGradient>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="bg-gradient-root @Class"
     style="--speed: @(Speed)s; --gradient: linear-gradient(135deg, @(string.Join(", ", Colors)));">
  <div class="bg-gradient-animated" />
  <div class="bg-gradient-content">
    @ChildContent
  </div>
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public string[] Colors { get; set; } = { "#6366f1", "#a855f7", "#ec4899" };
    [Parameter] public double Speed { get; set; } = 5.0;
}`}
      cssCode={`.bg-gradient-root {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.bg-gradient-animated {
  position: absolute;
  inset: -50%;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: gradientShift var(--speed) ease infinite;
}

.bg-gradient-content {
  position: relative;
  z-index: 1;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}
    />
  );
}
