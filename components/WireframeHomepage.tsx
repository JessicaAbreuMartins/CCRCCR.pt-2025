// Scaffold Next.js CCRCCR.pt 2025 — Wireframes de alta fidelidade / proposta visual

// Objetivo: Definir cores, tipografia, logotipo e layout responsivo para homepage e páginas institucionais.

// Paleta de cores sugerida (opção lúdico & acolhedor):
export const themeColors = {
  primary: '#3B82F6', // azul
  secondary: '#FBBF24', // amarelo
  accent: '#10B981', // verde
  background: '#F3F4F6', // cinza claro
  textPrimary: '#111827',
  textSecondary: '#6B7280'
}

// Tipografia:
// Fonte principal: Inter (sans-serif) para textos
// Fonte secundária: Poppins (opcional) para títulos e hero

// Layout responsivo (mobile-first)
// Header: navbar fixa, dropdown para valências, logo à esquerda
// Hero: full-width, CTA centralizado, imagem de fundo opcional
// Seções: grid responsivo (1col mobile / 2-3col tablet-desktop)
// Cards: NewsCard, ValenciaCard responsivos com altura igual e espaçamento consistente
// Footer: multi-column com links, contactos, redes sociais

// Figma-like markup em React (JSX) para referência visual:

export function HomepageWireframe() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-white shadow fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">CCRCCR.pt (Logo)</div>
          <nav className="space-x-4">
            <a href="/sobre" className="hover:underline">Sobre</a>
            <a href="/valencias" className="hover:underline">Valências</a>
            <a href="/noticias" className="hover:underline">Notícias</a>
            <a href="/preçario" className="hover:underline">Preçário</a>
            <a href="/contactos" className="hover:underline">Contactos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 bg-primary text-white text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao CCRCCR.pt</h1>
        <p className="text-lg mb-6">Inscrições abertas, notícias e informações para famílias</p>
        <a href="/preçario" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-yellow-500">Ver Preçário</a>
      </section>

      {/* Notícias em destaque */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Notícias em destaque</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-lg p-4 h-64 bg-white">NewsCard 1</div>
          <div className="border rounded-lg p-4 h-64 bg-white">NewsCard 2</div>
          <div className="border rounded-lg p-4 h-64 bg-white">NewsCard 3</div>
        </div>
      </section>

      {/* Atalhos rápidos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Atalhos Rápidos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white p-4 rounded shadow">Ementas</div>
          <div className="bg-white p-4 rounded shadow">Preçário</div>
          <div className="bg-white p-4 rounded shadow">Contactos</div>
        </div>
      </section>

      {/* Galeria de Atividades */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Galeria de Atividades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-32 bg-gray-200 rounded">Imagem 1</div>
          <div className="h-32 bg-gray-200 rounded">Imagem 2</div>
          <div className="h-32 bg-gray-200 rounded">Imagem 3</div>
          <div className="h-32 bg-gray-200 rounded">Imagem 4</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16 text-center text-sm text-gray-600">© 2025 CCRCCR.pt — Todos os direitos reservados</footer>
    </div>
  )
}
