export interface BlockType {
  type: 'Image' | 'Text' | 'List' | 'process' | 'flash cards' | 'sorting'
}

export interface BlockToolbarProps {
  onAddBlock: (type: BlockType) => void
  onOpenModal: (type: 'heading' | 'paragraph') => void
}

export interface TextBlock {
  type:
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
  content: string
}

export const TEXT_BLOCKS: TextBlock[] = [
  { type: 'Paragraph', content: 'This is a paragraph' },
  { type: 'Paragraph with heading', content: 'This is a paragraph with heading' },
  { type: 'Paragraph with subheading', content: 'This is a paragraph with subheading' },
  { type: 'Heading', content: 'This is a heading' },
  { type: 'Sub heading', content: 'This is a sub heading' },
  { type: 'Statement A', content: 'This is Statement A' },
  { type: 'Statement B', content: 'This is Statement B' },
  { type: 'Statement C', content: 'This is Statement C' },
  { type: 'Statement D', content: 'This is Statement D' },
  { type: 'Note', content: 'This is a note' },
]
