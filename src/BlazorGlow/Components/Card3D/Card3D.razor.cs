using Microsoft.AspNetCore.Components;

namespace BlazorGlow.Components;

public partial class Card3D : ComponentBase, IAsyncDisposable
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
    public int MaxRotate { get; set; } = 10;

    [Parameter]
    public int Perspective { get; set; } = 1000;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await BlazorGlowInterop.InitCard3D(_element, _componentId, new
            {
                maxRotate = MaxRotate,
                perspective = Perspective
            });
        }
    }

    public async ValueTask DisposeAsync()
    {
        await BlazorGlowInterop.Dispose(_componentId);
    }
}
