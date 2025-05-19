import React from 'react'

import FolderActionDropDown from './folder-action-drop-down'
import { FiChevronRight } from 'react-icons/fi'
import { HiDotsHorizontal } from 'react-icons/hi'

// import FolderActionDropDown from './_components/course_creation/folder-action-drop-down'

type FolderBreadcrumbProps = {
  currentPath: string[]
  onNavigate: (path: string[]) => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
  showDropdown: boolean
  toggleDropdown: () => void
}

export default function FolderBreadcrumb({
  currentPath,
  onNavigate,
  dropdownRef,
  showDropdown,
  toggleDropdown,
}: FolderBreadcrumbProps) {
  return (
    <div className="flex flex-row flex-nowrap items-center text-[14px] font-semibold tracking-wide text-[#b9b8b8] space-x-1">
      <span
        className={`cursor-pointer hover:underline ${
          currentPath.length === 0 ? 'text-text-secondary ' : ''
        }`}
        onClick={() => onNavigate([])}
      >
        Folders
      </span>

      {currentPath.map((folder: string, idx: number) => (
        <span key={idx} className="inline-flex items-center group relative">
          <FiChevronRight className="text-text-secondary mx-2 text-lg" />
          <span className="flex items-center gap-1">
            <span
              className={`cursor-pointer hover:underline ${
                idx === currentPath.length - 1 ? 'text-text-secondary' : ''
              }`}
              onClick={() => onNavigate(currentPath.slice(0, idx + 1))}
            >
              {folder}
            </span>

            {idx === currentPath.length - 1 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className={`ml-1 p-1 rounded hover:bg-[#333] inline-flex transition-opacity ${
                    showDropdown ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <HiDotsHorizontal className="text-[#a1a0a0] hover:text-text-secondary w-[16px] h-[16px]" />
                </button>

                {showDropdown && <FolderActionDropDown />}
              </div>
            )}
          </span>
        </span>
      ))}
    </div>
  )
}
