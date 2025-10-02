import { graphqlFetch } from "@/lib/wp-graphql"
import { VALENCIA_BY_SLUG } from "@/lib/queries"
import { fetchValenciaBySlug } from "@/lib/wp-rest"
import { notFound } from "next/navigation"

export default async function ValenciaPage({ params }: { params: { slug: string } }) {
let post: any = null


try {
const data = await graphqlFetch<{ postBy: any }>(VALENCIA_BY_SLUG, { slug: params.slug })
post = data.postBy
} catch (err) {
console.warn("GraphQL falhou, a usar REST fallback", err)
post = await fetchValenciaBySlug(params.slug)
}


if (!post) notFound()


return (
<div className="space-y-4">
<h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: post.title?.rendered || post.title }} />
<div dangerouslySetInnerHTML={{ __html: post.content?.rendered || post.content }} />
</div>
)
}

const valenciasData: Record<string, { title: string; description: string }> = {
creche: {
title: "Creche & Berçário",
description: "Informações sobre a Creche & Berçário — horários, atividades, inscrição.",
},
jardim: {
title: "Jardim de Infância",
description: "Informações sobre o Jardim de Infância — projetos educativos, equipa pedagógica.",
},
primeirociclo: {
title: "1.º Ciclo",
description: "Informações sobre o 1.º Ciclo — plano curricular, horários, inscrições.",
},
apoio: {
title: "Centro de Apoio Escolar",
description: "Informações sobre apoio escolar e atividades de tempos livres.",
},
desporto: {
title: "Área Desportiva",
description: "Atividades desportivas e extracurriculares — horários, inscrições.",
},
}

