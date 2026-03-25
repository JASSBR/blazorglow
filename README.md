# BlazorGlow

Beautiful animated UI components for Blazor. The **Aceternity UI** equivalent for .NET.

![BlazorGlow](https://img.shields.io/nuget/v/BlazorGlow?style=flat-square)
![License](https://img.shields.io/github/license/JASSBR/blazorglow?style=flat-square)

## Why BlazorGlow?

The Blazor ecosystem lacks modern, animated UI components. MudBlazor and Radzen are functional but look dated. BlazorGlow brings the visual quality of Aceternity UI, Magic UI, and shadcn/ui to Blazor developers.

## Components

| Component | Type | Description |
|-----------|------|-------------|
| `<Spotlight>` | Effect | Cursor-following spotlight glow |
| `<MovingBorder>` | Effect | Animated rotating border gradient |
| `<Card3D>` | Card | 3D perspective tilt on hover |
| `<TextGenerateEffect>` | Text | Words fade in sequentially |
| `<FlipWords>` | Text | Cycling words with flip animation |
| `<BackgroundGradient>` | Background | Animated flowing gradient |
| `<Meteors>` | Background | Falling meteor particles |
| `<GlowingStars>` | Background | Pulsing star particles |
| `<CardHoverEffect>` | Card | Spotlight glow within card |
| `<ShimmerButton>` | Button | Shimmer sweep animation |

## Installation

```bash
dotnet add package BlazorGlow
```

## Setup

### 1. Register services in `Program.cs`

```csharp
using BlazorGlow.Extensions;

builder.Services.AddBlazorGlow();
```

### 2. Add imports in `_Imports.razor`

```razor
@using BlazorGlow.Components
```

### 3. Add assets in your host page

```html
<link href="_content/BlazorGlow/blazorglow.css" rel="stylesheet" />
<script src="_content/BlazorGlow/blazorglow.js" type="module"></script>
```

## Usage

```razor
<ShimmerButton OnClick="HandleClick">
    Get Started
</ShimmerButton>

<Card3D MaxRotate="15">
    <div class="p-8">
        <h3>Hover me</h3>
        <p>I tilt in 3D!</p>
    </div>
</Card3D>

<Spotlight ProximityRadius="300" Color="#6366f1">
    <h1>Beautiful glow follows your cursor</h1>
</Spotlight>

<FlipWords Words="@(new[] { "Beautiful", "Modern", "Animated" })" Interval="3" />

<Meteors Count="20" Color="#6366f1" />
```

## Compatibility

- Blazor Server (.NET 8+)
- Blazor WebAssembly (.NET 8+)
- Blazor United / Interactive SSR (.NET 8+)

## License

MIT - Built by [JASSBR](https://github.com/JASSBR)
