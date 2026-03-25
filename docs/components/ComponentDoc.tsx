"use client";

import { CopyBlock } from "./CopyBlock";

interface Param {
  name: string;
  type: string;
  default: string;
  desc: string;
}

interface ComponentDocProps {
  name: string;
  description: string;
  category: string;
  params: Param[];
  usage: string;
  razorCode: string;
  cssCode?: string;
}

export default function ComponentDoc({ name, description, category, params, usage, razorCode, cssCode }: ComponentDocProps) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-wider text-primary font-medium">{category}</span>
      <h1 className="text-4xl font-bold mt-2 mb-3">{name}</h1>
      <p className="text-text-muted text-lg mb-10">{description}</p>

      {/* Preview placeholder */}
      <div className="rounded-2xl border border-border bg-bg-card/50 h-48 flex items-center justify-center mb-10">
        <span className="text-text-muted text-sm">Live Blazor preview coming soon</span>
      </div>

      {/* Installation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CopyBlock code="dotnet add package BlazorGlow" prefix="$" />
      </section>

      {/* Usage */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CopyBlock code={usage} />
      </section>

      {/* Parameters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Parameters</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg-card text-left">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Default</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {params.map((p) => (
                <tr key={p.name} className="border-t border-border">
                  <td className="px-4 py-3 font-mono text-primary">{p.name}</td>
                  <td className="px-4 py-3 text-text-muted font-mono">{p.type}</td>
                  <td className="px-4 py-3 text-text-muted font-mono">{p.default}</td>
                  <td className="px-4 py-3 text-text-muted">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Source code */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Source (.razor)</h2>
        <CopyBlock code={razorCode} />
      </section>

      {cssCode && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Source (.razor.css)</h2>
          <CopyBlock code={cssCode} />
        </section>
      )}
    </div>
  );
}
