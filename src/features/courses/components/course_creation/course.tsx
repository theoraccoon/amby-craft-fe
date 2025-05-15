'use client'

import React, { useState, useRef, useEffect } from 'react'
import CourseInfoCard from '@/components/ui/card/course-info-card'
import CourseCard from '@/components/ui/card/course-card'
import FolderCard from '@/components/ui/card/course-folder-card'
import TextInputModal from '@/components/modals/input-modal'
import { useViewMode } from '@/context/view-mode-context'
// import FolderBreadcrumb from '../../folder-bread-crumb'
import folders from '@/data/folders-card-data'
import { rootCourses as initialRootCourses } from '@/data/root-courses-data'
import type { Course, Folder } from '@/types/index'
import EmptyState from '@/components/layout/shared/EmptyState'
import FolderBreadcrumb from './folder-bread-crumb'

export default function CoursesPage() {
  const { viewMode } = useViewMode()
  const [isOpen, setIsOpen] = useState(false)
  const [folderName, setFolderName] = useState('')
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState(false)

  const [rootCourses] = useState<Course[]>(initialRootCourses)

  const handleCreateFolder = () => {
    console.log('Folder created:', folderName)
    setIsOpen(false)
  }

  const getCurrentFolder = (): Folder => {
    let current: Folder = { children: folders }
    for (const part of currentPath) {
      const next = current.children?.find((f) => f.title === part)
      if (!next) break
      current = next
    }
    return current
  }

  const currentFolder = getCurrentFolder()
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  return (
    <div className="flex flex-col gap-10 w-full !mt-8">
      <TextInputModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        value={folderName}
        onChange={setFolderName}
        onDone={handleCreateFolder}
        title="Create New Folder"
        placeholder="Enter folder title"
        confirmText="Create"
        cancelText="Cancel"
      />

      <FolderBreadcrumb
        currentPath={currentPath}
        onNavigate={setCurrentPath}
        dropdownRef={dropdownRef}
        showDropdown={showDropdown}
        toggleDropdown={() => setShowDropdown((prev) => !prev)}
      />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mb-6">
        {currentFolder.children?.map((folder: Folder, idx: number) => (
          <FolderCard
            key={idx}
            title={folder.title ?? ''}
            badgeCount={folder.badgeCount}
            onClick={() =>
              folder.children || folder.courses
                ? setCurrentPath([...currentPath, folder.title || ''])
                : console.log(folder)
            }
          />
        ))}
        <FolderCard title="New folder" variant="new" onClick={() => setIsOpen(true)} />
      </section>

      {!currentFolder.children?.length &&
        !currentFolder.courses?.length &&
        currentPath.length > 0 && (
          <EmptyState
            title="You don't have any content"
            subtitle="Created courses will show up here"
            buttonText="Create Course"
            route="/courses/create"
          />
        )}

      {currentPath.length === 0 && rootCourses.length > 0 && (
        <>
          <h2 className="text-[14px] font-semibold tracking-wide text-text-secondary">Content</h2>
          <section
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'flex flex-col gap-4'
            } w-full`}
          >
            {rootCourses.map((course: Course, idx: number) => (
              <div key={idx}>
                {viewMode === 'grid' ? (
                  <>
                    <CourseCard
                      title={course.title}
                      description={course.description}
                      image={course.imageUrl}
                      author={course.instructor}
                      lessonsCount={course.lessonsCount}
                      date={course.date}
                    />
                  </>
                ) : (
                  <>
                    <CourseInfoCard
                      key={idx}
                      title={course.title}
                      description={course.description}
                      imageUrl={course.imageUrl}
                      instructor={course.instructor}
                      lessonsCount={course.lessonsCount}
                      date={course.date}
                    />
                  </>
                )}
              </div>
            ))}
          </section>
        </>
      )}

      {currentPath.length === 0 && rootCourses.length === 0 && (
        <EmptyState
          title="You don't have any content"
          subtitle="Created courses will show up here"
          buttonText="Create Course"
          route="/courses/create"
        />
      )}

      {currentFolder.courses && currentFolder.courses.length > 0 && (
        <>
          <h2 className="text-[14px] font-semibold tracking-wide text-text-secondary">Content</h2>
          <section
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'flex flex-col gap-4'
            } w-full`}
          >
            {currentFolder.courses.map((course: Course, idx: number) => (
              <div key={idx}>
                {viewMode === 'grid' ? (
                  <>
                    <CourseCard
                      key={idx}
                      title={course.title}
                      description={course.description}
                      image={course.imageUrl}
                      author={course.instructor}
                      lessonsCount={course.lessonsCount}
                      date={course.date}
                    />
                  </>
                ) : (
                  <>
                    <CourseInfoCard
                      key={idx}
                      title={course.title}
                      description={course.description}
                      imageUrl={course.imageUrl}
                      instructor={course.instructor}
                      initials={course.initials}
                      lessonsCount={course.lessonsCount}
                      date={course.date}
                    />
                  </>
                )}
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  )
}
