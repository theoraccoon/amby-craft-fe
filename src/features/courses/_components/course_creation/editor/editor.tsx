'use client'

import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import BlockToolbar from '@/features/courses/_components/course_creation/tool-bar'
import AddTextBlockModal from '@/features/courses/_components/course_creation/add-text-block-modal'
import ParagraphBlock from '@/features/courses/_components/course_creation/blocks/text_blocks/paragraph-block'
import HeadingWithParagraphBlock from '@/features/courses/_components/course_creation/blocks/text_blocks/paragraph-with-headting'
import { TextBlock } from '@/types'
import { TEXT_BLOCKS } from '../blocks/text_blocks/text-block-data'

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

    console.log(prefilled, 'eke')
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
            headingContent={block.content}
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
