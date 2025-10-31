'use client';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg md:text-xl font-medium tracking-wide">
          FLABBERGAST
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Open menu"
          >
            <span className="text-sm font-medium tracking-wide">MENU</span>
            <div className="flex flex-col gap-1">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </button>

          <button
            className="hidden md:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Copy link"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>

          <a
            href="#contact"
            className="hidden md:block text-white text-sm font-medium hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}
