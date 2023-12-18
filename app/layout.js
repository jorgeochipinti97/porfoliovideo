import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Diego Ison | Edicion de video',
  description: 'Descubre la excelencia en edición de video con Diego Ison, un editor profesional reconocido por su creatividad y precisión técnica. Con años de experiencia en la industria, Diego ofrece servicios de edición de video de alta calidad que transforman tus ideas en obras maestras visuales. Especializado en edición de video para publicidad, redes sociales, eventos corporativos y documentales, Diego combina la técnica más avanzada con un toque artístico único para captar la esencia de tu mensaje. Su compromiso con la calidad y la atención al detalle garantizan que cada proyecto destaque por su claridad, fluidez y impacto emocional. Si buscas un editor de video que pueda llevar tus proyectos al siguiente nivel, Diego Ison es tu elección ideal. ¡Explora su portafolio y prepárate para ser impresionado!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
