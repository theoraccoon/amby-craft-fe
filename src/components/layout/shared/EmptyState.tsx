
import { IoDocumentOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
    title: string;
    subtitle: string;
    buttonText: string;
    route: string;
  }

export default function EmptyState({ title, subtitle, buttonText, route }: EmptyStateProps) {

  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

    return (
  <div className="flex flex-col items-center justify-center text-center py-20 text-muted-foreground" >
         <div className="text-4xl mb-4"><IoDocumentOutline style={{ fontSize: '82px' ,color: '#4a4a4a'}}/></div>
         <p className="text-[24px] font-['comfortaa'] text-gray-400 font-[600]">
         {title}
         </p>
         <p className="text-[15px] mt-1 mb-4 font-['open_sans'] text-gray-500 font-[400]">
         {subtitle}
         </p>
         <button 
          onClick={handleClick}
          className="bg-[#2c2110] text-[#F8AF43] text-sm px-6 py-2 rounded-full font-medium shadow-inner hover:brightness-110 transition">
         {buttonText}
       </button>
    </div>
);
}


