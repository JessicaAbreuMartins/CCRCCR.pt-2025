import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { graphqlFetch } from '@/lib/wp-graphql'
import { EVENTS_LIST_QUERY } from '@/lib/queries'
import { fetchEvents } from '@/lib/wp-rest'


export default async function AgendaPage() {
let events: any[] = []
try {
const data = await graphqlFetch<{ events: { nodes: any[] } }>(EVENTS_LIST_QUERY)
events = data.events.nodes
} catch {
events = await fetchEvents()
}


return (
<>
<Header />
<main className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">Agenda / Calendário</h1>
<ul className="space-y-4">
{events.map((ev) => (
<li key={ev.id} className="border p-4 rounded">
<h2 className="font-semibold text-xl" dangerouslySetInnerHTML={{ __html: ev.title }} />
<p>{new Date(ev.date).toLocaleDateString('pt-PT')} {ev.time ? `- ${ev.time}` : ''}</p>
<p>{ev.location}</p>
<div dangerouslySetInnerHTML={{ __html: ev.description }} />
</li>
))}
</ul>
</main>
<Footer />
</>
)
}