'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-t border-primary-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-2xl">
          Utilizamos cookies para mejorar la experiencia de navegación. Podés conocer más en nuestra{' '}
          <Link href="/politica-de-cookies" className="underline underline-offset-2 hover:text-primary-foreground">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs tracking-widest uppercase px-4 py-2 border border-primary-foreground/30 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-widest uppercase px-4 py-2 text-primary"
            style={{ backgroundColor: 'var(--terra)' }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
