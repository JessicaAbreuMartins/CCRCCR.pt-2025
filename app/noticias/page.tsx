import NewsCard from "@/components/NewsCard"


export default function NoticiasPage() {
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Notícias</h1>
<div className="grid md:grid-cols-3 gap-6">
<NewsCard title="Início das Inscrições 2025/26" date="Setembro 2025" />
<NewsCard title="Novo Regulamento Interno" date="Julho 2025" />
<NewsCard title="Atividades de Verão 2025" date="Junho 2025" />
</div>
</div>
)
}