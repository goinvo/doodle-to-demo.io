'use client';

import { Menu } from "lucide-react";
import { useState, createContext, ReactNode, useContext } from "react";
import { usePathname } from 'next/navigation';
import SlideMenu, { slideTitles } from "./SlideMenu";

const slideCount = 6; // Set to match your number of slides

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
      slideTitle = slideTitles[idx] ? `/ ${slideTitles[idx]}` : '';
    }
  }
  return (
    <header className="absolute left-0 right-0 top-0 z-10 border-b border-white/100 bg-transparent">
      <div className="flex h-14 items-center px-4 gap-3 sm:h-16 sm:px-6">
        <button
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center text-white focus:outline-none"
          onClick={() => resolvedSetOpen(true)}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
        <div className="font-sans text-white font-black uppercase tracking-tight text-xl sm:text-2xl flex items-center gap-3">
          DOODLE TO DEMO
          {slideTitle && <span className="font-normal normal-case text-base sm:text-lg text-white/90 whitespace-nowrap">{slideTitle} of {slideCount}</span>}
        </div>
      </div>
    </header>
  );
}


