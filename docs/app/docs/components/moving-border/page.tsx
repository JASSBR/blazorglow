import ComponentDoc from "@/components/ComponentDoc";
import MovingBorderPreview from "@/components/previews/MovingBorderPreview";

export default function MovingBorderPage() {
  return (
    <ComponentDoc
      preview={<MovingBorderPreview />}
      name="Moving Border"
      description="A container with an animated rotating border that creates a continuous, eye-catching glow effect around any content."
      category="Borders"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Content rendered inside the bordered container." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Duration", type: "double", default: "2.0", desc: "Duration of one full border rotation in seconds." },
        { name: "BorderColor", type: "string", default: '"#6366f1"', desc: "Color of the animated border gradient." },
        { name: "BorderRadius", type: "double", default: "8", desc: "Border radius in pixels." },
      ]}
      usage={`<MovingBorder BorderColor="#6366f1" Duration="2.0">
  <div class="p-4">
    <h3>Moving Border Card</h3>
    <p>The border rotates continuously.</p>
  </div>
</MovingBorder>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="moving-border-root @Class"
     style="--duration: @(Duration)s; --border-color: @BorderColor; --radius: @(BorderRadius)px;">
  <div class="moving-border-gradient" />
  <div class="moving-border-content"
       style="border-radius: @(BorderRadius - 1)px;">
    @ChildContent
  </div>
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public double Duration { get; set; } = 2.0;
    [Parameter] public string BorderColor { get; set; } = "#6366f1";
    [Parameter] public double BorderRadius { get; set; } = 8;
}`}
      cssCode={`.moving-border-root {
  position: relative;
  padding: 2px;
  border-radius: var(--radius);
  overflow: hidden;
}

.moving-border-gradient {
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent 60%, var(--border-color) 100%);
  animation: spin var(--duration) linear infinite;
}

.moving-border-content {
  position: relative;
  background: #09090b;
  z-index: 1;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`}
    />
  );
}
