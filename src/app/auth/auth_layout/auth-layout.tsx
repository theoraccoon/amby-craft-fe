'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

import { Providers } from '@/app/provider'
import imageUrl from '@/images/login-background.png'
import '@/styles/globals.css'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="grid lg:grid-cols-6 md:grid-cols-6 h-screen  w-screen bg-background ">
        {/* Sidebar (2/3 on desktop) */}
        <div className="hidden md:block lg:col-span-4 md:col-span-3 relative">
          <Image
            src={imageUrl}
            alt="Login Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* Main Content (1/3 on desktop) */}
        <div className="lg:col-span-2 md:col-span-3 w-full flex items-center justify-center px-7">
          <div className="w-full max-w-md">
            <div className="min-h-[90vh] flex flex-col justify-center">{children}</div>
          </div>
        </div>
      </div>
    </Providers>
  )
}
