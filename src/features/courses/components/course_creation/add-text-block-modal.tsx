'use client'

import React, { useCallback, useEffect, useState } from 'react'

import { TEXT_BLOCKS } from './blocks/text_blocks/text-block-data'

import { TextBlock } from '@/types'

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
  }, [selectedBlock, onAddBlock, onClose, selectedType])

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
  }, [handleAddBlock, selectedBlock])

  const handleBlockClick = (block: TextBlock) => {
    setSelectedType(block.type)
    onTypeChange(block)
  }

  return (
    <div className="sticky flex min-h-[395px] w-[550px] overflow-hidden rounded-[15px] bg-[#1e1e1e] text-white">
      {/* Block list */}
      <div className="h-full w-[40%] space-y-2 bg-[#222222] px-4 py-5">
        {TEXT_BLOCKS.map(block => (
          <div
            key={block.type}
            onClick={() => handleBlockClick(block)}
            className={`cursor-pointer font-[Open_Sans] place-content-start items-stretch whitespace-nowrap rounded py-2 px-1 text-left text-xs  ${
              selectedType === block.type
                ? 'bg-tertiary font-bold text-white '
                : 'font-normal hover:bg-neutral-700'
            }`}
          >
            {block.type}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="flex min-h-full w-[60%] flex-col items-center justify-center space-y-2 bg-[#333333] text-left">
        {requiresParagraphWithHeading && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <h1 className="font-[open-san] text-lg font-semibold">Heading</h1>
            <p className="text-xs leading-relaxed text-gray-300">{selectedBlock?.content}</p>
          </div>
        )}
        {requiresParagraphWithSubHeading && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <h2 className="text-base font-medium">Sub Heading</h2>
            <p className="text-xs leading-relaxed text-gray-300">{selectedBlock?.content}</p>
          </div>
        )}
        {requiresParagraph && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <p className="text-xs leading-relaxed text-gray-300">{selectedBlock?.content}</p>
          </div>
        )}
        {requiresHeading && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <h1 className="text-lg font-semibold">{selectedBlock?.content}</h1>
          </div>
        )}
        {requiresSubHeading && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <h2 className="text-base font-medium">{selectedBlock?.content}</h2>
          </div>
        )}
        {standaloneTextTypes.includes(selectedType) && selectedBlock && (
          <div className="flex w-[300px] flex-col items-start justify-start rounded-md bg-[#444444] p-4">
            <p className="text-xs leading-relaxed text-gray-300">{selectedBlock?.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddTextBlockModal
