// app/shared/layout.tsx
"use client";

import { ReactNode } from "react";
import SidebarMenu from "@/components/layout/sidebar";
import { Providers } from "../provider";
import "../../styles/globals.css";
import MobileViewHeader from "@/components/layout/header/mobile-view-header";
import TabNavigator from "@/components/layout/tab-navigation";
import { ViewModeProvider } from "@/context/view-mode-context";
import Header from "@/components/layout/header/header";


export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <ViewModeProvider>
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr] h-screen w-full overflow-hidden">
          <div className="hidden md:block bg-[#282828] h-screen">
            <SidebarMenu />
          </div>
          <div className="md:hidden fixed bg-[#181818] w-full border-t  border-[#444] flex justify-around items-center h-[90px] z-50 px-5 pt">
            <MobileViewHeader />
          </div>
          {/* Main Content */}
          <div className="bg-[#181818] flex flex-col h-screen px-5 ">
            <Header />
            <div className="flex flex-col overflow-y-auto no-scrollbar">
              {children}
            </div>
            <div className="md:hidden fixed bottom-0 left-0 w-full  flex justify-around items-center h-[90px] bg-[#181818]">
              <TabNavigator />
            </div>
          </div>
        </div>
      </ViewModeProvider>
    </Providers>
  );
}
