export default function ContactosPage() {
return (
<div className="space-y-4">
<h1 className="text-3xl font-bold">Contactos</h1>
<p><strong>Morada:</strong> Rua Exemplo, 123, 0000-000 Cidade</p>
<p><strong>Telefone:</strong> 123 456 789</p>
<p><strong>Email:</strong> geral@ccrccr.pt</p>
<iframe
src="https://www.google.com/maps/embed?..."
className="w-full h-64 border rounded"
loading="lazy"
></iframe>
</div>
)
}