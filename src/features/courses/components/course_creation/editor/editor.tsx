'use client'

import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import BlockToolbar from '@/features/courses/components/course_creation/tool-bar'
import AddTextBlockModal from '@/features/courses/components/course_creation/add-text-block-modal'
import ParagraphBlock from '@/features/courses/components/course_creation/blocks/text_blocks/paragraph-block'
import HeadingWithParagraphBlock from '@/features/courses/components/course_creation/blocks/text_blocks/paragraph-with-headting'
import { TextBlock } from '@/types'
import { TEXT_BLOCKS } from '../blocks/text_blocks/text-block-data'
import Image from 'next/image'

export type StoredBlock = TextBlock & { id: string }

export default function Editor() {
  const [blocks, setBlocks] = useState<StoredBlock[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalBlock, setModalBlock] = useState<TextBlock | null>(null)

  const handleOpenModal = (block: TextBlock) => {
    setModalBlock(block)
    setIsModalOpen(true)
  }

  const handleAddBlockInline = (block: TextBlock) => {
    const prefilled = TEXT_BLOCKS.find((b) => b.type === block.type)
    if (!prefilled) return
    setBlocks((prev) => [...prev, { ...prefilled, id: uuid() }])
  }

  const handleAddBlockFromModal = (block: TextBlock) => {
    const prefilled = TEXT_BLOCKS.find((b) => b.type === block.type)

    if (!prefilled) return
    setBlocks((prev) => [...prev, { ...prefilled, id: uuid() }])
    setIsModalOpen(false)
  }

  const renderBlock = (block: StoredBlock) => {
    switch (block.type) {
      case 'Paragraph':
        return <ParagraphBlock key={block.id} content={block.content} onChange={() => {}} />
      case 'Paragraph with heading':
        return (
          <HeadingWithParagraphBlock
            key={block.id}
            headingContent={'Heading'}
            paragraphContent={block.content}
            onChange={() => {}}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {blocks.map(renderBlock)}

      <BlockToolbar onAddBlock={handleAddBlockInline} onOpenModal={handleOpenModal} />

      <div className="w-full flex justify-center !border !border-dashed border-[#FFFFFF1A] h-[8rem]  relative">
        <div className="w-5 h-5 absolute -top-2">
          <Image
            src="/images/hover-icon.svg"
            className="block max-w-[20px]  object-contain rounded-[1.2rem] !relative h-full w-full"
            alt="Login Background"
            fill={true}
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {isModalOpen && modalBlock && (
        <AddTextBlockModal
          type={modalBlock.type}
          onClose={() => setIsModalOpen(false)}
          onAddBlock={handleAddBlockFromModal}
        />
      )}
    </div>
  )
}
