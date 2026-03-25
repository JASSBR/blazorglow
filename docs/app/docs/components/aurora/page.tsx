import { CopyBlock } from "@/components/CopyBlock";

export default function AuroraPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">Backgrounds</span>
        <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">Coming Soon</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Aurora</h1>
      <p className="text-text-muted text-lg mb-10">Northern lights atmospheric effect. Renders flowing, color-shifting aurora borealis waves as a full-screen or contained background.</p>
      <div className="rounded-2xl border border-border border-dashed h-48 flex items-center justify-center mb-10">
        <span className="text-text-muted text-sm">Preview coming in v0.2.0</span>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CopyBlock code="dotnet add package BlazorGlow" prefix="$" />
      </section>
    </div>
  );
}
