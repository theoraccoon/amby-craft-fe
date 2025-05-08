'use client';

import { useEffect, useState } from 'react';
import { ToggleTextWithIconProps } from '@/types';

export default function ToggleTextWithIcon({
  icon,
  label,
  activeColor = 'text-[#F8AF43]',
  inactiveColor = 'text-white',
  defaultActive = false,
  onToggle,
}: ToggleTextWithIconProps) {
  const [active, setActive] = useState(defaultActive);

  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);

  const handleClick = () => {
    onToggle?.(!active); 
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center  cursor-pointer rounded-xl transition-colors  ${
        active ? activeColor : inactiveColor
      }`}
    >
      <div className='!ml-10 !p-3   '>{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

