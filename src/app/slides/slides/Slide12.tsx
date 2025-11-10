'use client';

import { useEffect, useRef } from "react";

export default function Slide12() {
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
      <div className="absolute inset-0 bg-black/35 z-10" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-24 z-20">
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] leading-[1.05] tracking-tight">
          <span className="block">Use GeAI to</span>
          <span className="block">bridge gaps in</span>
          <span className="block">abilities, but</span>
          <span className="block"><span className="font-bold">time</span>, <span className="font-bold">skill</span>, and</span>
          <span className="block font-bold">scale</span>
        </h2>
      </div>
      <div className="absolute bottom-6 right-6 text-right text-white/90 z-20">
        <span className="opacity-80">/ Original
        <span className="font-bold"> GoInvo Illustration</span> animated by
        <span className="font-bold"> Midjourney V7</span></span>
      </div>
    </div>
  );
}

