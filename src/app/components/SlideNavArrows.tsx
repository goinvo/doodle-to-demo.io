import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideNavArrowsProps = {
  previousHref?: string;
  nextHref?: string;
  iconSize?: number;
  strokeWidth?: number;
  className?: string;
};

export default function SlideNavArrows({
  previousHref,
  nextHref,
  iconSize = 28,
  strokeWidth = 2,
  className,
}: SlideNavArrowsProps) {
  return (
    <div className={`pointer-events-none ${className ?? ""}`}>
      {previousHref ? (
        <Link
          href={previousHref}
          prefetch
          aria-label="Previous slide"
          className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 text-white sm:left-4"
        >
          <ChevronLeft size={iconSize} strokeWidth={strokeWidth} />
        </Link>
      ) : null}
      {nextHref ? (
        <Link
          href={nextHref}
          prefetch
          aria-label="Next slide"
          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 text-white sm:right-4"
        >
          <ChevronRight size={iconSize} strokeWidth={strokeWidth} />
        </Link>
      ) : null}
    </div>
  );
}


