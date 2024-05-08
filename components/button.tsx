import Image from "next/image";
import React from "react";

const Button = ({
  label,
  icon,
  gradient = false,
  gray = false,
  rounded = true,
}: {
  label: string;
  icon?: string;
  gradient?: boolean;
  gray?: boolean;
  rounded?: boolean;
}) => {
  return (
    <button
      className={`${
        gradient ? "btn-gradient" : gray ? "bg-[#F1F1F1]" : "bg-white"
      } cursor-pointer px-5 py-3 md:px-8 font-medium ${
        rounded && "rounded-full"
      } text-xs md:text-sm text-black flex gap-2 items-center`}
      type="button"
    >
      {icon && <Image width={10} height={20} src={icon} alt="icon" />}
      {label}
    </button>
  );
};

export default Button;
