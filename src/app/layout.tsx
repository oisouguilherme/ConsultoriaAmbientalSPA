import Header from '@/components/HomePage/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/HomePage/Footer'

export const metadata: Metadata = {
  title: 'Edivaldo Dourado - Consultor ambiental',
  description: 'Conheça minha Consultoria Ambiental Particular especializada em soluções sustentáveis. Oferecemos serviços personalizados de consultoria para empresas e projetos, visando promover o equilíbrio entre desenvolvimento e preservação do meio ambiente. Entre em contato para conhecer nossos serviços e contribuir para um futuro mais verde e consciente.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/x-icon" href="/Logo.png" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
