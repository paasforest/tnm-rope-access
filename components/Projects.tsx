import Image from 'next/image'

const projects = [
  {
    image: '/images/project-1.jpg',
    title: 'High-Rise Window Cleaning',
  },
  {
    image: '/images/project-2.jpg',
    title: 'Industrial Welding',
  },
  {
    image: '/images/project-3.jpg',
    title: 'Tank Inspection',
  },
  {
    image: '/images/project-4.jpg',
    title: 'Bridge Maintenance',
  },
  {
    image: '/images/project-5.jpg',
    title: 'Wind Turbine Service',
  },
  {
    image: '/images/project-6.jpg',
    title: 'Facade Installation',
  },
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
