'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide7() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-6 case-study white-bg">
      
      
      <div className="relative min-h-[calc(100vh)] w-full">
        {/* Background video */}
        <video
          src="https://dd17w042cevyt.cloudfront.net/videos/features/doodle-to-demo/ScreenRecording_demo_1920x1080.mp4"
          className="absolute top-14 left-0 sm:top-16 w-full h-auto z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        />
      </div>

      {/* <section className="w-full min-h-screen flex flex-col justify-center relative">
        <div className="container-padding container-padding-vertical-quad absolute text-primary-color container-padding-horizontal">
          <h2 className="text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
            <span className="font-thin opacity-90">04</span>
            <br/> <span className="font-bold">Live Demo</span>
          </h2>
          <p className="p-max text-2rem">What if we used <span className="font-bold">Midjourney</span> What if we used Midjourney as the starting point for a project? What could an <span className="italic">[app]</span> inspired by <span className="italic">[character/movie]</span> look like?</p>
        </div>
        
      </section> */}
      
    </main>
  );
}

