'use client';

export default function Slide2() {
  return (
    <div className="relative min-h-[calc(100vh)] w-full">
      {/* Background video */}
      <video
        src="/video/Role_animation_final.mp4"
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
        className="absolute inset-0 z-[5]"
        style={{ background: "linear-gradient(90deg, rgba(45, 45, 104, 0.00) 30.52%,  #2D2D68 100%)" }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Right-aligned question text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-24 z-20">
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block">Where do we</span>
          <span className="block">as designers,</span>
          <span className="block">fit in the</span>
          <span className="block"><em className="italic font-black">GenAI</em> boom?</span>
        </h2>
      </div>
    </div>
  );
}

