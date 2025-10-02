'use client'

import { useState } from 'react'
import ValenciaCard from '@/components/ValenciaCard'
import InscricaoModal from '@/components/InscricaoModal'

type Valencia = {
  title: string
  description: string
  horarios: string
  pdfLink: string
}

export default function ValenciasPageExample() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedValencia, setSelectedValencia] = useState<string>('')

  const valencias: Valencia[] = [
    { 
      title: 'Creche & Berçário', 
      description: 'Descrição da valência', 
      horarios: '08:00 - 18:00', 
      pdfLink: '/pdfs/creche.pdf' 
    },
    { 
      title: 'Jardim de Infância', 
      description: 'Descrição da valência', 
      horarios: '08:30 - 17:30', 
      pdfLink: '/pdfs/jardim.pdf' 
    }
  ]

  const handleInscrever = (valenciaName: string) => {
    setSelectedValencia(valenciaName)
    setModalOpen(true)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {valencias.map((v) => (
          <ValenciaCard
            key={v.title}
            {...v}
            onInscrever={() => handleInscrever(v.title)}
          />
        ))}
      </div>

      <InscricaoModal 
        isOpen={modalOpen} 
        valenciaName={selectedValencia} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  )
}
