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

      <section id="about" className="relative z-10 bg-[#588a99] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-light mb-8">
            We create exceptional websites for businesses
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Our agency specializes in crafting beautiful, functional websites that help businesses
            establish their digital presence and connect with their audience. From concept to launch,
            we partner with you to bring your vision to life.
          </p>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-[#d65e61] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-light mb-16">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-medium mb-4">Web Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, user-friendly designs that capture your brand essence and engage your audience.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-medium mb-4">Development</h4>
              <p className="text-gray-600 leading-relaxed">
                Modern, responsive websites built with the latest technologies for optimal performance.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-medium mb-4">Strategy</h4>
              <p className="text-gray-600 leading-relaxed">
                Data-driven strategies to help your business grow and succeed in the digital landscape.
              </p>
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
