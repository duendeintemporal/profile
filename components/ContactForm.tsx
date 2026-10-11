'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if (!form.name.trim()) return 'El nombre es obligatorio'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Correo inválido'
    if (form.message.trim().length < 10)
      return 'El mensaje debe tener al menos 10 caracteres'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    const error = validate()
    if (error) {
      setErrorMsg(error)
      setStatus('error')
      return
    }

    setStatus('loading')

    const { error: dbError } = await supabase.from('messages').insert([form])

    if (dbError) {
      setErrorMsg('No se pudo enviar. Intenta de nuevo.')
      setStatus('error')
      return
    }

    setForm({ name: '', email: '', message: '' })
    setStatus('success')
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2">
        Contacto
      </h2>
      <p className="text-slate-400 mb-8 text-sm sm:text-base">
        Escríbeme si quieres colaborar, contratar o simplemente conversar.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-300 mb-1">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none transition text-base"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-300 mb-1">
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none transition text-base"
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-300 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none transition resize-none text-base"
            placeholder="Cuéntame en qué estás pensando..."
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
            {errorMsg}
          </p>
        )}

        {status === 'success' && (
          <p className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-3">
            ¡Mensaje enviado! Te responderé pronto.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto rounded-lg bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  )
}