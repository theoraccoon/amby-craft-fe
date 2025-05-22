export interface BlockType {
  type: 'Image' | 'Text' | 'List' | 'process' | 'flash cards' | 'sorting' | 'Video'
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
    | 'Columns'
    | 'Statement B'
    | 'Statement C'
    | 'Statement D'
    | 'Note'

  content: string
}
export type VideoBlock = {
  type: 'Video'
  content: string
}

export type StoredBlock = (TextBlock & { id: string }) | (VideoBlock & { id: string })
