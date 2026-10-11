'use client'

import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored) setLocale(stored)
  }, [])

  const change = (l: Locale) => {
    setLocale(l)
    localStorage.setItem('locale', l)
    window.dispatchEvent(new Event('locale-change'))
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => change('es')}
        className={`px-3 py-1 rounded text-sm transition ${
          locale === 'es'
            ? 'bg-sky-600 text-white'
            : 'border border-slate-700 text-slate-300 hover:border-sky-500'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => change('en')}
        className={`px-3 py-1 rounded text-sm transition ${
          locale === 'en'
            ? 'bg-sky-600 text-white'
            : 'border border-slate-700 text-slate-300 hover:border-sky-500'
        }`}
      >
        EN
      </button>
    </div>
  )
}