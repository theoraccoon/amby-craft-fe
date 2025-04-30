'use client'

import CourseInfoCard from '@/components/ui/card/course-info-card'
import FolderCard from '@/components/ui/card/course-folder-card'
import React from 'react'
import { folders } from '@/data/folders-card-data'
import { useViewMode } from '@/context/view-mode-context'
import CourseCard from '@/components/ui/card/course-card'

export default function CoursesPage() {
  const { viewMode } = useViewMode()

  return (
    <div className="flex flex-col gap-10 w-full !mt-8 ">
      <h2 className="text-[14px] font-semibold tracking-wide text-secondary pb-[18px]">Folders</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        {folders.map((folder, idx) => (
          <FolderCard
            key={idx}
            title={folder.title}
            badgeCount={folder.badgeCount}
            onClick={() => console.log(folder)}
          />
        ))}
        <FolderCard title="New folder" variant="new" onClick={() => console.log('Create folder')} />
      </section>

      <h2 className="text-[14px] font-semibold tracking-wide text-secondary">Content</h2>
      <section className={`flex ${viewMode === 'grid' ? 'flex-row' : 'flex-col'} gap-4`}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i}>
            {viewMode === 'grid' ? (
              <>
                <CourseCard
                  title="Time management and Impact on Work"
                  description="Office ipsum squad circle no innovation while pretend synergize disband eager hour right ballpark well."
                  image="/images/course-thumb-2.png"
                  author="Eric Andeeerson"
                  lessons={22}
                  date="18 April, 2025"
                />
              </>
            ) : (
              <>
                <CourseInfoCard
                  title="Time management and Impact on Work"
                  description="Office ipsum squad circle no innovation while pretend synergize disband eager hour right ballpark well."
                  imageUrl="/images/course-thumb-2.png"
                  instructor="Eric Andeeerson"
                  initials="EA"
                  lessonsCount={22}
                  date="18 April, 2025"
                />
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
