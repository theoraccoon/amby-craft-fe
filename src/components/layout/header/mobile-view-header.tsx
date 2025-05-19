'use client'

import Image from 'next/image'
import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'

import SearchInputField from '@/components/ui/input/search-input'
import { useMobileDrawer } from '@/context/mobile-drawer-context'
import profileImage from '@/images/profile-picture.png'

export default function MobileViewHeader() {
  const { isOpen, setIsOpen } = useMobileDrawer()

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full">
      <SearchInputField
        leftIcon={
          <button className="cursor-pointer">
            <GiHamburgerMenu color="#FFFFFF" size="18px" onClick={handleToggleDrawer} />
          </button>
        }
        rightIcon={
          <>
            <div className="relative h-[30px] w-[30px]">
              <Image
                src={profileImage}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className=" !relative rounded-full "
              />
            </div>
          </>
        }
      />
    </div>
  )
}
