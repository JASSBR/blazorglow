import ComponentDoc from "@/components/ComponentDoc";

export default function FlipWordsPage() {
  return (
    <ComponentDoc
      name="Flip Words"
      description="An inline text component that cycles through an array of words with a smooth flip animation, perfect for hero sections and taglines."
      category="Text"
      params={[
        { name: "Words", type: "string[]", default: "[]", desc: "Array of words to cycle through." },
        { name: "Class", type: "string", default: '""', desc: "Additional CSS classes applied to the root element." },
        { name: "Interval", type: "double", default: "3.0", desc: "Time in seconds each word is displayed before flipping." },
      ]}
      usage={`<p class="text-2xl">
  Build
  <FlipWords Words='@(new[] { "Beautiful", "Modern", "Animated" })' Interval="3" />
  interfaces
</p>`}
      razorCode={`@namespace BlazorGlow.Components
@implements IDisposable

<span class="flip-words @Class">
  <span class="flip-words-inner @(_animating ? "flip-out" : "flip-in")"
        style="--interval: @(Interval)s;">
    @_currentWord
  </span>
</span>

@code {
    [Parameter] public string[] Words { get; set; } = Array.Empty<string>();
    [Parameter] public string Class { get; set; } = "";
    [Parameter] public double Interval { get; set; } = 3.0;

    private int _index;
    private string _currentWord = "";
    private bool _animating;
    private Timer? _timer;

    protected override void OnInitialized()
    {
        if (Words.Length > 0) _currentWord = Words[0];
        _timer = new Timer(OnTick, null,
            TimeSpan.FromSeconds(Interval),
            TimeSpan.FromSeconds(Interval));
    }

    private async void OnTick(object? state)
    {
        await InvokeAsync(() =>
        {
            _animating = true;
            StateHasChanged();
        });

        await Task.Delay(300);

        await InvokeAsync(() =>
        {
            _index = (_index + 1) % Words.Length;
            _currentWord = Words[_index];
            _animating = false;
            StateHasChanged();
        });
    }

    public void Dispose() => _timer?.Dispose();
}`}
      cssCode={`.flip-words {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

.flip-words-inner {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.flip-words-inner.flip-in {
  transform: translateY(0);
  opacity: 1;
}

.flip-words-inner.flip-out {
  transform: translateY(-100%);
  opacity: 0;
}`}
    />
  );
}
