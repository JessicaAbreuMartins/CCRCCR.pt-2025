import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { fetchPrivateDocuments } from '@/lib/wp-graphql'
import Link from 'next/link'


export default async function DashboardPage() {
const session = await getServerSession(authOptions)


if (!session) {
return <p>Não autorizado. <a href="/area-privada/login">Login</a></p>
}


// Buscar documentos privados do CMS
let documents: { title: string, url: string }[] = []
try {
documents = await fetchPrivateDocuments() // função que retorna PDFs privados do WP ou outro CMS
} catch (err) {
console.error('Erro ao buscar documentos privados:', err)
}


return (
<div className="container mx-auto p-8">
<h1 className="text-2xl font-bold mb-4">Bem-vindo, {session.user?.name}</h1>
<p className="mb-6">Aqui podes aceder aos documentos privados, ementas e relatórios.</p>


<section className="space-y-4">
{documents.length === 0 && <p>Nenhum documento disponível.</p>}
{documents.map((doc) => (
<div key={doc.url} className="border p-4 rounded hover:bg-gray-50">
<Link href={doc.url} target="_blank" className="text-blue-600 hover:underline">
{doc.title}
</Link>
</div>
))}
</section>
</div>
)
}