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
        <h2 className="max-w-xl text-white font-thin text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] lg:text-[clamp(2.1875rem,4.25vw+1.25rem,4.375rem)] leading-[1.05] tracking-tight mr-[70px]">
          Where do we
          <br />as designers,
          <br />fit in the
          <br /><span className="italic font-bold">GenAI</span> boom?
        </h2>
      </div>
    </div>
  );
}

