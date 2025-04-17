'use client';

import SearchInputField from '../ui/input/search-input';

export default function Header() {
    const imageUrlAmbylon = "/images/login-background.png"
  return (
    <div className="w-full flex flex-col h-[8vh] justify-center">
      <div className="flex items-center w-full justify-between ">
        {/* Search Bar */}
        <div className="flex items-center justify-center  w-[20%] ">
        <SearchInputField />
        </div>
      </div>
    </div>
  );
}
