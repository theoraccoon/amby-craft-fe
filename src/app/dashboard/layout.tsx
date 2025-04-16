
'use client';

import Image from "next/image";
import "../../styles/global.css"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-8 h-screen w-full">
      {/* Sidebar (2/3 on desktop) */}
      <div className="hidden md:block lg:col-span-1 md:col-span-1 relative bg-amber-900">
        {/* <Image
          className="!relative"
          src="/images/login-background.png"
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        /> */}
      </div>

      {/* Main Content (1/3 on desktop) */}
      <div className="lg:col-span-7 md:col-span-7 bg-[#181818] mx-20">
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
