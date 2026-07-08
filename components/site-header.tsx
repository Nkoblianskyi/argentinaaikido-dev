'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const nav = [
  { label: 'Historia', href: '/historia' },
  { label: 'Técnica', href: '/tecnica' },
  { label: 'Reglas', href: '/reglas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo + Wordmark inline */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Argentina Aikido — inicio">
          {/* Abstract circular logo mark */}
          <div className="relative w-8 h-8 flex-shrink-0" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
              <path
                d="M16 4 C22 8 28 14 24 20 C20 26 10 26 8 20 C6 14 10 8 16 4Z"
                stroke="var(--terra)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="16" cy="16" r="2.5" fill="var(--terra)" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground leading-none">argentina</span>
            <span
              className="font-serif text-xl font-light italic tracking-wider leading-none"
              style={{ color: 'var(--terra)' }}
            >
              aikido
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-sans tracking-widest uppercase transition-colors duration-200 ${
                  active
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={active ? { color: 'var(--terra)' } : {}}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="md:hidden border-t border-border bg-background"
          aria-label="Navegación móvil"
        >
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-4 text-sm tracking-widest uppercase border-b border-border/50 transition-colors ${
                  active ? 'text-accent' : 'text-foreground'
                }`}
                style={active ? { color: 'var(--terra)' } : {}}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
