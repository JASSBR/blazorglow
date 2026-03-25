"use client";

export default function MovingBorderPreview() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-zinc-950">
      <style>{`
        @keyframes border-spin {
          0% { --border-angle: 0deg; }
          100% { --border-angle: 360deg; }
        }
        @property --border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        .moving-border-btn {
          --border-angle: 0deg;
          animation: border-spin 3s linear infinite;
          background:
            conic-gradient(from var(--border-angle), #18181b, #18181b 50%, #18181b) padding-box,
            conic-gradient(from var(--border-angle), transparent 20%, #6366f1, #a855f7, #6366f1, transparent 80%) border-box;
          border: 2px solid transparent;
        }
        .moving-border-card {
          --border-angle: 0deg;
          animation: border-spin 4s linear infinite;
          background:
            conic-gradient(from var(--border-angle), #09090b, #09090b 50%, #09090b) padding-box,
            conic-gradient(from var(--border-angle), transparent 20%, #6366f1, #a855f7, #ec4899, #6366f1, transparent 80%) border-box;
          border: 1px solid transparent;
        }
      `}</style>

      <div className="flex flex-col items-center gap-6">
        <div className="moving-border-card rounded-xl px-8 py-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-white">Moving Border</h3>
          <p className="text-sm text-zinc-400">
            A rotating gradient border that draws attention
          </p>
        </div>

        <button className="moving-border-btn rounded-full px-6 py-2.5 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-indigo-500/25">
          Click me
        </button>
      </div>
    </div>
  );
}
