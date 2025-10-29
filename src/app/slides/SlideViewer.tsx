'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { slides } from "./slides";

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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between py-12 px-6 sm:px-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Doodle to Demo
          </Link>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Slide {currentIndex + 1} of {totalSlides}
          </div>
        </header>

        <section className="flex flex-1 items-center justify-center">
          <article className="w-full rounded-xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-black">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
              {slide.title}
            </h1>
            {slide.body ? (
              <p className="mb-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{slide.body}</p>
            ) : null}
            {slide.bullets && slide.bullets.length > 0 ? (
              <ul className="ml-5 list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
                {slide.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        </section>

        <footer className="flex items-center justify-between gap-4">
          <Link
            aria-disabled={currentIndex === 0}
            className={`flex h-12 items-center justify-center rounded-full border px-5 text-sm transition-colors ${
              currentIndex === 0
                ? "cursor-not-allowed border-zinc-300 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600"
                : "border-black/10 text-zinc-800 hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
            }`}
            href={`/slides/${previousIndex}`}
            prefetch
          >
            ← Previous
          </Link>

          <Link
            aria-disabled={currentIndex === totalSlides - 1}
            className={`flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background text-sm transition-colors ${
              currentIndex === totalSlides - 1
                ? "cursor-not-allowed opacity-60"
                : "hover:bg-[#383838] dark:hover:bg-[#ccc]"
            }`}
            href={`/slides/${nextIndex}`}
            prefetch
          >
            Next →
          </Link>
        </footer>
      </main>
    </div>
  );
}


