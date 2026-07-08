'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-4 py-8">
        <p className="font-serif text-2xl font-light" style={{ color: 'var(--terra)' }}>
          Mensaje enviado.
        </p>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
          Gracias por escribirnos. Respondemos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit}
      aria-label="Formulario de contacto"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Tu nombre"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="tu@correo.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
          placeholder="Escribí tu mensaje aquí..."
        />
      </div>

      <button
        type="submit"
        className="self-start text-xs tracking-widest uppercase px-6 py-3 text-white transition-opacity hover:opacity-80"
        style={{ backgroundColor: 'var(--terra)' }}
      >
        Enviar mensaje
      </button>
    </form>
  )
}
