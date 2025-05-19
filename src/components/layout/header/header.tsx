'use client'

import { usePathname } from 'next/navigation'

import SearchInputField from '../../ui/input/search-input'
import HeaderActionsPanel from './header-actions-panel'
import Nav from './nav-header'
import { BiSearch } from 'react-icons/bi'

export default function Header() {
  const pathname = usePathname()

  const isDashboardPage = pathname === '/dashboard'

  return (
    <div className="hidden md:flex w-full flex-col justify-center pb-3">
      <div className="flex items-center w-full justify-between mt-12">
        {/* Search Bar */}
        <div className="flex items-center h-full w-[20%]">
          <SearchInputField leftIcon={<BiSearch color="#A0AEC0" size="18px" />} />
        </div>
        {!isDashboardPage && (
          <div className="flex items-center h-full w-[30%]">
            <Nav />
          </div>
        )}
        <div className="flex items-center justify-end w-[50%] h-10 ">
          <HeaderActionsPanel isDashboardPage={isDashboardPage} />
        </div>
      </div>
    </div>
  )
}
