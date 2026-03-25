import ComponentDoc from "@/components/ComponentDoc";
import SpotlightPreview from "@/components/previews/SpotlightPreview";

export default function SpotlightPage() {
  return (
    <ComponentDoc
      preview={<SpotlightPreview />}
      name="Spotlight"
      description="A container that renders a radial spotlight effect that follows the mouse cursor, creating an elegant hover interaction."
      category="Effects"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Content rendered inside the spotlight container." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "ProximityRadius", type: "double", default: "200", desc: "Radius in pixels of the spotlight glow area." },
        { name: "Color", type: "string", default: '"#6366f1"', desc: "Color of the spotlight radial gradient." },
        { name: "Opacity", type: "double", default: "0.15", desc: "Maximum opacity of the spotlight effect." },
      ]}
      usage={`<Spotlight Color="#6366f1" ProximityRadius="200">
  <h1 class="text-4xl font-bold">Hover me</h1>
  <p>The spotlight follows your cursor.</p>
</Spotlight>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="spotlight-root @Class"
     @onmousemove="HandleMouseMove"
     @onmouseleave="HandleMouseLeave"
     style="position:relative;overflow:hidden;">

  <div class="spotlight-overlay"
       style="@OverlayStyle" />

  @ChildContent

</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public double ProximityRadius { get; set; } = 200;
    [Parameter] public string Color { get; set; } = "#6366f1";
    [Parameter] public double Opacity { get; set; } = 0.15;

    private double _x, _y;
    private bool _visible;

    private string OverlayStyle => _visible
        ? $"position:absolute;inset:0;pointer-events:none;" +
          $"background:radial-gradient(circle {ProximityRadius}px at {_x}px {_y}px, {Color} 0%, transparent 100%);" +
          $"opacity:{Opacity};"
        : "display:none;";

    private void HandleMouseMove(MouseEventArgs e)
    {
        _x = e.OffsetX; _y = e.OffsetY; _visible = true;
    }

    private void HandleMouseLeave(MouseEventArgs e) => _visible = false;
}`}
      cssCode={`.spotlight-root {
  position: relative;
  overflow: hidden;
}

.spotlight-overlay {
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 0;
}`}
    />
  );
}
