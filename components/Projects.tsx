import Image from 'next/image'
import { PROJECT_IMAGE_URLS } from '@/lib/site-images'

const projects = [
  { image: PROJECT_IMAGE_URLS[0], title: 'High-Rise Window Cleaning' },
  { image: PROJECT_IMAGE_URLS[1], title: 'Industrial Welding' },
  { image: PROJECT_IMAGE_URLS[2], title: 'Tank Inspection' },
  { image: PROJECT_IMAGE_URLS[3], title: 'Bridge Maintenance' },
  { image: PROJECT_IMAGE_URLS[4], title: 'Wind Turbine Service' },
  { image: PROJECT_IMAGE_URLS[5], title: 'Facade Installation' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3">
            Our Projects
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Take a look at some of our completed rope access projects across South Africa.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider text-center px-4">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
