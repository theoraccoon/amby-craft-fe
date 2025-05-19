import { FiX } from 'react-icons/fi'
import { toolBarIcons } from '@/features/dashboard/data/toolbarData'
import { ToolbarItem } from '@/features/dashboard/types/type'

interface SideToolBarProps {
  showToolbar: boolean
  showTextFormat?: boolean
  setShowToolbar: React.Dispatch<React.SetStateAction<boolean>>
  setShowTextFormat?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideToolBar({
  showToolbar = false,
  showTextFormat = false,
  setShowToolbar,
  setShowTextFormat,
}: SideToolBarProps) {

const handleTextFormat = (tool: ToolbarItem) => {
  if (!setShowTextFormat) return;
  setShowTextFormat(showTextFormat => tool.type === 'Text' ? !showTextFormat : false);
}

  return (
    showToolbar && (
      <div className="absolute inset-y-0 left-0 bg-[#222222] w-[15%] ">
        <div className="flex justify-between items-center px-6 mt-12 mb-10">
          <h3 className="text-xl   ">Block Library</h3>
          <FiX onClick={() => setShowToolbar(!showToolbar)} />
        </div>

        {toolBarIcons.map((tool, index) => {
          return (
            <div
              key={index}
              className="text-white text-xs flex items-center  gap-x-5 pl-6 hover:bg-[#282828] py-3 cursor-pointer"
              onClick={() => handleTextFormat(tool)}
            >
              <span>{tool.icon}</span>
              <span>{tool.label}</span>
            </div>
          )
        })}
      </div>
    )
  )
}
