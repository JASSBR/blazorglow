using Microsoft.AspNetCore.Components;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class ShimmerButton : ComponentBase
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string ShimmerColor { get; set; } = "rgba(255,255,255,0.3)";

    [Parameter]
    public string BackgroundColor { get; set; } = "#6366f1";

    [Parameter]
    public double Speed { get; set; } = 2.0;

    [Parameter]
    public int BorderRadius { get; set; } = 8;

    [Parameter]
    public EventCallback<Microsoft.AspNetCore.Components.Web.MouseEventArgs> OnClick { get; set; }

    private string SpeedValue => Speed.ToString("0.0#", CultureInfo.InvariantCulture) + "s";
}
