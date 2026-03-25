using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class TextGenerateEffect : ComponentBase, IAsyncDisposable
{
    private ElementReference _element;
    private string[]? _words;
    private bool _isVisible;
    private DotNetObjectReference<TextGenerateEffect>? _dotNetRef;

    [Inject]
    private Interop.BlazorGlowInterop BlazorGlowInterop { get; set; } = default!;

    [Parameter]
    public string Text { get; set; } = string.Empty;

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public double Duration { get; set; } = 0.5;

    [Parameter]
    public double StaggerDelay { get; set; } = 0.02;

    private string DurationValue => Duration.ToString("0.0#", CultureInfo.InvariantCulture) + "s";
    private string StaggerDelayValue => StaggerDelay.ToString("0.0##", CultureInfo.InvariantCulture) + "s";

    protected override void OnParametersSet()
    {
        _words = string.IsNullOrEmpty(Text)
            ? Array.Empty<string>()
            : Text.Split(' ', StringSplitOptions.RemoveEmptyEntries);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await BlazorGlowInterop.InitIntersectionObserver(_element, _dotNetRef, nameof(OnBecameVisible));
        }
    }

    [JSInvokable]
    public void OnBecameVisible()
    {
        _isVisible = true;
        StateHasChanged();
    }

    public ValueTask DisposeAsync()
    {
        _dotNetRef?.Dispose();
        return ValueTask.CompletedTask;
    }
}
