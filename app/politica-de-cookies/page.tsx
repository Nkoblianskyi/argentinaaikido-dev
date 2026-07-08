import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Política de Cookies — Argentina Aikido',
  description: 'Política de cookies de Argentina Aikido. Información sobre el uso de cookies y tecnologías similares.',
}

const cookieTypes = [
  {
    type: 'Cookies estrictamente necesarias',
    purpose: 'Garantizan el funcionamiento básico del sitio.',
    examples: 'Recordar tu preferencia de cookies (cookie-consent).',
    duration: 'Hasta 12 meses',
    canDisable: false,
  },
  {
    type: 'Cookies de rendimiento / analíticas',
    purpose: 'Nos permiten conocer cómo los visitantes interactúan con el sitio, qué páginas visitan y desde dónde llegan.',
    examples: 'Herramientas de análisis de tráfico web (ej. Vercel Analytics).',
    duration: 'De 1 día a 2 años según la herramienta',
    canDisable: true,
  },
  {
    type: 'Cookies de funcionalidad',
    purpose: 'Permiten recordar elecciones que hacés para personalizar la experiencia.',
    examples: 'Preferencia de idioma o de visualización.',
    duration: 'Hasta 12 meses',
    canDisable: true,
  },
]

const sections = [
  {
    title: '1. ¿Qué es una cookie?',
    content:
      'Una cookie es un pequeño archivo de texto que un sitio web almacena en tu dispositivo (computadora, tablet o teléfono) cuando lo visitás. Las cookies permiten que el sitio reconozca tu dispositivo en visitas posteriores, recordar tus preferencias y analizar el comportamiento de navegación.',
  },
  {
    title: '2. ¿Por qué usamos cookies?',
    content:
      'Utilizamos cookies para que el sitio funcione correctamente, para recordar tu consentimiento y para entender cómo se utiliza el contenido. No utilizamos cookies con fines publicitarios ni para rastrear a los usuarios entre distintos sitios.',
  },
  {
    title: '3. Cookies de terceros',
    content:
      'Algunas cookies pueden ser instaladas por terceros cuyos servicios incorporamos al sitio (por ejemplo, herramientas de análisis de tráfico). Estos terceros tienen sus propias políticas de privacidad, que te recomendamos consultar. Hacemos todo lo posible por limitar el uso de cookies de terceros a lo estrictamente necesario.',
  },
  {
    title: '4. Cómo gestionar o eliminar cookies',
    content:
      'Podés controlar las cookies a través del aviso de cookies que aparece al visitar el sitio por primera vez. También podés configurar tu navegador para rechazar todas las cookies o para que te avise cuando se instale una. Ten en cuenta que deshabilitar ciertas cookies puede afectar el funcionamiento del sitio. Los principales navegadores ofrecen opciones de gestión de cookies en sus menús de configuración.',
  },
  {
    title: '5. Actualizaciones de esta política',
    content:
      'Esta política puede actualizarse para reflejar cambios en el uso de cookies o en la legislación aplicable. La fecha de la última actualización aparece al inicio de este documento. Te recomendamos revisarla periódicamente.',
  },
  {
    title: '6. Más información',
    content:
      'Para cualquier consulta sobre el uso de cookies en este sitio, podés escribirnos a contacto@argentinaaikido.com. Para información adicional sobre la protección de datos personales, consultá nuestra Política de Privacidad.',
  },
]

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-muted/40 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-0 py-20 lg:py-28">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
              Legal
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl font-light leading-none text-balance mb-6">
              Política de Cookies
            </h1>
            <p className="text-sm text-muted-foreground font-sans">
              Última actualización 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-0 py-16 lg:py-24">
          <div className="mb-12">
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Esta política explica qué cookies utiliza Argentina Aikido, con qué finalidad y cómo podés gestionarlas.
            </p>
          </div>

          {/* Cookie table */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-light mb-8" style={{ color: 'var(--terra)' }}>
              Tipos de cookies que utilizamos
            </h2>
            <div className="flex flex-col gap-px bg-border">
              {/* Header row */}
              <div className="hidden sm:grid sm:grid-cols-4 gap-px bg-border">
                {['Tipo', 'Finalidad', 'Duración', 'Desactivable'].map((h) => (
                  <div key={h} className="bg-muted/50 px-5 py-3">
                    <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground">{h}</p>
                  </div>
                ))}
              </div>
              {cookieTypes.map((cookie) => (
                <div key={cookie.type} className="bg-background grid sm:grid-cols-4 gap-4 sm:gap-px">
                  <div className="sm:bg-background p-5 sm:p-5">
                    <p className="text-sm font-medium font-serif leading-snug">{cookie.type}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1 sm:hidden">{cookie.examples}</p>
                  </div>
                  <div className="hidden sm:block sm:p-5">
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{cookie.purpose}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-2 italic">{cookie.examples}</p>
                  </div>
                  <div className="hidden sm:flex sm:p-5 sm:items-start">
                    <p className="text-sm text-muted-foreground font-sans">{cookie.duration}</p>
                  </div>
                  <div className="sm:p-5 px-5 pb-5 sm:flex sm:items-start">
                    <span
                      className={`inline-block text-xs tracking-widest uppercase font-sans px-2 py-1 ${
                        cookie.canDisable
                          ? 'bg-muted text-muted-foreground'
                          : 'text-white'
                      }`}
                      style={!cookie.canDisable ? { backgroundColor: 'var(--terra)' } : {}}
                    >
                      {cookie.canDisable ? 'Sí' : 'No (necesaria)'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-0 divide-y divide-border">
            {sections.map((section) => (
              <div key={section.title} className="py-10">
                <h2 className="font-serif text-2xl font-light mb-4" style={{ color: 'var(--terra)' }}>
                  {section.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom links */}
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground font-sans">
              ¿Tenés dudas?{' '}
              <a
                href="mailto:contacto@argentinaaikido.com"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                contacto@argentinaaikido.com
              </a>
            </p>
            <Link
              href="/politica-de-privacidad"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity flex-shrink-0"
              style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
            >
              Ver política de privacidad →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
