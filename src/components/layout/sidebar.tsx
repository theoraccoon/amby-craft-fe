"use client"


import React, { useState } from 'react';
// Make sure to import your icons correctly, e.g.:
import { BiSolidGridAlt, BiBookOpen, BiBook, BiSolidBox } from 'react-icons/bi';
import Image from "next/image";
const imageUrlAmbylon = "/images/amby-svg.svg"

// Define the menu item data (or import it)
const menuItems = [
    { id: 'dashboard', text: 'Dashboard', IconComponent: BiSolidGridAlt },
    { id: 'courses', text: 'Courses', IconComponent: BiBookOpen },
    { id: 'microlearning', text: 'Microlearning', IconComponent: BiBook },
    { id: 'question_banks', text: 'Question Banks', IconComponent: BiSolidBox },
];

function SidebarMenu() {

    const [activeItemId, setActiveItemId] = useState('dashboard');


    const handleItemClick = (id: string) => {
        setActiveItemId(id);
    };


    const baseLiClasses = "flex items-center gap-4 p-4 text-white !pl-6 !mb-7 cursor-pointer";
    const baseIconClasses = "text-base";
    const baseSpanClasses = "!text-xs";

    return (
        <div className='flex flex-col'>
            <div className=" ">
                <Image
                    src={imageUrlAmbylon}
                    className='h-[20%]'
                    alt="Login Background"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                />
            </div>
            <div className="!mt-[12rem]">

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
                                <span className={spanClasses.trim()}>
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