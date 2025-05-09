'use client'

export type BlockType = 'Image' | 'Text' | 'List' | 'process' | 'flash cards' | 'sorting'

import React from 'react'
import { IoSparklesSharp, IoImage } from 'react-icons/io5'
import { MdOutlineTextFields } from 'react-icons/md'
import { GoListUnordered } from 'react-icons/go'
import { FiVideo, FiLayers } from 'react-icons/fi'
import { BsBack } from 'react-icons/bs'

interface BlockToolbarProps {
  onAddBlock: (type: BlockType) => void
  onOpenModal: (type: 'heading' | 'paragraph') => void
}

export default function BlockToolbar({ onAddBlock, onOpenModal }: BlockToolbarProps) {
  const blockIcons = [
    { type: 'ai', icon: <IoSparklesSharp color="#F8AF43" />, label: 'Ai' },
    { type: 'ai image', icon: <IoImage color="#F8AF43" />, label: 'Ai Image' },
    { type: 'text', icon: <MdOutlineTextFields />, label: 'Text' },
    { type: 'List', icon: <GoListUnordered />, label: 'Leading' },
    { type: 'image', icon: <IoImage />, label: 'Image' },
    { type: 'video', icon: <FiVideo />, label: 'Video' },
    { type: 'process', icon: <IoImage />, label: 'Process' },
    { type: 'flash cards', icon: <BsBack />, label: 'Flash Cards' },
    { type: 'sorting', icon: <FiLayers />, label: 'Sorting' },
  ]

  return (
    <div className="flex gap-2 flex-wrap bg-[#222222] p-2 rounded  h-[93px] w-[1023px] items-center justify-around ">
      {blockIcons.map(({ type, icon, label }) => {
        // const isModalType = type === 'Text' || type === 'heading'

        return (
          <button
            key={type}
            onClick={() => {
              //   isModalType ? onOpenModal(type) : onAddBlock(type as BlockType)
            }}
            className="flex flex-col items-center px-3 py-2 rounded text-white hover:bg-gray-700"
          >
            {icon}
            <span className="text-xs mt-1">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
