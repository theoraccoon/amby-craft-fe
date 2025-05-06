'use client'

import React, { useCallback, useMemo } from 'react'
import { BiBookOpen, BiBookAlt } from 'react-icons/bi'
import { MdGridView } from 'react-icons/md'
import { FiArchive } from 'react-icons/fi'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useMobileDrawer } from '@/context/mobile-drawer-context'

const imageUrlAmbylon = '/images/amby-svg.svg'

const MobileDrawerMenu = () => {
  const { isOpen, setIsOpen } = useMobileDrawer()
  const router = useRouter()
  const pathname = usePathname()

  const activeItemId = useMemo(() => pathname.split('/')[1] || 'dashboard', [pathname])

  const handleItemClick = useCallback(
    (id: string) => {
      setIsOpen(!isOpen)
      router.push(`/${id}`)
    },
    [router],
  )

  const handleToggleDrawer = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const menuItems = useMemo(
    () => [
      { id: 'dashboard', text: 'Dashboard', Icon: MdGridView },
      { id: 'courses', text: 'Courses', Icon: BiBookOpen },
      { id: 'microlearning', text: 'Microlearning', Icon: BiBookAlt },
      { id: 'question_banks', text: 'Question Banks', Icon: FiArchive },
    ],
    [],
  )

  return (
    <div className="flex flex-col h-screen">
      {/* Logo Section */}
      <div className="w-full h-[15%] flex justify-center items-center">
        <div
          className="relative h-full w-[80%] flex justify-center items-center"
          onClick={handleToggleDrawer}
        >
          <Image
            className="!relative"
            src={imageUrlAmbylon}
            alt="Login Background"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="h-[85%]">
        <ul>
          {menuItems.map(({ id, text, Icon }) => {
            const isActive = id === activeItemId
            return (
              <li
                key={id}
                onClick={() => handleItemClick(id)}
                className={`flex items-center gap-4 !p-2 text-white !pl-6 !mb-3 !border-l-[5px] !border-[#282828] cursor-pointer ${
                  isActive ? '!border-[#F8AF43]' : 'opacity-50 text-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon className="text-base" />
                  <span
                    className={` lg:inline-block text-xs ${isActive ? 'font-bold' : 'font-normal'}`}
                  >
                    {text}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MobileDrawerMenu
