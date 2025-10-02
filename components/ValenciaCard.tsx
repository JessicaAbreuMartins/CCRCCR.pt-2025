interface ValenciaCardProps {
title: string
description: string
imageSrc?: string
horarios?: string
pdfLink?: string
onInscrever?: () => void
}


export default function ValenciaCard({ title, description, imageSrc, horarios, pdfLink, onInscrever }: ValenciaCardProps) {
return (
<div className="border rounded-lg shadow p-4 flex flex-col">
{imageSrc && <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded mb-4" />}
<h3 className="text-xl font-semibold mb-2">{title}</h3>
<p className="text-gray-600 mb-2">{description}</p>
{horarios && <p className="text-sm text-gray-500 mb-2">Horários: {horarios}</p>}
{pdfLink && <a href={pdfLink} target="_blank" className="text-blue-600 hover:underline mb-2">Ver PDF</a>}
{onInscrever && (
<button onClick={onInscrever} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Inscrever</button>
)}
</div>
)
}