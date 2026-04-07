import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl lg:text-6xl tracking-wider text-primary-foreground mb-4">
          Need Rope Access Experts?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free quote. Our team is ready to tackle any job at any height.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#0a0a0a] text-white px-10 py-4 text-lg font-semibold hover:bg-[#111827] transition-all duration-300 rounded-md"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  )
}
