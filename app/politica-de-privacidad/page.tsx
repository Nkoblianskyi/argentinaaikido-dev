import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Política de Privacidad — Argentina Aikido',
  description: 'Política de privacidad de Argentina Aikido. Información sobre el tratamiento de datos personales.',
}

const sections = [
  {
    title: '1. Responsable del tratamiento',
    content:
      'El responsable del tratamiento de los datos personales recabados a través de este sitio web es Argentina Aikido (en adelante, "el Sitio"), accesible en argentinaaikido.com. Para cualquier consulta relacionada con el tratamiento de datos, podés escribirnos a contacto@argentinaaikido.com.',
  },
  {
    title: '2. Datos que recopilamos',
    content:
      'El Sitio puede recopilar los siguientes tipos de información: (a) Datos que proporcionás voluntariamente al completar el formulario de contacto: nombre y dirección de correo electrónico. (b) Datos técnicos recopilados automáticamente a través de cookies y tecnologías similares: dirección IP, tipo de navegador, sistema operativo, páginas visitadas y tiempo de permanencia. No recopilamos datos sensibles ni realizamos perfilado automatizado.',
  },
  {
    title: '3. Finalidad del tratamiento',
    content:
      'Los datos recopilados se utilizan para: (a) Responder consultas enviadas a través del formulario de contacto. (b) Mejorar el contenido y la experiencia del Sitio mediante el análisis del comportamiento de navegación de forma agregada y anónima. (c) Gestionar las preferencias de cookies. No utilizamos los datos para enviar comunicaciones comerciales no solicitadas.',
  },
  {
    title: '4. Base legal',
    content:
      'El tratamiento de los datos se basa en: (a) El consentimiento del usuario, expresado al aceptar las cookies o al completar el formulario de contacto. (b) El interés legítimo del Sitio en analizar el rendimiento y mejorar la experiencia de navegación. Podés retirar tu consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento previo.',
  },
  {
    title: '5. Conservación de los datos',
    content:
      'Los datos de contacto se conservan durante el tiempo necesario para responder la consulta y hasta un máximo de dos años. Los datos de navegación recopilados mediante cookies se conservan según los plazos indicados en la Política de Cookies. Una vez transcurridos estos plazos, los datos son eliminados o anonimizados.',
  },
  {
    title: '6. Comunicación a terceros',
    content:
      'El Sitio no vende, alquila ni cede datos personales a terceros con fines comerciales. Los datos pueden ser compartidos con proveedores de servicios que actúan como encargados del tratamiento (por ejemplo, proveedores de alojamiento web y herramientas de análisis), bajo contratos que garantizan el cumplimiento de la normativa aplicable.',
  },
  {
    title: '7. Transferencias internacionales',
    content:
      'Algunos de los proveedores de servicios utilizados por el Sitio pueden estar ubicados fuera de Argentina. En estos casos, nos aseguramos de que se apliquen las garantías adecuadas para proteger los datos, de acuerdo con la Ley N.° 25.326 de Protección de Datos Personales y sus reglamentaciones.',
  },
  {
    title: '8. Derechos de los usuarios',
    content:
      'De acuerdo con la legislación argentina, podés ejercer los siguientes derechos: acceso, rectificación, supresión, oposición y portabilidad de tus datos. Para ejercer cualquiera de estos derechos, escribinos a contacto@argentinaaikido.com con el asunto "Ejercicio de derechos — datos personales". La Agencia de Acceso a la Información Pública (AAIP) es la autoridad de control competente en materia de protección de datos personales en Argentina.',
  },
  {
    title: '9. Seguridad',
    content:
      'Adoptamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, pérdida o destrucción accidental. Sin embargo, ningún sistema de transmisión por Internet es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de los datos transmitidos.',
  },
  {
    title: '10. Cambios en esta política',
    content:
      'El Sitio se reserva el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta misma página con indicación de la fecha de actualización. Te recomendamos revisarla periódicamente.',
  },
]

export default function PrivacidadPage() {
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
              Política de Privacidad
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
              En Argentina Aikido nos tomamos en serio la privacidad de quienes visitan este sitio. Esta política explica qué datos recopilamos, cómo los usamos y qué derechos tenés sobre ellos.
            </p>
          </div>

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
              href="/politica-de-cookies"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity flex-shrink-0"
              style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
            >
              Ver política de cookies →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
