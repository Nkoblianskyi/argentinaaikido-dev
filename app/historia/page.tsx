import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Historia del Aikido — Argentina Aikido',
  description: 'La historia completa del aikido: desde sus raíces en el budo japonés hasta su llegada y desarrollo en Argentina.',
}

const timeline = [
  {
    period: '1883',
    title: 'Nace Morihei Ueshiba',
    body: 'El fundador del aikido nace en Tanabe, Japón. Desde joven estudia diversas artes marciales, incluyendo el jujutsu Daito-ryu bajo la tutela de Sokaku Takeda, así como esgrima y lanza.',
  },
  {
    period: '1920s',
    title: 'Síntesis y visión',
    body: 'Ueshiba comienza a desarrollar su propio arte a partir de la experiencia marcial acumulada y de una profunda transformación espiritual. Empieza a referirse a su práctica como "aiki-budo".',
  },
  {
    period: '1942',
    title: 'Nace el nombre aikido',
    body: 'El Butokukai adopta oficialmente el nombre "aikido" para el arte de Ueshiba. Los tres caracteres —ai (armonía), ki (energía vital) y do (camino)— definen la esencia del arte.',
  },
  {
    period: '1948',
    title: 'Fundación del Aikikai',
    body: 'Se funda el Aikikai Hombu Dojo en Tokio. La institución se convierte en el centro rector del aikido a nivel mundial y comienza la difusión sistemática del arte.',
  },
  {
    period: '1950s-60s',
    title: 'Expansión internacional',
    body: 'Instructores enviados desde el Hombu Dojo comienzan a establecer el aikido en Europa, América y Australia. Los primeros contactos con Argentina ocurren en esta época.',
  },
  {
    period: 'Argentina',
    title: 'El aikido en suelo argentino',
    body: 'El aikido llega a Argentina a través de practicantes que retornan de Japón y de la visita de instructores extranjeros. Desde las grandes ciudades, la práctica se expande a todo el país, adaptándose al espíritu local sin perder su esencia.',
  },
]

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[380px] overflow-hidden bg-navy">
          <Image
            src="/images/history-aikido.png"
            alt="Practicantes de aikido en un dojo histórico japonés"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 bg-background"
            style={{ clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)' }}
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-32 px-6 lg:px-10 max-w-7xl mx-auto w-full">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4 font-sans">Historia</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-white text-balance leading-tight max-w-2xl">
              Raíces, camino y legado
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-20">
          <div className="max-w-3xl">
            <p className="font-serif text-2xl lg:text-3xl font-light leading-relaxed text-balance">
              El aikido no surgió de la noche a la mañana. Es el resultado de décadas de búsqueda, práctica y reflexión de un hombre que vio en las artes marciales no un medio de destrucción, sino una vía hacia la armonía universal.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 lg:left-48 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div
                  key={item.period}
                  className={`flex flex-col sm:flex-row gap-6 sm:gap-12 py-12 border-b border-border last:border-0 ${
                    i % 2 === 0 ? 'bg-transparent' : 'bg-muted/20'
                  } px-0 sm:pl-0`}
                >
                  <div className="sm:w-48 flex-shrink-0 sm:text-right">
                    <span
                      className="font-serif text-3xl font-light"
                      style={{ color: 'var(--terra)' }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div className="flex-1 sm:pl-12 relative">
                    <div
                      className="absolute left-0 top-3 w-2 h-2 rounded-full -translate-x-[calc(50%+0.5px)] hidden sm:block"
                      style={{ backgroundColor: 'var(--terra)' }}
                      aria-hidden="true"
                    />
                    <h2 className="font-serif text-2xl lg:text-3xl font-light mb-4">{item.title}</h2>
                    <p className="text-base text-muted-foreground leading-relaxed font-sans">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legacy section */}
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-white/40 mb-4 font-sans">Legado</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-white text-balance mb-6 leading-tight">
                  Un arte vivo que sigue creciendo
                </h2>
                <p className="text-base text-white/60 leading-relaxed font-sans mb-6">
                  Hoy el aikido es practicado en más de cien países. En Argentina, generaciones de practicantes han recibido y transmitido este arte, adaptando la tradición al contexto local sin traicionar sus principios fundamentales.
                </p>
                <p className="text-base text-white/60 leading-relaxed font-sans mb-8">
                  La figura de O Sensei —como se conoce reverencialmente a Ueshiba— sigue siendo la referencia central. Sus palabras, filmadas en los últimos años de su vida, continúan inspirando a instructores y alumnos de todo el mundo.
                </p>
                <Link
                  href="/tecnica"
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors"
                >
                  Ver técnicas del aikido <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/technique-aikido.png"
                  alt="Técnica de aikido en el dojo"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute bottom-6 right-6 w-20 h-20 rounded-full border-2"
                  style={{ borderColor: 'var(--terra)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
