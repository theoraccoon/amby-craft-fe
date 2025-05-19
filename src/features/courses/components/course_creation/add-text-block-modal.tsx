'use client'
import { TextBlock } from '@/types'
import React, { useCallback, useEffect, useState } from 'react'
import { TEXT_BLOCKS } from './blocks/text_blocks/text-block-data'

function AddTextBlockModal({
  type,
  onClose,
  onAddBlock,
  onTypeChange,
}: {
  type: TextBlock['type']
  onClose: () => void
  onAddBlock: (block: TextBlock) => void
  onTypeChange: (block: TextBlock) => void
}) {
  const [selectedType, setSelectedType] = useState<TextBlock['type']>(type)

  const selectedBlock = TEXT_BLOCKS.find(b => b.type === selectedType)

  const requiresHeading = ['Heading'].includes(selectedType)

  const requiresSubHeading = ['Sub heading'].includes(selectedType)

  console.log(requiresHeading)

  const requiresParagraph = ['Paragraph'].includes(selectedType)

  const requiresParagraphWithHeading = ['Paragraph with heading'].includes(selectedType)

  const requiresParagraphWithSubHeading = ['Paragraph with subheading'].includes(selectedType)

  const standaloneTextTypes = [
    'Statement A',
    'Statement B',
    'Statement C',
    'Statement D',
    'Note',
    'Columns',
  ]
  const handleAddBlock = useCallback(() => {
    if (!selectedBlock) {
      console.warn('Selected block not found for type:', selectedType)
      return
    }
    onAddBlock(selectedBlock)
    onClose()
  }, [selectedBlock, onAddBlock, onClose])

  // Handle Enter key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleAddBlock()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedBlock])

  const handleBlockClick = (block: TextBlock) => {
    setSelectedType(block.type)
    onTypeChange(block)
  }

  return (
    <div className="flex w-[495px] h-[395px] text-white ">
      {/* Block list */}
      <div className="w-[30%] h-full bg-[#222222] rounded-l-[15px] space-y-2 overflow-y-auto no-scrollbar p-5">
        {TEXT_BLOCKS.map(block => (
          <div
            key={block.type}
            onClick={() => handleBlockClick(block)}
            className={`cursor-pointer p-2 rounded text-xs ${
              selectedType === block.type
                ? 'bg-tertiary text-white font-bold'
                : 'hover:bg-neutral-700'
            }`}
          >
            {block.type}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="w-[70%] h-full bg-tertiary rounded-r-[15px] flex flex-col justify-center items-start text-center px-3 space-y-2">
        {requiresParagraphWithHeading && (
          <div className="flex flex-col justify-center items-start bg-[#444444] p-3 rounded-md w-[300px] h-[170px">
            <h1 className="text-3xl font-semibold">Heading</h1>
            <p className="text-xs  text-left">{selectedBlock?.content}</p>
          </div>
        )}
        {requiresParagraphWithSubHeading && (
          <div className="flex flex-col justify-center items-start bg-[#444444] p-3 rounded-md w-[300px] h-[170px">
            <h2 className="text-lg ">Sub Heading</h2>{' '}
            <p className="text-xs text-left">{selectedBlock?.content}</p>
          </div>
        )}
        {requiresParagraph && (
          <p className="flex flex-col justify-center items-start text-xs  bg-[#444444] p-3 rounded-md text-left w-[300px] h-[170px]">
            {selectedBlock?.content}
          </p>
        )}
        {requiresHeading && (
          <h1 className="text-3xl flex flex-col justify-center items-start bg-[#444444]  p-3 rounded-md  w-[300px] h-[170px]">
            {selectedBlock?.content}
          </h1>
        )}

        {requiresSubHeading && (
          <h2 className="text-lg flex flex-col justify-center items-start bg-[#444444] p-3 rounded-md w-[300px] h-[170px]">
            {selectedBlock?.content}
          </h2>
        )}
        {standaloneTextTypes.includes(selectedType) && selectedBlock && (
          <h1 className="flex flex-col justify-center items-start bg-[#444444] p-3 rounded-md w-[300px] h-[170px]">
            {selectedBlock?.content}
          </h1>
        )}
      </div>
    </div>
  )
}

export default AddTextBlockModal
