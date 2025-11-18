'use client';

import { useEffect, useRef } from "react";

export default function Slide11() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative min-h-[calc(100vh)] w-full">
      {/* Background video, slowed down */}
      <video
        ref={videoRef}
        src="/video/Briding_Gaps_Animation_final.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />
      {/* Gradient overlay - flipped horizontally (left to right) */}
      <div
        className="absolute inset-0 z-[5]"
        style={{ background: "linear-gradient(90deg, #2D2D68 0%, rgba(45, 45, 104, 0.00) 69.48%)" }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35 z-10 " />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-24 z-20 container-padding-horizontal">
        <h2 className="max-w-xl text-white font-thin text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] lg:text-[clamp(2.1875rem,4.25vw+1.25rem,4.375rem)] leading-[1.05] tracking-tight">
          Use GenAI to
          <br />bridge gaps in
          <br />abilities, but
          <br /><span className="font-bold">time</span>, <span className="font-bold">skill</span>, and
          <br /><span className="font-bold">scale</span>
        </h2>
      </div>
      <div className="absolute bottom-6 left-4 sm:left-24 text-white/90 z-20 container-padding-horizontal">
        <span className="opacity-80">/ Original
        <span className="font-bold"> GoInvo Illustration</span> animated by
        <span className="font-bold"> Midjourney V7</span></span>
      </div>
    </div>
  );
}

