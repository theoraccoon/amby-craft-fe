'use client'

import { useState } from 'react'

import { FiBriefcase, FiFolder, FiUser } from 'react-icons/fi'

import ToggleTextWithIcon from '@/components/ui/button/text-icon-button'

const navItems = [
  { label: 'Private', icon: <FiUser /> },
  { label: 'Team', icon: <FiBriefcase /> },
  { label: 'Settings', icon: <FiFolder /> },
]

export default function Nav() {
  const [activeLabel, setActiveLabel] = useState('Home')
  return (
    <div className="flex w-[70%] h-full  ">
      {navItems.map(item => (
        <ToggleTextWithIcon
          key={item.label}
          icon={item.icon}
          label={item.label}
          defaultActive={item.label === activeLabel}
          onToggle={() => setActiveLabel(item.label)}
          activeColor="text-[#F8AF43]"
          inactiveColor="text-white"
        />
      ))}
    </div>
  )
}
