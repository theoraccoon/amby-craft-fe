// app/shared/layout.tsx
'use client'

import { ReactNode } from 'react'
import SidebarMenu from '@/components/layout/sidebar'
import '../../../styles/globals.css'
import MobileViewHeader from '@/components/layout/header/mobile-view-header'
import TabNavigator from '@/components/layout/tab-navigation'
import Header from '@/components/layout/header/header'
import MobileDrawerMenu from '@/components/layout/mobile_drawer/mobile-drawer'
import { useMobileDrawer } from '@/context/mobile-drawer-context'
import { Providers } from '@/app/provider'

export default function SharedLayout({ children }: { children: ReactNode }) {
  const { isOpen } = useMobileDrawer()
  return (
    <Providers>
      <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full overflow-hidden">
        {isOpen && (
          <div className="md:hidden fixed  left-0 z-[60] bg-[#222222] w-[185px]  ">
            <MobileDrawerMenu />
          </div>
        )}
        <div className="hidden md:block bg-[#282828] h-screen">
          <SidebarMenu />
        </div>
        <div className="md:hidden fixed bg-[#181818] w-full border-t  border-[#444] flex justify-around items-center h-[90px] z-50 px-5 pt">
          <MobileViewHeader />
        </div>
        {/* Main Content */}
        <div className="bg-[#181818] flex flex-col h-screen px-8 w-full overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
          <div className="md:hidden fixed bottom-0 left-0 w-full  flex justify-around items-center h-[90px] bg-[#181818]">
            <TabNavigator />
          </div>
        </div>
      </div>
    </Providers>
  )
}
