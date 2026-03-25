import ComponentDoc from "@/components/ComponentDoc";
import CardHoverPreview from "@/components/previews/CardHoverPreview";

export default function CardHoverPage() {
  return (
    <ComponentDoc
      preview={<CardHoverPreview />}
      name="Card Hover Effect"
      description="A card component that reveals a glowing border spotlight effect on hover, with the glow following the cursor position along the card edges."
      category="Cards"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Content rendered inside the hover card." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "HoverBorderColor", type: "string", default: '"#6366f1"', desc: "Color of the border glow on hover." },
        { name: "GlowSpread", type: "double", default: "20", desc: "Spread radius of the glow effect in pixels." },
      ]}
      usage={`<CardHoverEffect HoverBorderColor="#6366f1" GlowSpread="20">
  <div class="p-6">
    <h3 class="text-lg font-bold">Hover me</h3>
    <p class="text-sm text-gray-400 mt-2">
      Watch the border glow follow your cursor.
    </p>
  </div>
</CardHoverEffect>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="card-hover-root @Class"
     @onmousemove="HandleMouseMove"
     @onmouseleave="HandleMouseLeave"
     style="--glow-color: @HoverBorderColor; --glow-spread: @(GlowSpread)px;">
  <div class="card-hover-border"
       style="@(_hovering
         ? $"background: radial-gradient(circle at {_x}px {_y}px, {HoverBorderColor} 0%, transparent 70%);"
         : "opacity:0;")" />
  <div class="card-hover-content">
    @ChildContent
  </div>
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public string HoverBorderColor { get; set; } = "#6366f1";
    [Parameter] public double GlowSpread { get; set; } = 20;

    private double _x, _y;
    private bool _hovering;

    private void HandleMouseMove(MouseEventArgs e)
    {
        _x = e.OffsetX; _y = e.OffsetY; _hovering = true;
    }

    private void HandleMouseLeave(MouseEventArgs e) => _hovering = false;
}`}
      cssCode={`.card-hover-root {
  position: relative;
  border-radius: 12px;
  padding: 1px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.card-hover-border {
  position: absolute;
  inset: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-hover-content {
  position: relative;
  background: #09090b;
  border-radius: 11px;
  z-index: 1;
}`}
    />
  );
}
