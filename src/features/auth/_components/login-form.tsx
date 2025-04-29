"use client";

import InputField from "@/components/ui/input/input";
import "@/styles/globals.css";
import CustomButton from "@/components/ui/button/custom-button";
import { CiLogin } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";

export default function LoginForm() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col  justify-center gap-4 text-white h-screen">
      {/* Logo */}
      <div className=" w-full h-[8rem] relative">
        <ReactSVG src="/images/amby-svg.svg" />
      </div>

      {/* Form Header */}
      <h1 className="text-[1.5rem] sm:text-[2rem] mt-20 font-semibold">
        Login to your account
      </h1>

      {/* Input Fields */}
      <div className="flex flex-col gap-4 w-full">
        <InputField label="First name" />
        <InputField
          label="Password"
          rightLabel="Forgot password?"
          rightIcon={<IoEyeOutline color="white" />}
          rightLabelClick={() => router.push("/auth/reset")}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full items-center mt-4">
        <CustomButton
          leftIcon={<CiLogin />}
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
        <p>
          You don’t have an AMBYLON CRAFT account yet?{" "}
          <span
            className="text-primary  cursor-pointer"
            onClick={() => router.push("/auth/register")}
          >
            Register now
          </span>
        </p>
        <p className="text-white/40">Imprint • Privacy • Platform Terms</p>
      </div>
    </div>
  );
}
