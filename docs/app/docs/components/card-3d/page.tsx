import ComponentDoc from "@/components/ComponentDoc";

export default function Card3DPage() {
  return (
    <ComponentDoc
      name="3D Card"
      description="A card that tilts in 3D space following the mouse cursor, creating a realistic perspective effect with configurable rotation and depth."
      category="Cards"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Content rendered inside the 3D card." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "MaxRotate", type: "double", default: "10", desc: "Maximum rotation angle in degrees on each axis." },
        { name: "Perspective", type: "double", default: "1000", desc: "CSS perspective value in pixels controlling depth." },
      ]}
      usage={`<Card3D MaxRotate="15" Perspective="1000">
  <div class="p-8">
    <h3 class="text-xl font-bold">Tilt me</h3>
    <p>Move your mouse across this card.</p>
  </div>
</Card3D>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="card3d-wrapper @Class"
     style="perspective: @(Perspective)px;"
     @onmousemove="HandleMouseMove"
     @onmouseleave="HandleMouseLeave">
  <div class="card3d-inner"
       style="transform: rotateY(@(_rotateY)deg) rotateX(@(_rotateX)deg);">
    @ChildContent
  </div>
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public double MaxRotate { get; set; } = 10;
    [Parameter] public double Perspective { get; set; } = 1000;

    private double _rotateX, _rotateY;

    private void HandleMouseMove(MouseEventArgs e)
    {
        // Map mouse position to rotation angles
        _rotateY = (e.OffsetX / 150.0 - 1) * MaxRotate;
        _rotateX = (1 - e.OffsetY / 150.0) * MaxRotate;
    }

    private void HandleMouseLeave(MouseEventArgs e)
    {
        _rotateX = 0; _rotateY = 0;
    }
}`}
      cssCode={`.card3d-wrapper {
  display: inline-block;
}

.card3d-inner {
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}`}
    />
  );
}
