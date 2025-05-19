'use client'

import Image from 'next/image'
import React, { useState } from 'react'

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

  const handleSideToolBar = () => {
    setShowToolbar(!showToolbar)
    setShowTextFormat(false)
  }

  const renderBlock = (block: StoredBlock) => {
    console.log(block)
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
      <div className="w-[70%] flex flex-col justify-center border-y border-dashed   border-[#FFFFFF1A] p-10">
        <div className=" flex flex-row w-full ">
          <div className="w-[25%] z-10">
            {isModalOpen && modalBlock && (
              <>
                <div
                  className="flex justify-around items-center bg-[#222222] h-10 w-[255px] rounded-[50px] cursor-pointer"
                  onClick={() => handleOpenModal(modalBlock)}
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
            <div
              className="absolute top-[-50px] left-1/3 transform -translate-x-1/2"
              onClick={() => handleSideToolBar()}
            >
              <Image
                src="/images/hover-icon.svg"
                className="w-5 h-5 object-contain rounded-[1.2rem]"
                alt="Login Background"
                width={20}
                height={20}
                quality={100}
                priority
              />
            </div>

          <div className="flex flex-col items-center p-10 w-full">{blocks.map(renderBlock)}</div>
          </div>
        </div>
      </div>

      <BlockToolbar onAddBlock={handleAddBlockInline} onOpenModal={handleOpenModal} />
    </div>
  )
}
