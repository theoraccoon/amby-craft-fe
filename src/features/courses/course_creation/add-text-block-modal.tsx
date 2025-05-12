'use client'
import { TEXT_BLOCKS, TextBlock } from '@/types'
import React, { useEffect, useState } from 'react'

function AddTextBlockModal({
  type,
  onClose,
  onAddBlock,
}: {
  type: TextBlock['type']
  onClose: () => void
  onAddBlock: (block: TextBlock) => void
}) {
  const [selectedType, setSelectedType] = useState<TextBlock['type']>(type)

  const selectedBlock = TEXT_BLOCKS.find((b) => b.type === selectedType)

  const requiresHeading = [
    'Paragraph with heading',
    'Paragraph with subheading',
    'Heading',
    'Sub heading',
  ].includes(selectedType)

  const requiresParagraph = [
    'Paragraph',
    'Paragraph with heading',
    'Paragraph with subheading',
  ].includes(selectedType)

  const standaloneTextTypes = ['Statement A', 'Statement B', 'Statement C', 'Statement D', 'Note']
  const handleAddBlock = () => {
    if (selectedBlock) {
      onAddBlock(selectedBlock)
      onClose()
    }
  }

  
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
  return (
    <div className="flex w-[495px] h-[395px] text-white p-2">
      {/* Block list */}
      <div className="w-[30%] h-full bg-[#222222] rounded-l-lg p-2 space-y-2 overflow-y-auto no-scrollbar">
        {TEXT_BLOCKS.map((block) => (
          <div
            key={block.type}
            onClick={() => setSelectedType(block.type)}
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
      <div className="w-[70%] h-full bg-tertiary rounded-r-lg flex flex-col justify-center items-center text-center px-4 space-y-2">
        {requiresHeading && <h3 className="text-lg font-semibold">Sample Heading</h3>}
        {requiresParagraph && <p className="text-sm">This is a sample paragraph for preview.</p>}
        {standaloneTextTypes.includes(selectedType) && selectedBlock && (
          <p className="text-sm">{selectedBlock.content}</p>
        )}
      </div>
    </div>
  )
}

export default AddTextBlockModal
