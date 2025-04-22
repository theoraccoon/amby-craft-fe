'use client';

import { useState } from 'react';

import { FiUser } from 'react-icons/fi';

export default function ToggleTextWithIcon() {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-xl  transition-colors  ${active ? ' text-[#F8AF43]' : 'bg-transparent text-white'
        }`}
    >
      <FiUser />
      <span className="text-sm font-medium m-[10px]">Private</span>
    </div>
  );
}
