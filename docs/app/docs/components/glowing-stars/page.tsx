import ComponentDoc from "@/components/ComponentDoc";
import GlowingStarsPreview from "@/components/previews/GlowingStarsPreview";

export default function GlowingStarsPage() {
  return (
    <ComponentDoc
      preview={<GlowingStarsPreview />}
      name="Glowing Stars"
      description="Randomly placed star particles that pulse with a soft glow animation, creating a starfield background effect for dark-themed sections."
      category="Backgrounds"
      params={[
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Count", type: "int", default: "30", desc: "Number of star particles to render." },
        { name: "Color", type: "string", default: '"#ffffff"', desc: "Color of the star glow." },
        { name: "MinSize", type: "double", default: "1", desc: "Minimum star diameter in pixels." },
        { name: "MaxSize", type: "double", default: "3", desc: "Maximum star diameter in pixels." },
      ]}
      usage={`<div class="relative h-96 bg-black rounded-xl overflow-hidden">
  <GlowingStars Count="40" Color="#ffffff" MinSize="1" MaxSize="3" />
  <div class="relative z-10 flex items-center justify-center h-full">
    <h2 class="text-white text-2xl">Starfield</h2>
  </div>
</div>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="glowing-stars-root @Class">
  @for (int i = 0; i < Count; i++)
  {
    var x = Random.Shared.NextDouble() * 100;
    var y = Random.Shared.NextDouble() * 100;
    var size = MinSize + Random.Shared.NextDouble() * (MaxSize - MinSize);
    var delay = Random.Shared.NextDouble() * 4;
    var duration = 2 + Random.Shared.NextDouble() * 3;

    <span class="glow-star"
          style="left:@(x)%;top:@(y)%;
                 width:@(size)px;height:@(size)px;
                 animation-delay:@(delay)s;
                 animation-duration:@(duration)s;
                 --star-color:@Color;" />
  }
</div>

@code {
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public int Count { get; set; } = 30;
    [Parameter] public string Color { get; set; } = "#ffffff";
    [Parameter] public double MinSize { get; set; } = 1;
    [Parameter] public double MaxSize { get; set; } = 3;
}`}
      cssCode={`.glowing-stars-root {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow-star {
  position: absolute;
  border-radius: 50%;
  background: var(--star-color);
  box-shadow: 0 0 6px 2px var(--star-color);
  animation-name: starPulse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes starPulse {
  0%   { opacity: 0.3; transform: scale(1); }
  100% { opacity: 1;   transform: scale(1.4); }
}`}
    />
  );
}
