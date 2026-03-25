using Microsoft.AspNetCore.Components;
using System.Globalization;

namespace BlazorGlow.Components;

public partial class Meteors : ComponentBase
{
    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public int Count { get; set; } = 20;

    [Parameter]
    public string Color { get; set; } = "#6366f1";

    [Parameter]
    public double MinDuration { get; set; } = 0.5;

    [Parameter]
    public double MaxDuration { get; set; } = 2.0;

    private List<MeteorData> _meteors = new();
    private readonly Random _random = new();

    protected override void OnParametersSet()
    {
        _meteors.Clear();

        for (int i = 0; i < Count; i++)
        {
            var top = (_random.NextDouble() * -50).ToString("0.##", CultureInfo.InvariantCulture);
            var left = (_random.NextDouble() * 100).ToString("0.##", CultureInfo.InvariantCulture);
            var delay = (_random.NextDouble() * MaxDuration * 2).ToString("0.##", CultureInfo.InvariantCulture);
            var duration = (MinDuration + _random.NextDouble() * (MaxDuration - MinDuration))
                .ToString("0.##", CultureInfo.InvariantCulture);

            _meteors.Add(new MeteorData
            {
                Top = $"{top}%",
                Left = $"{left}%",
                Delay = $"{delay}s",
                Duration = $"{duration}s"
            });
        }
    }

    private sealed class MeteorData
    {
        public string Top { get; init; } = "";
        public string Left { get; init; } = "";
        public string Delay { get; init; } = "";
        public string Duration { get; init; } = "";
    }
}
