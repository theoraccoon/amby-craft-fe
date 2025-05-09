'use client'
import React, { useState } from 'react'

type BlockType =
  | 'Paragraph'
  | 'Paragraph with heading'
  | 'Paragraph with subheading'
  | 'Heading'
  | 'Sub heading'
  | 'Statement A'
  | 'Statement B'
  | 'Statement C'
  | 'Statement D'
  | 'Note'

type Props = {
  type: BlockType
}

const blockContentMap: Record<BlockType, string> = {
  Paragraph: 'This is a paragraph',
  'Paragraph with heading': 'This is a paragraph with heading',
  'Paragraph with subheading': 'This is a paragraph with subheading',
  Heading: 'This is a heading',
  'Sub heading': 'This is a sub heading',
  'Statement A': 'This is Statement A',
  'Statement B': 'This is Statement B',
  'Statement C': 'This is Statement C',
  'Statement D': 'This is Statement D',
  Note: 'This is a note',
}

function AddTextBlockModal({ type }: Props) {
  const [selectedType, setSelectedType] = useState<BlockType>(type)

  return (
    <div className="flex w-[495px] h-[395px] text-white p-2">
      {/* Block list */}
      <div className="w-[30%] h-full bg-[#222222] rounded-l-lg p-2 space-y-2 overflow-y-auto no-scrollbar">
        {Object.keys(blockContentMap).map((block) => (
          <div
            key={block}
            onClick={() => setSelectedType(block as BlockType)}
            className={`cursor-pointer p-2 rounded text-xs ${
              selectedType === block
                ? 'bg-tertiary text-white font-bold *:'
                : 'hover:bg-neutral-700'
            }`}
          >
            {block}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="w-[70%] h-full bg-tertiary rounded-r-lg flex items-center justify-center text-center px-4">
        {blockContentMap[selectedType]}
      </div>
    </div>
  )
}

export default AddTextBlockModal
