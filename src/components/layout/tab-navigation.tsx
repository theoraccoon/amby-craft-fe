import React, { useState } from 'react'

import { BiBookAlt, BiBookOpen } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import { MdGridView } from 'react-icons/md'

const menuItems = [
  { id: 'dashboard', text: 'Dashboard', IconComponent: MdGridView },
  { id: 'courses', text: 'Courses', IconComponent: BiBookOpen },
  { id: 'microlearning', text: 'Microlearning', IconComponent: BiBookAlt },
  { id: 'question_banks', text: 'Question Banks', IconComponent: FiArchive },
]

export default function TabNavigator() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="md:hidden fixed bottom-1 left-0 w-full  flex flex-row justify-around items-center h-[80px] z-80 ">
      <div className="w-[80%] h-full flex justify-center items-center pl-5">
        <div className="flex bg-tertiary rounded-[30px] w-[100%] h-[50px] justify-around items-center">
          {menuItems.map(item => {
            const Icon = item.IconComponent
            const isActive = activeTab === item.id

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-2 rounded-full cursor-pointer transition-all flex items-center justify-center  w-[56px] h-[35px]
                  ${isActive ? 'bg-[#F8AF43]' : ''}`}
              >
                <Icon color={isActive ? 'black' : 'white'} size={17.28} />
              </div>
            )
          })}
        </div>
      </div>

      <div className=" w-[20%] h-full flex justify-center items-center">
        <div className="glow-shadow bg-primary w-[45px] h-[45px] rounded-full flex justify-center items-center">
          <FiPlus size={20} />
        </div>
      </div>
    </div>
  )
}
