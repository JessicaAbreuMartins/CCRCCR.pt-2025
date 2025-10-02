import Link from 'next/link'
export default function Header() {
return (
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<Link href="/" className="text-xl font-bold">CCRCCR.pt</Link>
<nav className="space-x-4">
<Link href="/sobre" className="hover:underline">Sobre</Link>
<Link href="/valencias" className="hover:underline">Valências</Link>
<Link href="/noticias" className="hover:underline">Notícias</Link>
<Link href="/preçario" className="hover:underline">Preçário</Link>
<Link href="/contactos" className="hover:underline">Contactos</Link>
</nav>
</div>
</header>
)
}