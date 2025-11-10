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
      <section className="w-full flex flex-col min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen gap-0">

         <div className="col-span-1 relative h-[33.33vh] md:h-full flex items-center overflow-hidden">
            <img
              src="/image/case_studies/summary_1.png"
              alt="hospital room"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text contrast */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 z-10"
              style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)' }}
            ></div>
            <div className="absolute bottom-6 right-6 text-right text-white/90 z-20 container-padding-horizontal">
              <span className="opacity-80">/ Generated with </span>
              <span className="font-bold">Midjourney V7</span>
            </div>
         </div>

         <div className="col-span-1 relative h-[33.33vh] md:h-full flex items-center overflow-hidden">
            <img
              src="/image/case_studies/summary_2.png"
              alt="Maria"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text contrast */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 z-10"
              style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)' }}
            ></div>
            <div className="absolute bottom-6 right-6 text-right text-white/90 z-20 container-padding-horizontal">
              <span className="opacity-80">/ Generated with </span>
              <span className="font-bold">Cursor & ChatGPT</span>
            </div>
         </div>

         <div className="col-span-1 relative h-[33.33vh] md:h-full">
            <img
              src="/image/case_studies/summary_3.png"
              alt="CHIA"
              className="h-full w-full object-cover object-left"
            />
            {/* Gradient overlay for text contrast */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 z-10"
              style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)' }}
            ></div>
          <div className="absolute bottom-6 right-6 text-right text-white/90 z-20 container-padding-horizontal">
            <span className="opacity-80">/ Generated with </span>
            <span className="font-bold">Cursor</span>
          </div>
         </div>

        </div>
      </section>
      
    </div>
  );
}

