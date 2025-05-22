import React from 'react'
import { StoredBlock } from '@/types'
import ParagraphBlock from '../blocks/text_blocks/paragraph-block'
import Columnblock from '../blocks/text_blocks/column-block'
import HeadingBlock from '../blocks/text_blocks/heading-block'
import NoteBlock from '../blocks/text_blocks/note-block'
import HeadingWithParagraphBlock from '../blocks/text_blocks/paragraph-with-heading'
import ParagraphWithSubheadinghBlock from '../blocks/text_blocks/paragraph-with-subheading-block'
import StatementABlock from '../blocks/text_blocks/statement-a-block'
import StatementBblock from '../blocks/text_blocks/statement-b-block'
import StatementCblock from '../blocks/text_blocks/statement-c-block'
import StatementDblock from '../blocks/text_blocks/statement-d-block'

interface BlockRendererProps {
  block: StoredBlock
  index: number
  onChange: (index: number, value: string) => void
  onAddAfter: (index: number) => void
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block, index, onChange, onAddAfter }) => {
  const commonProps = {
    content: block.content,
    onChange: (val: string) => onChange(index, val),
    onEnterPress: () => onAddAfter(index),
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
          headingContent="Heading"
          paragraphContent={block.content}
          onChange={() => {}}
        />
      )
    case 'Paragraph with subheading':
      return (
        <ParagraphWithSubheadinghBlock
          key={block.id}
          headingContent="Subheading"
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

export default BlockRenderer
