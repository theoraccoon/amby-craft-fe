import { useEffect, useRef, useState } from 'react'

import { Lesson } from '@/types'

export const useLessonBlock = () => {
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
      setShowSectionContent(prev => ({
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

  return {
    lessons,
    setLessons,
    showSectionContent,
    setShowSectionContent,
    isOpenModal,
    setIsOpenModal,
    isOpenModalSection,
    setIsOpenModalSection,
    handleLessonTitleChange,
    handleSectionChange,
    handleKeyDown,
    sectionHandleKeyDown,
    modalRef,
  }
}
