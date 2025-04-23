
import Image from 'next/image';
import { User, Layers, Calendar } from 'lucide-react';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  lessons: number;
  date: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  author,
  lessons,
  date,
}) => {
  return (
    <div className="bg-[#222222] text-white rounded-2xl overflow-hidden shadow-md !mb-4 !p-4 max-w-sm">
      <div className="rounded-xl overflow-hidden !mb-4">
        <div className="relative w-full h-44">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h3 className="text-white font-[600] text-[1.13rem] leading-[100%] tracking-[0%] font-comfortaa !mb-2">{title}</h3>

      <p className="font-opensans text-gray-400 text-sm !mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex justify-between items-center text-sm text-gray-300">
        <div className="flex items-center gap-1">
          <User className="text-[#F8AF43]"  width={16} height={16}  />
          <span className="text-white text-[12px] ">{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Layers className="text-[#F8AF43]"  width={16} height={16}  />
          <span className="text-white font-[400] text-[12px] ">{lessons} lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="text-[#F8AF43]"  width={16} height={16} />
          <span className="text-white font-[400] text-[12px]">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
