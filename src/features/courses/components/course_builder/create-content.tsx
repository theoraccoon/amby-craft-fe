'use client'

import Editor from '@/features/courses/components/course_creation/editor/editor'
import { useRouter, useSearchParams } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'

const LessonBuilder = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const title = searchParams.get('title')

  return (
    <main className="min-h-screen bg-[#181818] text-white relative px-4">
      {/* Back Button */}
      <div
        className="absolute top-14 left-7 text-sm font-['open_sans'] text-[#FFFFFF] hover:underline cursor-pointer flex items-center space-x-5"
        onClick={handleBack}
      >
        <IoArrowBack />
        <span>Cancel</span>
      </div>

      <div className="pt-32 px-4 max-w-3xl mx-auto overflow-y-auto no-scrollbar">
        <p className="bg-transparent text-6xl font-semibold font-['comfortaa'] text-gray-200 placeholder-gray-500 outline-none mb-6 w-full">
          {title ?? ''}
        </p>

        <div className="flex items-center mb-14 relative z-0">{/* <AuthorToggle /> */}</div>
      </div>
      <Editor />
    </main>
  )
}

export default LessonBuilder
