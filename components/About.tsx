import Image from 'next/image'
import { Check } from 'lucide-react'

const highlights = [
  'Skilled rope access technicians',
  'Safety-first approach on every job',
  'Reliable and professional service',
  'Serving clients across South Africa',
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mt-3 mb-6">
              Why Choose TMN Rope Access?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              With years of experience in the rope access industry, TMN Rope Access Projects 
              delivers exceptional services for high-rise buildings, industrial structures, 
              and challenging environments. Our team of skilled technicians is committed to 
              safety, quality, and customer satisfaction.
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="TMN Rope Access professional team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
