import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects | TMN Rope Access Projects',
  description: 'View our portfolio of completed rope access projects including high-rise cleaning, industrial maintenance, inspections, and more across South Africa.',
}

const projects = [
  {
    image: '/images/project-1.jpg',
    title: 'High-Rise Window Cleaning',
    category: 'Cleaning',
    description: 'Complete window cleaning for a 30-story commercial building in Johannesburg CBD.',
  },
  {
    image: '/images/project-2.jpg',
    title: 'Industrial Welding',
    category: 'Repairs',
    description: 'Structural welding repairs on an industrial facility using rope access techniques.',
  },
  {
    image: '/images/project-3.jpg',
    title: 'Tank Inspection',
    category: 'Inspection',
    description: 'Comprehensive inspection of large storage tanks at a petrochemical facility.',
  },
  {
    image: '/images/project-4.jpg',
    title: 'Bridge Maintenance',
    category: 'Maintenance',
    description: 'Routine maintenance and painting work on a major highway bridge structure.',
  },
  {
    image: '/images/project-5.jpg',
    title: 'Wind Turbine Service',
    category: 'Maintenance',
    description: 'Blade inspection and maintenance on wind turbines at a renewable energy site.',
  },
  {
    image: '/images/project-6.jpg',
    title: 'Facade Installation',
    category: 'Installation',
    description: 'Installation of facade cladding panels on a new commercial development.',
  },
]

const categories = ['All', 'Cleaning', 'Maintenance', 'Repairs', 'Inspection', 'Installation']

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Projects" 
        subtitle="Explore our portfolio of completed rope access projects across South Africa."
      />
      
      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-[#111827] text-white/70 hover:bg-[#1f2937] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#111827] rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-wider text-white">
              Project Statistics
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
                350+
              </div>
              <div className="text-white/70 text-sm sm:text-base mt-2 uppercase tracking-wider">
                Completed Projects
              </div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
                200+
              </div>
              <div className="text-white/70 text-sm sm:text-base mt-2 uppercase tracking-wider">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
                9
              </div>
              <div className="text-white/70 text-sm sm:text-base mt-2 uppercase tracking-wider">
                Provinces Covered
              </div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
                100%
              </div>
              <div className="text-white/70 text-sm sm:text-base mt-2 uppercase tracking-wider">
                Safety Record
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
