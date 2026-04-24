import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'
import { Check, Shield, Award, Users, Clock } from 'lucide-react'
import { ABOUT_TEAM_PAGE_URL } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'About Us | TMN Rope Access Projects',
  description: 'Learn about TMN Rope Access Projects - Professional rope access solutions with years of experience in high-rise and industrial work across South Africa.',
}

const highlights = [
  'Skilled rope access technicians',
  'Safety-first approach on every job',
  'Reliable and professional service',
  'Serving clients across South Africa',
  'Competitive pricing',
  'Quick response times',
]

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Safety is our top priority. Every job is executed with strict adherence to safety protocols and international standards.',
  },
  {
    icon: Award,
    title: 'Quality Work',
    description: 'We take pride in delivering high-quality workmanship that exceeds client expectations on every project.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our technicians are highly trained professionals with extensive experience in rope access techniques.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We deliver projects on time and within budget, ensuring minimal disruption to your operations.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Professional rope access solutions with years of experience in high-rise and industrial work."
      />
      
      {/* Main About Section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={ABOUT_TEAM_PAGE_URL}
                  alt="Diverse team of professionals working together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-lg -z-10" />
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Story</span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-wider text-white mt-3 mb-6">
                Who We Are
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                TMN Rope Access Projects is a leading provider of professional rope access services 
                in South Africa. With years of experience in the industry, we have built a reputation 
                for excellence, safety, and reliability.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our team of highly skilled technicians specializes in working at height, providing 
                solutions for commercial buildings, industrial structures, and other challenging 
                environments where traditional access methods are impractical or costly.
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Values</span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3">
              What Drives Us
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Our core values guide everything we do, ensuring we deliver the best possible service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Mission</span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3 mb-8">
              Delivering Excellence at Every Height
            </h2>
            <p className="text-white/70 text-xl leading-relaxed">
              Our mission is to provide safe, efficient, and cost-effective rope access solutions 
              that enable our clients to maintain and improve their structures with minimal disruption. 
              We are committed to continuous improvement, investing in our team&apos;s training and the 
              latest equipment to ensure we remain at the forefront of the industry.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
