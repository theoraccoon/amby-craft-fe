import React from 'react'
import { FiPlus, FiEdit2, FiUserPlus, FiTrash } from 'react-icons/fi'
import { RiFolderTransferLine } from 'react-icons/ri'

const menuItems = [
  { icon: FiPlus, label: 'New folder' },
  { icon: FiEdit2, label: 'Rename' },
  { icon: FiUserPlus, label: 'Share' },
  { icon: RiFolderTransferLine, label: 'Move' },
  { icon: FiTrash, label: 'Delete' },
]


export default function DropdownMenu() {
    return (
      <div
      style={{
        width: '180px',
        height: '212px',
        borderRadius: '15px',
        boxShadow: '0px 0px 25px 10px #00000038',
      }}
      className="absolute z-50 mt-2 bg-[#222222] text-white rounded-md shadow-lg p-2 space-y-1"
      >
        {menuItems.map(({ icon: Icon, label }) => (
          <button key={label} className="w-full text-left px-3 py-2 hover:bg-[#333] rounded flex items-center gap-4">
            <Icon className="shrink-0" />
            {label}
          </button>
        ))}
      </div>
    )
  }