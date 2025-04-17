'use client';

import SearchInputField from '../ui/input/search-input';

export default function Header() {

  return (
<div className="hidden md:flex w-full flex-col h-[8vh] justify-center">
  <div className="flex items-center w-full justify-between">
    {/* Search Bar */}
    <div className="flex items-center justify-center w-[20%] ">
      <SearchInputField />
    </div>
  </div>
</div>

  );
}
