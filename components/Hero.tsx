import Link from 'next/link'
import { Phone, Droplets } from 'lucide-react'
import { HERO_BG_URL } from '@/lib/site-images'
import { PHONE_LOCAL, PHONE_TEL_HREF, SITE_NAME_SHORT } from '@/lib/site-config'

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pt-32">
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white mb-6">
          Professional <span className="text-primary">Rope Access</span> Technicians
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
          {SITE_NAME_SHORT}: industrial rope access, maintenance, and waterproofing for high-rise
          and hard-to-reach work across South Africa.
        </p>
        <p className="text-sm text-white/50 mb-10 max-w-xl mx-auto">
          Need waterproofing? Jump straight to it — one click below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-300 rounded-md w-full sm:w-auto"
          >
            Request a Quote
          </Link>
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-background transition-all duration-300 rounded-md w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            {PHONE_LOCAL}
          </a>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/services#waterproofing"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary/80 text-primary bg-background/50 backdrop-blur-sm px-6 py-3 text-base font-semibold rounded-md w-full sm:w-auto hover:bg-primary/10 transition-all"
          >
            <Droplets className="w-5 h-5" />
            Waterproofing
          </Link>
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
