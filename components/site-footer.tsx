import Link from 'next/link'

const footerLinks = [
  { label: 'Historia', href: '/historia' },
  { label: 'Técnica', href: '/tecnica' },
  { label: 'Reglas', href: '/reglas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Brand block */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-semibold tracking-tight leading-none text-primary-foreground">
                argentina
              </span>
              <span
                className="font-serif text-3xl font-light italic tracking-wider leading-none"
                style={{ color: 'var(--terra)' }}
              >
                aikido
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm font-sans max-w-xs leading-relaxed">
              Información general sobre el arte marcial del aikido en la Argentina.
            </p>
          </div>

          {/* Navigation grid */}
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-widest uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-serif text-xs italic text-primary-foreground/30">
            El camino no termina. El camino continúa.
          </p>
          <p className="text-xs text-primary-foreground/30 font-sans">
            &copy; 2026 argentinaaikido.com
          </p>
        </div>
      </div>
    </footer>
  )
}
