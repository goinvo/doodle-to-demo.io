
'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { slides } from "./slides";
import SlideNavArrows from "../components/SlideNavArrows";
import ResponsiveVideo from "../components/ResponsiveVideo";
import { motion } from "framer-motion";

type SlideViewerProps = {
  currentIndex: number;
};

export default function SlideViewer({ currentIndex }: SlideViewerProps) {
  const router = useRouter();

  const totalSlides = slides.length;
  const slide = slides[currentIndex];
  const previousIndex = Math.max(0, currentIndex - 1);
  const nextIndex = Math.min(totalSlides - 1, currentIndex + 1);

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

  // Slide 2: full-bleed hero with large title and side chevrons
  if (currentIndex === 1) {
    return (
      <main className="gradient-bg min-h-[calc(100vh)] w-full px-2 sm:px-4">
        <div className="relative min-h-[calc(100vh-4rem)]">
          <motion.div
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
          >
            <SlideNavArrows
              previousHref={`/slides/${previousIndex}`}
              nextHref={`/slides/${nextIndex}`}
              iconSize={44}
              strokeWidth={2.5}
              className="absolute inset-0"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-4 sm:left-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-white text-[clamp(2rem,6vw+1rem,5rem)] font-black tracking-tight">
              <span className="opacity-90">/</span> GenAI Boom
            </h2>
          </motion.div>
        </div>
      </main>
    );
  }

  // Slide 3: left-aligned multiline message over full-bleed background
  if (currentIndex === 2) {
    return (
      <main className="min-h-[calc(100vh-4rem)] w-full px-2 sm:px-4">
        <div className="relative min-h-[calc(100vh-4rem)]">
          <div className="absolute inset-0 bg-black/30" />
          <SlideNavArrows
            previousHref={`/slides/${previousIndex}`}
            nextHref={`/slides/${nextIndex}`}
            iconSize={44}
            strokeWidth={2.5}
            className="absolute inset-0"
          />

          <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6">
            <h2 className="ml-12 max-w-xl text-white text-[clamp(1.75rem,3.4vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-tight">
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
      </main>
    );
  }

  return (
    <main className="gradient-bg relative min-h-[calc(100vh)] w-full px-4 py-6 sm:px-6">
      <SlideNavArrows
        previousHref={currentIndex > 0 ? `/slides/${previousIndex}` : undefined}
        nextHref={currentIndex < totalSlides - 1 ? `/slides/${nextIndex}` : undefined}
        iconSize={36}
        strokeWidth={2.5}
        className="absolute inset-0"
      />
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 2/3 width */}
        <section className="order-2 col-span-12 md:order-1 md:col-span-8 md:flex md:items-center md:min-h-[calc(100vh-4rem)]">
          {currentIndex === 0 ? (
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
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
              >
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
              </motion.div>
            </div>
          ) : (
            <article className="w-full rounded-xl bg-black/20 p-6 text-white backdrop-blur-sm">
              <h1 className="mb-4 text-3xl font-semibold tracking-tight">{slide.title}</h1>
              {slide.body ? (
                <p className="mb-4 max-w-prose text-lg leading-8 text-white/90">{slide.body}</p>
              ) : null}
              {slide.bullets && slide.bullets.length > 0 ? (
                <ul className="ml-5 list-disc space-y-2 text-white/90">
                  {slide.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          )}
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
                <ResponsiveVideo src={undefined} title="Top Right Video" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ResponsiveVideo src={undefined} title="Bottom Right Video" />
              </motion.div>
            </motion.div>
            <div className="pt-4 text-right text-white/90">
              <span className="opacity-80">/ Generated in </span>
              <strong>Midjourney V7</strong>
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation controls removed per design */}
    </main>
  );
}


