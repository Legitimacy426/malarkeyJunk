import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'


const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Malarkey Junk Removal - Where Trash Talk Meets Action!',
  description: 'Get instant quotes for junk removal services. Book same-day or scheduled pickups with our AI-powered chat interface. No garbage time, just results!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        {children}
      </body>
    </html>
  )
}
