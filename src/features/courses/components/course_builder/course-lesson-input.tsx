'use client'

import ContentCreateDropdown from '../content-create-options-dropdown'
import { useLessonBlock } from './hooks/useLessonBlock'
import { FiChevronDown } from 'react-icons/fi'

import RoundedButton from '@/components/ui/button/rounded-button'

export default function AddLessonBlock() {
  const {
    lessons,
    isOpenModalSection,
    showSectionContent,
    setIsOpenModalSection,
    isOpenModal,
    setIsOpenModal,
    handleLessonTitleChange,
    handleSectionChange,
    sectionHandleKeyDown,
    handleKeyDown,
    modalRef,
  } = useLessonBlock()

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
              onChange={e => handleLessonTitleChange(lessonIdx, e.target.value)}
              onKeyDown={e => handleKeyDown(e, lessonIdx)}
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
                  onChange={e => handleSectionChange(lessonIdx, secIdx, e.target.value)}
                  onKeyDown={e => sectionHandleKeyDown(e, lessonIdx, secIdx)}
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
