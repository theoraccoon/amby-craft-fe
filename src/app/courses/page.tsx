'use client';

import CourseCard from "@/components/cards/CourseCard";

import React from 'react'

export default function DashboardPage() {
  return (
    <div >
      <CourseCard
        image="/images/course-thumb-1.jpg"
        title="Time management and Impact on Work"
        description="Office ipsum squad circle no innovation while pretend synergize disband..."
        author="Desmond Essuman"
        lessons={22}
        date="18/04/25"
      />
      <CourseCard
        image="/images/course-thumb-2.png"
        title="Content Management Systems"
        description="Office ipsum squad circle no innovation while pretend synergize disband..."
        author="Eric Andeerson"
        lessons={22}
        date="18/04/25"
  
      />
    </div>
  )
}
