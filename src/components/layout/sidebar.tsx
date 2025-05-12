'use client'

import React from 'react'
import { BiBookOpen, BiBookAlt } from 'react-icons/bi'
import { MdGridView } from 'react-icons/md'
import { FiArchive } from 'react-icons/fi'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const imageUrlAmbylon = '/images/amby-svg.svg'

const menuItems = [
  { id: 'dashboard', text: 'Dashboard', IconComponent: MdGridView },
  { id: 'courses', text: 'Courses', IconComponent: BiBookOpen },
  { id: 'microlearning', text: 'Microlearning', IconComponent: BiBookAlt },
  { id: 'question_banks', text: 'Question Banks', IconComponent: FiArchive },
]

function SidebarMenu() {
  const router = useRouter()
  const pathname = usePathname()

  const activeItemId = pathname.split('/')[1] || 'dashboard'

  const handleItemClick = (id: string) => {
    router.push(`/${id}`)
  }

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Logo Section */}
      <div className="w-full relative h-[15%] my-7">
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

      {/* Menu Items */}
      <div className="h-[85%]">
        <ul>
          {menuItems.map(({ id, text, IconComponent }) => {
            const isActive = activeItemId === id

            return (
              <li
                key={id}
                className={`flex items-center gap-4 !p-2 text-white !pl-6 !mb-3 !border-l-[5px] cursor-pointer ${
                  isActive ? '!border-[#F8AF43]' : '!border-[#282828] opacity-50'
                }`}
                onClick={() => handleItemClick(id)}
              >
                <IconComponent className="text-base" />
                <span
                  className={`hidden lg:inline-block text-xs ${
                    isActive ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {text}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SidebarMenu
