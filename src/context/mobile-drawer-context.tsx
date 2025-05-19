// context/mobile-drawer-context.tsx
'use client'

import { createContext, useContext, useState } from 'react'

// context/mobile-drawer-context.tsx

// context/mobile-drawer-context.tsx

// context/mobile-drawer-context.tsx

// context/mobile-drawer-context.tsx

const MobileDrawerContext = createContext<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
} | null>(null)

export const MobileDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileDrawerContext.Provider>
  )
}

export const useMobileDrawer = () => {
  const context = useContext(MobileDrawerContext)
  if (!context) {
    throw new Error('useMobileDrawer must be used within a MobileDrawerProvider')
  }
  return context
}
