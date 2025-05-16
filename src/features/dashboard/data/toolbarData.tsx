import { ToolbarItem } from '../types/type'
import { IoSparklesSharp, IoImage } from 'react-icons/io5'
import { MdOutlineTextFields } from 'react-icons/md'
import { GoListUnordered } from 'react-icons/go'
import { FiVideo, FiLayers } from 'react-icons/fi'
import { BsBack } from 'react-icons/bs'

export const toolBarIcons: ToolbarItem[] = [
  { type: 'ai', icon: <IoSparklesSharp color="#F8AF43" />, label: 'Ai' },
  { type: 'ai image', icon: <IoImage color="#F8AF43" />, label: 'Ai Image' },
  { type: 'Text', icon: <MdOutlineTextFields />, label: 'Text', modal: true },
  { type: 'List', icon: <GoListUnordered />, label: 'List' },
  { type: 'Image', icon: <IoImage />, label: 'Image' },
  { type: 'video', icon: <FiVideo />, label: 'Video' },
  { type: 'process', icon: <IoImage />, label: 'Process' },
  { type: 'flash cards', icon: <BsBack />, label: 'Flash Cards' },
  { type: 'sorting', icon: <FiLayers />, label: 'Sorting' },
]
