'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import '../../../styles/globals.css'
import { CiLogin } from 'react-icons/ci'
import { IoLogoGoogle } from 'react-icons/io'

import CustomButton from '@/components/ui/button/custom-button'
import InputField from '@/components/ui/input/input'
import imageUrlAmbylon from '@/images/amby-svg.svg'

export default function SignUpForm() {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col h-screen justify-center gap-4 text-white bg-black">
      {/* Logo */}
      <div className=" w-full h-[7rem]  relative">
        <Image src={imageUrlAmbylon} alt="AMBYLON Logo" fill className="object-contain" priority />
      </div>

      {/* Form Header */}
      <h1 className="text-[1.5rem] sm:text-[2rem] mt-4 font-semibold ">
        Enter details to register
      </h1>

      {/* Input Fields */}
      <div className="flex flex-col gap-5 w-full">
        <InputField label="First name" />
        <InputField label="Last name" />
        <InputField label="Email address" />
        <InputField label="Password" type="password" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-5 w-full items-center mt-4">
        <CustomButton
          leftIcon={<CiLogin style={{ fontWeight: 'bold' }} />}
          onClick={() => router.push('/dashboard')}
        >
          Create Account
        </CustomButton>

        <p className="text-white/40 text-sm">Or</p>

        <CustomButton leftIcon={<IoLogoGoogle className="font-bold" />} variant="secondary">
          Sign in with Google
        </CustomButton>
      </div>

      {/* Footer */}
      <div className="text-center my-6 text-xs w-full ">
        <p>
          Already have an AMBYLON CRAFT account?{' '}
          <span className="text-primary  cursor-pointer" onClick={() => router.push('/auth/login')}>
            Sign in
          </span>
        </p>
        <p className="text-[#FFFFFF4D]">Imprint • Privacy • Platform Terms</p>
      </div>
    </div>
  )
}
