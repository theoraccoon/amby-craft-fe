'use client'

import React from 'react'
import { IoSparklesSharp, IoImage } from 'react-icons/io5'
import { MdOutlineTextFields } from 'react-icons/md'
import { GoListUnordered } from 'react-icons/go'
import { FiVideo, FiLayers } from 'react-icons/fi'
import { BsBack } from 'react-icons/bs'
import { TEXT_BLOCKS, TextBlock } from '@/types'

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
    <div className="flex gap-2 flex-wrap bg-[#222222] p-2 rounded h-[93px] w-[1023px] items-center justify-around">
      {blockIcons.map(({ type, icon, label, modal }) => (
        <button
          key={type}
          onClick={() => {
            if (modal && modalTypeMap[type]) {
              const targetType = modalTypeMap[type]
              const block = TEXT_BLOCKS.find((b) => b.type === targetType)
              if (block) onOpenModal(block)
            }
          }}
          className="flex flex-col items-center px-3 py-2 rounded text-white hover:bg-gray-700"
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </button>
      ))}
    </div>
  )
}
