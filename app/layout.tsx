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
  title: 'TMA Projects | Industrial Rope Access & Waterproofing | South Africa',
  description:
    'TMA Projects — industrial rope access, building maintenance, and waterproofing for high-rise and industrial sites across South Africa. Safe, professional crews.',
  keywords: [
    'rope access',
    'waterproofing',
    'high-rise maintenance',
    'building cleaning',
    'industrial rope access',
    'TMA Projects',
    'South Africa',
  ],
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
