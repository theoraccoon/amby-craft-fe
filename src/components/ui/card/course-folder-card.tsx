import { FolderIcon, PlusIcon } from "lucide-react"; 
import React from "react";

interface FolderCardProps {
  title: string;
  onClick?: () => void;
  badgeCount?: number;
  variant?: "default" | "new";
}

const FolderCard: React.FC<FolderCardProps> = ({
  title,
  onClick,
  badgeCount,
  variant = "default",
}) => {
  const isNewFolder = variant === "new";
  const formattedBadge = badgeCount !== undefined && badgeCount > 999 ? "999+" : badgeCount;

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between flex-wrap sm:flex-nowrap w-full rounded-2xl bg-[#222222] px-[26px] sm:px-6 py-[18px] cursor-pointer transition-colors
        ${isNewFolder ? "text-primary hover:bg-[#2a2a2a]" : "text-secondary hover:bg-[#2a2a2a]"}`}
    >
      <div className="flex items-center gap-[23px] sm:gap-6 min-w-0">
        {isNewFolder ? (
          <PlusIcon className="h-6 w-6 text-primary shrink-0" />
        ) : (
          <FolderIcon className="h-6 w-6 text-secondary shrink-0" />
        )}
        <span
          className={`font-['comfortaa'] font-semibold text-[14px] leading-none tracking-normal truncate
            ${isNewFolder ? "text-primary" : "text-secondary"}`}
        >
          {title}
        </span>
      </div>
      {!isNewFolder && badgeCount !== undefined && badgeCount > 0 && (
        <div className="rounded-full bg-primary px-2 h-[20px] min-w-[28px] flex items-center justify-center mt-2 sm:mt-0">
          <span className="font-[700] text-[10px] font-['Open_Sans'] text-black whitespace-nowrap">
            {formattedBadge}
          </span>
        </div>
      )}
    </div>
  );
};

export default FolderCard;
