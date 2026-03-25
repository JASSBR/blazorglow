using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorGlow.Interop;

public class BlazorGlowInterop : IAsyncDisposable
{
    private readonly Lazy<Task<IJSObjectReference>> _moduleTask;

    public BlazorGlowInterop(IJSRuntime jsRuntime)
    {
        _moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
            "import", "./_content/BlazorGlow/blazorglow.js").AsTask());
    }

    public async ValueTask InitMouseTracker(ElementReference element, string componentId, object options)
    {
        var module = await _moduleTask.Value;
        await module.InvokeVoidAsync("initMouseTracker", element, componentId, options);
    }

    public async ValueTask InitCard3D(ElementReference element, string componentId, object options)
    {
        var module = await _moduleTask.Value;
        await module.InvokeVoidAsync("initCard3D", element, componentId, options);
    }

    public async ValueTask InitIntersectionObserver<T>(ElementReference element, DotNetObjectReference<T> dotNetRef, string callbackMethod) where T : class
    {
        var module = await _moduleTask.Value;
        await module.InvokeVoidAsync("initIntersectionObserver", element, dotNetRef, callbackMethod);
    }

    public async ValueTask Dispose(string componentId)
    {
        try
        {
            var module = await _moduleTask.Value;
            await module.InvokeVoidAsync("dispose", componentId);
        }
        catch (JSDisconnectedException) { }
    }

    public async ValueTask DisposeAsync()
    {
        if (_moduleTask.IsValueCreated)
        {
            try
            {
                var module = await _moduleTask.Value;
                await module.DisposeAsync();
            }
            catch (JSDisconnectedException) { }
        }
    }
}
