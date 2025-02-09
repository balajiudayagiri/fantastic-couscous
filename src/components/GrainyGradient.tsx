export function GrainyGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Extended black overlay at top with smoother transition */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black to-transparent" />

      {/* Darker base layer */}
      <div className="absolute inset-0 bg-black/95" />

      {/* Softer radial mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/30 via-zinc-900/20 to-zinc-950/30 animate-gradient backdrop-blur-lg" />

      {/* Very subtle noise */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] mix-blend-overlay" />

      {/* More subtle glow spots */}
      <div className="absolute top-1/3 -left-1/4 w-1/2 aspect-square bg-zinc-800/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 -right-1/4 w-1/2 aspect-square bg-zinc-800/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
    </div>
  );
}
