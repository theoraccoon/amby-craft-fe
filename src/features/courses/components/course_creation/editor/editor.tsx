'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import Columnblock from '../blocks/text_blocks/column-block'
import HeadingBlock from '../blocks/text_blocks/heading-block'
import NoteBlock from '../blocks/text_blocks/note-block'
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
import ParagraphBlock from '@/features/courses/components/course_creation/blocks/text_blocks/paragraph-block'
import HeadingWithParagraphBlock from '@/features/courses/components/course_creation/blocks/text_blocks/paragraph-with-heading'
import BlockToolbar from '@/features/courses/components/course_creation/tool-bar'
import { TextBlock } from '@/types'

export type StoredBlock = TextBlock & { id: string }

export default function Editor() {
  const [blocks, setBlocks] = useState<StoredBlock[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalBlock, setModalBlock] = useState<TextBlock | null>(null)
  const [showToolbar, setShowToolbar] = useState<boolean>(false)
  const [showTextFormat, setShowTextFormat] = useState<boolean>(false)

const handleOpenModal = (block: TextBlock) => {
  if (blocks.length === 0) {
    const defaultBlock = TEXT_BLOCKS.find(b => b.type === 'Paragraph with heading')
    if (defaultBlock) {
      setBlocks([{ ...defaultBlock, id: uuid() }])
    }
  }

  setModalBlock(block)
  setIsModalOpen(true)
}


  const handleAddBlockInline = (block: TextBlock) => {
    const prefilled = TEXT_BLOCKS.find(b => b.type === block.type)
    if (!prefilled) return
    setBlocks(prev => [...prev, { ...prefilled, id: uuid() }])
  }

  const handleAddBlockFromModal = (block: TextBlock) => {
    const prefilled = TEXT_BLOCKS.find(b => b.type === block.type)

    if (!prefilled) return
    setBlocks(prev => [...prev, { ...prefilled, id: uuid() }])
    setIsModalOpen(false)
  }

  const handleSideToolBar = (index: number) => {
    setShowToolbar(!showToolbar)
    setShowTextFormat(false)
  }

  const renderBlock = (block: StoredBlock) => {
    console.log(block)
    switch (block.type) {
      case 'Paragraph':
        return <ParagraphBlock key={block.id} content={block.content} onChange={() => {}} />
      case 'Heading':
        return <HeadingBlock key={block.id} content={block.content} onChange={() => {}} />
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
        return <StatementABlock key={block.id} content={block.content} onChange={() => {}} />
      case 'Statement B':
        return <StatementBblock key={block.id} content={block.content} onChange={() => {}} />
      case 'Statement C':
        return <StatementCblock key={block.id} content={block.content} onChange={() => {}} />
      case 'Statement D':
        return <StatementDblock key={block.id} content={block.content} onChange={() => {}} />
      case 'Columns':
        return <Columnblock key={block.id} content={block.content} onChange={() => {}} />
      case 'Note':
        return <NoteBlock key={block.id} content={block.content} onChange={() => {}} />
      default:
        return <ParagraphBlock key={block.id} content={block.content} onChange={() => {}} />
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-[70%] flex flex-col justify-center  p-10">
        <div className=" flex flex-row w-full ">
          <div className="w-[25%] z-10">
            {isModalOpen && modalBlock && (
              <>
                <div
                  className="flex justify-around items-center bg-[#222222] h-10 w-[255px] rounded-[50px] cursor-pointer"
                  onClick={() => {
                    handleOpenModal(modalBlock)
                  }}
                >
                  <p className="text-xs">{modalBlock.type}</p>
                  <RiArrowDropDownLine className="text-lg" />
                </div>

                <AddTextBlockModal
                  type={modalBlock.type}
                  onClose={() => setIsModalOpen(false)}
                  onAddBlock={handleAddBlockFromModal}
                  onTypeChange={setModalBlock}
                />
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
                  key={index}
                  className="relative mb-6 border-[#FFFFFF1A] border-t border-dashed"
                >
                  {renderBlock(block)}
                  <div className="w-full  ">
                    <div
                      className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 cursor-pointer"
                      onClick={() => handleSideToolBar(index)}
                    >
                      <Image
                        src="/images/hover-icon.svg"
                        className="w-5 h-5 object-contain rounded-[1.2rem]"
                        alt="Hover Icon"
                        width={20}
                        height={20}
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BlockToolbar onAddBlock={handleAddBlockInline} onOpenModal={handleOpenModal} />
    </div>
  )
}
