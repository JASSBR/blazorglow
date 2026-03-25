"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Card3DPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });
  const brightness = useTransform(y, [0, 0.5, 1], [1.2, 1, 0.8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div
      className="flex h-[300px] w-full items-center justify-center rounded-xl bg-zinc-950"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, filter: useTransform(brightness, (v) => `brightness(${v})`) }}
        className="relative flex h-48 w-72 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
        <svg className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Hover me</h3>
        <p className="text-xs text-zinc-400">3D tilt follows your cursor</p>
      </motion.div>
    </div>
  );
}
