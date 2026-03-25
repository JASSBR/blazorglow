"use client";

import { useMemo } from "react";

export default function GlowingStarsPreview() {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        size: Math.random() * 3 + 2,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 2 + 2}s`,
        color: ["#6366f1", "#a855f7", "#ec4899", "#3b82f6", "#10b981"][
          Math.floor(Math.random() * 5)
        ],
      })),
    []
  );

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
      <style>{`
        @keyframes star-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .glowing-star {
          position: absolute;
          border-radius: 9999px;
          animation: star-pulse ease-in-out infinite;
        }
      `}</style>

      {stars.map((star) => (
        <div
          key={star.id}
          className="glowing-star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-white">Glowing Stars</h3>
        <p className="mt-2 text-sm text-zinc-500">
          Pulsing dots of color across a dark canvas
        </p>
      </div>
    </div>
  );
}
