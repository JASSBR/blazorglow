import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlazorGlow — Beautiful Animated UI Components for Blazor",
  description: "The Aceternity UI equivalent for .NET. Beautiful, animated, production-ready components for Blazor Server and WebAssembly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">BG</span>
              </div>
              <span className="font-bold text-lg">BlazorGlow</span>
            </Link>
            <div className="flex items-center gap-8 text-sm text-text-muted">
              <Link href="/docs/components" className="hover:text-text transition-colors">Components</Link>
              <Link href="/docs/blocks" className="hover:text-text transition-colors">Blocks</Link>
              <Link href="/docs/templates" className="hover:text-text transition-colors">Templates</Link>
              <a href="https://github.com/JASSBR/blazorglow" target="_blank" rel="noopener" className="hover:text-text transition-colors">GitHub</a>
              <a href="https://www.nuget.org/packages/BlazorGlow" target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
