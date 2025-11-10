'use client';

import { Menu } from "lucide-react";
import { useState, createContext, ReactNode, useContext } from "react";
import { usePathname } from 'next/navigation';
import SlideMenu, { slideTitles } from "./SlideMenu";
import { slides } from "../slides/slides";

// Dynamically calculate slide count from slides array (slides are 0-indexed)
const slideCount = slides.length - 1;
// Slides that should use primary color instead of white
const primaryColorSlides = [6]; // Add more slide indices here as needed

export const MenuContext = createContext(false);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <MenuContext.Provider value={open}>
      <Header open={open} setOpen={setOpen} />
      {/* Overlay background when menu is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
      <SlideMenu open={open} setOpen={setOpen} slideCount={slideCount} />
      {children}
    </MenuContext.Provider>
  );
}

export default function Header({ open, setOpen }: { open?: boolean; setOpen?: (open: boolean) => void }) {
  // Hooks must be called unconditionally
  const contextOpen = useContext(MenuContext);
  // Prefer props, otherwise use context
  const resolvedOpen = open !== undefined ? open : contextOpen;
  const resolvedSetOpen = setOpen !== undefined ? setOpen : (() => {});

  const pathname = usePathname();
  let slideTitle = '';
  let idx: number|undefined;
  if (pathname?.startsWith('/slides/')) {
    idx = parseInt(pathname.replace('/slides/', ''), 10);
    if (!isNaN(idx)) {
      slideTitle = slideTitles[idx] ? `- ${slideTitles[idx]}` : '';
    }
  }
  // Use primary color for slides in primaryColorSlides array, white for all others
  const usePrimaryColor = idx !== undefined && primaryColorSlides.includes(idx);
  const textColor = usePrimaryColor ? 'text-primary-color' : 'text-white';
  const textColorWithOpacity = usePrimaryColor ? 'text-primary-color/90' : 'text-white/90';
  const borderColor = usePrimaryColor ? 'border-[#2D2D68]' : 'border-white/100';
  
  return (
    <header className={`absolute left-0 right-0 top-0 z-50 border-b ${borderColor} bg-transparent`}>
      <div className="flex h-14 items-center px-4 gap-3 sm:h-16 sm:px-6">
        <button
          aria-label="Open menu"
          className={`inline-flex h-9 w-9 items-center justify-center ${textColor} focus:outline-none`}
          onClick={() => resolvedSetOpen(true)}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
        <div className={`font-sans ${textColor} font-black uppercase tracking-tight text-xl sm:text-2xl flex items-center gap-3`}>
          DOODLE TO DEMO
          {idx !== undefined && (
            <span className={`font-normal normal-case text-base sm:text-lg ${textColorWithOpacity} whitespace-nowrap`}>
             / {idx + 1} of {slideCount + 1} {slideTitle}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}


