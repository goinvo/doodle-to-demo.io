'use client';

import { motion } from "framer-motion";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import OptimizedImage from "../../components/OptimizedImage";

export default function Slide0({ nextIndex }: { nextIndex?: number }) {
  return (
    <main className="gradient-bg-with-grid relative min-h-[calc(100vh)] w-full px-4 py-6 sm:px-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 2/3 width */}
        <section className="order-1 col-span-12 mt-[42px] md:mt-0 md:order-1 md:col-span-8 md:flex md:items-center md:min-h-[calc(100vh-4rem)]">
          <div className="text-white">
            <motion.div
              className="goinvo_logo"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <OptimizedImage src="/image/goinvo_logo.svg" alt="GoInvo Logo" />
            </motion.div>
            <motion.p
              className="mb-10 font-mono text-sm tracking-wide opacity-80"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              By Maverick Chan, Claire Lin, Shirley Xu
              <br /><a href="mailto:doodletodemo@goinvo.com">doodletodemo@goinvo.com</a>
            </motion.p>
            <motion.h1
              className="leading-[0.9]"
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            >
              <motion.span
                className="inline-block italic text-[clamp(3rem,7vw+1rem,7rem)] font-normal"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              >
                Doodle&nbsp;
              </motion.span>
              <motion.span
                className="inline-block text-[clamp(3rem,7vw+1rem,7rem)] "
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              >
                <span className="mr-3"> to</span>
                <span className="relative inline-block after:mt-2 after:block after:h-1 after:w-full after:bg-white font-black">Demo</span>
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
            <p className="mt-6 text-[clamp(1rem,1.2vw+0.6rem,1.5rem)] opacity-90">
              View the presentation on <a href="https://rosenverse.rosenfeldmedia.com/videos/from-doodle-to-demo-ai-as-our-storytelling-partner" target="_blank" rel="noopener noreferrer">Rosenverse</a>, or follow along at your own pace by continuing to the next slide.
            </p>
            <p className="mt-6 opacity-70 text-xs">
              This project and designs are licensed under <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank" rel="noopener noreferrer">creative commons attribution</a>.
            </p>
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
                    Let's start
                  </motion.a>
                </Link>
              )}
            </motion.div> */}
          </div>
        </section>
        {/* Right: 1/3 width */}
        <aside className="pt-16 order-2 col-span-12 md:order-2 md:col-span-4">
          <div className="flex h-full flex-col justify-start md:justify-between">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ResponsiveVideo src="/video/Maverick_Midjourney_profile_animation_final.mp4" title="Top Right Video" rounded={true} roundedSize="20px" priority preload="auto" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ResponsiveVideo src="/video/Claire_Midjourney_profile_animation_final.mp4" title="Bottom Right Video" rounded={true} roundedSize="20px" priority preload="auto" />
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
  );
}

