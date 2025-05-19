'use client'

import { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import AddLessonBlock from './course-lesson-input'
import AuthorToggle from '@/components/ui/card/author-toggle'

export default function CourseBuilder() {
  const router = useRouter()
  const [courseTitle, setCourseTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleBack = () => {
    router.back()
  }

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
        <input
          type="text"
          value={courseTitle}
          onChange={e => setCourseTitle(e.target.value)}
          placeholder="Course Title"
          className="bg-transparent text-6xl font-semibold font-['comfortaa'] text-gray-200 placeholder-gray-500 outline-none mb-6 w-full"
        />

        <div className="flex items-center mb-14 relative z-0">
          <AuthorToggle />
        </div>
        <textarea
          placeholder="Describe your course..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full text-[16px] font-['comfortaa'] bg-transparent text-gray-300 placeholder-gray-500 outline-none resize-none h-24 mb-14"
        />
        <AddLessonBlock />
      </div>
    </main>
  )
}
