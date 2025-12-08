import Image from "next/image";
import Link from "next/link";
import Img from "../../public/image.png";
import Img1 from "../../public/shelf.png";
import Accordion from "../components/Accordion";

const page = () => {
  return (
    <section className="">
      <div className="py-32 px-6 md:px-12 lg:px-20 bg-[#1E5A6D]">
        <div>
          <h3 className="text-6xl lg:text-8xl font-light leading-tight text-white">
            Want to know what we do?
          </h3>
        </div>

        <div className="mt-20 space-y-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <p className="text-lg md:text-xl leading-relaxed text-gray-50 mb-12">
            We Helping you envision, create and bring the product to life in a
            few phases — from drafts and mockups to launch and reveal. Transform
            your vision into a functional, engaging, and high-performing digital
            experience.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 pb-6 border-b border-gray-300">
              <span className="text-sm font-medium text-gray-400 shrink-0">
                01
              </span>
              <h4 className="text-xl md:text-2xl font-normal text-white">
                Branding
              </h4>
            </div>

            <div className="flex gap-6 pb-6 border-b border-gray-300">
              <span className="text-sm font-medium text-gray-400 shrink-0">
                02
              </span>
              <h4 className="text-xl md:text-2xl font-normal text-white">
                Design
              </h4>
            </div>

            <div className="flex gap-6 pb-6 border-b border-gray-300">
              <span className="text-sm font-medium text-gray-400 shrink-0">
                03
              </span>
              <h4 className="text-xl md:text-2xl font-normal text-white">
                Development
              </h4>
            </div>
          </div>

          <Link
            href="contact"
            className="w-1/2 md:px-12 py-4 flex items-center justify-center border-gray-50 border rounded-lg text-sm font-bold tracking-wide hover:bg-[#9B3037] hover:cursor-pointer hover:text-white transition-all duration-300"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
      <div className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#939F5C]">
        <Image
          src={Img}
          alt="services image"
          width={1920}
          height={1080}
          className="mt-20 w-full rounded-xl shadow-lg object-cover"
        />
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-8">
              How we solve problems
            </h3>
          </div>
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              We combine strategic thinking with creative execution to deliver
              solutions that not only meet your business objectives but exceed
              user expectations. Our approach is collaborative, iterative, and
              focused on creating meaningful impact.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">01</div>
            <h4 className="text-2xl font-normal text-white mb-4">Discovery</h4>
            <p className="text-gray-300 leading-relaxed">
              We start by understanding your business, users, and goals through
              research and stakeholder interviews.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">02</div>
            <h4 className="text-2xl font-normal text-white mb-4">Strategy</h4>
            <p className="text-gray-300 leading-relaxed">
              We define clear objectives and create a roadmap that aligns with
              your vision and business outcomes.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">03</div>
            <h4 className="text-2xl font-normal text-white mb-4">Design</h4>
            <p className="text-gray-300 leading-relaxed">
              We craft intuitive experiences and beautiful interfaces that
              resonate with your audience.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">04</div>
            <h4 className="text-2xl font-normal text-white mb-4">
              Development
            </h4>
            <p className="text-gray-300 leading-relaxed">
              We build scalable, performant solutions using modern technologies
              and best practices.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">05</div>
            <h4 className="text-2xl font-normal text-white mb-4">Testing</h4>
            <p className="text-gray-300 leading-relaxed">
              We validate our work through rigorous testing to ensure quality
              and reliability at every level.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-light text-white/40 mb-6">06</div>
            <h4 className="text-2xl font-normal text-white mb-4">Launch</h4>
            <p className="text-gray-300 leading-relaxed">
              We deploy with confidence and provide ongoing support to ensure
              your success post-launch.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-32 px-6 md:px-12 lg:px-20 bg-[#EFC88B]">
        <div className="mt-5 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black">
              Everything you need to launch and scale your product successfully.
            </h3>
          </div>

          <div className="bg-[#EEE5E9] rounded-2xl p-8 md:p-10">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="py-10 md:py-32 px-6 md:px-12 lg:px-20 bg-[#EFC88B]">
        <Image
          src={Img1}
          alt="services image"
          width={1920}
          height={1080}
          className="mt-20 w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default page;
