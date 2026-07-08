import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'Nosotros — Argentina Aikido',
  description:
    'Quiénes somos, por qué creamos esta guía y qué encontrarás en Argentina Aikido.',
}

const values = [
  {
    label: 'Rigor',
    text: 'La información que publicamos se basa en fuentes confiables, documentación histórica y la experiencia de practicantes. No publicamos opiniones sin sustento.',
  },
  {
    label: 'Claridad',
    text: 'El aikido tiene un vocabulario técnico extenso. Traducimos ese vocabulario para que sea accesible sin sacrificar precisión. El principiante y el avanzado encuentran aquí algo útil.',
  },
  {
    label: 'Respeto',
    text: 'El aikido es un arte vivo, transmitido de maestro a alumno. Tratamos esa herencia con el cuidado que merece, sin sensacionalismo ni simplificaciones que distorsionen su esencia.',
  },
  {
    label: 'Apertura',
    text: 'El aikido argentino es diverso: existen múltiples organizaciones, estilos y linajes. Esta guía no toma partido: representa el arte en su conjunto y celebra esa diversidad.',
  },
]

const faqs = [
  {
    q: '¿Necesito condición física especial para comenzar a practicar aikido?',
    a: 'No. El aikido no se basa en la fuerza ni en la velocidad. Se puede comenzar a cualquier edad, con cualquier nivel de condición física. El propio entrenamiento desarrolla la capacidad necesaria con el tiempo.',
  },
  {
    q: '¿Cuánto tiempo lleva aprender aikido?',
    a: 'El primer dan —el cinturón negro— suele requerir entre cuatro y seis años de práctica regular. Pero "aprender aikido" es un proceso de por vida: los practicantes más experimentados continúan descubriendo dimensiones nuevas del arte.',
  },
  {
    q: '¿Es el aikido efectivo para la defensa personal?',
    a: 'El aikido desarrolla habilidades aplicables a situaciones de conflicto real: percepción del espacio, control de la distancia, capacidad de neutralizar sin dañar. Sin embargo, su objetivo central no es el combate sino el desarrollo integral de quien practica.',
  },
  {
    q: '¿Es el aikido un arte marcial competitivo?',
    a: 'No. El aikido no tiene competencias ni torneos en su forma tradicional. La práctica es cooperativa: nage (quien proyecta) y uke (quien cae) trabajan juntos para explorar la técnica, no para enfrentarse.',
  },
  {
    q: '¿Cuáles son las diferencias entre los distintos estilos de aikido?',
    a: 'Los estilos principales son el Aikikai, el Ki Society (Shin-Shin Toitsu Aikido), el Yoshinkan, el Tomiki-ryu y el Iwama-ryu. Cada uno enfatiza distintos aspectos del arte, pero todos comparten los principios fundamentales establecidos por el fundador.',
  },
  {
    q: '¿Los chicos pueden practicar aikido?',
    a: 'Sí. Muchos dojos tienen clases específicas para niños. El aikido desarrolla en los chicos disciplina, coordinación, respeto y la capacidad de resolver conflictos sin violencia —habilidades valiosas dentro y fuera del tatami.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">

        {/* Page header — split layout with decorative circle */}
        <div className="relative bg-muted/30 overflow-hidden">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block"
            style={{ backgroundColor: 'var(--navy)' }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 relative">
            <div className="lg:grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 pr-0 lg:pr-20">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
                  Nosotros
                </p>
                <h1 className="font-serif text-6xl lg:text-8xl font-light leading-none text-balance mb-8">
                  Una guía para quienes buscan el aikido en Argentina
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed font-sans max-w-xl">
                  Argentina Aikido nació de una pregunta simple: ¿dónde encontrar información clara, rigurosa y en español sobre este arte? La respuesta fue construirla.
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div
                  className="w-40 h-40 rounded-full border-2"
                  style={{ borderColor: 'var(--terra)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
                  Misión
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance mb-8">
                  Acercar el aikido a quienes aún no lo conocen
                </h2>
                <div className="space-y-5 text-base text-muted-foreground leading-relaxed font-sans">
                  <p>
                    El aikido es uno de los artes marciales más profundos y menos comprendidos. Su aparente suavidad esconde una complejidad técnica y filosófica enorme. Y sin embargo, la información disponible en español —especialmente en el contexto argentino— es escasa o dispersa.
                  </p>
                  <p>
                    Esta guía busca llenar ese vacío. Reunimos historia, técnica, equipamiento, reglas y reflexiones en un solo lugar, con el rigor necesario para ser útiles a quienes recién se acercan y también a quienes ya practican.
                  </p>
                  <p>
                    No somos una federación ni representamos a ninguna organización. Somos un proyecto editorial independiente, impulsado por el amor al arte y el deseo de que más personas en Argentina puedan acceder a él con información de calidad.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/blog-5.png"
                    alt="Practicantes de aikido en reverencia al final de la clase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full hidden lg:block"
                  style={{ backgroundColor: 'var(--terra)', opacity: 0.15 }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4 font-sans">
              Principios editoriales
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-14 text-balance">
              Lo que guía cada artículo
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10">
              {values.map((v) => (
                <div key={v.label} className="bg-navy p-10">
                  <h3
                    className="font-serif text-2xl font-light mb-4"
                    style={{ color: 'var(--terra)' }}
                  >
                    {v.label}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-sans">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
              Preguntas frecuentes
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              Lo que se suele preguntar
            </h2>
            <div className="flex flex-col gap-px bg-border">
              {faqs.map((item, i) => (
                <div key={i} className="bg-background grid sm:grid-cols-5 gap-6 p-8 items-start">
                  <div className="sm:col-span-2">
                    <p className="font-serif text-lg font-medium leading-snug text-balance">
                      {item.q}
                    </p>
                  </div>
                  <p className="sm:col-span-3 text-sm text-muted-foreground leading-relaxed font-sans">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-muted/30 py-24 lg:py-32" id="contacto">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
                  Contacto
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance mb-6">
                  ¿Tenés algo que decir?
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-sans mb-8">
                  Agradecemos correcciones, sugerencias, colaboraciones y cualquier comentario sobre el contenido. Escribinos y respondemos a la brevedad.
                </p>
                <a
                  href="mailto:contacto@argentinaaikido.com"
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
                  style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
                >
                  contacto@argentinaaikido.com <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <Link
              href="/historia"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
              style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
            >
              ← Historia del aikido
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
              style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
            >
              Ver artículos →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
