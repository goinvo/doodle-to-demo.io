'use client';

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import SlideNavArrows from "../components/SlideNavArrows";
import { MenuContext } from "../components/Header";
import { slides } from "./slides";

// Slides are now imported from separate files in the slides directory

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
        <div className={`absolute left-0 right-0 flex items-center justify-between z-30 ${
          currentIndex === 5 
            ? 'bottom-[50vh]' 
            : 'inset-y-1/2 -translate-y-1/2'
        }`}>
          <SlideNavArrows
            previousHref={currentIndex > 0 ? `/slides/${previousIndex}` : undefined}
            nextHref={currentIndex < totalSlides - 1 ? `/slides/${nextIndex}` : undefined}
            iconSize={88}
            strokeWidth={1.8}
            className="mx-auto pointer-events-auto"
            isBottomPositioned={currentIndex === 5}
          />
        </div>
      )}
    </div>
  );
}
