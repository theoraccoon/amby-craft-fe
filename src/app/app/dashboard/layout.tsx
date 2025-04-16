// app/auth/login/layout.tsx
'use client';

import Image from "next/image";
import '../../../styles/global.css';
const imageUrlAmbylon = "/images/amby-svg.svg"
import { BiSolidGridAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiSolidBox } from "react-icons/bi";





export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-6 h-screen w-full">
      {/* Sidebar (2/3 on desktop) */}
      <div className="hidden md:block lg:col-span-1 md:col-span-1 relative bg-[#222222]">
        <div className="relative h-[20%]  w-40%  ">
          <Image
            src={imageUrlAmbylon}

            alt="Login Background"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
        <div className="">
          <ul>
            <li className="flex items-center gap-4 p-4 text-white !border-l-[5px] !border-[#F8AF43] !pl-6 !mb-7 cursor-pointer">
            <BiSolidGridAlt className="text-base"/><span className="!text-xs font-normal">Dashboard</span>
            </li>       
            <li className="flex items-center gap-4 p-4 text-white   !pl-6 !mb-7 cursor-pointer opacity-50">
            <BiBookOpen className="text-base"/><span className="!text-xs !font-normal">Courses</span>
            </li>
            <li className="flex items-center gap-4 p-4 text-white  !pl-6 !mb-7 cursor-pointer opacity-50">
            <BiBook className="text-base"/><span className="!text-xs !font-normal">Microlearning</span>
            </li>  
            <li className="flex items-center gap-4 p-4 text-white  !pl-6 !mb-7 cursor-pointer opacity-50">
            <BiSolidBox className="text-base" /><span className="!text-xs !font-normal">Question Banks</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content (1/3 on desktop) */}
      <div className="lg:col-span-7 md:col-span-5 bg-[#181818] mx-20">
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
