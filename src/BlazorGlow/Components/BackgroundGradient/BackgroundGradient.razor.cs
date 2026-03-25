using Microsoft.AspNetCore.Components;
using System.Globalization;
using System.Text;

namespace BlazorGlow.Components;

public partial class BackgroundGradient : ComponentBase
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string[] Colors { get; set; } = new[] { "#6366f1", "#a855f7", "#ec4899" };

    [Parameter]
    public double Speed { get; set; } = 5.0;

    private string GradientStyle => BuildGradientStyle();

    private string BuildGradientStyle()
    {
        var sb = new StringBuilder();

        // Set CSS custom properties for each color
        for (int i = 0; i < Colors.Length; i++)
        {
            sb.Append($"--gradient-color-{i}: {Colors[i]}; ");
        }

        sb.Append($"--gradient-speed: {Speed.ToString("0.0#", CultureInfo.InvariantCulture)}s; ");

        // Build the gradient color list
        var colorList = string.Join(", ", Colors);
        // Append the first color again for seamless loop
        if (Colors.Length > 0)
        {
            colorList += $", {Colors[0]}";
        }
        sb.Append($"--gradient-colors: {colorList};");

        return sb.ToString();
    }
}
