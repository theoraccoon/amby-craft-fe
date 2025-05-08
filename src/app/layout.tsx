'use client'

import React from 'react'
import { Comfortaa, Open_Sans } from 'next/font/google'
import '../styles/globals.css'
import SharedLayout from '@/components/layout/shared/layout'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${comfortaa.className} ${openSans.className}`}>
      <body className={comfortaa.className}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  )
}
