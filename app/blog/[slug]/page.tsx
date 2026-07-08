import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { articles } from '@/lib/content'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Argentina Aikido`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Article hero */}
        <div className="relative h-[50vh] min-h-[320px] bg-navy overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-14 px-6 lg:px-10 max-w-7xl mx-auto w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-8 font-sans"
            >
              <span aria-hidden="true">←</span> Blog
            </Link>
            <p className="text-xs tracking-widest uppercase font-sans mb-3 text-terra">{article.category}</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light text-white text-balance leading-tight max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 lg:px-0 py-16 lg:py-24">
          <p className="text-lg text-muted-foreground leading-relaxed font-sans mb-12 border-l-2 pl-6" style={{ borderColor: 'var(--terra)' }}>
            {article.excerpt}
          </p>
          <div
            className="prose-article font-sans text-base leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Related articles */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-10 font-sans">Seguir leyendo</p>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-background p-8 flex flex-col gap-3 hover:bg-muted/40 transition-colors"
                >
                  <p className="text-xs tracking-widest uppercase font-sans text-terra">{rel.category}</p>
                  <h3 className="font-serif text-xl font-light leading-tight text-balance">{rel.title}</h3>
                  <span className="text-xs tracking-widest uppercase font-sans mt-auto text-terra">Leer →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
