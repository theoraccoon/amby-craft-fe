import Image from "next/image";
import { FC } from "react";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  initials: string;
  lessonsCount: number;
  date: string;
}

const CourseInfoCard: FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  instructor,
  initials,
  lessonsCount,
  date,
}) => {
  return (
    <div className="flex items-center justify-between bg-[#222222] text-secondary !px-6 !py-5 rounded-2xl w-full shadow-md hover:bg-zinc-800 transition">
      <div className="flex items-center gap-6 max-w-[55%]">
        <div className="w-32 h-32 relative rounded-xl overflow-hidden shrink-0">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-['comfortaa'] text-secondary font-[600] text-[1.13rem]  leading-snug !mb-2">{title}</h3>
          <p className="font-opensans font-[400] text-[1rem]  text-zinc-400 leading-normal !mt-2">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-14 text-base whitespace-nowrap">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-black font-semibold rounded-full w-7 h-7 flex items-center justify-center text-sm">
            {initials}
          </div>
          <span className="font-['open_sans'] text-secondary font-[600] text-[0.8rem]">{instructor}</span>
        </div>
        <span className="font-['open_sans'] text-secondary font-[600] text-[0.8rem]">{lessonsCount} lessons</span>
        <span className="font-['open_sans'] text-secondary font-[600] text-[0.8rem]">{date}</span>
      </div>
    </div>
  );
};

export default CourseInfoCard;
