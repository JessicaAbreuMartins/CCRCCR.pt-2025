// components/ui/Button.tsx
'use client'

import { ReactNode } from "react"
import clsx from "clsx"

interface ButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export function Button({ children, className, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-colors"
  const style = variant === "primary"
    ? "bg-blue-500 text-white hover:bg-blue-600"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
  return (
    <button className={clsx(base, style, className)}>
      {children}
    </button>
  )
}
