'use client'
import RoundedButton from '@/components/ui/button/rounded-button'
import { FiChevronDown } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import { Lesson } from '@/types'
import ContentCreateDropdown from '../content-create-options-dropdown'


export default function AddLessonBlock() {
  const [lessons, setLessons] = useState<Lesson[]>([
    { title: '', showContent: false, sections: [] },
  ])
  const [showSectionContent, setShowSectionContent] = useState<Record<string, boolean>>({})
  const [isOpenModal, setIsOpenModal] = useState<number | null>(null)
  const [isOpenModalSection, setIsOpenModalSection] = useState<number | null>(null)
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

  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpenModal(null)
      }
    }

    if (isOpenModal !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenModal])

  return (
    <>
      {/* {isOpenModal && (
        <div className="w-[736px] flex justify-end bg-white absolute z-10">
          <ContentCreateDropdown onClose={() => setIsOpenModal(false)} />
        </div>
      )} */}
      {lessons.map((lesson, lessonIdx) => (
        <div key={lessonIdx} className="">
          {/* Lesson Title Input */}
          <div className="w-full flex justify-center items-center border-b border-gray-700 ">
            <input
              type="text"
              value={lesson.title}
              onChange={(e) => handleLessonTitleChange(lessonIdx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, lessonIdx)}
              placeholder="Add a Lesson title..."
              className="bg-transparent text-[15px] font-['open_sans'] text-gray-100 placeholder-gray-500 outline-none w-full h-[75px]"
            />
            {isOpenModal === lessonIdx && (
              <div
                ref={modalRef}
                className="absolute z-[50] w-[736px] flex justify-end  rounded-xl shadow-lg "
              >
                <ContentCreateDropdown
                  onClose={() => setIsOpenModal(null)}
                  lessonIdx={lessonIdx}
                  lesson={lessons[lessonIdx]}
                />
              </div>
            )}

            {lesson.showContent ? (
              <div className="flex w-[160px] ">
                <RoundedButton
                  onClick={() => {
                    setIsOpenModal(lessonIdx)
                  }}
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
              className="w-full flex flex-col items-end justify-between "
              key={`${lessonIdx}-${secIdx}`}
            >
              <div
                key={secIdx}
                className=" w-[95%] flex justify-between items-center border-b border-gray-700 "
              >
                <input
                  type="text"
                  value={section}
                  onChange={(e) => handleSectionChange(lessonIdx, secIdx, e.target.value)}
                  onKeyDown={(e) => sectionHandleKeyDown(e, lessonIdx, secIdx)}
                  placeholder="Add a section..."
                  className="bg-transparent text-[15px] font-['open_sans'] text-gray-100 placeholder-gray-500 outline-none w-full h-[75px]"
                />
                {isOpenModalSection === secIdx && (
                  <div className="absolute z-[50] w-[736px] flex justify-end  rounded-xl shadow-lg">
                    <ContentCreateDropdown
                      onClose={() => setIsOpenModal(null)}
                      lessonIdx={lessonIdx}
                      lesson={lessons[lessonIdx]}
                    />
                  </div>
                )}
                {showSectionContent[`${lessonIdx}-${secIdx}`] && (
                  <div className="flex w-[160px] ">
                    <RoundedButton
                      onClick={() => {
                        setIsOpenModalSection(secIdx)
                      }}
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
    </>
  )
}
