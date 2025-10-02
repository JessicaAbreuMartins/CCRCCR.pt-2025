const WP_REST_BASE = process.env.NEXT_PUBLIC_WP_REST_URL || "https://example.com/wp-json/wp/v2"


export async function fetchValencias() {
const res = await fetch(`${WP_REST_BASE}/posts?categories=valencias`, { next: { revalidate: 60 } })
if (!res.ok) throw new Error("REST fetch error")
return res.json()
}


export async function fetchValenciaBySlug(slug: string) {
const res = await fetch(`${WP_REST_BASE}/posts?slug=${slug}`)
if (!res.ok) throw new Error("REST fetch error")
const data = await res.json()
return data[0] || null
}