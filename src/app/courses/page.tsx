// import { useRouter, useSearchParams } from 'next/navigation';
// import { paths } from '@/config/path';
// import LoginForm from '@/features/auth/_components/login-form';
import CourseCard from "@/components/ui/card/course-card";
import CourseInfoCard from "@/components/ui/card/course-info-card";
import React from "react";

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CourseCard
        image="/images/course-thumb-1.png"
        title="Time management and Impact on Work"
        description="Office ipsum squad circle no innovation while pretend synergize disband eager hour right ballpark well."
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
      <CourseInfoCard
        title="Time management and Impact on Work"
        description="Office ipsum squad circle no innovation while pretend synergize disband eager hour right ballpark well."
        imageUrl="/images/course-thumb-2.png"
        instructor="Eric Andeeerson"
        initials="EA"
        lessonsCount={22}
        date="18 April, 2025"
      />
    </div>
  );
}
