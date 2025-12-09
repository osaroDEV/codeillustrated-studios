import { ProjectDetails } from "../../components/project-details-rh"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E5A6D] py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight">
          A professional digital presence crafted to highlight services and support patient well-being.
        </h1>

        <div className="mt-16 md:mt-24 flex justify-end">
          <ProjectDetails />
        </div>
      </div>
    </main>
  )
}