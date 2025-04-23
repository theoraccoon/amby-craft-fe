'use client';

import { FiUserPlus, FiPlus, } from 'react-icons/fi';
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import ToggleTextWithIcon from '@/components/ui/button/text-icon-button';
import Image from 'next/image';
import RoundedButton from '@/components/ui/button/rounded-button';

export default function HeaderActionsPanel() {

  const profileImage = "/images/profile-picture.png"
  return (
    <div className="flex items-center  justify-end w-full  gap-10 ">
      <div className='flex items-center justify-end w-[70%]  gap-10  '>

        <ToggleTextWithIcon icon={<FiUserPlus />} label="Add Team" />
        <TfiLayoutGrid2Alt color='white' />
        <CiMenuBurger color='white' />
      </div>

      <div className='flex items-center justify-endw-[30%]  gap-10  ' >
        <div className='flex w-[120px]  gap-10 '>

          <RoundedButton leftIcon={<FiPlus color='#000000' />}>create</RoundedButton>
        </div>
        <div className='relativ h-[36px] w-[36px]'>
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
      </div>

    </div>
  );
}
