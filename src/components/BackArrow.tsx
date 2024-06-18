import React, { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Assets
import { ReactComponent as BackIcon } from "@icons/back-arrow.svg";

interface BackArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ onClick, className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={twMerge(
        "bg-grey-stroke-primary rounded-s-lg w-7 h-[26px] flex items-center justify-center cursor-pointer",
        className
      )}
      onClick={onClick ? onClick : () => navigate(-1)}
    >
      <BackIcon />
    </div>
  );
};

export default BackArrow;
