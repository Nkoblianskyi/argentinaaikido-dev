import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { articles } from '@/lib/content'

export const metadata = {
  title: 'Blog — Argentina Aikido',
  description: 'Artículos sobre aikido: filosofía, técnica, equipamiento, cultura del dojo y más.',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex items-end justify-between border-b border-border pb-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-sans">Blog</p>
              <h1 className="font-serif text-6xl lg:text-8xl font-light leading-none">Artículos</h1>
            </div>
            <p className="hidden sm:block font-serif text-sm italic text-muted-foreground pb-2">
              {articles.length} publicaciones
            </p>
          </div>
        </div>

        {/* Featured article */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-0 bg-navy overflow-hidden hover:opacity-95 transition-opacity"
            aria-label={`Leer artículo: ${featured.title}`}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-xs tracking-widest uppercase font-sans mb-4 text-terra">{featured.category}</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-white text-balance leading-tight mb-6">
                {featured.title}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-sans mb-8">{featured.excerpt}</p>
              <span className="text-xs tracking-widest uppercase font-sans text-terra group-hover:opacity-70 transition-opacity">
                Leer artículo →
              </span>
            </div>
          </Link>
        </div>

        {/* Rest of articles */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-background p-8 flex flex-col gap-4 hover:bg-muted/40 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs tracking-widest uppercase font-sans text-terra">{article.category}</p>
                <h2 className="font-serif text-2xl font-light leading-tight text-balance">{article.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans line-clamp-3">{article.excerpt}</p>
                <span className="text-xs tracking-widest uppercase font-sans mt-auto text-terra">Leer →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
