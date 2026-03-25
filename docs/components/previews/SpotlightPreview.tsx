"use client";

import { useRef, useState, useCallback } from "react";

export default function SpotlightPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400">
          Spotlight Effect
        </div>
        <h3 className="text-2xl font-bold text-white">Hover anywhere</h3>
        <p className="text-sm text-zinc-500">
          The glow follows your cursor
        </p>
      </div>
    </div>
  );
}
