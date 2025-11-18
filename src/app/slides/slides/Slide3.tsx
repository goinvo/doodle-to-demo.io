'use client';

export default function Slide3() {
  return (
    <div className="relative min-h-[calc(100vh)] w-full">
      {/* Background video */}
      <video
        src="/video/F1_Animation_final.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[5] gradient-overlay"
        style={{ background: "linear-gradient(90deg, rgba(45, 45, 104, 0.00) 30.52%, #2D2D68 100%)" }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Right-aligned metaphor text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-24 z-20">
        <h2 className="max-w-xl text-white font-thin text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] leading-[1.05] tracking-tight mr-[70px]">
          <span className="font-bold">Formula 1</span> represents
          <br />the speed possible
          <br />with hardware
          <br />design
        </h2>
        <h2 className="max-w-xl text-white font-thin text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] leading-[1.05] tracking-tight mr-[70px] mt-[40px]">
          <span className="font-bold">What&apos;s software&apos;s</span>
          <br /><span className="font-bold">equivalent?</span>
        </h2>
      </div>
      <div className="absolute bottom-6 left-20 sm:left-[30px] text-white/90">
        <span className="opacity-80">/ Credit to </span>
        <strong><a href="https://www.youtube.com/watch?v=VJgdOMXhEj0&t=576s" target="_blank" rel="noopener noreferrer">Cleo Abram</a></strong>
      </div>
    </div>
  );
}

