'use client';

import Link from "next/link";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12">
      <div className="flex items-center justify-between">
        <Link href='/' className="lg:text-xl font-bold bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              CodeIllustrated Labs
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="flex items-center gap-3 bg-white backdrop-blur-md border border-[#939F5C] rounded-lg px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Open menu"
          >
            <span className="text-sm font-bold tracking-wide text-[#939F5C]">MENU</span>
            <div className="flex flex-col gap-1">
              <span className="block w-5 h-0.5 bg-[#939F5C]"></span>
              <span className="block w-5 h-0.5 bg-[#939F5C]"></span>
              <span className="block w-5 h-0.5 bg-[#939F5C]"></span>
            </div>
          </button>

          <Link
            href="/contact"
            className="hidden md:block text-[#939F5C] text-sm font-bold hover:opacity-70 transition-opacity"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
