"use client"

import React, { useState } from 'react';
// Make sure to import your icons correctly, e.g.:
import { BiSolidGridAlt, BiBookOpen, BiBook, BiSolidBox } from 'react-icons/bi';
import Image from "next/image";
const imageUrlAmbylon = "/images/amby-svg.svg"
import { useRouter, usePathname } from 'next/navigation';



const menuItems = [
    { id: 'dashboard', text: 'Dashboard', IconComponent: BiSolidGridAlt },
    { id: 'courses', text: 'Courses', IconComponent: BiBookOpen },
    { id: 'microlearning', text: 'Microlearning', IconComponent: BiBook },
    { id: 'question_banks', text: 'Question Banks', IconComponent: BiSolidBox },
];

function SidebarMenu() {

    const router = useRouter();
    const pathname = usePathname();
    
  
    const activeItemId = pathname.split('/')[1] || 'dashboard';
  
    const handleItemClick = (id: string) => {
      router.push(`/${id}`);
    };


    

    const baseLiClasses = "flex items-center gap-4 p-4 text-white !pl-6 !mb-7 cursor-pointer";
    const baseIconClasses = "text-base";
    const baseSpanClasses = "!text-xs";

    return (
        <div className='flex flex-col  w-full h-screen'>
            <div className="w-full relative h-[15%] ">
                <Image
                 className="!relative"
                    src={imageUrlAmbylon}
                    alt="Login Background"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                />
            </div>
            <div className="h-[85%] p-10">

                <ul>
                    {menuItems.map((item) => {

                        const isActive = activeItemId === item.id;

                        const Icon = item.IconComponent;


                        const liClasses = `
                           ${baseLiClasses}
                           ${isActive
                                ? '!border-l-[5px] !border-[#F8AF43]'
                                : 'opacity-50'
                            }
          `;

                        const spanClasses = `
                       ${baseSpanClasses}
                        ${isActive
                                ? 'font-bold'
                                : '!font-normal'
                            }
          `;

                        return (
                            <li
                                key={item.id}
                                className={liClasses.trim()}
                                onClick={() => handleItemClick(item.id)}
                            >
                                <Icon className={baseIconClasses} />
                                <span
                                    className={`
                                      hidden lg:inline-block text-xs
                                 ${spanClasses}
                               `.trim()}
                                >
                                    {item.text}
                                </span>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;