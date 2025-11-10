'use client';

import { useEffect, useRef } from "react";

export default function Slide9() {
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
        src="/video/Final_Thoughts_Animation_final.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-24 container-padding-horizontal">
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block text-bold"><span className="font-thin">/</span> Final</span>
          <span className="block font-bold">Thoughts</span>
        </h2>
      </div>
      <div className="absolute bottom-6 right-6 text-right text-white/90 container-padding-horizontal">
        <span className="opacity-80">/ Generated in </span>
        <strong>Midjourney V7</strong>
      </div>
    </div>
  );
}

