'use client';
import { useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function CourseBuilder() {
    const router = useRouter();
  const [courseTitle, setCourseTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState(['']);

  const handleLessonChange = (index: number, value: string) => {
    const updated = [...lessons];
    updated[index] = value;
    setLessons(updated);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      const updated = [...lessons];
      updated.splice(index + 1, 0, '');
      setLessons(updated);
    }
  };

  const handleBack = () => {
    router.back(); 
  };

  return (
    <main className="min-h-screen bg-[#181818] text-white relative px-4">
        <div className="absolute top-14 left-7 text-sm  font-['open_sans'] text-[#FFFFFF] hover:underline cursor-pointer flex items-center space-x-5"  onClick={handleBack}>
            <IoArrowBack />
            <span>Cancel</span>
        </div>

      <div className="pt-32 px-4 max-w-3xl mx-auto">
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          placeholder="Course Title"
          className="bg-transparent text-6xl font-semibold font-['comfortaa']  text-gray-200 placeholder-gray-500 outline-none mb-6 w-full"
        />

        <div className="flex items-center mb-14 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="rounded-full w-8 h-8 mr-2"
          />
        <div className="flex items-center font-['open_sans'] text-xs text-[#FFFFFF]">
            <span>Henrikson Cavilon</span>
            <FiChevronDown className="ml-2 w-5 h-5 " />
       </div>
    </div>

        <textarea
          placeholder="Describe your course..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full text-[16px] font-['comfortaa'] bg-transparent text-gray-300 placeholder-gray-500 outline-none resize-none h-24 mb-14"
        />

        {lessons.map((lesson, idx) => (
          <div key={idx} className="w-full flex justify-between items-center border-b border-gray-700 mb-4">
            <input
              type="text"
              value={lesson}
              onChange={(e) => handleLessonChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              placeholder="Add a Lesson title..."
              className="bg-transparent text-[15px] font-['open_sans'] text-gray-100 placeholder-gray-500 outline-none w-full"
            />
            <span className="text-[10px] font-['open_sans'] text-gray-500 ml-2 whitespace-nowrap">
              Shift + Enter to add new section 
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
