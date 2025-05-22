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
  const [activeDropdownBlockId, setActiveDropdownBlockId] = useState<string | null>(null)
  const [openModalForBlockId, setOpenModalForBlockId] = useState<string | null>(null)
  const [showToolbar, setShowToolbar] = useState(false)
  const [showTextFormat, setShowTextFormat] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInsertBlock = () => {
    const defaultBlock = TEXT_BLOCKS.find(b => b.type === 'Paragraph with heading')
    if (defaultBlock) {
      setBlocks(prev => [...prev, { ...defaultBlock, id: uuid() }])
    }
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

  // Replace block type & content for a block with given id
  const handleReplaceBlockType = (blockId: string, newType: string) => {
    const newTemplate = TEXT_BLOCKS.find(b => b.type === newType)
    if (!newTemplate) return

    setBlocks(prev => prev.map(b => (b.id === blockId ? { ...newTemplate, id: blockId } : b)))
    setOpenModalForBlockId(null)
    setActiveDropdownBlockId(null)
  }

  const renderBlock = (block: StoredBlock, index: number) => {
    const commonProps = {
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
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col justify-center items-center p-10 w-full">
        <div className="flex flex-row w-full">
          <SideToolBar
            showToolbar={showToolbar}
            setShowToolbar={setShowToolbar}
            showTextFormat={showTextFormat}
            setShowTextFormat={setShowTextFormat}
          />
          {showTextFormat && <TextFormats />}

          <div className="flex flex-col w-[100%] relative">
            <div className="flex flex-col items-center w-full ">
              {blocks.map((block, index) => (
                <div
                  key={block.id}
                  className="relative mb-6 border-[#FFFFFF1A] border-t border-dashed w-full h-[200px]  flex flex-col"
                >
                  <div className="flex flex-row justify-center first-letter:w-full ">
                    <div className="absolute left-0 top-2">
                      <div
                        className="flex w-[225px] justify-around items-center bg-[rgb(34,34,34)] h-10 rounded-[50px] cursor-pointer "
                        onClick={() => {
                          setOpenModalForBlockId(block.id)
                          setActiveDropdownBlockId(block.id)
                        }}
                      >
                        <p className="text-xs">{block.type}</p>
                        <RiArrowDropDownLine className="text-lg" />
                      </div>
                    </div>
                    <div className="absolute left-0 top-14  z-10">
                      {activeDropdownBlockId === block.id && openModalForBlockId === block.id && (
                        <AddTextBlockModal
                          type={block.type}
                          onClose={() => setOpenModalForBlockId(null)}
                          onAddBlock={b => handleReplaceBlockType(block.id, b.type)}
                          onTypeChange={() => {}}
                        />
                      )}
                    </div>

                    <div className="w-4/6 ">
                      <div className="absolute left-[50%] -top-2.5">
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
                      <div className="p-10 animate__animated animate__zoomIn">{renderBlock(block, index)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BlockToolbar
        onOpenModal={handleInsertBlock}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </div>
  )
}
