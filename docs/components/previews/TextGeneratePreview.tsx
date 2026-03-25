"use client";

import { motion } from "framer-motion";

const text = "Beautiful animated components for your Blazor applications";
const words = text.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const child = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TextGeneratePreview() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-zinc-950 px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-x-2 gap-y-1"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="text-3xl font-bold text-white"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
