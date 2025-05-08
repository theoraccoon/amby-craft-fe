"use client"

import React from 'react';
// Make sure to import your icons correctly, e.g.:
import { BiBookOpen, BiBookAlt, } from 'react-icons/bi';
import { MdGridView } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import Image from "next/image";
const imageUrlAmbylon = "/images/amby-svg.svg"
import { useRouter, usePathname } from 'next/navigation';



const menuItems = [
    { id: 'dashboard', text: 'Dashboard', IconComponent: MdGridView },
    { id: 'courses', text: 'Courses', IconComponent: BiBookOpen },
    { id: 'microlearning', text: 'Microlearning', IconComponent: BiBookAlt },
    { id: 'question_banks', text: 'Question Banks', IconComponent: FiArchive },
];

function SidebarMenu() {

    const router = useRouter();
    const pathname = usePathname();


    const activeItemId = pathname.split('/')[1] || 'dashboard';

    const handleItemClick = (id: string) => {
        router.push(`/${id}`);
    };


    const baseLiClasses = "flex items-center gap-4 !p-2 text-white !pl-6 !mb-4 !border-l-[5px] !border-[#282828]  cursor-pointer";


    const baseIconClasses = "text-base";
    const baseSpanClasses = "!text-xs";
0
    return (
        <div className='flex flex-col  w-full h-screen'>
            <div className="w-full relative !mt-[3.438rem] !mb-8">
                <Image
                    className="!relative !w-[80%] ml-4"
                    src={imageUrlAmbylon}
                    alt="Login Background"
                    fill={true}

                    objectFit="contain"
                    quality={100}
                    priority
                />
            </div>
            <div className="mt-[3.438rem] ">

                <ul>
                    {menuItems.map((item) => {

                        const isActive = activeItemId === item.id;

                        const Icon = item.IconComponent;


                        const liClasses = `
                           ${baseLiClasses}
                           ${isActive
                                ? ' !border-[#F8AF43] '
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
                                <a href="" className="flex items-center gap-4 ">
                                    <Icon className={baseIconClasses} />
                                    <span
                                        className={`
                                      hidden lg:inline-block text-xs
                                 ${spanClasses}
                               `.trim()}
                                    >
                                        {item.text}
                                    </span>
                                </a>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;