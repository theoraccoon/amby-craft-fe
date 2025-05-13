'use client'

import { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { FiChevronDown } from 'react-icons/fi'

import { useRouter } from 'next/navigation'
import RoundedButton from '@/components/ui/button/rounded-button'


export default function CourseBuilder() {
  const router = useRouter()
  const [courseTitle, setCourseTitle] = useState('')
  const [description, setDescription] = useState('')
  const [lessons, setLessons] = useState<Lesson[]>([
    { title: '', showContent: false, sections: [] },
  ])
  const [showSectionContent, setShowSectionContent] = useState<Record<string, boolean>>({})

  const handleLessonTitleChange = (index: number, value: string) => {
    const updated = [...lessons]
    updated[index].title = value
    setLessons(updated)
  }

  const handleSectionChange = (lessonIndex: number, sectionIndex: number, value: string) => {
    const updated = [...lessons]
    updated[lessonIndex].sections[sectionIndex] = value
    setLessons(updated)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const updated = [...lessons]

    if (e.shiftKey && e.key === 'Enter') {
      e.preventDefault()
      updated[index].sections.push('')
      setLessons(updated)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      updated[index].showContent = true
      updated.splice(index + 1, 0, { title: '', showContent: false, sections: [] })
      setLessons(updated)
    }
  }

  const sectionHandleKeyDown = (
    e: React.KeyboardEvent,
    lessonIndex: number,
    sectionIndex: number,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const key = `${lessonIndex}-${sectionIndex}`
      setShowSectionContent((prev) => ({
        ...prev,
        [key]: true,
      }))
    }
  }

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
          onChange={(e) => setCourseTitle(e.target.value)}
          placeholder="Course Title"
          className="bg-transparent text-6xl font-semibold font-['comfortaa'] text-gray-200 placeholder-gray-500 outline-none mb-6 w-full"
        />

        <div className="flex items-center mb-14 cursor-pointer">
          <img src="https://i.pravatar.cc/40" alt="Author" className="rounded-full w-8 h-8 mr-2" />
          <div className="flex items-center font-['open_sans'] text-xs text-[#FFFFFF]">
            <span>Henrikson Cavilon</span>
            <FiChevronDown className="ml-2 w-5 h-5" />
          </div>
        </div>

        <textarea
          placeholder="Describe your course..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full text-[16px] font-['comfortaa'] bg-transparent text-gray-300 placeholder-gray-500 outline-none resize-none h-24 mb-14"
        />
        {lessons.map((lesson, lessonIdx) => (
          <div key={lessonIdx} className="mb-6">
            {/* Lesson Title Input */}
            <div className="w-full flex justify-between items-center border-b border-gray-700 mb-2">
              <input
                type="text"
                value={lesson.title}
                onChange={(e) => handleLessonTitleChange(lessonIdx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, lessonIdx)}
                placeholder="Add a Lesson title..."
                className="bg-transparent text-[15px] font-['open_sans'] text-gray-100 placeholder-gray-500 outline-none w-full"
              />
              {lesson.showContent ? (
                <div className="flex w-[150px] m-3">
                  <RoundedButton
                    rightIcon={<FiChevronDown className="ml-2 w-5 h-5" color="#000000" />}
                  >
                    Add Content
                  </RoundedButton>
                </div>
              ) : (
                <span className="text-[10px] font-['open_sans'] text-gray-500 ml-2 whitespace-nowrap">
                  Shift + Enter to add new section
                </span>
              )}
            </div>

            {/* Section Inputs */}
            {lesson.sections.map((section, secIdx) => (
              <div
                className="w-full flex flex-col items-end justify-between mb-2"
                key={`${lessonIdx}-${secIdx}`}
              >
                <div
                  key={secIdx}
                  className=" w-[95%] flex justify-between items-center border-b border-gray-700 mb-2"
                >
                  <input
                    type="text"
                    value={section}
                    onChange={(e) => handleSectionChange(lessonIdx, secIdx, e.target.value)}
                    onKeyDown={(e) => sectionHandleKeyDown(e, lessonIdx, secIdx)}
                    placeholder="Add a section..."
                    className="bg-transparent text-[15px] font-['open_sans'] text-gray-100 placeholder-gray-500 outline-none w-full"
                  />
                  {showSectionContent[`${lessonIdx}-${secIdx}`] && (
                    <div className="flex w-[160px] m-3">
                      <RoundedButton
                        rightIcon={<FiChevronDown className="ml-2 w-5 h-5" color="#000000" />}
                      >
                        Add Content
                      </RoundedButton>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
