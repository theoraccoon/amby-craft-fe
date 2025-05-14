import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { FiEyeOff } from 'react-icons/fi';
import Image from 'next/image'
import { useState ,useEffect, useRef } from 'react'

  const AuthorToggle = () => {
  const [isAuthorVisible, setIsAuthorVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

   const handleToggle = () => {
     setIsAuthorVisible(!isAuthorVisible)
   }

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAuthorVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div>
      <div className="relative"  ref={dropdownRef}>
        <div className="flex gap-x-4 items-center mt-10 cursor-pointer" onClick={handleToggle}>
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
          <p className="text-white text-xs ">Henrikson Cavilion</p>
          {isAuthorVisible ? (
          <FaChevronUp color="white" width={12} height={7} />
        ) : (
          <FaChevronDown color="white" width={12} height={7} />
        )}
        </div>
        {isAuthorVisible && (
        <div
          className="absolute flex-col gap-x-4  mt-2 bg-[#222222] rounded-[0.8rem] p-3 inline-flex"
        >
          <div className="flex gap-x-4 items-center justify-center cursor-pointer mb-4">
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
          <div className="ml-1 h-7 cursor-pointer">
            < FiEyeOff
              color="gray"
              width={20}
              height={20}
              className="inline-block mr-5 text-gray-500"
            />
            <p className="text-xs text-gray-500 inline-block">Hide Author</p>
          </div>
        </div>
           )}
      </div>
   
    </div>
  )
}

export default AuthorToggle

