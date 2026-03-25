import ComponentDoc from "@/components/ComponentDoc";

export default function MeteorsPage() {
  return (
    <ComponentDoc
      name="Meteors"
      description="Randomly generated falling meteor particles that streak across a container, creating a cosmic rain effect ideal for dark-themed hero sections."
      category="Backgrounds"
      params={[
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Count", type: "int", default: "20", desc: "Number of meteor particles to render." },
        { name: "Color", type: "string", default: '"#6366f1"', desc: "Color of the meteor trail." },
        { name: "MinDuration", type: "double", default: "0.5", desc: "Minimum animation duration for a meteor in seconds." },
        { name: "MaxDuration", type: "double", default: "2.0", desc: "Maximum animation duration for a meteor in seconds." },
      ]}
      usage={`<div class="relative h-96 overflow-hidden bg-black rounded-xl">
  <Meteors Count="20" Color="#6366f1" MinDuration="0.5" MaxDuration="2.0" />
  <div class="relative z-10 p-8">
    <h2 class="text-white text-2xl">Meteor Shower</h2>
  </div>
</div>`}
      razorCode={`@namespace BlazorGlow.Components

<div class="meteors-root @Class">
  @for (int i = 0; i < Count; i++)
  {
    var left = Random.Shared.Next(-10, 100);
    var delay = Random.Shared.NextDouble() * 3;
    var duration = MinDuration + Random.Shared.NextDouble() * (MaxDuration - MinDuration);

    <span class="meteor"
          style="top:-5px;left:@(left)%;
                 animation-delay:@(delay)s;
                 animation-duration:@(duration)s;
                 --meteor-color:@Color;" />
  }
</div>

@code {
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public int Count { get; set; } = 20;
    [Parameter] public string Color { get; set; } = "#6366f1";
    [Parameter] public double MinDuration { get; set; } = 0.5;
    [Parameter] public double MaxDuration { get; set; } = 2.0;
}`}
      cssCode={`.meteors-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.meteor {
  position: absolute;
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, var(--meteor-color), transparent);
  border-radius: 50%;
  animation-name: meteorFall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes meteorFall {
  0% {
    transform: translateY(0) rotate(215deg);
    opacity: 1;
  }
  70% { opacity: 1; }
  100% {
    transform: translateY(600px) rotate(215deg);
    opacity: 0;
  }
}`}
    />
  );
}
