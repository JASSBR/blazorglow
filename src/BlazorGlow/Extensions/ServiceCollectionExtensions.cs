using BlazorGlow.Interop;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorGlow.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddBlazorGlow(this IServiceCollection services)
    {
        services.AddScoped<BlazorGlowInterop>();
        return services;
    }
}
