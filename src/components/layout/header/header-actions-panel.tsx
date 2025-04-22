'use client';

import {  FiUserPlus, FiPlus, } from 'react-icons/fi';
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import ToggleTextWithIcon from '@/components/ui/button/text-icon-button';
import Image from 'next/image';
import RoundedButton from '@/components/ui/button/rounded-button';

export default function HeaderActionsPanel() {

  const profileImage = "/images/profile-picture.png"
  return (
    <div className="flex items-center justify-around gap-4 w-[80%]  ">
      {/* <ToggleTextWithIcon icon={<FiCamera />} label="Create Picture" /> */}
      <ToggleTextWithIcon icon={<FiUserPlus />} label="Add Team" />
      <TfiLayoutGrid2Alt color='white'/>
      <CiMenuBurger  color='white'/>

     <div className='flex w-[100px]'>
    
    <RoundedButton leftIcon={<FiPlus color='#000000'/>}>create</RoundedButton> </div>
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
  );
}
