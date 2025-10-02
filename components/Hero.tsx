import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg p-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Bem-vindos ao CCRCCR.pt</h1>
      <p className="mb-6 text-lg">Versão renovada do site para 2025 — moderna, rápida e acessível</p>
      <Button variant="secondary">Saber mais</Button>
    </section>
  )
}