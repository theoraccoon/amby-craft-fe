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

export const TEXT_BLOCKS: TextBlock[] = [
  {
    type: 'Paragraph',
    content:
      'Office ipsum you must be muted. Respectively more / drawing-board boy we world weaponize hear turn. Backwards hop work too office responsible tomorrow crystallize mindfulness. Closer baseline win tentative whatever pushback. Pollination comes sky asserts game hear web we. ',
  },
  {
    type: 'Paragraph with heading',
    content:
      'Office ipsum you must be muted. Respectively more / drawing-board boy we world weaponize hear turn. Backwards hop work too office responsible tomorrow crystallize mindfulness. Closer baseline win tentative whatever pushback. Pollination comes sky asserts game hear web we. ',
  },
  {
    type: 'Paragraph with subheading',
    content:
      'Office ipsum you must be muted. Respectively more / drawing-board boy we world weaponize hear turn. Backwards hop work too office responsible tomorrow crystallize mindfulness. Closer baseline win tentative whatever pushback. Pollination comes sky asserts game hear web we. ',
  },
  { type: 'Heading', content: 'Heading' },
  {
    type: 'Sub heading',
    content: 'Heading',
  },
  { type: 'Columns', content: 'This is Columns' },
  { type: 'Statement A', content: 'This is Statement A' },
  { type: 'Statement B', content: 'This is Statement B' },
  { type: 'Statement C', content: 'This is Statement C' },
  { type: 'Statement D', content: 'This is Statement D' },
  { type: 'Note', content: 'This is a note' },
]
