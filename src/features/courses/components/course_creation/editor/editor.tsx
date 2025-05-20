'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Columnblock from '../blocks/text_blocks/column-block'
import HeadingBlock from '../blocks/text_blocks/heading-block'
import NoteBlock from '../blocks/text_blocks/note-block'
import ParagraphBlock from '../blocks/text_blocks/paragraph-block'
import HeadingWithParagraphBlock from '../blocks/text_blocks/paragraph-with-heading'
import ParagraphWithSubheadinghBlock from '../blocks/text_blocks/paragraph-with-subheading-block'
import StatementABlock from '../blocks/text_blocks/statement-a-block'
import StatementBblock from '../blocks/text_blocks/statement-b-block'
import StatementCblock from '../blocks/text_blocks/statement-c-block'
import StatementDblock from '../blocks/text_blocks/statement-d-block'
import { TEXT_BLOCKS } from '../blocks/text_blocks/text-block-data'
import SideToolBar from '../side-toolbar'
import TextFormats from '../text-format'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { v4 as uuid } from 'uuid'

import AddTextBlockModal from '@/features/courses/components/course_creation/add-text-block-modal'
import BlockToolbar from '@/features/courses/components/course_creation/tool-bar'
import { TextBlock } from '@/types'

export type StoredBlock = TextBlock & { id: string }

export default function Editor() {
  const [blocks, setBlocks] = useState<StoredBlock[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalBlock, setModalBlock] = useState<TextBlock | null>(null)
  const [showToolbar, setShowToolbar] = useState(false)
  const [showTextFormat, setShowTextFormat] = useState(false)
  const [showDropdown, setShowDropDown] = useState(false)

  const handleInsertBlock = () => {
    const defaultBlock = TEXT_BLOCKS.find(b => b.type === 'Paragraph with heading')
    if (defaultBlock) {
      setBlocks(prev => [...prev, { ...defaultBlock, id: uuid() }])
    }
  }

  const handleOpenModal = (block: TextBlock) => {
    handleInsertBlock()
    setModalBlock(block)
  }

  const handleAddBlockFromModal = (block: TextBlock) => {
    const prefilled = TEXT_BLOCKS.find(b => b.type === block.type)
    if (!prefilled) return
    setBlocks(prev => [...prev, { ...prefilled, id: uuid() }])
    setIsModalOpen(false)
  }

  const handleAddNewBlockAfter = (index: number) => {
    const defaultBlock = TEXT_BLOCKS.find(b => b.type === 'Paragraph')
    if (defaultBlock) {
      const updated = [...blocks]
      updated.splice(index + 1, 0, { ...defaultBlock, id: uuid() })
      setBlocks(updated)
    }
  }

  const handleBlockChange = (index: number, value: string) => {
    const updated = [...blocks]
    updated[index].content = value
    setBlocks(updated)
  }

  const renderBlock = (block: StoredBlock, index: number) => {
    const commonProps = {
      key: block.id,
      content: block.content,
      onChange: (val: string) => handleBlockChange(index, val),
      onEnterPress: () => handleAddNewBlockAfter(index),
    }

    switch (block.type) {
      case 'Paragraph':
        return <ParagraphBlock {...commonProps} />
      case 'Heading':
        return <HeadingBlock {...commonProps} />
      case 'Paragraph with heading':
        return (
          <HeadingWithParagraphBlock
            key={block.id}
            headingContent={'Heading'}
            paragraphContent={block.content}
            onChange={() => {}}
          />
        )
      case 'Paragraph with subheading':
        return (
          <ParagraphWithSubheadinghBlock
            key={block.id}
            headingContent={'Subheading'}
            paragraphContent={block.content}
            onChange={() => {}}
          />
        )
      case 'Statement A':
        return <StatementABlock {...commonProps} />
      case 'Statement B':
        return <StatementBblock {...commonProps} />
      case 'Statement C':
        return <StatementCblock {...commonProps} />
      case 'Statement D':
        return <StatementDblock {...commonProps} />
      case 'Columns':
        return <Columnblock {...commonProps} />
      case 'Note':
        return <NoteBlock {...commonProps} />
      default:
        return <ParagraphBlock {...commonProps} />
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-[70%] flex flex-col justify-center p-10">
        <div className="flex flex-row w-full">
          <div className="w-[25%] z-10">
            {showDropdown && modalBlock && (
              <>
                <div
                  className="flex justify-around items-center bg-[#222222] h-10 w-[255px] rounded-[50px] cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <p className="text-xs">{modalBlock.type}</p>
                  <RiArrowDropDownLine className="text-lg" />
                </div>

                {isModalOpen && (
                  <AddTextBlockModal
                    type={modalBlock.type}
                    onClose={() => setIsModalOpen(false)}
                    onAddBlock={handleAddBlockFromModal}
                    onTypeChange={setModalBlock}
                  />
                )}
              </>
            )}
          </div>

          <SideToolBar
            showToolbar={showToolbar}
            setShowToolbar={setShowToolbar}
            showTextFormat={showTextFormat}
            setShowTextFormat={setShowTextFormat}
          />
          {showTextFormat && <TextFormats />}

          <div className="flex flex-col w-[75%] relative">
            <div className="flex flex-col items-center w-full">
              {blocks.map((block, index) => (
                <div
                  key={block.id}
                  className="relative mb-6 border-[#FFFFFF1A] border-t border-dashed"
                >
                  {renderBlock(block, index)}
                  <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 cursor-pointer">
                    <Image
                      src="/images/hover-icon.svg"
                      className="w-5 h-5 object-contain rounded-[1.2rem]"
                      alt="Hover Icon"
                      width={20}
                      height={20}
                      quality={100}
                      priority
                      onClick={() => setShowToolbar(!showToolbar)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BlockToolbar
        showDropdown={showDropdown}
        setShowDropdown={setShowDropDown}
        onOpenModal={handleOpenModal}
      />
    </div>
  )
}
