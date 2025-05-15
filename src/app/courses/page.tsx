'use client'
import SharedLayout from '@/components/layout/shared/layout'
import CoursesBoard from '@/features/courses/_components/course_creation/course'

export default function CoursesPage() {
  return (
    <SharedLayout>
      <CoursesBoard />
    </SharedLayout>
  )
}
