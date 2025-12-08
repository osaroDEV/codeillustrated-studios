'use client';

import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { Footer } from './components/Footer';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {children}
      <Footer />
    </div>
  );
}
