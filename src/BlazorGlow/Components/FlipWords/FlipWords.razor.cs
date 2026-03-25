using Microsoft.AspNetCore.Components;
using System.Globalization;
using System.Timers;
using Timer = System.Timers.Timer;

namespace BlazorGlow.Components;

public partial class FlipWords : ComponentBase, IDisposable
{
    [Parameter]
    public string[] Words { get; set; } = Array.Empty<string>();

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public double Interval { get; set; } = 3.0;

    private Timer? _timer;
    private Timer? _animationTimer;
    private int _currentIndex;
    private string _currentWord = string.Empty;
    private bool _isAnimating;
    private bool _disposed;

    private string IntervalValue => (Interval * 0.3).ToString("0.0#", CultureInfo.InvariantCulture) + "s";

    protected override void OnParametersSet()
    {
        if (Words.Length > 0)
        {
            _currentWord = Words[0];
            _currentIndex = 0;
        }

        SetupTimer();
    }

    private void SetupTimer()
    {
        _timer?.Stop();
        _timer?.Dispose();
        _animationTimer?.Stop();
        _animationTimer?.Dispose();

        if (Words.Length <= 1) return;

        _timer = new Timer(Interval * 1000);
        _timer.Elapsed += OnTimerElapsed;
        _timer.AutoReset = true;
        _timer.Start();
    }

    private void OnTimerElapsed(object? sender, ElapsedEventArgs e)
    {
        if (_disposed) return;

        _isAnimating = true;
        InvokeAsync(StateHasChanged);

        _animationTimer = new Timer(Interval * 300);
        _animationTimer.AutoReset = false;
        _animationTimer.Elapsed += OnAnimationComplete;
        _animationTimer.Start();
    }

    private void OnAnimationComplete(object? sender, ElapsedEventArgs e)
    {
        if (_disposed) return;

        _currentIndex = (_currentIndex + 1) % Words.Length;
        _currentWord = Words[_currentIndex];
        _isAnimating = false;
        InvokeAsync(StateHasChanged);
    }

    public void Dispose()
    {
        _disposed = true;
        _timer?.Stop();
        _timer?.Dispose();
        _animationTimer?.Stop();
        _animationTimer?.Dispose();
    }
}
