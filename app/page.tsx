import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { articles, equipment, funFacts1, funFacts2 } from '@/lib/content'
import { CookieBanner } from '@/components/cookie-banner'

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex flex-col justify-end pt-16 overflow-hidden"
          aria-label="Hero"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-aikido.png"
              alt="Dos practicantes de aikido ejecutando una técnica en el dojo"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/65" />
            <div
              className="absolute bottom-0 left-0 right-0 h-52 bg-background"
              style={{ clipPath: 'polygon(0 55%, 100% 0%, 100% 100%, 0% 100%)' }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-40 w-full">
            <div className="max-w-3xl">
              <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-6 font-sans">
                Arte marcial · Argentina
              </p>
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-[7rem] font-light leading-none text-primary-foreground text-balance mb-8">
                El camino<br />
                <em className="not-italic" style={{ color: 'var(--terra)' }}>de la armonía</em>
              </h1>
              <p className="text-lg text-primary-foreground/65 font-sans max-w-xl leading-relaxed mb-10">
                Aikido: el arte marcial que transforma la fuerza del oponente en movimiento circular. Origen japonés, práctica universal.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/historia"
                  className="text-xs tracking-widest uppercase px-6 py-3 border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  Conocer la historia
                </Link>
                <Link
                  href="/tecnica"
                  className="text-xs tracking-widest uppercase px-6 py-3 text-white"
                  style={{ backgroundColor: 'var(--terra)' }}
                >
                  Ver técnicas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HISTORIA PREVIEW ──────────────────────────────────────── */}
        <section className="py-24 lg:py-32" aria-label="Historia del aikido">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">
                  01 — Historia
                </p>
                <h2 className="font-serif text-5xl lg:text-6xl font-light leading-tight text-balance mb-6">
                  Un arte nacido de la tradición guerrera
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 font-sans">
                  El aikido surge a principios del siglo XX de la síntesis que Morihei Ueshiba realizó entre diversas escuelas de combate japonés y una visión espiritual profunda. Su llegada a Argentina marcó el inicio de una práctica que hoy convoca a miles de personas en todo el país.
                </p>
                <Link
                  href="/historia"
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
                  style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
                >
                  Leer la historia completa <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/history-aikido.png"
                    alt="Practicantes de aikido en un dojo histórico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-2 hidden lg:block"
                  style={{ borderColor: 'var(--terra)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FACTS 1 ───────────────────────────────────────────────── */}
        <section className="py-20 bg-navy" aria-label="Datos del aikido">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-white/30 mb-10 font-sans">En números</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {funFacts1.map((fact) => (
                <div key={fact.number} className="bg-navy px-8 py-10">
                  <p className="font-serif text-5xl lg:text-6xl font-light text-white mb-3">{fact.number}</p>
                  <p className="text-xs text-white/45 leading-relaxed font-sans">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ──────────────────────────────────────────── */}
        <section className="py-24 lg:py-32" aria-label="Artículos del blog">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">02 — Blog</p>
                <h2 className="font-serif text-5xl lg:text-6xl font-light leading-tight">Artículos</h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
                style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
              >
                Ver todos <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-px bg-border">
              {articles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className={`group bg-background p-8 flex flex-col gap-4 hover:bg-muted/40 transition-colors ${
                    i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  {i === 0 && (
                    <div className="relative w-full aspect-video overflow-hidden mb-2">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <p className="text-xs tracking-widest uppercase font-sans" style={{ color: 'var(--terra)' }}>
                    {article.category}
                  </p>
                  <h3 className={`font-serif font-light leading-tight text-balance ${i === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                    {article.title}
                  </h3>
                  {i === 0 && (
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">{article.excerpt}</p>
                  )}
                  <span className="text-xs tracking-widest uppercase font-sans mt-auto" style={{ color: 'var(--terra)' }}>
                    Leer →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5"
                style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
              >
                Ver todos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── REGLAS PREVIEW ────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-terra" aria-label="Reglas y disciplinas">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-white/50 mb-4 font-sans">03 — Reglas y disciplinas</p>
                <h2 className="font-serif text-5xl lg:text-6xl font-light leading-tight text-white text-balance mb-6">
                  El dojo tiene su propio lenguaje
                </h2>
                <p className="text-base text-white/65 leading-relaxed mb-8 font-sans">
                  El aikido se practica bajo un código preciso de conducta y formas. Conocer las reglas del tatami, los sistemas de grados y las disciplinas que integran el arte es fundamental para quien se acerca por primera vez.
                </p>
                <Link
                  href="/reglas"
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors"
                >
                  Explorar reglas y disciplinas <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Etiqueta del dojo', desc: 'Reverencias, vestimenta y conducta en el tatami' },
                  { title: 'Sistema de grados', desc: 'Kyu, Dan y el significado de los cinturones' },
                  { title: 'Armas reglamentarias', desc: 'Bokken, jo y tanto en la práctica formal' },
                  { title: 'Disciplinas asociadas', desc: 'Aiki-jo, aiki-ken y el trabajo con armas' },
                ].map((item) => (
                  <div key={item.title} className="p-5 border border-white/20 bg-white/5">
                    <h3 className="font-serif text-lg font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TÉCNICA PREVIEW ───────────────────────────────────────── */}
        <section className="py-24 lg:py-32" aria-label="Técnica y entrenamiento">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/technique-aikido.png"
                    alt="Instructor de aikido demostrando una técnica de muñeca"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -top-6 -right-6 w-32 h-32 rounded-full hidden lg:block"
                  style={{ backgroundColor: 'var(--terra)', opacity: 0.12 }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">04 — Técnica y entrenamiento</p>
                <h2 className="font-serif text-5xl lg:text-6xl font-light leading-tight text-balance mb-6">
                  El cuerpo como instrumento de precisión
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 font-sans">
                  Las técnicas del aikido —ikkyo, nikyo, kotegaeshi, irimi-nage y muchas más— se construyen sobre principios de apalancamiento, ángulo y momento. Descubrí los fundamentos, los planes de entrenamiento y los consejos para progresar.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {['Técnicas de proyección', 'Técnicas de control e inmovilización', 'Principios de movimiento', 'Planes de entrenamiento'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 bg-terra" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground font-sans">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/tecnica"
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase border-b pb-0.5 hover:opacity-70 transition-opacity"
                  style={{ borderBottomColor: 'var(--terra)', color: 'var(--terra)' }}
                >
                  Ir a técnica y entrenamiento <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── EQUIPAMIENTO ──────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-muted/30" aria-label="Equipamiento e indumentaria">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-72 flex-shrink-0">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">05 — Equipamiento</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance lg:sticky lg:top-24">
                  Las herramientas del practicante
                </h2>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[16/7] overflow-hidden mb-12">
                  <Image
                    src="/images/equipment-aikido.png"
                    alt="Equipamiento de aikido: gi, bokken, jo, cinturón"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {equipment.map((item) => (
                    <div key={item.name} className="bg-background p-7">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="font-serif text-2xl font-light flex-shrink-0 text-terra" aria-hidden="true">·</span>
                        <div>
                          <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                          <p className="text-xs tracking-wider text-muted-foreground font-sans uppercase">{item.description}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans pl-7">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FACTS 2 ───────────────────────────────────────────────── */}
        <section className="py-20" aria-label="Curiosidades del aikido">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-10 font-sans">Curiosidades</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-border">
              {funFacts2.map((fact) => (
                <div key={fact.number} className="px-8 py-10">
                  <p className="font-serif text-4xl lg:text-5xl font-light mb-3">{fact.number}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ──────────────────────────────────────────────── */}
        <section className="py-24 bg-navy relative overflow-hidden" aria-label="Llamada a la acción">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" aria-hidden="true" />
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
            <h2 className="font-serif text-5xl lg:text-7xl font-light text-white text-balance max-w-2xl mb-8">
              El aikido se aprende<br />
              <em className="not-italic text-terra">practicándolo.</em>
            </h2>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/nosotros"
                className="text-xs tracking-widest uppercase px-6 py-3 border border-white/25 text-white hover:bg-white/5 transition-colors"
              >
                Conocer más
              </Link>
              <Link
                href="/tecnica"
                className="text-xs tracking-widest uppercase px-6 py-3 text-white bg-terra"
              >
                Explorar técnicas
              </Link>
            </div>
          </div>
        </section>
      </main>
                      <CookieBanner />
      <SiteFooter />
    </>
  )
}
