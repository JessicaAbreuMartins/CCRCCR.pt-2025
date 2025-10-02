const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!


export async function graphqlFetch<T = any>(query: string, variables = {}) {
const res = await fetch(WP_GRAPHQL_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ query, variables }),
next: { revalidate: 60 }, // ISR: revalida a cada 60s
})


if (!res.ok) throw new Error(`WPGraphQL fetch error: ${res.status}`)


const json = await res.json()
if (json.errors) throw new Error(JSON.stringify(json.errors))
return json.data as T
}