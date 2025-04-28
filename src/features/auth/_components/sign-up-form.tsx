"use client";

import InputField from "@/components/ui/input/input";
import Image from "next/image";
import "../../../styles/globals.css";
import CustomButton from "@/components/ui/button/custom-button";
import { CiLogin } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const imageUrlAmbylon = "/images/amby-svg.svg";
   const router = useRouter();

  return (
    <div className="w-full flex flex-col  justify-center gap-4 text-white">
      {/* Logo */}
      <div className=" w-full h-[7rem]  relative">
        <Image
          src={imageUrlAmbylon}
          alt="AMBYLON Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Form Header */}
      <h1 className="text-[1.5rem] sm:text-[2rem] mt-4 font-semibold ">
        Enter details to register
      </h1>

      {/* Input Fields */}
      <div className="flex flex-col gap-4 w-full">
        <InputField label="First name" placeholder="Enter your first name" />
        <InputField label="Last name" placeholder="Enter your last name" />
        <InputField label="Email address" placeholder="Enter your email" />
        <InputField
          label="Password"
          placeholder="Enter your password"
          rightIcon={<IoEyeOutline color="white" />}
          type="password"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full items-center mt-4">
        <CustomButton leftIcon={<CiLogin />}>Login</CustomButton>

        <p className="text-white/40 text-sm">Or</p>

        <CustomButton leftIcon={<IoLogoGoogle />} variant="secondary">
          Sign in with Google
        </CustomButton>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-xs w-full ">
        <p>
          Already have an AMBYLON CRAFT account? ?{" "}
          <span className="text-primary  cursor-pointer" onClick={() => router.push("/auth/login")}>Sign in</span>
        </p>
        <p className="text-white/40">Imprint • Privacy • Platform Terms</p>
      </div>
    </div>
  );
}
