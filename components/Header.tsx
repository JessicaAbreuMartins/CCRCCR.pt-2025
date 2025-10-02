'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuGroups = [
    [
      { href: '/', label: 'Início' },
      { href: '/sobre', label: 'CCR CCR' },
    ],
    [
      { href: '/valencias', label: 'Valências' },
    ],
    [
      { href: '/festas', label: 'Festas de Aniversário' },
      { href: '/preçario', label: 'Preçário' },
    ],
    [
      { href: '/noticias', label: 'Notícias e Eventos' },
      { href: '/contactos', label: 'Contactos' },
    ],
  ]

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="CCRCCR Logo"
            width={80}
            height={80}
            className="object-contain w-20 h-20 md:w-24 md:h-24"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-12">
          {menuGroups.map((group, index) => (
            <div key={index} className="flex items-center space-x-6">
              {group.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 rounded bg-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {menuGroups.map((group, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {group.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
