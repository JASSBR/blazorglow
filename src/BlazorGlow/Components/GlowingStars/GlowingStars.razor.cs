using Microsoft.AspNetCore.Components;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class GlowingStars : ComponentBase
{
    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public int Count { get; set; } = 30;

    [Parameter]
    public string Color { get; set; } = "#ffffff";

    [Parameter]
    public double MinSize { get; set; } = 1;

    [Parameter]
    public double MaxSize { get; set; } = 3;

    private List<StarData> _stars = new();
    private readonly Random _random = new();

    protected override void OnParametersSet()
    {
        _stars.Clear();

        for (int i = 0; i < Count; i++)
        {
            var top = (_random.NextDouble() * 100).ToString("0.##", CultureInfo.InvariantCulture);
            var left = (_random.NextDouble() * 100).ToString("0.##", CultureInfo.InvariantCulture);
            var size = (MinSize + _random.NextDouble() * (MaxSize - MinSize))
                .ToString("0.##", CultureInfo.InvariantCulture);
            var delay = (_random.NextDouble() * 5).ToString("0.##", CultureInfo.InvariantCulture);
            var duration = (2 + _random.NextDouble() * 4).ToString("0.##", CultureInfo.InvariantCulture);

            _stars.Add(new StarData
            {
                Top = $"{top}%",
                Left = $"{left}%",
                Size = $"{size}px",
                Delay = $"{delay}s",
                Duration = $"{duration}s"
            });
        }
    }

    private sealed class StarData
    {
        public string Top { get; init; } = "";
        public string Left { get; init; } = "";
        public string Size { get; init; } = "";
        public string Delay { get; init; } = "";
        public string Duration { get; init; } = "";
    }
}
