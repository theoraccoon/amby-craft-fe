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
import blockRender from './block-render'
import BlockRenderer from './block-render'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { v4 as uuid } from 'uuid'

import AddTextBlockModal from '@/features/courses/components/course_creation/add-text-block-modal'
import BlockToolbar from '@/features/courses/components/course_creation/tool-bar'
import { StoredBlock } from '@/types'

export default function Editor() {
  const [blocks, setBlocks] = useState<StoredBlock[]>([])
  const [activeDropdownBlockId, setActiveDropdownBlockId] = useState<string | null>(null)
  const [openModalForBlockId, setOpenModalForBlockId] = useState<string | null>(null)
  const [showToolbar, setShowToolbar] = useState<boolean>(false)
  const [showTextFormat, setShowTextFormat] = useState<boolean>(false)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null)

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
                  className="relative mb-6 border-[#FFFFFF1A] border-t border-dashed w-full h-[200px] flex flex-col"
                  onMouseEnter={() => setHoveredBlockId(block.id)}
                  onMouseLeave={() => setHoveredBlockId(null)}
                >
                  <div className="flex flex-row w-full">
                    {/* Hover toolbar button */}
                    <div className="w-[225px] h-10">
                      {hoveredBlockId === block.id && (
                        <div
                          className="flex w-[225px] justify-around items-center bg-[rgb(34,34,34)] h-10 rounded-[50px] cursor-pointer"
                          onClick={() => {
                            setOpenModalForBlockId(block.id)
                            setActiveDropdownBlockId(block.id)
                          }}
                        >
                          <p className="text-xs">{block.type}</p>
                          <RiArrowDropDownLine className="text-lg" />
                        </div>
                      )}
                    </div>

                    {/* Main block content */}
                    <div className="w-4/6 relative">
                      {hoveredBlockId === block.id && (
                        <div className="absolute left-[50%] -top-2.5 z-20">
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
                      )}

                      <div className="p-10 transition">
                        <BlockRenderer
                          key={block.id}
                          block={block}
                          index={index}
                          onChange={handleBlockChange}
                          onAddAfter={handleAddNewBlockAfter}
                        />
                      </div>
                    </div>
                  </div>

                  
                  {activeDropdownBlockId === block.id && openModalForBlockId === block.id && (
                    <div className="absolute z-30">
                      <AddTextBlockModal
                        type={block.type}
                        onClose={() => setOpenModalForBlockId(null)}
                        onAddBlock={b => handleReplaceBlockType(block.id, b.type)}
                        onTypeChange={() => {}}
                      />
                    </div>
                  )}
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
