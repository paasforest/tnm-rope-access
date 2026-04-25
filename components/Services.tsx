import { Anchor, Building2, Sparkles, FileCheck, Wrench, Paintbrush, Droplets } from 'lucide-react'

const services = [
  {
    icon: Anchor,
    title: 'Rope Access',
    description: 'Professional rope access techniques for safe and efficient work at height on any structure.',
  },
  {
    icon: Building2,
    title: 'Building Maintenance',
    description: 'Comprehensive maintenance solutions for commercial and residential high-rise buildings.',
  },
  {
    icon: Sparkles,
    title: 'High Rise Cleaning',
    description: 'Expert window and facade cleaning services for buildings of any height.',
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description: 'Waterproofing for facades, roofs, and joints at height with rope access where needed.',
  },
  {
    icon: FileCheck,
    title: 'Signage Installation',
    description: 'Professional installation of signage and banners at elevated positions.',
  },
  {
    icon: Wrench,
    title: 'Inspections',
    description: 'Detailed structural inspections and assessments for hard-to-reach areas.',
  },
  {
    icon: Paintbrush,
    title: 'Repairs & Painting',
    description: 'High-quality repairs and painting services for exterior surfaces at any height.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3">
            Our Services
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We provide comprehensive rope access solutions tailored to meet your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a] p-8 rounded-lg border border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
