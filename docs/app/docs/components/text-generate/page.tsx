import ComponentDoc from "@/components/ComponentDoc";

export default function TextGeneratePage() {
  return (
    <ComponentDoc
      name="Text Generate Effect"
      description="A text component that progressively reveals words with a blur-to-clear fade-in animation, triggered on scroll into view."
      category="Text"
      params={[
        { name: "Text", type: "string", default: '""', desc: "The full text string whose words will animate in." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Duration", type: "double", default: "0.5", desc: "Duration of each word's fade-in animation in seconds." },
        { name: "StaggerDelay", type: "double", default: "0.02", desc: "Delay between each consecutive word's animation start in seconds." },
      ]}
      usage={`<TextGenerateEffect
  Text="Words appear one by one with a blur effect"
  Duration="0.5"
  StaggerDelay="0.02" />`}
      razorCode={`@namespace BlazorGlow.Components
@inject IJSRuntime JS

<div class="text-generate @Class" @ref="_el">
  @foreach (var (word, idx) in _words.Select((w, i) => (w, i)))
  {
    <span class="text-generate-word @(_visible ? "visible" : "")"
          style="animation-delay: @(idx * StaggerDelay)s; animation-duration: @(Duration)s;">
      @word&nbsp;
    </span>
  }
</div>

@code {
    [Parameter] public string Text { get; set; } = "";
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public double Duration { get; set; } = 0.5;
    [Parameter] public double StaggerDelay { get; set; } = 0.02;

    private ElementReference _el;
    private bool _visible;
    private string[] _words = Array.Empty<string>();

    protected override void OnParametersSet()
    {
        _words = Text.Split(' ', StringSplitOptions.RemoveEmptyEntries);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("blazorGlow.observeIntersection", _el,
                DotNetObjectReference.Create(this));
        }
    }

    [JSInvokable]
    public void OnIntersecting() { _visible = true; StateHasChanged(); }
}`}
      cssCode={`.text-generate-word {
  display: inline-block;
  opacity: 0;
  filter: blur(8px);
}

.text-generate-word.visible {
  animation-name: textReveal;
  animation-fill-mode: forwards;
}

@keyframes textReveal {
  to {
    opacity: 1;
    filter: blur(0px);
  }
}`}
    />
  );
}
