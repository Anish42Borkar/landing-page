"use client";
import React from "react";

const TimeCard = ({
  label,
  value,
  transparent = false,
}: {
  label: string;
  value: number;
  transparent?: boolean;
}) => {
  return (
    <div
      className={`time-card ${
        !transparent && "time-card-gradient"
      } w-14 h-14 md:w-20 md:h-20 relative flex justify-center items-center`}
    >
      <p className="text-2xl md:text-4xl font-semibold">{value}</p>
      <span className="absolute text-[0.6rem] text-[#626F7E] left-1/2 bottom-1 -translate-x-1/2">
        {label}
      </span>
    </div>
  );
};

export default TimeCard;
