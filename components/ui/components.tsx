'use client'


import { ReactNode } from 'react'
import clsx from 'clsx'


// ------------------ BUTTON ------------------
interface ButtonProps {
children: ReactNode
className?: string
variant?: 'primary' | 'secondary'
}
export function Button({ children, className, variant = 'primary' }: ButtonProps) {
const base = 'px-6 py-3 rounded-lg font-semibold transition-colors'
const style = variant === 'primary'
? 'bg-blue-500 text-white hover:bg-blue-600'
: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
return <button className={clsx(base, style, className)}>{children}</button>
}


// ------------------ CARD ------------------
interface CardProps {
children: ReactNode
className?: string
}
export function Card({ children, className }: CardProps) {
return <div className={clsx('border rounded-lg shadow-sm bg-white', className)}>{children}</div>
}
interface CardHeaderProps { children: ReactNode; className?: string }
export function CardHeader({ children, className }: CardHeaderProps) { return <div className={clsx('p-4 border-b', className)}>{children}</div> }
interface CardTitleProps { children: ReactNode; className?: string }
export function CardTitle({ children, className }: CardTitleProps) { return <h3 className={clsx('text-lg font-bold', className)}>{children}</h3> }
interface CardContentProps { children: ReactNode; className?: string }
export function CardContent({ children, className }: CardContentProps) { return <div className={clsx('p-4', className)}>{children}</div> }


// ------------------ ACCORDION ------------------
interface AccordionProps { title: string; children: ReactNode }
export function Accordion({ title, children }: AccordionProps) {
const [open, setOpen] = require('react').useState(false)
return (
<div className="border rounded mb-2">
<button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold">
{title}
</button>
{open && <div className="p-4">{children}</div>}
</div>
)
}


// ------------------ QUICKLINKS ------------------
interface QuickLink { title: string; href: string }
interface QuickLinksProps { links: QuickLink[] }
export function QuickLinks({ links }: QuickLinksProps) {
return (
<div className="grid gap-4 md:grid-cols-3">
{links.map((link) => (
<a key={link.href} href={link.href} className="bg-white p-4 rounded shadow text-center hover:shadow-md transition">
{link.title}
</a>
))}
</div>
)
}


// ------------------ GALLERY GRID ------------------
interface GalleryImage { src: string; alt: string }
interface GalleryGridProps { images: GalleryImage[] }
export function GalleryGrid({ images }: GalleryGridProps) {
return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{images.map((img) => (
<div key={img.src} className="h-32 bg-gray-200 rounded overflow-hidden">
<img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
</div>
))}
</div>
)
}