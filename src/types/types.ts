export interface FlashCardBlock {
  type: string;
  front: string | React.ReactNode;
  back: string | React.ReactNode;
}

export interface ToggleTextWithIconProps {
  icon: React.ReactNode
  label: string
  activeColor?: string
  inactiveColor?: string
  defaultActive?: boolean
  onToggle?: (active: boolean) => void
}

export interface HeaderActionsPanelProps {
  isDashboardPage: boolean
}

export type Course = {
  title: string
  description: string
  imageUrl: string
  instructor: string
  initials?: string
  lessonsCount: number
  date: string
}

export type Folder = {
  title?: string
  badgeCount?: number
  children?: Folder[]
  courses?: Course[]
}

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

export interface Lesson {
  title: string
  showContent: boolean
  sections: string[]
}
