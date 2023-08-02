import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Stellar-Search',
  description: 'Created using Nasa-API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#355c7d] via-[#6c5b7b] to-[#c06c84] h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
