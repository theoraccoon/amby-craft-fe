
import React from 'react'

const ContentCreateDropdown = () => {
    return (
      <div className="  text-white p-10 w-[400px] space-y-9 font-['open_sans']  rounded-[15px] bg-[#222222] px-6 py-5 flex flex-col justify-between shadow-[0px_0px_25px_10px_#0000000D]">
        <div>
          <div className="text-[16px] font-semibold leading-[1rem] whitespace-nowrap ">Create Lesson</div>
          <p className="text-[13px] text-gray-400 mt-2.5 font-[400]">
            Create a new lesson from a wide range of learning blocks.
          </p>
        </div>
        <div>
          <div className="text-[16px] font-normal leading-[1rem] whitespace-nowrap ">Create Quiz</div>
          <p className="text-[14px] text-gray-400 mt-2.5 font-[400]">
            Test the learner’s knowledge with a quiz.
          </p>
        </div>
      </div>
    );
  };
  
  export default ContentCreateDropdown;
  