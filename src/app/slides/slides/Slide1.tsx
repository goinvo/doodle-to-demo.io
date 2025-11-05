'use client';

import { motion } from "framer-motion";

export default function Slide1() {
  return (
    <main className="gradient-bg min-h-[calc(100vh)] w-full">
      <div className="relative min-h-[calc(100vh)] w-full">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src="/image/AI_apps_cropped.svg"
            alt="AI Apps Background"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            style={{ opacity: 0.94 }}
          />
        </motion.div>
        {/* Animated overlay, necessary? */}
        <motion.div
          className="absolute inset-0 bg-black/30 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Bottom left text block */}
        <motion.div
          className="absolute bottom-6 left-4 sm:left-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-white text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
            <span className="opacity-90">/</span> <span className="font-black">GenAI Boom</span>
          </h2>
        </motion.div>
      </div>
    </main>
  );
}

