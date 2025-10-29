'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { slides } from "./slides";
import ResponsiveVideo from "../components/ResponsiveVideo";

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

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full px-4 py-6 sm:px-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: 2/3 width */}
        <section className="col-span-12 md:col-span-8 flex items-center min-h-[calc(100vh-4rem)]">
          {currentIndex === 0 ? (
            <div className="text-white">
              <p className="mb-10 text-sm tracking-wide opacity-80">
                By Maverick Chan, Claire Lin, Shirley Xu
              </p>
              <h1 className="leading-[0.9]">
                <span className="block italic text-[clamp(2.5rem,6vw+1rem,6rem)] font-normal">Doodle</span>
                <span className="block text-[clamp(3rem,7vw+1rem,7rem)] font-black">
                  <span className="mr-3">to</span>
                  <span className="relative inline-block after:mt-2 after:block after:h-1 after:w-full after:bg-white">Demo</span>
                </span>
              </h1>
              <p className="mt-6 text-[clamp(1rem,1.2vw+0.6rem,1.5rem)] opacity-90">
                AI as Our Storytelling Partner
              </p>
              <div className="mt-8">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
                  href={`/slides/${nextIndex}`}
                  prefetch
                >
                  Let's start
                </Link>
              </div>
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
        <aside className="col-span-12 md:col-span-4">
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-4">
              <ResponsiveVideo src={undefined} title="Top Right Video" />
              <ResponsiveVideo src={undefined} title="Bottom Right Video" />
            </div>
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


