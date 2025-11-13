'use client';

import { useEffect, useRef } from "react";

export default function Slide1() {
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
        src="/video/GenAI_Robot.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-24">
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block">Old methods</span>
          <span className="block">& workflows</span>
          <span className="block">feel <em className="italic font-normal opacity-90">slow</em> and</span>
          <span className="block"><em className="italic font-black">redundant</em></span>
        </h2>
      </div>
      <div className="absolute bottom-6 right-6 text-right text-white/90">
        <span className="opacity-80">/ Generated in </span>
        <strong>Midjourney V7</strong>
      </div>
    </div>
  );
}

