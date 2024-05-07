import Image from "next/image";
import React from "react";
import Button from "./button";
import TextButton from "./textButton";

const PriceCard = ({
  gradient = false,
  btnColor = "#8D36DF",
  btnIcon = "/assets/icons/arrow2.png",
  type,
  desc,
  title,
  price,
  icon,
}: {
  gradient?: boolean;
  btnColor?: string;
  btnIcon?: string;
  type: string;
  price: string;
  title: string;
  desc: string;
  icon: string;
}) => {
  return (
    <div
      className={`w-[19rem] h-96 ${
        gradient ? "price-card-gradient text-white" : "bg-white"
      }  border py-7 px-9`}
    >
      <div className="flex gap-2 items-center">
        <Image src={icon} alt="icon" width={22} height={22} />
        <p
          className={`ethnocentric-font text-xs text-[${
            gradient ? "#fff" : "#727271"
          }]`}
        >
          {type}
        </p>
      </div>

      <p
        className={`text-[4rem] text-[${
          gradient ? "#fff" : "#8D36DF"
        }] font-semibold mt-3`}
      >
        {price}
      </p>
      <p className="text-3xl font-semibold mt-3">{title}</p>
      <p className="text-xs mt-3 ">{desc}</p>

      <p className="mt-3">
        <TextButton btnColor={btnColor} label="BUY TICKET NOW" icon={btnIcon} />
      </p>
    </div>
  );
};

export default PriceCard;
