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
    <div className={`${className ?? ""} z-20`}>
      {previousHref ? (
        <Link
          href={previousHref}
          prefetch
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white sm:left-4"
        >
          <div className="translucent-bg rounded-full p-1">
            <ChevronLeft size={iconSize} strokeWidth={strokeWidth} />
          </div>
        </Link>
      ) : null}
      {nextHref ? (
        <Link
          href={nextHref}
          prefetch
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white sm:right-4"
        >
          <div className="translucent-bg rounded-full p-1">
            <ChevronRight size={iconSize} strokeWidth={strokeWidth} />
          </div>
        </Link>
      ) : null}
    </div>
  );
}


