import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type SlideNavArrowsProps = {
  previousHref?: string;
  nextHref?: string;
  iconSize?: number;
  strokeWidth?: number;
  className?: string;
  isBottomPositioned?: boolean;
  usePrimaryColor?: boolean;
  useCaseStudyArrows?: boolean;
};

export default function SlideNavArrows({
  previousHref,
  nextHref,
  iconSize = 28,
  strokeWidth = 2,
  className,
  isBottomPositioned = false,
  usePrimaryColor = false,
  useCaseStudyArrows = false,
}: SlideNavArrowsProps) {
  const textColor = usePrimaryColor ? 'text-primary-color' : 'text-white';
  
  if (useCaseStudyArrows) {
    return (
      <div className={`case-study-nav ${className ?? ""} z-20 w-full`}>
        {previousHref ? (
          <Link
            href={previousHref}
            prefetch
            aria-label="Previous slide"
            className="cs-prev-nav"
          >
            <div className="cs-prev-nav-arrow">
              <Image
                src="/image/nav_arrow_cs.svg"
                alt="Previous"
                width={iconSize}
                height={iconSize}
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <span className="cs-prev-nav-text text-white font-bold uppercase text-sm sm:text-base">Back</span>
          </Link>
        ) : (
          <div className="cs-prev-nav"></div>
        )}
        {nextHref ? (
          <Link
            href={nextHref}
            prefetch
            aria-label="Next slide"
            className="cs-next-nav"
          >
            <div className="cs-next-nav-arrow">
              <Image
                src="/image/nav_arrow_cs.svg"
                alt="Next"
                width={iconSize}
                height={iconSize}
              />
            </div>
            <span className="cs-next-nav-text text-white font-bold uppercase text-sm sm:text-base">Next</span>
          </Link>
        ) : (
          <div className="cs-next-nav"></div>
        )}
      </div>
    );
  }
  
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
          <div className="rounded-full p-0.5 sm:p-1 scale-[0.7] sm:scale-100 [&_svg]:[stroke-width:1.26px] md:[&_svg]:[stroke-width:1.2px]">
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
          <div className="rounded-full p-0.5 sm:p-1 scale-[0.7] sm:scale-100 [&_svg]:[stroke-width:1.26px] md:[&_svg]:[stroke-width:1.2px]">
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


