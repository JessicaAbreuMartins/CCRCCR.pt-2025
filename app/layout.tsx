import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
title: 'CCRCCR.pt - Centro Educativo',
description: 'Informações, notícias, valências e documentos para famílias.',
openGraph: {
title: 'CCRCCR.pt - Centro Educativo',
description: 'Informações, notícias, valências e documentos para famílias.',
url: 'https://www.ccrccr.pt',
siteName: 'CCRCCR.pt',
type: 'website',
images: [{ url: '/images/og-image.png', width: 1200, height: 630 }]
},
robots: {
index: true,
follow: true,
}
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt">
<body className={inter.className}>
<Header />
{children}
<Footer />
{/* Scripts de performance e A11y podem ser adicionados aqui ou via CI/CD */}
</body>
</html>
)
}