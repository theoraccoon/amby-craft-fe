"use client";

import InputField from "@/components/ui/input/input";
import Image from "next/image";
import "../../../styles/globals.css";
import CustomButton from "@/components/ui/button/custom-button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import imageUrlAmbylon from "/images/amby-svg.svg";

export default function ResetPasswordForm() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center gap-4 text-white h-screen">
      {/* Logo */}
      <div className="w-full h-[8rem] relative">
        <Image
          src={imageUrlAmbylon}
          alt="AMBYLON Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Back to Login */}
      <div
        className="flex items-center gap-1 text-white/80 hover:text-white cursor-pointer w-fit mt-10 "
        onClick={() => router.push("/auth/login")}
      >
        <IoIosArrowRoundBack size={30} />
        <span>Back to login</span>
      </div>

      {/* Form Header */}
      <div className="mt-6">
        <h1 className="text-white text-[1.5rem] sm:text-[2rem] leading-tight">
          Enter email to reset <br />{" "}
          <span className="text-white">password</span>
        </h1>
      </div>

      {/* Input Field */}
      <div className="flex flex-col gap-4 w-full ">
        <InputField label="Email" type="email" />
      </div>

      {/* Button */}
      <div className="flex flex-col gap-4 w-full items-center mt-4">
        <CustomButton>Send</CustomButton>
      </div>

      {/* Footer */}
      <div className="text-center my-6 text-xs w-full space-y-2">
        <p className="text-white/40">Imprint • Privacy • Platform Terms</p>
      </div>
    </div>
  );
}
