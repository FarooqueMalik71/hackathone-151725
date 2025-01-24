import './global.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UX/UI PROJECT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
     
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
