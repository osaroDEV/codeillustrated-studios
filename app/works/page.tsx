import React from "react";

const page = () => {
  return (
    <section className="relative z-10 bg-[#1E5A6D] py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mt-32 py-16">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-white/60 mb-4">
            OUR WORK
          </p>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
            Featured Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-normal text-white group-hover:text-white/80 transition-colors">
                E-Commerce Platform
              </h4>
              <p className="text-gray-400">
                Digital Product Design & Development
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-normal text-white group-hover:text-white/80 transition-colors">
                Finance Dashboard
              </h4>
              <p className="text-gray-400">Web Application & UX Design</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-normal text-white group-hover:text-white/80 transition-colors">
                Health Tech App
              </h4>
              <p className="text-gray-400">Mobile App Development & Branding</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-normal text-white group-hover:text-white/80 transition-colors">
                SaaS Platform
              </h4>
              <p className="text-gray-400">
                Product Strategy & Interface Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
