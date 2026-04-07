import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Rope Access',
  'Building Maintenance',
  'High Rise Cleaning',
  'Signage Installation',
  'Inspections',
  'Repairs & Painting',
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-wider text-white">
                TMN <span className="text-primary">ROPE ACCESS</span> PROJECTS
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional rope access solutions for high-rise buildings and industrial structures across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+27000000000" className="text-white/60 hover:text-primary transition-colors">
                  +27 00 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@tmnropeaccess.co.za" className="text-white/60 hover:text-primary transition-colors">
                  info@tmnropeaccess.co.za
                </a>
              </li>
              <li className="text-white/60">
                Johannesburg, South Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} TMN Rope Access Projects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
