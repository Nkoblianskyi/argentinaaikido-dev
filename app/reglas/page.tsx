import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Reglas y Disciplinas — Argentina Aikido',
  description: 'Las reglas del dojo, el sistema de grados, la etiqueta y las disciplinas que componen la práctica del aikido.',
}

const etiquette = [
  {
    title: 'El rei (reverencia)',
    body: 'Se realizan reverencias al entrar y salir del tatami, al inicio y final de la clase, y al comenzar y terminar cada ejercicio con un compañero. No es un acto de sumisión: es reconocimiento mutuo y presencia consciente.',
  },
  {
    title: 'El seiza',
    body: 'La postura arrodillada tradicional. Se usa en la meditación de apertura y cierre (mokuso), y al recibir instrucciones del sensei. Refleja atención, estabilidad y disposición al aprendizaje.',
  },
  {
    title: 'El silencio del tatami',
    body: 'Las conversaciones personales no tienen lugar en el tatami. El silencio libera la atención para la observación, que en el aikido es tan importante como la práctica misma.',
  },
  {
    title: 'El cuidado del gi',
    body: 'El uniforme debe estar limpio y ordenado. El hakama se dobla de manera precisa al final de la clase. El cuidado de la indumentaria refleja el respeto hacia la práctica y los compañeros.',
  },
  {
    title: 'Relación con el sensei',
    body: 'El instructor es quien transmite el camino. La relación se basa en el respeto y la confianza. En el aikido tradicional no se cuestiona verbalmente la técnica durante la clase: se practica, se observa y, en el momento adecuado, se consulta.',
  },
  {
    title: 'No lastimar al compañero',
    body: 'La máxima del dojo: nunca el ego a expensas del cuerpo del otro. Las técnicas se aplican con control y sensibilidad. El ukemi —la caída— del compañero es un regalo que hay que recibir con cuidado.',
  },
]

const grades = [
  { grade: '6°–1° Kyu', color: 'Blanco a marrón', description: 'Los grados previos al dan. Cada escuela tiene sus propios colores de cinturón para los kyu. Representan el período de aprendizaje de los fundamentos.' },
  { grade: '1° Dan', color: 'Negro', description: 'El primer dan no señala el final del aprendizaje: marca el inicio de una comprensión más profunda. Shodan (primer dan) significa literalmente "primer escalón".' },
  { grade: '2°–4° Dan', color: 'Negro', description: 'Con la profundización de la práctica, el practicante comienza a desarrollar un estilo propio sin alejarse de los principios. Puede obtener la habilitación para enseñar.' },
  { grade: '5°+ Dan', color: 'Negro / Blanco-negro', description: 'Los grados superiores reconocen una vida dedicada a la práctica y a la transmisión del arte. En algunos estilos, los rangos altos usan cinturón blanco-negro (jo-dan).' },
]

const disciplines = [
  {
    name: 'Taijutsu',
    desc: 'El trabajo de mano vacía. Es la base de toda la práctica: proyecciones, controles, inmovilizaciones. Las técnicas se ejecutan en parejas, alternando los roles de nage (quien proyecta) y uke (quien cae).',
  },
  {
    name: 'Aiki-ken',
    desc: 'El trabajo con el bokken (sable de madera). A través del suburi (cortes solos) y el kumitachi (formas a dos personas), se estudian los principios del movimiento presentes también en el taijutsu.',
  },
  {
    name: 'Aiki-jo',
    desc: 'El trabajo con el jo (bastón de madera de ~128 cm). Las formas de jo enseñan el control del espacio, la distancia y la continuidad del movimiento. El jo-dori (defensa contra jo) integra arma y mano vacía.',
  },
  {
    name: 'Tanto-dori',
    desc: 'Defensa contra el cuchillo (tanto de madera o goma). Desarrolla la percepción de la distancia de peligro y la precisión del movimiento. Es una de las formas más exigentes de la práctica.',
  },
]

export default function ReglasPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Page header */}
        <div className="bg-navy">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4 font-sans">Reglas y disciplinas</p>
            <h1 className="font-serif text-6xl lg:text-8xl font-light text-white text-balance leading-none max-w-2xl">
              El código del tatami
            </h1>
          </div>
        </div>

        {/* Etiqueta */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-72 flex-shrink-0">
              <h2 className="font-serif text-4xl font-light leading-tight lg:sticky lg:top-24">
                Etiqueta<br />del dojo
              </h2>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-px bg-border">
              {etiquette.map((item) => (
                <div key={item.title} className="bg-background p-8">
                  <h3 className="font-serif text-xl font-medium mb-3" style={{ color: 'var(--terra)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sistema de grados */}
        <div className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Sistema de grados</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              Kyu, Dan y el camino del cinturón
            </h2>
            <div className="flex flex-col gap-px bg-border">
              {grades.map((item, i) => (
                <div key={item.grade} className="bg-background grid sm:grid-cols-3 gap-6 p-8 items-start">
                  <div>
                    <p className="font-serif text-3xl font-light" style={{ color: 'var(--terra)' }}>{item.grade}</p>
                    <p className="text-xs tracking-wider text-muted-foreground uppercase font-sans mt-1">{item.color}</p>
                  </div>
                  <p className="sm:col-span-2 text-sm text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disciplinas */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Disciplinas</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-14 text-balance">
              Las ramas del arte
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {disciplines.map((item) => (
                <div key={item.name} className="bg-background p-10">
                  <h3 className="font-serif text-3xl font-light mb-4">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="py-20 bg-terra">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-serif text-3xl lg:text-4xl font-light text-white text-balance max-w-lg">
              Las reglas existen para liberar, no para limitar.
            </p>
            <Link
              href="/tecnica"
              className="flex-shrink-0 text-xs tracking-widest uppercase px-6 py-3 border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Ver técnicas →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
