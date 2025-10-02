// Scaffold Next.js CCRCCR.pt 2025 — Homepage real adaptada com componentes finais

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewsCard from '@/components/NewsCard'
import QuickLinks from '@/components/QuickLinks'
import GalleryGrid from '@/components/GalleryGrid'
import Accordion from '@/components/Accordion'
import { graphqlFetch } from '@/lib/wp-graphql'
import { VALENCIAS_LIST_QUERY } from '@/lib/queries'
import Link from 'next/link'

export default async function HomePage() {
  let noticias: any[] = []
  try {
    const data = await graphqlFetch<{ posts: { nodes: any[] } }>(VALENCIAS_LIST_QUERY)
    noticias = data.posts.nodes.slice(0,3)
  } catch (err) {
    console.warn('GraphQL falhou no HomePage', err)
  }

  const quickLinks = [
    { title: 'Ver Ementas', href: '/ementas' },
    { title: 'Preçário', href: '/preçario' },
    { title: 'Contactos', href: '/contactos' }
  ]

  const galleryImages = [
    { src: '/images/atividades1.jpg', alt: 'Atividade 1' },
    { src: '/images/atividades2.jpg', alt: 'Atividade 2' },
    { src: '/images/atividades3.jpg', alt: 'Atividade 3' },
    { src: '/images/atividades4.jpg', alt: 'Atividade 4' },
  ]

  return (
    <>
      <Header />
      <main className="space-y-16">
        <Hero />

        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Notícias em destaque</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticias.map((n) => (
              <NewsCard key={n.slug || n.id} title={n.title?.rendered || n.title} excerpt={n.excerpt?.rendered || n.excerpt} href={`/noticias/${n.slug}`} />
            ))}
          </div>
          <Link href="/noticias" className="text-blue-600 mt-4 inline-block">Ver todas as notícias</Link>
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Atalhos Rápidos</h2>
          <QuickLinks links={quickLinks} />
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Galeria de Atividades</h2>
          <GalleryGrid images={galleryImages} />
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Documentos</h2>
          <Accordion title="Ementas">PDFs e detalhes das ementas aqui</Accordion>
          <Accordion title="Regulamentos">PDFs e regras do centro</Accordion>
        </section>
      </main>
      <Footer />
    </>
  )
}