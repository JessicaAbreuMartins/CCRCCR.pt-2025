import { getCsrfToken } from 'next-auth/react'


export default async function LoginPage() {
const csrfToken = await getCsrfToken()
return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form method="post" action="/api/auth/callback/credentials" className="bg-white p-8 rounded shadow w-full max-w-sm">
<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
<h2 className="text-2xl font-bold mb-6">Login Encarregado</h2>
<input name="email" type="email" placeholder="Email" className="w-full border px-3 py-2 rounded mb-4" required />
<input name="password" type="password" placeholder="Password" className="w-full border px-3 py-2 rounded mb-4" required />
<button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
</form>
</div>
)
}