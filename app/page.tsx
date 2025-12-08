import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#EEE5E9]">
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
        <div className="text-center max-w-5xl flex flex-col items-center">
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Building astonishing
            <br />
            digital solutions.
          </h2>
        </div>
      </main>

      <section id="about" className="relative z-10 bg-[#C42125] py-20 md:py-32 px-6 md:px-12 lg:px-20">
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

              <Link href='/services' className="w-full md:w-auto px-12 py-4 border border-gray-50 rounded-lg text-sm font-medium tracking-wide hover:bg-black text-white hover:text-white transition-all duration-300 mt-20">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 bg-[#1E5A6D] text-white">
        <div className="p-7.5 pl-5 sm:p-9 md:p-12 rounded-lg">
          <h2 className='uppercase pb-5 text-[10px] sm:text-sm w-60 align-left mb-5 sm:mb-10 md:mb-15'>Stunningly simple – our approach is focused on uncomplicated and common sense solutions.</h2>
          <h3 className="w-full text-5xl sm:text-6xl md:text-7xl leading-16 sm:leading-20 md:leading-24 font-semibold mb-8">
            It takes more than just an agency – you need direct communicators, resourceful experts and sharp thinkers.
          </h3>
          <Link href='/contact' className="w-full md:w-auto px-12 py-4 border border-gray-50 rounded-lg text-sm font-medium tracking-wide bg-black text-white hover:text-white transition-all duration-300 mt-20">
                LET'S TALK
          </Link>
        </div>
      </section>

      <section className="relative z-10 bg-[#EFC88B] text-white py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto  text-black p-7.5 sm:p-9 md:p-12 rounded-lg">
          <h2 className='uppercase pb-5 text-sm'>contact us</h2>
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-8">
            Your Vision, Our Expertise. Let&apos;s connect.
          </h3>
          <Link href='/contact' className="w-full md:w-auto px-12 py-4 border border-gray-50 rounded-lg text-sm font-medium tracking-wide bg-black text-white hover:text-white transition-all duration-300 mt-20">
                GET IN TOUCH
              </Link>
        </div>
      </section>
    </div>
  );
}
