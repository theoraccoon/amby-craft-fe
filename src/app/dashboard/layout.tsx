'use client';

import "../../styles/global.css"
import SidebarMenu from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full">
      
      {/* Sidebar */}
      <div className="hidden md:block bg-[#282828]">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="bg-[#181818] px-4 md:px-8 lg:px-20 overflow-y-auto">
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
