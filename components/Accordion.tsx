'use client'

import { useState, ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
      >
        {title}
      </button>
      {open && <div className="p-4">{children}</div>}
    </div>
  )
}