'use client';
import SearchInputField from '../../ui/input/search-input';
import HeaderActionsPanel from './header-actions-panel';
import Nav from './nav-header';


export default function Header() {



  return (
    <div className="hidden md:flex w-full flex-col h-[8vh] justify-center">
      <div className="flex items-center w-full justify-between">
        {/* Search Bar */}
        <div className="flex items-center h-full w-[20%]">
          <SearchInputField />
        </div>
        <div className="flex items-center  h-full w-[30%] ">
          <Nav />
        </div>
        <div className="flex items-center justify-end w-[50%] h-10 ">
          <HeaderActionsPanel/>
      
        </div>

      </div>
    </div>

  );
}
