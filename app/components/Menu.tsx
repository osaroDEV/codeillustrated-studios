'use client';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

      <div className="relative z-10 px-6 py-8 md:px-12">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-xl font-bold bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              CodeIllustrated Labs
            </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Close menu"
            >
              <span className="text-sm font-medium tracking-wide">MENU</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
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
      </div>

      <div className="relative z-10 flex items-start justify-center pt-12 md:pt-20 px-6 h-[calc(100vh-5rem)] overflow-y-auto">
        <nav className="w-full max-w-4xl">
          <div className="mb-16">
            <p className="text-white/50 text-xs font-medium tracking-widest mb-6 uppercase">
              Projects
            </p>
            <ul className="space-y-3">
              {['Michael Stevens Solicitors', 'Coding Tutor'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-white text-4xl font-light hover:opacity-70 transition-opacity"
                    onClick={onClose}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <p className="text-white/50 text-xs font-medium tracking-widest mb-6 uppercase">
              More
            </p>
            <ul className="space-y-3">
              {['Culture', 'Services'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-white text-2xl font-light hover:opacity-70 transition-opacity"
                    onClick={onClose}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full md:w-auto px-12 py-4 border border-white/30 rounded-full text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            CONTACT
          </button>
        </nav>
      </div>
    </div>
  );
}
