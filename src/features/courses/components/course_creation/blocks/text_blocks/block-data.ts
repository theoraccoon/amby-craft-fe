import { TextBlock } from '@/types'
import { FlashCardBlock } from '@/types/types'

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

export const FLASH_CARD_BLOCKS: FlashCardBlock[] = [
  {
    type: 'Text Reveal Image',
    front: 'Happy People',
    back: '',
  },
  {
    type: 'Concept',
    front: 'Virtual DOM',
    back: 'A lightweight representation of the real DOM used by React to optimize rendering.',
  },
  {
    type: 'Code Explanation',
    front: 'What does `useEffect` do in React?',
    back: 'It performs side effects in function components, similar to lifecycle methods in class components.',
  },
  {
    type: 'Comparison',
    front: 'useState vs useReducer',
    back: 'useState is simpler for individual state values; useReducer is better for complex state logic.',
  },
  {
    type: 'Best Practice',
    front: 'Why use keys in React lists?',
    back: 'Keys help React identify which items have changed, are added, or are removed.',
  },
  {
    type: 'Trivia',
    front: 'Who created React?',
    back: 'Jordan Walke at Facebook.',
  },
  {
    type: 'True or False',
    front: 'React uses two-way data binding.',
    back: 'False. React uses one-way data binding.',
  },
  {
    type: 'Statement A',
    front: 'Hooks can be used in class components.',
    back: 'False. Hooks are only for function components.',
  },
]
