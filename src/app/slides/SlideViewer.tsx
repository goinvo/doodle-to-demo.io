
'use client';

import Link from "next/link";
import { useEffect, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import SlideNavArrows from "../components/SlideNavArrows";
import { motion } from "framer-motion";
import ResponsiveVideo from "../components/ResponsiveVideo";
import { MenuContext } from "../components/Header";

// Each slide is just a function or JSX block:
const slides = [
  // Slide 0: Two-column layout with left text and right stacked videos/images (as before)
  ({ nextIndex }: { nextIndex?: number }) => (
    <main className="gradient-bg relative min-h-[calc(100vh)] w-full px-4 py-6 sm:px-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 2/3 width */}
        <section className="order-2 col-span-12 md:order-1 md:col-span-8 md:flex md:items-center md:min-h-[calc(100vh-4rem)]">
          <div className="text-white">
            <motion.p
              className="mb-10 font-mono text-sm tracking-wide opacity-80"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              By Maverick Chan, Claire Lin, Shirley Xu
            </motion.p>
            <motion.h1
              className="leading-[0.9]"
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            >
              <motion.span
                className="block italic text-[clamp(2.5rem,6vw+1rem,6rem)] font-normal"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              >
                Doodle
              </motion.span>
              <motion.span
                className="block text-[clamp(3rem,7vw+1rem,7rem)] font-black"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              >
                <span className="mr-3">to</span>
                <span className="relative inline-block after:mt-2 after:block after:h-1 after:w-full after:bg-white">Demo</span>
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 text-[clamp(1rem,1.2vw+0.6rem,1.5rem)] opacity-90"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              AI as Our Storytelling Partner
            </motion.p>
            {/* <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
            >
              {typeof nextIndex === 'number' && (
                <Link href={`/slides/${nextIndex}`} prefetch legacyBehavior passHref>
                  <motion.a
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black transition-[background,transform,box-shadow] hover:scale-[1.02] hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/80"
                    animate={{
                      scale: [1, 1.04, 1],
                      boxShadow: [
                        "0 8px 30px rgba(255,255,255,0.12)",
                        "0 8px 40px rgba(255,255,255,0.20)",
                        "0 8px 30px rgba(255,255,255,0.12)",
                      ],
                    }}
                    transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
                  >
                    Let’s start
                  </motion.a>
                </Link>
              )}
            </motion.div> */}
          </div>
        </section>
        {/* Right: 1/3 width */}
        <aside className="pt-16 order-1 col-span-12 md:order-2 md:col-span-4">
          <div className="flex h-full flex-col justify-start md:justify-between">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ResponsiveVideo src="/video/Maverick_Midjourney_profile_animation_final.mp4" title="Top Right Video" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ResponsiveVideo src="/video/Claire_Midjourney_profile_animation_final.mp4" title="Bottom Right Video" />
              </motion.div>
            </motion.div>
            <div className="pt-4 text-right text-white/90">
              <span className="opacity-80">/ Generated in </span>
              <strong>Midjourney V7</strong>
            </div>
          </div>
        </aside>
      </div>
    </main>
  ),
  // Slide 1: Bottom left text, prepared for image background later
  () => (
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
  ),
  // 2: Multiline left-aligned message with GenAI_Robot.mp4 video background (slowed)
  () => {
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
  },
  // 3: Right-aligned question slide with video background and gradient overlay
  () => (
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
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block">Where do we</span>
          <span className="block">as designers,</span>
          <span className="block">fit in the</span>
          <span className="block"><em className="italic font-black">GenAi</em> boom?</span>
        </h2>
      </div>
    </div>
  ),
  // 4: Formula 1 metaphor with background video & gradient overlay
  () => (
    <div className="relative min-h-[calc(100vh)] w-full">
      {/* Background video */}
      <video
        src="/video/F1_Animation_final.mp4"
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
        className="absolute inset-0 z-[5] gradient-overlay"
        style={{ background: "linear-gradient(90deg, rgba(45, 45, 104, 0.00) 30.52%, #2D2D68 100%)" }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Right-aligned metaphor text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-24 z-20">
        <h2 className="max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="block"><em className="font-black">Formula 1</em> represents</span>
          <span className="block">the speed possible</span>
          <span className="block">with hardware</span>
          <span className="block">design</span>
          <br />
          <span className="block"><em className="font-black">What&apos;s software&apos;s</em></span>
          <span className="block"><em className="font-black">equivalent?</em></span>
        </h2>
      </div>
    </div>
  ),
  // 5: Bottom left text, prepared for image background later
  () => (
    <main className="gradient-bg min-h-[calc(100vh)] w-full">
      <div className="relative min-h-[calc(100vh)] w-full">
        {/* Background image can be inserted here as absolutely positioned image element */}
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
            <span className="opacity-90">/</span> <span className="font-black">Case Studies</span>
          </h2>
        </motion.div>
      </div>
    </main>
  ),
  // last: Fallback/example slide
  () => (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="text-white">Add more slides by pushing to this array!</h2>
    </div>
  ),
];

// Component starts here
export default function SlideViewer({ currentIndex }: { currentIndex: number }) {
  const router = useRouter();
  const totalSlides = slides.length;
  const previousIndex = Math.max(0, currentIndex - 1);
  const nextIndex = Math.min(totalSlides - 1, currentIndex + 1);
  // Pass nextIndex so slide 0 can link correctly
  const SlideContent = slides[currentIndex];
  const menuOpen = useContext(MenuContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (currentIndex < totalSlides - 1) router.push(`/slides/${currentIndex + 1}`);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentIndex > 0) router.push(`/slides/${currentIndex - 1}`);
      } else if (event.key === "Home") {
        event.preventDefault();
        router.push(`/slides/0`);
      } else if (event.key === "End") {
        event.preventDefault();
        router.push(`/slides/${totalSlides - 1}`);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, router, totalSlides]);

  return (
    <div className="relative w-full min-h-[calc(100vh)] overflow-hidden">
      {/* For slide 0, pass nextIndex so button works correctly. For others, pass nothing. */}
      <SlideContent {...(currentIndex === 0 ? { nextIndex } : {})} />
      {/* Arrows only shown/active when menu is closed */}
      {!menuOpen && (
        <div className="absolute inset-y-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-between z-30">
          <SlideNavArrows
            previousHref={currentIndex > 0 ? `/slides/${previousIndex}` : undefined}
            nextHref={currentIndex < totalSlides - 1 ? `/slides/${nextIndex}` : undefined}
            iconSize={88}
            strokeWidth={1.8}
            className="mx-auto pointer-events-auto"
          />
        </div>
      )}
    </div>
  );
}


