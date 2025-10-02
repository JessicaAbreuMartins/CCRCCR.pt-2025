import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { graphqlFetch } from '@/lib/wp-graphql';
import { PAGE_BY_SLUG } from '@/lib/queries';
import { fetchPageBySlug } from '@/lib/wp-rest';
import { notFound } from 'next/navigation';

type Page = {
  title?: string;
  content?: string;
};

export default async function PrecarioPage() {
  let page: Page | null = null;

  try {
    const data = await graphqlFetch<{ pageBy: Page }>(PAGE_BY_SLUG, { slug: 'precario' });
    page = data.pageBy;
  } catch (err) {
    console.error('Erro ao buscar via GraphQL, tentando REST:', err);
    page = await fetchPageBySlug('precario');
  }

  // Se page ainda for null ou não tiver conteúdo, retorna 404
  if (!page || (!page.title && !page.content)) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {page.title && (
          <h1
            className="text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: page.title }}
          />
        )}
        {page.content && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
        {/* Aqui podes adicionar tabela de preçário e formulários de inscrição */}
      </main>
      <Footer />
    </>
  );
}
