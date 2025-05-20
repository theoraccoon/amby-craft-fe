'use client'

import React from 'react'

import { TEXT_BLOCKS } from './courseCreationData'
import { BsBack } from 'react-icons/bs'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FiLayers, FiVideo } from 'react-icons/fi'
import { GoListUnordered } from 'react-icons/go'
import { IoImage, IoSparklesSharp } from 'react-icons/io5'
import { MdOutlineTextFields } from 'react-icons/md'

import { TextBlock } from '@/types'

interface BlockToolbarProps {
  onAddBlock: (block: TextBlock) => void
  onOpenModal: (block: TextBlock) => void
}

const modalTypeMap: Record<string, TextBlock['type']> = {
  Text: 'Paragraph',
  Heading: 'Heading',
}

export default function BlockToolbar({
  //   onAddBlock,
  onOpenModal,
}: BlockToolbarProps) {
  const blockIcons = [
    { type: 'ai', icon: <IoSparklesSharp color="#F8AF43" />, label: 'Ai' },
    { type: 'ai image', icon: <IoImage color="#F8AF43" />, label: 'Ai Image' },
    { type: 'Text', icon: <MdOutlineTextFields />, label: 'Text', modal: true },
    { type: 'List', icon: <GoListUnordered />, label: 'List' },
    { type: 'Image', icon: <IoImage />, label: 'Image' },
    { type: 'video', icon: <FiVideo />, label: 'Video' },
    { type: 'process', icon: <IoImage />, label: 'Process' },
    { type: 'flash cards', icon: <BsBack />, label: 'Flash Cards' },
    { type: 'sorting', icon: <FiLayers />, label: 'Sorting' },
  ]

  return (
    <div className="flex p-3">
      <div className=" flex justify-center items-center  bg-white w-[80px] rounded-[10px] mr-3 ">
        <BsFillGrid1X2Fill color="#222222" />
      </div>
      <div className="flex flex-wrap bg-[#222222]  rounded-[10px] items-center justify-around">
        {blockIcons.map(({ type, icon, label, modal }) => (
          <button
            key={type}
            onClick={() => {
              if (modal && modalTypeMap[type]) {
                const targetType = modalTypeMap[type]
                const block = TEXT_BLOCKS.find(b => b.type === targetType)
                if (block) onOpenModal(block)
              }
            }}
            className="flex flex-col items-center px-2 py-4 rounded text-white hover:bg-gray-700 w-[90px] cursor-pointer"
          >
            {icon}
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
