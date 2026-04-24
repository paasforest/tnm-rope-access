import Link from 'next/link'
import { Phone } from 'lucide-react'
import { HERO_BG_URL } from '@/lib/site-images'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG_URL})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pt-32">
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white mb-6">
          Professional <span className="text-primary">Rope Access</span> Technicians
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Specialized rope access solutions for high-rise buildings, industrial structures, 
          and hard-to-reach areas across South Africa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-300 rounded-md w-full sm:w-auto"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+27000000000"
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 rounded-md w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
