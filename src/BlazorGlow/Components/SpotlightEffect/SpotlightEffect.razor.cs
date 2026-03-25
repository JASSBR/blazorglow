using Microsoft.AspNetCore.Components;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class SpotlightEffect : ComponentBase, IAsyncDisposable
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
    public int ProximityRadius { get; set; } = 200;

    [Parameter]
    public string Color { get; set; } = "#6366f1";

    [Parameter]
    public double Opacity { get; set; } = 0.15;

    private string OpacityValue => Opacity.ToString("0.0##", CultureInfo.InvariantCulture);

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await BlazorGlowInterop.InitMouseTracker(_element, _componentId, new
            {
                proximityRadius = ProximityRadius
            });
        }
    }

    public async ValueTask DisposeAsync()
    {
        await BlazorGlowInterop.Dispose(_componentId);
    }
}
