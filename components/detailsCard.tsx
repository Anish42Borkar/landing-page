import Image from "next/image";
import { decl } from "postcss";
import React from "react";

const DetailsCard = ({
  img,
  desc,
  subImg,
  title,
}: {
  img: string;
  subImg: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-[25rem]  pb-16">
      <div className="w-[100%] h-[20rem] relative">
        <Image
          src={img}
          alt="offer"
          fill
          sizes="100%"
          layout="fill"
          style={{ objectFit: "fill" }}
        />

        <div className="w-20 h-20 flex justify-center items-center absolute bottom-0 left-0 bg-[#5603B4]">
          <Image src={subImg} alt="offer" width={55} height={55} />
        </div>
      </div>
      <p className="text-lg mt-3">{title}</p>
      <p className="text-xs mt-3">{desc}</p>
    </div>
  );
};

export default DetailsCard;
