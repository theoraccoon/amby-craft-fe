'use client'

import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import CourseCard from '@/components/ui/card/course-card'
import { courseItems, dashboardData } from '@/features/dashboard/data/dashboardData'
import { HeaderCards } from './components/header-curves'

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className=" w-full">
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#181818] flex gap-x-8 scroll-smooth relative  sm:min-w-[70rem]">
          {dashboardData.map(item => (
            <HeaderCards key={item.id} {...item} />
          ))}
        </div>
      </div>

      <p className="text-white !mt-12">Continue</p>

      <div className="bg-[#222222] flex justify-between items-center !p-3 sm:!p-5 !mt-8 rounded-[1.2rem]">
        <div className="flex items-center gap-x-4">
          <Image
            src="/images/clock-image.png"
            className="block max-w-[120px] max-h-[120px] sm:!max-w-[150px] sm:!max-h-[150px] object-contain rounded-[1.2rem]"
            alt="Login Background"
            fill={false}
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            priority
            style={{ objectFit: 'cover', height: 150 }}
          />
          <div className="flex flex-col !gap-y-4 text-white !overflow-hidden">
            <h5 className="text-[18px] font-semibold !text-nowrap !text-ellipsis max-w-[150px] sm:max-w-full font-comfortaa">
              Time management and Impact on Work
            </h5>
            <p className="font-normal text-xs opacity-50 max-w-[369px] overflow-hidden line-clamp-2 sm:overflow-visible sm:line-clamp-none">
              Office ipsum squad circle no innovation while pretend synergize disband eager hour
              right ballpark well.
            </p>
            <small className="text-[#F8AF43] text-xs font-normal ">
              created by Eric Andeeerson
            </small>
          </div>
        </div>
        <div className="hidden sm:flex gap-x-2 overflow-hidden">
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
        </div>
        <FiChevronRight className="hidden sm:block text-white" />
      </div>

      <p className="text-white !mt-10">Recently published</p>
      <div className="overflow-hidden overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#181818]">
        <div className="grid grid-cols-4 gap-x-6 gap-y-3 !mt-8 items-center place-content-center min-w-[70rem]">
          {courseItems.map((item, index) => {
            return (
              <CourseCard
                image={item.imageUrl}
                key={index}
                title={item.title}
                description={item.description}
                author={item.instructor}
                lessonsCount={item.lessonsCount}
                date={item.date}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
