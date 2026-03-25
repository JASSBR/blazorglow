"use client";

export default function BackgroundGradientPreview() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950 p-6">
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        .animated-gradient {
          background: linear-gradient(
            -45deg,
            #6366f1,
            #a855f7,
            #ec4899,
            #3b82f6,
            #6366f1,
            #10b981,
            #6366f1
          );
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <div className="animated-gradient relative flex h-full w-full items-center justify-center rounded-xl p-[1px]">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-[11px] bg-zinc-950/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white">Animated Gradient</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Smooth multi-color background animation
          </p>
          <div className="animated-gradient mt-4 rounded-full px-5 py-2 text-sm font-medium text-white">
            Gradient Button
          </div>
        </div>
      </div>
    </div>
  );
}
