'use client'

import SearchInputField from '@/components/ui/input/search-input'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"; 
import Image from 'next/image';

export default function MobileViewHeader() {

    const profileImage = "/images/profile-picture.png"
  return (
    <div className='w-full'>
        <SearchInputField
            leftIcon={<GiHamburgerMenu color="#FFFFFF" size="20px" />}
           rightIcon={
            <>
              <div className='relativ h-[30px] w-[30px]'>
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
