import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { graphqlFetch } from '@/lib/wp-graphql'
import { PAGE_BY_SLUG } from '@/lib/queries'
import { fetchPageBySlug } from '@/lib/wp-rest'
import { notFound } from 'next/navigation'


export default async function PrecarioPage() {
let page: any = null
try {
const data = await graphqlFetch<{ pageBy: any }>(PAGE_BY_SLUG, { slug: 'precario' })
page = data.pageBy
} catch {
page = await fetchPageBySlug('precario')
}
if (!page) notFound()


return (
<>
<Header />
<main className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: page.title || '' }} />
<div dangerouslySetInnerHTML={{ __html: page.content || '' }} />
{/* Aqui podes adicionar tabela de preçário e formulários de inscrição */}
</main>
<Footer />
</>
)
}