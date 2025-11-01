'use client';

import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          // src="https://player.vimeo.com/progressive_redirect/playback/785014447/rendition/1080p/file.mp4?loc=external&signature=5e9f6e52ad3b933f1f63e74cdc1e5f8b72d9bd2271b27c8f9c96b0cc82c07e09"
          src='/videos/sweep.mp4'
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <Header onMenuClick={() => setIsMenuOpen(true)} />

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <div className="text-center max-w-5xl">
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
            Building astonishing
            <br />
            digital solutions.
          </h2>
        </div>
      </main>

      <section id="about" className="relative z-10 bg-white py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-black">
                We help businesses design, develop, and position their products as formidable solutions that inspire.
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 flex-shrink-0">01</span>
                <h4 className="text-2xl md:text-3xl font-light text-black">User Research</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 flex-shrink-0">02</span>
                <h4 className="text-2xl md:text-3xl font-light text-black">Product Design</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 flex-shrink-0">03</span>
                <h4 className="text-2xl md:text-3xl font-light text-black">Branding</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 flex-shrink-0">04</span>
                <h4 className="text-2xl md:text-3xl font-light text-black">Mobile & Web Development</h4>
              </div>

              <button className="w-full md:w-auto px-12 py-4 border border-black rounded-full text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 mt-8">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-gray-50 py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black">
                Want to know what we do?
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                We Helping you envision, create and bring the product to life in a few phases — from drafts and mockups to launch and reveal. Transform your vision into a functional, engaging, and high-performing digital experience.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 pb-6 border-b border-gray-300">
                  <span className="text-sm font-medium text-gray-400 flex-shrink-0">01</span>
                  <h4 className="text-xl md:text-2xl font-normal text-black">Branding</h4>
                </div>

                <div className="flex gap-6 pb-6 border-b border-gray-300">
                  <span className="text-sm font-medium text-gray-400 flex-shrink-0">02</span>
                  <h4 className="text-xl md:text-2xl font-normal text-black">Design</h4>
                </div>

                <div className="flex gap-6 pb-6 border-b border-gray-300">
                  <span className="text-sm font-medium text-gray-400 flex-shrink-0">03</span>
                  <h4 className="text-xl md:text-2xl font-normal text-black">Development</h4>
                </div>
              </div>

              <button className="w-full md:w-auto px-12 py-4 border border-black rounded-full text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 mt-8">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-light mb-8">
            Let's build something amazing together
          </h3>
          <a
            href="mailto:admin@codeillustrated.com"
            className="inline-block px-12 py-4 border border-white/30 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  );
}
