
import { FolderIcon,PlusIcon } from "lucide-react"; 
import React from "react";

interface FolderCardProps {
  title: string;
  onClick?: () => void;
  badgeCount?: number;
  variant?: "default" | "new";
}

const FolderCard: React.FC<FolderCardProps> = ({ title, onClick,badgeCount,  variant = "default", }) => {
    const isNewFolder = variant === "new";
  return (
    <div
    onClick={onClick}
    className={`flex items-center justify-between w-full rounded-2xl bg-[#222222] !px-4 !py-4 cursor-pointer transition-colors
      ${isNewFolder ? "text-primary hover:bg-[#2a2a2a]" : "text-secondary hover:bg-[#2a2a2a]"}`}
  >
    <div className="flex items-center gap-3">
      {isNewFolder ? (
        <PlusIcon className="h-6 w-6 text-primary" />
      ) : (
        <FolderIcon className="h-5 w-5.5 text-secondary" />
      )}
      <span
        className={`font-['comfortaa'] font-semibold text-[14px] leading-none tracking-normal
          ${isNewFolder ? "text-primary" : "text-secondary"}`}
      >
        {title}
      </span>
    </div>
    {!isNewFolder && badgeCount !== undefined && badgeCount > 0 && (
        <div className="rounded-full bg-primary px-2 flex items-center justify-center min-w-[18px] h-[18px]">
          <span className="font-[700] text-[10px] font-['Open_Sans'] text-black">
            {badgeCount}
          </span>
        </div>
      )}
  </div>
  );
};

export default FolderCard;