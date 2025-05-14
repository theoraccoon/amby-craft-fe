'use client'
import SharedLayout from '@/components/layout/shared/layout'
import CoursesBoard from '@/features/courses/course'
import ContentCreateDropdown from "@features/courses/content-create-options-dropdown"


export default function CoursesPage() {
  return (
    <SharedLayout>
      <CoursesBoard />
      <ContentCreateDropdown/>

     
    </SharedLayout>
  )
}
