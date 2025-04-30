"use client";

import SearchInputField from "@/components/ui/input/search-input";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import profileImage from "@/images/profile-picture.png";

export default function MobileViewHeader() {
  return (
    <div className="w-full">
      <SearchInputField
        leftIcon={<GiHamburgerMenu color="#FFFFFF" size="18px" />}
        rightIcon={
          <>
            <div className="relative h-[30px] w-[30px]">
              <Image
                src={profileImage}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className=" !relative rounded-full "
              />
            </div>
          </>
        }
      />
    </div>
  );
}
