"use client";

import { useMemo } from "react";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function MeteorsPreview() {
  const meteors = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        top: `${randomBetween(-10, 60)}%`,
        left: `${randomBetween(0, 100)}%`,
        delay: `${randomBetween(0, 5)}s`,
        duration: `${randomBetween(1, 3)}s`,
        size: randomBetween(80, 180),
      })),
    []
  );

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
      <style>{`
        @keyframes meteor-fall {
          0% {
            transform: translateY(0) translateX(0) rotate(215deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(300px) translateX(-300px) rotate(215deg);
            opacity: 0;
          }
        }
        .meteor {
          position: absolute;
          border-radius: 9999px;
          background: linear-gradient(90deg, #6366f1, transparent);
          animation: meteor-fall linear infinite;
        }
        .meteor::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(99,102,241,0.6), transparent);
          border-radius: 9999px;
          filter: blur(2px);
        }
      `}</style>

      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor"
          style={{
            top: m.top,
            left: m.left,
            width: `${m.size}px`,
            height: "1px",
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}

      {/* Static star dots */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="absolute h-[1px] w-[1px] rounded-full bg-white/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-white">Meteors</h3>
        <p className="mt-2 text-sm text-zinc-500">
          Animated streaks across a starry sky
        </p>
      </div>
    </div>
  );
}
