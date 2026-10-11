import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import LocaleSwitcher from '@/components/LocaleSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Niko Zen · Fullstack JavaScript Developer',
  description:
    'Portfolio de desarrollo fullstack, escritura, ilustración, artes marciales y cocina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col`}>
        <header className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
          <LocaleSwitcher />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}