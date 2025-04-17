'use client';

import "../../styles/global.css"


export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
    </>
  );
}
