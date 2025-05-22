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
    | 'Columns'
    | 'Statement B'
    | 'Statement C'
    | 'Statement D'
    | 'Note'
  content: string
}

 enum FlashCardType {
   TEXT_WITH_IMAGE = 'TextWithImage',
   IMAGE_WITH_IMAGE = 'ImageWithImage',
   TEXT_WITH_TEXT = 'TextWithText',
 }

export interface FlashCardBlock {
  type: FlashCardType
  front: string | React.ReactNode
  back: string | React.ReactNode
}