'use client'

import { Comfortaa, Open_Sans } from 'next/font/google'
import React from 'react'

import '../styles/globals.css'
import { Providers } from './provider'

import { MobileDrawerProvider } from '@/context/mobile-drawer-context'
import { TabletDrawerProvider } from '@/context/tablet-drawer-context'
import { ViewModeProvider } from '@/context/view-mode-context'

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
        <Providers>
          <ViewModeProvider>
            <MobileDrawerProvider>
              <TabletDrawerProvider>{children}</TabletDrawerProvider>
            </MobileDrawerProvider>
          </ViewModeProvider>
        </Providers>
      </body>
    </html>
  )
}
