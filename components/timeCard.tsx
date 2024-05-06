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
      } relative flex justify-center items-center`}
    >
      <p className="text-4xl font-semibold">{value}</p>
      <span className="absolute text-xs text-[#626F7E] left-1/2 bottom-1 -translate-x-1/2">
        {label}
      </span>
    </div>
  );
};

export default TimeCard;
