"use client";

import React from "react";
import { BiBookOpen, BiBook, BiBox } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

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

export default function DashboardPage() {
  return (
    <div className="w-full !p-8 ">
      <div className="grid sm:grid-cols-3 gap-x-8 !w-full  gap-y-3">
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
              className={`rounded-[1.2rem] bg-[${item.backgrounndStyle}] !border !border-[${item.borderStyle}] inline-block z-10`}
            >
              <div className="flex items-center gap-x-2.5 !p-7 relative">
                {topCurves}
                <div className="rounded-lg bg-white inline-flex flex-col items-center justify-center !p-3 z-10">
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
      <div className="bg-[#222222] flex justify-between items-center !p-6 !mt-8 rounded-[1.2rem]">
        <div className="flex items-center gap-x-4">
          <Image
            src="/images/clock-image.png"
            className="block max-w-[150px] max-h-[150px] object-contain"
            alt="Login Background"
            fill={false}
            width={250}
            height={250}
            objectFit="contain"
            quality={100}
            priority
          />
          <div className="flex flex-col !gap-y-4 text-white ">
            <h5 className="text-[18px] font-semibold">
              Time management and Impact on Work
            </h5>
            <p className="font-normal text-xs opacity-50 max-w-[369px]">
              Office ipsum squad circle no innovation while pretend synergize
              disband eager hour right ballpark well.
            </p>
            <small className="text-[#F8AF43] text-xs font-normal ">
              created by Eric Andeeerson
            </small>
          </div>
        </div>
        <div className="hidden sm:flex gap-x-2">
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
          <div className="h-[35px] w-[35px] rounded-full aspect-square bg-white"></div>
        </div>
        <FiChevronRight className="hidden sm: text-white" />
      </div>
    </div>
  );
}
