
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Argentina Aikido — El arte del movimiento armonioso',
  description:
    'Descubrí el aikido en Argentina: historia, técnicas, disciplinas, equipamiento y más. Una guía completa sobre este arte marcial de origen japonés practicado en todo el país.',
  keywords: 'aikido, argentina, arte marcial, técnicas aikido, historia aikido, entrenamiento aikido',
  openGraph: {
    title: 'Argentina Aikido',
    description: 'Guía completa sobre el aikido en Argentina: historia, técnicas, disciplinas y equipamiento.',
    url: 'https://argentinaaikido.com',
    siteName: 'Argentina Aikido',
    locale: 'es_AR',
    type: 'website',
  },
  metadataBase: new URL('https://argentinaaikido.com'),
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
