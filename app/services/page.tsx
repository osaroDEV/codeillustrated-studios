import Accordion from "../components/Accordion";
import Image from "next/image";
import Img from "../../public/image.png";
import Img1 from "../../public/shelf.png";

const page = () => {
  return (
    <section
      id="services"
      className="relative z-10 bg-[#1E5A6D] py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <div>
            <h3 className="text-7xl md:text-6xl lg:text-8xl font-light leading-tight text-white">
              Want to know what we do?
            </h3>
          </div>

          <div className="mt-20 space-y-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <p className="text-lg md:text-xl leading-relaxed text-gray-50 mb-12">
              We Helping you envision, create and bring the product to life in a
              few phases — from drafts and mockups to launch and reveal.
              Transform your vision into a functional, engaging, and
              high-performing digital experience.
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

            <button className="w-1/2 md:px-12 py-4 border border-gray-50border border-gray-50 rounded-lg text-sm font-bold tracking-wide hover:bg-[#9B3037] hover:cursor-pointer hover:text-white transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
        <Image
          src={Img}
          alt="services image"
          width={1920}
          height={1080}
          className="mt-20 w-full rounded-xl shadow-lg object-cover"
        />
        <div className="mt-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              Everything you need to launch and scale your product successfully.
            </h3>
          </div>

          <div className="rounded-2xl p-8 md:p-10">
            <Accordion />
          </div>
        </div>
        <Image
          src={Img1}
          alt="services image"
          width={1920}
          height={1080}
          className="mt-20 w-full rounded-xl shadow-lg object-cover"
        />
        <div className="mt-32">
          <h3 className="uppercase text-base font-light leading-tight text-white">
            approach
          </h3>
          <p className="text-4xl md:text-5xl lg:text-7xl leading-24">
            We don't stick to a rigid structure – our process is adaptable to
            fit your goals and time limitations.
          </p>
        </div>
        <Image
          src={Img}
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
