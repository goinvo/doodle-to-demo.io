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
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-24 container-padding-horizontal">
        <h2 className="max-w-xl text-white font-thin text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] lg:text-[clamp(2.1875rem,4.25vw+1.25rem,4.375rem)] leading-[1.05] tracking-tight">
          Old methods
          <br />& workflows
          <br />feel <span className="italic font-bold">slow</span> and
          <br /><span className="italic font-bold">redundant</span>
        </h2>
      </div>
      <div className="absolute bottom-6 left-4 sm:left-24 text-white/90 container-padding-horizontal">
        <span className="opacity-80">/ Generated in </span>
        <strong>Midjourney V7</strong>
      </div>
    </div>
  );
}

