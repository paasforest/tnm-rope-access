import Image from 'next/image'
import Link from 'next/link'
import { LOGO_PATH, SITE_NAME_SHORT } from '@/lib/site-config'

type BrandLogoProps = {
  className?: string
  priority?: boolean
}

export default function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`relative block h-10 w-40 sm:h-12 sm:w-48 shrink-0 ${className}`} aria-label={`${SITE_NAME_SHORT} home`}>
      <Image
        src={LOGO_PATH}
        alt={`${SITE_NAME_SHORT} — industrial rope access`}
        fill
        className="object-contain object-left"
        sizes="(max-width: 640px) 160px, 192px"
        priority={priority}
      />
    </Link>
  )
}
