"use client";

export default function ShimmerButtonPreview() {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-6 rounded-xl bg-zinc-950">
      <style>{`
        @keyframes shimmer-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(110deg, #18181b 40%, #27272a 50%, #18181b 60%);
          background-size: 200% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
        }
        .shimmer-btn-primary {
          background: linear-gradient(110deg, #4f46e5 40%, #818cf8 50%, #4f46e5 60%);
          background-size: 200% 100%;
          animation: shimmer-sweep 2.5s ease-in-out infinite;
        }
        .shimmer-btn-outline {
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
          background:
            linear-gradient(#09090b, #09090b) padding-box,
            linear-gradient(110deg, #3f3f46 40%, #6366f1 50%, #3f3f46 60%) border-box;
          background-size: 100% 100%, 200% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
          background-origin: padding-box, border-box;
        }
      `}</style>

      <button className="shimmer-btn-primary rounded-lg px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25">
        Get Started
      </button>

      <button className="shimmer-btn rounded-lg border border-zinc-700 px-8 py-3 text-sm font-medium text-zinc-300">
        Learn More
      </button>

      <button className="shimmer-btn-outline rounded-lg px-8 py-3 text-sm font-medium text-zinc-300">
        Outline Shimmer
      </button>
    </div>
  );
}
