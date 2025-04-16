// app/auth/login/layout.tsx
'use client';

import Image from "next/image";
import "../../styles/global.css"
import SidebarMenu from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-6 h-screen w-full">
      {/* Sidebar (2/3 on desktop) */}
      <div className="hidden md:block lg:col-span-2 md:col-span-1 relative bg-[#222222]">
        <div className="relative h-[20%]  w-40%  ">
          {/* <Image
            src={imageUrlAmbylon}

            alt="Login Background"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          /> */}
          <SidebarMenu />
        </div>
     
      </div>

      {/* Main Content (1/3 on desktop) */}
      <div className="lg:col-span-6 md:col-span-5 bg-[#181818] mx-20">
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
