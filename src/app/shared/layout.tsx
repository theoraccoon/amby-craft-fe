// app/shared/layout.tsx
"use client";

// Adjust the path as necessary
import SidebarMenu from "@/components/layout/sidebar";
import Header from "@/components/layout/header/header";
import { Providers } from "../provider";
import "../../styles/globals.css";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block bg-[#282828] h-screen">
          <SidebarMenu />
        </div>

        {/* Main Content */}
        <div className="bg-[#181818] flex flex-col h-screen sm:!px-14">
          <Header />
          <div className="flex flex-col overflow-y-auto no-scrollbar">
            {children}
          </div>
        </div>
      </div>
    </Providers>
  );
}
