'use client';
import SearchInputField from '../../ui/input/search-input';
import ToggleTextWithIcon from '../../ui/button/text-icon-button';

export default function Header() {

  return (
<div className="hidden md:flex w-full flex-col h-[8vh] justify-center">
  <div className="flex items-center w-full justify-between">
    {/* Search Bar */}
    <div className="flex items-center   w-[30%] bg-amber-700  ">
      <SearchInputField />
    </div>
    <div className="flex items-center justify-center w-[30%] ">
     <ToggleTextWithIcon/>
    </div>
    <div className="flex items-center justify-center w-[30%] ">
      <SearchInputField />
    </div>
  </div>
</div>

  );
}
