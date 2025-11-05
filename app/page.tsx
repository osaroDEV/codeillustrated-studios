import Link from 'next/link';

export default function Home() {
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
          src='/videos/sweep.mp4'
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <div className="text-center max-w-5xl">
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
            Building astonishing
            <br />
            digital solutions.
          </h2>
        </div>
      </main>

      <section id="about" className="relative z-10 bg-[#277890] py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-white">
                We help businesses design, develop, and position their products as formidable solutions that inspire.
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 shrink-0">01</span>
                <h4 className="text-2xl md:text-3xl font-light text-white">User Research</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 shrink-0">02</span>
                <h4 className="text-2xl md:text-3xl font-light text-white">Product Design</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 shrink-0">03</span>
                <h4 className="text-2xl md:text-3xl font-light text-white">Branding</h4>
              </div>

              <div className="flex gap-6 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-400 shrink-0">04</span>
                <h4 className="text-2xl md:text-3xl font-light text-white">Mobile & Web Development</h4>
              </div>

              <Link href='/services' className="w-full md:w-auto px-12 py-4 border border-black rounded-full text-sm font-medium tracking-wide hover:bg-black text-black hover:text-white transition-all duration-300 mt-8">
                LEARN MORE
              </Link>
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
