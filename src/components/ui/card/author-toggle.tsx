import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'
import Image from 'next/image'
import { useState } from 'react'

const AuthorToggle = () => {
  const [isAuthorVisible, setIsAuthorVisible] = useState(false)

  const handleToggle = () => {
    setIsAuthorVisible(!isAuthorVisible)
  }

  return (
    <div>
      <div className="relative">
        <div className="flex gap-x-4 items-center mt-10">
          <div className="h-[30px] w-[30px] rounded-full aspect-square bg-white relative">
            <Image
              src="/images/rounded-image.png"
              className="block max-w-[120px]  object-contain rounded-[1.2rem] !relative h-full w-full"
              alt="Login Background"
              fill={true}
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <p className="text-white text-xs">Henrikson Cavilion</p>
          <FaChevronDown
            color="white"
            width={12}
            height={7}
            onClick={handleToggle}
            style={{ display: !isAuthorVisible ? 'block' : 'none' }}
          />
          <FaChevronUp
            color="white"
            width={12}
            height={7}
            onClick={handleToggle}
            style={{ display: isAuthorVisible ? 'block' : 'none' }}
          />
        </div>

        <div
          className="absolute flex-col gap-x-4  mt-2 bg-[#222222] rounded-[0.8rem] p-3 inline-flex"
          style={{ display: isAuthorVisible ? 'flex' : 'none' }}
        >
          <div className="flex gap-x-4 items-center justify-center cursor-pointer ">
            <div className="h-[30px] w-[30px] rounded-full aspect-square bg-white relative ">
              <Image
                src="/images/rounded-image.png"
                className="block max-w-[120px]  object-contain rounded-[1.2rem] !relative h-full w-full"
                alt="Login Background"
                fill={true}
                objectFit="cover"
                quality={100}
                priority
              />
            </div>
            <p className="text-white text-xs">Henrikson Cavilion</p>
          </div>
          <div className="h-7 mt-2 cursor-pointer">
            <FaRegEyeSlash
              color="gray"
              width={20}
              height={20}
              className="inline-block mr-4 text-gray-500"
            />
            <p className="text-xs text-gray-500 inline-block">Hide Author</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default AuthorToggle
