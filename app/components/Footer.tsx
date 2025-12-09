import Link from "next/link"

const projectLinks = [
  { name: "Michael Stevens Solicitors", href: "/works/mss" },
  { name: "Coding App", href: "/works/coding-app" },
  { name: "Ritzy Healthcare", href: "/works/ritzy-health" },
]

const aboutLinks = [
  { name: "Works", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#C42125] text-white">
      <div className="px-6 py-12 md:px-12 lg:px-16">
        {/* Main navigation sections */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Projects Section */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-white/80">Projects</h3>
            <nav className="flex flex-col gap-3">
              {projectLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-2xl font-medium transition-opacity hover:opacity-70 md:text-3xl"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-white/80">About Us</h3>
            <nav className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-2xl font-medium transition-opacity hover:opacity-70 md:text-3xl"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-8 md:mt-24">
          <div className="flex flex-col gap-2 text-xs uppercase tracking-wider">
            <Link href="#" className="underline underline-offset-2 transition-opacity hover:opacity-70">
              Privacy Policy
            </Link>
            <Link href="#" className="underline underline-offset-2 transition-opacity hover:opacity-70">
              Legal Info
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-xs uppercase tracking-wider text-white/80">
            <span>CodeIllustrated Agency</span>
            <span>CIA &copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
