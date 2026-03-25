"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Beautiful", "Modern", "Animated", "Blazor"];

export default function FlipWordsPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-zinc-950">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 text-3xl font-bold">
          <span className="text-zinc-400">Build</span>
          <div className="relative inline-block h-[1.2em] w-48 overflow-hidden text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Words flip every 2 seconds with a smooth transition
        </p>
      </div>
    </div>
  );
}
