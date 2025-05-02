"use client";

import InputField from "@/components/ui/input/input";
import Image from "next/image";
import "../../../styles/globals.css";
import CustomButton from "@/components/ui/button/custom-button";
import { IoLogoGoogle } from "react-icons/io";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginForm() {
  const router = useRouter();
  const imageUrlAmbylon = "/images/amby-svg.svg";

  return (
    <div className="w-full flex flex-col  justify-center gap-4 text-white h-screen">
      {/* Logo */}
      <div className=" w-full sm:h-[8rem] relative h-14">
        <Image
          src={imageUrlAmbylon}
          alt="AMBYLON Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Form Header */}
      <h1 className="text-[1.5rem] sm:text-[2rem] mt-20 mb-10 font-semibold">
        Login to your account
      </h1>

      {/* Input Fields */}
      <div className="flex flex-col gap-5 w-full">
        <InputField label="Email Address" />
        <InputField
          type="password"
          label="Password"
          rightLabel="Forgot password?"

          rightLabelClick={() => router.push("/auth/reset")}
        />
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-5 w-full items-center mt-4">
        <CustomButton
          leftIcon={
            <Image
              src="/images/login-icon.svg"
              alt="AMBYLON Logo"
              fill
              className="object-contain !h-3 !w-3 !relative !-top-0.5"
              priority
            />
          }
          onClick={() => router.push("/dashboard")}
        >
          Login
        </CustomButton>

        <p className="text-white/40 text-sm">Or</p>

        <CustomButton leftIcon={<IoLogoGoogle />} variant="secondary">
          Sign in with Google
        </CustomButton>
      </div>

      {/* Footer */}
      <div className="text-center my-6 text-xs w-full space-y-2">
        <p className=" text-xs md:text-[0.9375rem] ">
          You don’t have an AMBYLON CRAFT account yet?{" "}
          <span
            className="text-primary  cursor-pointer"
            onClick={() => router.push("/auth/register")}
          >
            Register now
          </span>
        </p>
        <p className="text-white/40 text-xs md:text-sm ">Imprint • Privacy • Platform Terms</p>
      </div>
    </div>
  );
}
