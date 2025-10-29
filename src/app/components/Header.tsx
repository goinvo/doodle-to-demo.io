import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 border-b border-white/100 bg-transparent">
      <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="font-sans text-white font-black uppercase tracking-tight text-xl sm:text-2xl">
          DOODLE TO DEMO
        </div>
        <button aria-label="Open menu" className="inline-flex h-9 w-9 items-center justify-center text-white">
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}


