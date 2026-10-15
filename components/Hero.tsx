'use client'

import { useEffect, useState } from 'react'
import { t, type Locale } from '@/lib/i18n'
import Avatar from './Avatar'

export default function Hero() {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored) setLocale(stored)

    const handler = () => {
      const l = localStorage.getItem('locale') as Locale | null
      if (l) setLocale(l)
    }
    window.addEventListener('locale-change', handler)
    return () => window.removeEventListener('locale-change', handler)
  }, [])

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-10 text-center">
      <Avatar frontImage="/avatar-1.jpg" backImage="/avatar-2.jpg" />

      <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
        Niko Zen
      </h1>

      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
        {t(locale, 'heroRole')}
      </p>

      <p className="mt-3 text-sm sm:text-base text-sky-400 font-semibold">
        {t(locale, 'heroRank')}
      </p>

      <p className="mt-2 text-xs sm:text-sm text-slate-500">
        📍 {t(locale, 'availableBarcelona')}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://github.com/duendeintemporal"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-sky-600 px-5 py-3 font-medium text-white hover:bg-sky-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.wattpad.com/user/Niko_Zen"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-5 py-3 font-medium text-orange-300 hover:bg-orange-500/20 transition"
        >
          Wattpad
        </a>
        <a
          href="mailto:duendeintemporal@hotmail.com"
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 hover:border-sky-500 transition"
        >
          {t(locale, 'contactCta')}
        </a>
      </div>
    </section>
  )
}