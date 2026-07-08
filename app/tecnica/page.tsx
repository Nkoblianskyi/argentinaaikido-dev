import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Técnica y Entrenamiento — Argentina Aikido',
  description: 'Técnicas del aikido, principios de movimiento, planes de entrenamiento y consejos prácticos para progresar en la práctica.',
}

const principles = [
  {
    jp: '入身',
    name: 'Irimi',
    desc: 'Entrar al espacio del atacante. Moverse hacia el interior de la línea de ataque neutraliza la fuerza antes de que llegue.',
  },
  {
    jp: '転換',
    name: 'Tenkan',
    desc: 'Pivote circular. Ceder ante la fuerza y redirigirla describe un arco que lleva al practicante fuera de la línea de ataque.',
  },
  {
    jp: '合気',
    name: 'Aiki',
    desc: 'Sincronización con la energía del oponente. La esencia del arte: no oponer fuerza a fuerza, sino unirse al movimiento y guiarlo.',
  },
  {
    jp: '間合い',
    name: "Ma-ai",
    desc: 'La distancia adecuada. Estar ni demasiado lejos ni demasiado cerca permite reaccionar a tiempo y proyectar con eficacia.',
  },
]

const techniques = [
  {
    category: 'Proyecciones',
    items: [
      { name: 'Irimi-nage', desc: 'La proyección de entrada. El practicante avanza al interior del atacante y proyecta con el antebrazo hacia el cuello.' },
      { name: 'Shiho-nage', desc: 'Proyección en cuatro direcciones. La muñeca del uke es girada hasta obligarlo a caer en cualquiera de los cuatro ángulos.' },
      { name: 'Koshi-nage', desc: 'Proyección de cadera. El practicante usa su cadera como palanca para proyectar al uke por encima.' },
      { name: 'Kotegaeshi', desc: 'Proyección con torsión de muñeca. La muñeca del uke es girada hacia afuera, forzando una caída hacia adelante.' },
      { name: 'Tenchi-nage', desc: 'Proyección cielo-tierra. Una mano sube (cielo) y otra baja (tierra), desequilibrando el cuerpo del uke en dos direcciones.' },
      { name: 'Kaiten-nage', desc: 'Proyección rotacional. El brazo del uke es extendido y rotado para proyectarlo en un arco amplio.' },
    ],
  },
  {
    category: 'Inmovilizaciones',
    items: [
      { name: 'Ikkyo', desc: 'Primera enseñanza. Control del brazo extendido del uke llevado al tatami. Base de todas las inmovilizaciones.' },
      { name: 'Nikyo', desc: 'Segunda enseñanza. Torsión de muñeca que ejerce presión sobre los tendones del antebrazo.' },
      { name: 'Sankyo', desc: 'Tercera enseñanza. Torsión en espiral del brazo que puede aplicarse en múltiples ángulos.' },
      { name: 'Yonkyo', desc: 'Cuarta enseñanza. Presión sobre el nervio radial del antebrazo. Muy sensible al punto de contacto exacto.' },
      { name: 'Gokyo', desc: 'Quinta enseñanza. Variante de ikkyo especialmente útil frente a un ataque con arma.' },
    ],
  },
]

const trainingPlan = [
  {
    phase: 'Fundamentos (primeros 6 meses)',
    focus: 'Ukemi, postura, respiración y las dos primeras inmovilizaciones.',
    sessions: '3 veces por semana',
    note: 'El objetivo es desarrollar el cuerpo y la confianza en el tatami.',
  },
  {
    phase: 'Construcción (6 meses–2 años)',
    focus: 'Todas las inmovilizaciones básicas, proyecciones principales, introducción al bokken.',
    sessions: '3–4 veces por semana',
    note: 'El vocabulario técnico se amplía. La práctica del ukemi debe ser fluida.',
  },
  {
    phase: 'Profundización (2–5 años)',
    focus: 'Variaciones, ataques múltiples (randori), trabajo con armas integrado al taijutsu.',
    sessions: '4–5 veces por semana',
    note: 'Las formas se refinan. Se comienza a "escuchar" al uke en lugar de aplicar la técnica.',
  },
  {
    phase: 'Madurez (5+ años)',
    focus: 'Expresión personal dentro de los principios. Transmisión si se posee la habilitación.',
    sessions: 'Práctica diaria si es posible',
    note: 'El cuerpo ya no piensa en los pasos: responde. Este es el comienzo, no el final.',
  },
]

const tips = [
  'Practicá el ukemi antes de aprender a proyectar. La caída es la mitad de la técnica.',
  'Observá a los practicantes más avanzados durante la clase. El ojo aprende antes que el cuerpo.',
  'No tensés los brazos. La fuerza útil en el aikido es la del centro del cuerpo, no la de las extremidades.',
  'Buscá un buen compañero de práctica para crecer juntos. La calidad del uke determina la calidad de nage.',
  'La constancia importa más que la intensidad. Tres clases por semana durante un año superan a una semana de entrenamiento intensivo.',
  'Aceptá la frustración. Las técnicas del aikido son contraintuitivas. Cada meseta en el aprendizaje precede un salto cualitativo.',
]

export default function TecnicaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="relative h-[55vh] min-h-[360px]">
            <Image
              src="/images/technique-aikido.png"
              alt="Técnica de aikido: control de muñeca"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 lg:px-10 max-w-7xl mx-auto w-full">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4 font-sans">Técnica y entrenamiento</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-white text-balance leading-none max-w-2xl">
              Precisión en movimiento
            </h1>
          </div>
        </div>

        {/* Principles */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Principios fundamentales</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              Los cuatro pilares del movimiento
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {principles.map((item) => (
                <div key={item.name} className="bg-background p-8">
                  <p className="font-serif text-4xl font-light mb-1 opacity-20">{item.jp}</p>
                  <h3 className="font-serif text-2xl font-medium mb-3" style={{ color: 'var(--terra)' }}>{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Techniques */}
        <div className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Catálogo de técnicas</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              Proyecciones e inmovilizaciones
            </h2>
            {techniques.map((group) => (
              <div key={group.category} className="mb-16">
                <h3 className="font-serif text-2xl font-light mb-6 border-b border-border pb-4">{group.category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                  {group.items.map((tech) => (
                    <div key={tech.name} className="bg-background p-7">
                      <h4 className="font-serif text-xl font-medium mb-2">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training plan */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Plan de entrenamiento</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              El camino en fases
            </h2>
            <div className="flex flex-col gap-px bg-border">
              {trainingPlan.map((phase, i) => (
                <div key={phase.phase} className="bg-background grid sm:grid-cols-4 gap-6 p-8 items-start">
                  <div>
                    <span
                      className="font-serif text-5xl font-light opacity-30"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="font-serif text-xl font-medium mb-2" style={{ color: 'var(--terra)' }}>{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-2"><strong className="text-foreground">Foco:</strong> {phase.focus}</p>
                    <p className="text-sm text-muted-foreground font-sans mb-2"><strong className="text-foreground">Frecuencia:</strong> {phase.sessions}</p>
                    <p className="text-sm text-muted-foreground font-sans italic">{phase.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4 font-sans">Consejos prácticos</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-14">Lo que el tatami enseña</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {tips.map((tip, i) => (
                <div key={i} className="bg-navy p-8 flex gap-4">
                  <span className="font-serif text-3xl font-light text-terra flex-shrink-0 leading-none">{i + 1}</span>
                  <p className="text-sm text-white/65 leading-relaxed font-sans">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <Link href="/reglas" className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity" style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}>
              ← Reglas y disciplinas
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity" style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}>
              Leer artículos →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
