using Microsoft.AspNetCore.Components;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class MovingBorder : ComponentBase
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public double Duration { get; set; } = 2.0;

    [Parameter]
    public string BorderColor { get; set; } = "#6366f1";

    [Parameter]
    public int BorderRadius { get; set; } = 8;

    private string DurationValue => Duration.ToString("0.0#", CultureInfo.InvariantCulture) + "s";
}
