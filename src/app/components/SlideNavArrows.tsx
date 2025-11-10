import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideNavArrowsProps = {
  previousHref?: string;
  nextHref?: string;
  iconSize?: number;
  strokeWidth?: number;
  className?: string;
  isBottomPositioned?: boolean;
  usePrimaryColor?: boolean;
};

export default function SlideNavArrows({
  previousHref,
  nextHref,
  iconSize = 28,
  strokeWidth = 2,
  className,
  isBottomPositioned = false,
  usePrimaryColor = false,
}: SlideNavArrowsProps) {
  const textColor = usePrimaryColor ? 'text-primary-color' : 'text-white';
  return (
    <div className={`${className ?? ""} z-20`}>
      {previousHref ? (
        <Link
          href={previousHref}
          prefetch
          aria-label="Previous slide"
          className={` absolute left-1 ${textColor} sm:left-4 ${
            isBottomPositioned ? '' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          <div className="translucent-bg rounded-full p-0.5 sm:p-1 scale-[0.7] sm:scale-100 [&_svg]:[stroke-width:1.26px] md:[&_svg]:[stroke-width:1.8px]">
            <ChevronLeft 
              size={iconSize} 
              strokeWidth={strokeWidth}
            />
          </div>
        </Link>
      ) : null}
      {nextHref ? (
        <Link
          href={nextHref}
          prefetch
          aria-label="Next slide"
          className={` absolute right-1 ${textColor} sm:right-4 ${
            isBottomPositioned ? '' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          <div className="translucent-bg rounded-full p-0.5 sm:p-1 scale-[0.7] sm:scale-100 [&_svg]:[stroke-width:1.26px] md:[&_svg]:[stroke-width:1.8px]">
            <ChevronRight 
              size={iconSize} 
              strokeWidth={strokeWidth}
            />
          </div>
        </Link>
      ) : null}
    </div>
  );
}


