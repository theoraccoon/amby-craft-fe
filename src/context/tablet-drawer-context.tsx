// context/Tablet-drawer-context.tsx
'use client'

import { createContext, useContext, useState } from 'react'

const TabletDrawerContext = createContext<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
} | null>(null)

export const TabletDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TabletDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TabletDrawerContext.Provider>
  )
}

export const useTabletDrawer = () => {
  const context = useContext(TabletDrawerContext)
  if (!context) {
    throw new Error('useTabletDrawer must be used within a TabletDrawerProvider')
  }
  return context
}
