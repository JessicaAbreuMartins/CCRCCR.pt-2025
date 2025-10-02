import React from 'react'
interface InscricaoModalProps {
isOpen: boolean
onClose: () => void
valenciaName?: string
}
export default function InscricaoModal({ isOpen, onClose, valenciaName }: InscricaoModalProps) {
if (!isOpen) return null
return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
<div className="bg-white rounded-lg p-6 w-full max-w-md">
<h2 className="text-2xl font-bold mb-4">Inscrição — {valenciaName}</h2>
<form className="space-y-4">
<input type="text" placeholder="Nome do aluno" className="w-full border px-3 py-2 rounded" />
<input type="text" placeholder="Nome do encarregado" className="w-full border px-3 py-2 rounded" />
<input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
<input type="tel" placeholder="Telefone" className="w-full border px-3 py-2 rounded" />
<button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar inscrição</button>
</form>
<button onClick={onClose} className="mt-4 text-gray-500 hover:underline">Fechar</button>
</div>
</div>
)
}