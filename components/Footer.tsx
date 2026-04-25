import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import { CONTACT_EMAIL, PHONE_E164, PHONE_TEL_HREF, SITE_NAME_SHORT } from '@/lib/site-config'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/services#waterproofing', label: 'Waterproofing' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Rope Access',
  'Waterproofing',
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
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {SITE_NAME_SHORT}: industrial rope access, maintenance, and waterproofing for high-rise and
              industrial sites across South Africa.
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
                <a href={PHONE_TEL_HREF} className="text-white/60 hover:text-primary transition-colors">
                  {PHONE_E164}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
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
            &copy; {new Date().getFullYear()} {SITE_NAME_SHORT}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
