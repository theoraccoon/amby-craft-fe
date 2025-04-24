"use client";

import React from "react";
import { BiBookOpen, BiBook, BiBox } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import CourseCard from '@/components/ui/card/course-card';

const dashboardItems = [
  {
    id: "dashboard",
    text: "Total Courses",
    count: 25,
    IconComponent: BiBookOpen,
    borderStyle: "#F8AF43",
    backgrounndStyle: "#F8AF4326",
    curvesColor: "#F8AF43",
    borderColor: "#F8AF4326",
  },
  {
    id: "courses",
    text: "Total Microlearning",
    count: 11,
    IconComponent: BiBook,
    borderStyle: "#9747FF",
    backgrounndStyle: "#9747FF26",
    curvesColor: "#9747FF",
    borderColor: "#9747FF26",
  },
  {
    id: "microlearning",
    text: "Total Question Bank",
    count: 11,
    IconComponent: BiBox,
    borderStyle: "#00BA7F",
    backgrounndStyle: "#00BA7F26",
    curvesColor: "#00BA7F",
    borderColor: "#00BA7F26",
  },
];

const courseItems = [
  {
    image: "/images/course-thumb-1.png",
    title: "Time management and Impact on Work",
    description: "Office ipsum squad circle no innovation while pretend synergize disband...",
    author: "Desmond Essuman",
    lessons: 22,
    date: "18/04/25"
  },
  {
    image: "/images/course-thumb-1.png",
    title: "Content Management Systems",
    description: "Office ipsum squad circle no innovation while pretend synergize disband...",
    author: "Desmond Essuman",
    lessons: 22,
    date: "18/04/25"
  },
  {
    image: "/images/course-thumb-1.png",
    title: "Design for inclusivity and Design Systems",
    description: "Office ipsum squad circle no innovation while pretend synergize disband...",
    author: "Desmond Essuman",
    lessons: 22,
    date: "18/04/25"
  },
  {
    image: "/images/course-thumb-1.png",
    title: "Design for inclusivity and Design Systems",
    description: "Office ipsum squad circle no innovation while pretend synergize disband...",
    author: "Desmond Essuman",
    lessons: 22,
    date: "18/04/25"
  }

]

export default function DashboardPage() {
  return (
    <div className='w-full !p-8 !mt-4'>

      <div className='grid sm:grid-cols-3 gap-x-8 !w-full  gap-y-3'>
        {dashboardItems.map((item) => {
          const Icon = item.IconComponent;
          const topCurves = (
            <svg
              width="75"
              height="61"
              viewBox="0 0 75 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!w-auto !h-auto absolute top-0 left-0"
            >
              <g opacity="0.3">
                <path
                  d="M74 0.5C74 33 59.3 87.3 0.5 44.5"
                  stroke={item.curvesColor}
                />
                <path
                  d="M59 0.5C60 25.3333 49.7 68.4 0.5 42"
                  stroke={item.curvesColor}
                />
              </g>
            </svg>
          );

          const bottomCurves = (
            <svg
              width="91"
              height="40"
              viewBox="0 0 91 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!w-auto !h-auto absolute top-0 right-0"
            >
              <g opacity="0.3">
                <path
                  d="M2.5 39.5C20.1667 29.8333 62.2 14 89 28"
                  stroke={item.curvesColor}
                />
                <path
                  d="M0.5 39.5C9.16667 19.3333 39.3 -14.9 90.5 9.5"
                  stroke={item.curvesColor}
                />
              </g>
            </svg>
          );

          return (
            <div
              key={item.id}
              className={`rounded-[1.2rem]  !border  inline-block z-10`} style={{ backgroundColor: item.backgrounndStyle, borderColor: item.borderStyle }}  
            >
              <div className="flex items-center gap-x-2.5 !p-7 relative">
                {topCurves}
                <div className="rounded-lg bg-white inline-flex flex-col items-center justify-center !h-[3.125rem] !w-[3.125rem] z-10">
                  <Icon className="!text-xl !text-[#F8AF43]" />
                </div>
                <div className="inline-flex flex-col">
                  <p className="mb-0 text-2xl font-semibold text-white">
                    {item.count}
                  </p>
                  <p className="mb-0 text-xs font-normal text-[#FFFFFF99]">
                    {item.text}
                  </p>
                </div>
              </div>
              <div
                className={`!border-t !border-t-[${item.borderColor}] flex justify-between text-white !p-4 relative overflow-hidden w-full`}
                style={{ borderTopColor: item.borderColor }}
              >
                {bottomCurves}
                <span className="text-xs">View all</span>
                <GoArrowRight />
              </div>
            </div>
          );
        })}
      </div>
      <p className='text-white !mt-12'>Continue</p>
      <div className='bg-[#222222] flex justify-between items-center !p-3 sm:!p-5 !mt-8 rounded-[1.2rem]'>
        <div className='flex items-center gap-x-4'>
          <Image
            src="/images/clock-image.png"
            className='block max-w-[120px] max-h-[120px] sm:max-w-[150px] sm:max-h-[150px] object-contain rounded-[1.2rem]'
            alt="Login Background"
            fill={false}
            width={250}
            height={250}
            objectFit="contain"
            quality={100}
            priority
          />
          <div className='flex flex-col !gap-y-4 text-white !overflow-hidden' >
            <h5 className='text-[18px] font-semibold !text-nowrap !text-ellipsis max-w-[150px] sm:max-w-full font-comfortaa'>Time management and Impact on Work</h5>
            <p className='font-normal text-xs opacity-50 max-w-[369px] overflow-hidden line-clamp-2 sm:overflow-visible sm:line-clamp-none'>Office ipsum squad circle no innovation while pretend synergize disband eager hour right ballpark well.</p>
            <small className='text-[#F8AF43] text-xs font-normal '>created by Eric Andeeerson</small>
          </div>
        </div>
        <div className="hidden sm:flex gap-x-2">
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
        </div>
        <FiChevronRight className="hidden sm:block text-white" />
      </div>
      <p className='text-white !mt-10'>Recently published</p>
      <div className='grid sm:grid-cols-4  gap-x-6 gap-y-3 !mt-8 flex-nowrap'>
        {courseItems.map((item, index) => {
          return(
        <CourseCard
          image={item.image}
          key={index}
          title={item.title}
          description={item.description}
          author={item.author}
          lessons={item.lessons}
          date={item.date}
        />
          )
      }
        )}
      </div>
    </div>
  );
}
