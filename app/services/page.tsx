import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Building2, Sparkles, FileCheck, Wrench, Paintbrush, ArrowRight, Droplets } from 'lucide-react'
import { SERVICES_FEATURE_URL } from '@/lib/site-images'
import { SITE_NAME_SHORT } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Services | TMA Projects — Rope Access & Waterproofing',
  description:
    'Rope access, building maintenance, high-rise cleaning, waterproofing, signage, inspections, and repairs. TMA Projects across South Africa.',
}

const services: {
  id?: string
  icon: typeof Anchor
  title: string
  description: string
  features: string[]
}[] = [
  {
    icon: Anchor,
    title: 'Rope Access',
    description: 'Professional rope access techniques for safe and efficient work at height on any structure. Our certified technicians use industry-leading equipment and methods to access even the most challenging locations.',
    features: ['Certified technicians', 'Industry-standard equipment', 'Safe working practices', 'Cost-effective solutions'],
  },
  {
    icon: Building2,
    title: 'Building Maintenance',
    description: 'Comprehensive maintenance solutions for commercial and residential high-rise buildings. We handle everything from routine maintenance to emergency repairs.',
    features: ['Routine inspections', 'Preventive maintenance', 'Emergency repairs', 'Structural assessments'],
  },
  {
    icon: Sparkles,
    title: 'High Rise Cleaning',
    description: 'Expert window and facade cleaning services for buildings of any height. We deliver spotless results using eco-friendly cleaning solutions and professional techniques.',
    features: ['Window cleaning', 'Facade washing', 'Pressure washing', 'Stain removal'],
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    title: 'Waterproofing',
    description:
      'Protect facades, roofs, joints, and concrete from water ingress. We work at height using rope access to reach details traditional crews cannot, with systems suited to South African weather.',
    features: ['Facade & wall membranes', 'Roof details & flashings', 'Crack and joint treatment', 'Long-life coatings'],
  },
  {
    icon: FileCheck,
    title: 'Signage Installation',
    description: 'Professional installation of signage and banners at elevated positions. We ensure secure mounting and perfect positioning for maximum visibility.',
    features: ['Banner installation', 'Sign mounting', 'Lighting installation', 'Removal services'],
  },
  {
    icon: Wrench,
    title: 'Inspections',
    description: 'Detailed structural inspections and assessments for hard-to-reach areas. Our thorough inspections help identify potential issues before they become problems.',
    features: ['Visual inspections', 'Detailed reporting', 'Photo documentation', 'Recommendations'],
  },
  {
    icon: Paintbrush,
    title: 'Repairs & Painting',
    description: 'High-quality repairs and painting services for exterior surfaces at any height. We use premium materials for long-lasting results.',
    features: ['Surface preparation', 'Crack repairs', 'Protective coatings', 'Premium paints'],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive rope access solutions for all your high-rise and industrial needs."
      />
      
      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="group scroll-mt-28 bg-[#111827] p-8 lg:p-10 rounded-lg border border-transparent hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-wide text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-white/60 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="py-20 lg:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-wider text-white mt-3 mb-6">
                Professional Service You Can Trust
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                When you choose {SITE_NAME_SHORT}, you&apos;re choosing a team that prioritizes 
                safety, quality, and customer satisfaction. Our rope access methods offer significant 
                advantages over traditional scaffolding and cherry pickers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cost-Effective</h4>
                    <p className="text-white/60 text-sm">Rope access eliminates the need for expensive scaffolding and equipment hire.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Minimal Disruption</h4>
                    <p className="text-white/60 text-sm">Quick setup and pack-down means less disruption to your business operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Versatile Access</h4>
                    <p className="text-white/60 text-sm">Reach areas that are impossible or impractical with other methods.</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-all duration-300 rounded-md"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={SERVICES_FEATURE_URL}
                  alt="Technician in safety gear on site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-lg -z-10" />
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
