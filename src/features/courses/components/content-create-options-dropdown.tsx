import { useRouter } from 'next/navigation'
import React from 'react'

const ContentCreateDropdown = ({
  onClose,
  lessonIdx,
  lesson,
}: {
  onClose: () => void
  lessonIdx: number
  lesson: { title: string }
}) => {
  const router = useRouter()

  const handleAddContent = () => {
    router.push(`/courses/create/lesson-builder?index=${lessonIdx}&title=${lesson.title}`)
    onClose()
  }

  return (
    <div className="text-white font-['open_sans']  rounded-[15px] bg-[#222222] flex flex-col justify-between shadow-[0px_0px_25px_10px_#0000000D] overflow-hidden">
      <div onClick={handleAddContent} className="cursor-pointer hover:bg-[#414141] p-3">
        <div className="text-sm font-semibold leading-[1rem] whitespace-nowrap ">Create Lesson</div>
        <p className="text-xs text-gray-400 mt-2.5 font-[400]">
          Create a new lesson from a wide range of learning blocks.
        </p>
      </div>
      <div className="p-3 hover:bg-[#414141]">
        <div className="text-sm font-normal leading-[1rem] whitespace-nowrap ">Create Quiz</div>
        <p className="text-xs text-gray-400 mt-2.5 font-[400]">
          Test the learner’s knowledge with a quiz.
        </p>
      </div>
    </div>
  )
}

export default ContentCreateDropdown
