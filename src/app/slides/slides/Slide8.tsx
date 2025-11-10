'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide8() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-6 case-study">
      
      
      <section className="w-full min-h-screen flex flex-col justify-center relative">
        <div className="container-padding container-padding-vertical-quad absolute text-primary-color container-padding-horizontal">
          <h2 className="text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
            <span className="font-thin opacity-90">04</span>
            <br/> <span className="font-bold">Live Demo</span>
          </h2>
          <p className="p-max text-2rem">What if we used <span className="font-bold">Midjourney</span> What if we used Midjourney as the starting point for a project? What could an <span className="italic">[app]</span> inspired by <span className="italic">[character/movie]</span> look like?</p>

          {/* <motion.div
            className="absolute left-1/2 top-200 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
            animate={{ y: [0, 14, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.3,
            }}
            onClick={handleArrowClick}
          >
            <ChevronDown size={56} strokeWidth={1.8} className="text-primary-color drop-shadow-lg" />
          </motion.div> */}

          {/* Maybe a video of the demo? */}
        </div>
        
      </section>
      
    </main>
  );
}

