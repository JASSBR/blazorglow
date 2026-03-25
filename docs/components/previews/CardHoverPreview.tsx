"use client";

import { useRef, useState, useCallback } from "react";

export default function CardHoverPreview() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-zinc-950 p-6">
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Performance", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
          { title: "Security", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        ].map((card, i) => (
          <div
            key={i}
            ref={i === 0 ? cardRef : undefined}
            onMouseMove={i === 0 ? handleMouseMove : undefined}
            onMouseEnter={i === 0 ? () => setHovering(true) : undefined}
            onMouseLeave={i === 0 ? () => setHovering(false) : undefined}
            className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-5"
          >
            {i === 0 && (
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: hovering ? 1 : 0,
                  background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.12), transparent 50%)`,
                }}
              />
            )}
            <svg
              className="relative z-10 mb-3 h-6 w-6 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
            </svg>
            <h4 className="relative z-10 text-sm font-semibold text-white">
              {card.title}
            </h4>
            <p className="relative z-10 mt-1 text-xs text-zinc-500">
              Hover to see the glow effect follow your cursor inside the card.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
