const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!


export async function graphqlFetch<T = any>(query: string, variables = {}) {
  if (!WP_GRAPHQL_URL) {
    throw new Error("WP_GRAPHQL_URL não está definida no ambiente")
  }

  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()
  return json.data as T
}