import ComponentDoc from "@/components/ComponentDoc";
import ShimmerButtonPreview from "@/components/previews/ShimmerButtonPreview";

export default function ShimmerButtonPage() {
  return (
    <ComponentDoc
      preview={<ShimmerButtonPreview />}
      name="Shimmer Button"
      description="A button with a continuously animated shimmer highlight sweep, creating an attention-grabbing call-to-action element."
      category="Buttons"
      params={[
        { name: "ChildContent", type: "RenderFragment", default: "—", desc: "Button label or content." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the button element." },
        { name: "ShimmerColor", type: "string", default: '"rgba(255,255,255,0.3)"', desc: "Color of the shimmer highlight." },
        { name: "BackgroundColor", type: "string", default: '"#6366f1"', desc: "Base background color of the button." },
        { name: "Speed", type: "double", default: "2.0", desc: "Duration of one shimmer sweep in seconds." },
        { name: "OnClick", type: "EventCallback", default: "—", desc: "Callback invoked when the button is clicked." },
      ]}
      usage={`<ShimmerButton
  BackgroundColor="#6366f1"
  ShimmerColor="rgba(255,255,255,0.3)"
  Speed="2.0"
  OnClick="HandleClick">
  Get Started
</ShimmerButton>

@code {
    private void HandleClick() {
        Console.WriteLine("Clicked!");
    }
}`}
      razorCode={`@namespace BlazorGlow.Components

<button class="shimmer-button @Class"
        @onclick="OnClick"
        style="--shimmer-color: @ShimmerColor;
               --bg-color: @BackgroundColor;
               --speed: @(Speed)s;">
  <span class="shimmer-button-shimmer" />
  <span class="shimmer-button-label">
    @ChildContent
  </span>
</button>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public string ShimmerColor { get; set; } = "rgba(255,255,255,0.3)";
    [Parameter] public string BackgroundColor { get; set; } = "#6366f1";
    [Parameter] public double Speed { get; set; } = 2.0;
    [Parameter] public EventCallback OnClick { get; set; }
}`}
      cssCode={`.shimmer-button {
  position: relative;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  background: var(--bg-color);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
}

.shimmer-button-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 20%,
    var(--shimmer-color) 50%,
    transparent 80%
  );
  animation: shimmerSweep var(--speed) linear infinite;
}

.shimmer-button-label {
  position: relative;
  z-index: 1;
}

@keyframes shimmerSweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`}
    />
  );
}
