


'useClient'

import InputField from "@/components/ui/input/input";
import Image from "next/image";
import '../../../styles/global.css';
import CustomButton from "@/components/ui/button/custom-button";
import { CiLogin } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

export default function LoginForm() {
    const imageUrlAmbylon = "/images/amby-svg.svg"
    return (

        <>
            <div className="h-[20%]  w-40%  ">
                <div className="relative   h-[55%]  w-40%  ">
                    <Image
                        src={imageUrlAmbylon}

                        alt="Login Background"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className=" flex flex-col justify-around  h-[40%]  w-full">
                <h1 className="text-white">
                    Login to your account
                </h1>
                <div className="mt-2 w-full">

                    <InputField
                        label="Email"
                        placeholder="Enter your email"

                    />
                </div>
                <div className="mt-2 w-full">

                    <InputField
                        label="Password"
                        rightLabel="Forgot password?"
                        placeholder="Enter your password"
                        rightIcon={< IoEyeOutline color="white" />}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-around items-center h-[25%] w-full">
                <CustomButton leftIcon={<CiLogin />}>Login</CustomButton>

                <div>
                    <p className="text-white text-sm ">Or</p>
                </div>

                <CustomButton leftIcon={<IoLogoGoogle />} variant="secondary">Sign in with google</CustomButton>

            </div>
            <div className=" h-[15%] w-full  flex flex-col justify-end lg:justify-start">
                <div className="flex w-full justify-center items-center ">
                    <p className="text-white  text-[4px] sm:text-[4px]  md:text-[6px] lg:text-xs ">
                        You don’t have an AMBYLON CRAFT account yet?
                    </p>
                    <p className=" text-[var(--primary)] text-[4px] sm:text-[4px]  md:text-[6px] lg:text-[10px]"> Register now</p>
                </div>
                <p className="text-xss text-center">Imprint
                    Privacy
                    Platform Terms</p>
            </div>

        </>


    );
} 