import { HERO_BG_URL } from '@/lib/site-images'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage = HERO_BG_URL }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/85 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
