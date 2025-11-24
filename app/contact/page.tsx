'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#1E5A6D] py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-20">
          Tell us about your project
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-12">
            <div>
              {/* <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Zavrtnica 17
              </p> */}
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                London
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                United Kingdom
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                admin@codeillustrated.com
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                +44 7405 786 279
              </p>
            </div>

            {/* <div className="pt-12">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>

          <div>
            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-12">
              Ready when you are - drop us a line and let's see if we can help
              you out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-gray-300 mb-3"
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-gray-300 mb-3"
                >
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@mail.com"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-gray-300 mb-3"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type something..."
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-800 transition-colors resize-none"
                  required
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full px-8 py-4 border-2 border-white rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-linear-to-r hover:from-red-600 hover:to-orange-500 hover:text-white transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
