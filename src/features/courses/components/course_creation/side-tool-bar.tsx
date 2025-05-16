import { use, useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { toolBarIcons } from '@/features/dashboard/data/toolbarData'

interface SideToolBarProps {
  showToolbar: boolean
  setShowToolbar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideToolBar({ showToolbar = false, setShowToolbar }: SideToolBarProps) {
  return (
    showToolbar && (
      <div className="absolute inset-y-0 left-0 bg-[#222222] w-[15%] ">
        <div className="flex justify-between items-center px-6 mt-12 mb-10">
          <h3 className="text-xl   ">Block Library</h3>
          <FiX onClick={() => setShowToolbar(!showToolbar)} />
        </div>

        {toolBarIcons.map((tool, index) => {
          return (
            <div
              key={index}
              className="text-white text-xs flex items-center  gap-x-5 pl-6 hover:bg-gray-700 py-3 cursor-pointer"
            >
              <span>{tool.icon}</span>
              <span>{tool.label}</span>
            </div>
          )
        })}
      </div>
    )
  )
}
