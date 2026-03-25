"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const components = [
  { name: "Spotlight", category: "Effects", desc: "Cursor-following spotlight glow" },
  { name: "Moving Border", category: "Effects", desc: "Animated rotating border gradient" },
  { name: "3D Card", category: "Cards", desc: "Perspective tilt on hover" },
  { name: "Text Generate", category: "Text", desc: "Words fade in sequentially" },
  { name: "Flip Words", category: "Text", desc: "Cycling words with flip animation" },
  { name: "Background Gradient", category: "Backgrounds", desc: "Animated flowing gradient" },
  { name: "Meteors", category: "Backgrounds", desc: "Falling meteor particles" },
  { name: "Glowing Stars", category: "Backgrounds", desc: "Pulsing star particles" },
  { name: "Card Hover", category: "Cards", desc: "Spotlight glow within card" },
  { name: "Shimmer Button", category: "Buttons", desc: "Shimmer sweep animation" },
  { name: "Aurora", category: "Backgrounds", desc: "Northern lights effect" },
  { name: "Typewriter", category: "Text", desc: "Typing animation effect" },
  { name: "Parallax Scroll", category: "Scroll", desc: "Depth-based scroll animation" },
  { name: "Tracing Beam", category: "Scroll", desc: "SVG beam follows scroll" },
  { name: "Wavy Background", category: "Backgrounds", desc: "Flowing wave animation" },
  { name: "Glare Card", category: "Cards", desc: "Gloss reflection on hover" },
  { name: "Hover Border Gradient", category: "Effects", desc: "Gradient border on hover" },
  { name: "Lamp Effect", category: "Effects", desc: "Linear-style lamp header" },
  { name: "Sparkles", category: "Effects", desc: "Configurable sparkle particles" },
  { name: "Animated Modal", category: "UI", desc: "Smooth modal transitions" },
];

const blocks = [
  { name: "Hero Section", desc: "Landing page hero with animated background and CTA" },
  { name: "Feature Grid", desc: "Bento grid layout with hover effects for features" },
  { name: "Pricing Cards", desc: "Animated pricing comparison with moving borders" },
  { name: "Testimonials", desc: "Card stack testimonials with auto-rotation" },
  { name: "Footer", desc: "Modern footer with glow effects and link groups" },
  { name: "Navbar", desc: "Animated navbar with spotlight hover on links" },
];

const templates = [
  { name: "SaaS Landing", desc: "Complete landing page for SaaS products", tag: "Popular" },
  { name: "Portfolio", desc: "Developer portfolio with 3D effects", tag: "New" },
  { name: "Dashboard", desc: "Admin dashboard with animated cards", tag: "" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated bg grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card text-sm text-text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in public beta — v0.1.0
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Make your Blazor apps
            <br />
            <span className="gradient-text">look incredible</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beautiful, animated, copy-paste UI components for Blazor.
            The missing design system for .NET developers.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/docs/getting-started"
              className="px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/JASSBR/blazorglow"
              target="_blank"
              className="px-8 py-3 rounded-xl border border-border text-text-muted hover:text-text hover:border-white/20 transition-all"
            >
              GitHub
            </a>
          </motion.div>

          {/* Install command */}
          <motion.div
            className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-bg-card border border-border font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-text-muted">$</span>
            <span>dotnet add package BlazorGlow</span>
            <button
              onClick={() => navigator.clipboard.writeText("dotnet add package BlazorGlow")}
              className="text-text-muted hover:text-text transition-colors ml-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">20+ Components</span>
            </h2>
            <p className="text-text-muted text-lg">Copy, paste, ship. Every component works with Blazor Server and WASM.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {components.map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group p-5 rounded-xl border border-border bg-bg-card/50 hover:bg-bg-hover hover:border-white/15 transition-all duration-300 cursor-pointer"
              >
                <span className="text-[10px] uppercase tracking-wider text-primary font-medium">{comp.category}</span>
                <h3 className="font-semibold mt-1 mb-1 group-hover:text-primary transition-colors">{comp.name}</h3>
                <p className="text-sm text-text-muted">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready-made <span className="gradient-text">Blocks</span>
            </h2>
            <p className="text-text-muted text-lg">Pre-built sections you can drop into any Blazor app. No assembly required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block, i) => (
              <motion.div
                key={block.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card/50 hover:border-white/15 transition-all duration-300"
              >
                {/* Preview placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <span className="text-text-muted text-sm">Preview</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{block.name}</h3>
                  <p className="text-sm text-text-muted">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Full <span className="gradient-text">Templates</span>
            </h2>
            <p className="text-text-muted text-lg">Complete Blazor apps with BlazorGlow built in. Clone and ship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((tmpl, i) => (
              <motion.div
                key={tmpl.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card/50 hover:border-white/15 transition-all duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-primary/10 via-accent/5 to-cyan/10 flex items-center justify-center relative">
                  {tmpl.tag && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">{tmpl.tag}</span>
                  )}
                  <span className="text-text-muted text-sm">Template Preview</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{tmpl.name}</h3>
                  <p className="text-sm text-text-muted mb-4">{tmpl.desc}</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">Use Template</button>
                    <button className="px-4 py-2 rounded-lg border border-border text-sm text-text-muted hover:text-text transition-colors">Preview</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop building ugly Blazor apps
          </h2>
          <p className="text-text-muted text-lg mb-10">
            One NuGet package. 20+ components. Beautiful by default.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-bg-card border border-border font-mono text-sm mb-8">
            <span className="text-text-muted">$</span>
            <span>dotnet add package BlazorGlow</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs/getting-started" className="px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Read the Docs
            </Link>
            <a href="https://github.com/JASSBR/blazorglow" target="_blank" className="px-8 py-3 rounded-xl border border-border text-text-muted hover:text-text transition-all">
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-text-muted">
          <p>Built by <a href="https://github.com/JASSBR" target="_blank" className="text-text hover:text-primary transition-colors font-medium">JASSBR</a></p>
          <p>MIT License</p>
        </div>
      </footer>
    </div>
  );
}
