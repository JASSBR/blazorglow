using Microsoft.AspNetCore.Components;

namespace BlazorGlow.Components;

public partial class CardHoverEffect : ComponentBase, IAsyncDisposable
{
    private ElementReference _element;
    private readonly string _componentId = Guid.NewGuid().ToString("N")[..8];

    [Inject]
    private Interop.BlazorGlowInterop BlazorGlowInterop { get; set; } = default!;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string HoverBorderColor { get; set; } = "#6366f1";

    [Parameter]
    public int GlowSpread { get; set; } = 20;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await BlazorGlowInterop.InitMouseTracker(_element, _componentId, new
            {
                glowSpread = GlowSpread
            });
        }
    }

    public async ValueTask DisposeAsync()
    {
        await BlazorGlowInterop.Dispose(_componentId);
    }
}
