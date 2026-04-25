import Image from 'next/image'
import Link from 'next/link'
import { LOGO_PATH, SITE_NAME_SHORT } from '@/lib/site-config'

type BrandLogoProps = {
  className?: string
  priority?: boolean
  /** header = top nav (largest, readable at a distance), footer = column width */
  variant?: 'header' | 'footer'
}

export default function BrandLogo({ className = '', priority = false, variant = 'header' }: BrandLogoProps) {
  /* Site base is logo-black (#000); no frame so asset blends naturally */
  const size =
    variant === 'footer'
      ? 'relative block h-16 w-full max-w-[min(100%,20rem)] sm:h-[4.5rem] sm:max-w-[22rem] shrink-0'
      : 'relative block h-14 w-[min(68vw,17.5rem)] min-[400px]:h-16 min-[400px]:w-[min(60vw,20rem)] lg:h-[4.5rem] lg:w-[min(38vw,24rem)] shrink-0'

  return (
    <Link
      href="/"
      className={`${size} ${className}`.trim()}
      aria-label={`${SITE_NAME_SHORT} home`}
    >
      <Image
        src={LOGO_PATH}
        alt={`${SITE_NAME_SHORT} — industrial rope access`}
        fill
        className="object-contain object-center"
        sizes="(max-width: 400px) 200px, (max-width: 1024px) 240px, 360px"
        priority={priority}
      />
    </Link>
  )
}
