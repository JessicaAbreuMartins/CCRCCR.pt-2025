// lib/wp-client.ts
const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!

export async function graphqlFetch<T = any>(query: string, variables = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // se precisares de auth, adicionar Authorization: `Bearer ${process.env.WP_API_TOKEN}`
    },
    body: JSON.stringify({ query, variables }),
    // cache/revalidate control for Next.js App Router
    next: { revalidate: 60 }, // revalida a cada 60s — ajustar conforme necessidade
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`WPGraphQL fetch error: ${res.status} ${text}`)
  }

  const json = await res.json()
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }
  return json.data as T
}
