import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'TMN Rope Access Projects | Professional Rope Access Technicians',
  description: 'Specialized rope access solutions for high-rise buildings, industrial structures, and hard-to-reach areas across South Africa. Professional, safe, and reliable services.',
  keywords: ['rope access', 'high-rise maintenance', 'building cleaning', 'industrial rope access', 'South Africa'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
