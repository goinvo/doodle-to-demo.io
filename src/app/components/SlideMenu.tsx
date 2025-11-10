'use client';

import { X } from "lucide-react";
import Link from "next/link";

export const slideTitles = [
  'Welcome',
  'GenAI Boom',
  'Old Methods',
  'Our Roles',
  'F1 Intro',
  'Case Study 1',
  'Case Study 2',
  'Case Study 3',
  'Live Demo',
  'Final Thoughts',
  'Unlimited vision',
  'Case Study Summary',
  'Bridging Gaps',
  'Q&A',
];

export default function SlideMenu({ open, setOpen, slideCount }: { open: boolean; setOpen: (open: boolean) => void; slideCount: number }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-full w-64 primary-bg shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      aria-label="Slide navigation panel"
    >
      <div className="menu-title flex h-14 px-4 items-center border-b border-white/10 justify-between">
        <span className="font-bold text-xl text-white">Go to slide &rarr;</span>
        <button
          aria-label="Close menu"
          className="inline-flex h-8 w-8 items-center justify-center text-white"
          onClick={() => setOpen(false)}
        >
          <X size={24} strokeWidth={2} />
        </button>
      </div>
      <ul className="pt-2">
        {Array.from({ length: slideCount }).map((_, idx) => (
          <li key={idx}>
            <Link
              href={`/slides/${idx}`}
              className="block w-full px-6 py-3 text-white/90 hover:bg-zinc-700 transition-colors text-lg"
              onClick={() => setOpen(false)}
            >
              {/* </Link><span className="slide-number">{idx + 1} </span><span className="font-bold">{slideTitles[idx] || `Slide ${idx + 1}`}</span> */}
              {slideTitles[idx] || `Slide ${idx + 1}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
