'use client'

import SharedLayout from '@/components/layout/shared/layout'
import CoursesBoard from '@/features/courses/components/course_creation/course'

export default function CoursesPage() {
  return (
    <SharedLayout>
      <CoursesBoard />
    </SharedLayout>
  )
}
