import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import Image from 'next/image'
import { Anchor, Building2, Sparkles, ArrowRight, Check, Droplets } from 'lucide-react'
import { ABOUT_TEAM_HOME_URL, PROJECT_IMAGE_URLS } from '@/lib/site-images'
import { SITE_NAME_SHORT } from '@/lib/site-config'

const featuredServices = [
  {
    icon: Anchor,
    title: 'Rope Access',
    description: 'Professional rope access techniques for safe and efficient work at height.',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Building Maintenance',
    description: 'Comprehensive maintenance solutions for high-rise buildings.',
    href: '/services',
  },
  {
    icon: Sparkles,
    title: 'High Rise Cleaning',
    description: 'Expert window and facade cleaning services for buildings of any height.',
    href: '/services',
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description: 'Facade, roof, and joint waterproofing at height—visible here without digging through menus.',
    href: '/services#waterproofing',
  },
]

const highlights = [
  'Skilled rope access technicians',
  'Safety-first approach on every job',
  'Reliable and professional service',
  'Serving clients across South Africa',
]

const featuredProjects = [
  { image: PROJECT_IMAGE_URLS[0], title: 'High-Rise Window Cleaning' },
  { image: PROJECT_IMAGE_URLS[1], title: 'Industrial Welding' },
  { image: PROJECT_IMAGE_URLS[2], title: 'Tank Inspection' },
]

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Featured Services Section */}
      <section className="py-20 lg:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3">
              Our Services
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              We provide comprehensive rope access solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-[#0a0a0a] p-8 rounded-lg border border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 block text-left"
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3 mb-6">
                Why Choose {SITE_NAME_SHORT}?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                With years of experience in industrial rope access, {SITE_NAME_SHORT} delivers
                exceptional work for high-rise buildings, industrial structures, and challenging
                environments.
              </p>
              
              <div className="space-y-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-all duration-300 rounded-md"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={ABOUT_TEAM_HOME_URL}
                  alt="Professional team collaborating on site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3">
              Recent Projects
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Take a look at some of our completed rope access projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
