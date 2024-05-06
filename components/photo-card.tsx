import Image from "next/image";
import React from "react";

const PhotoCard = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="relative w-64 h-80 rounded-full bg-[#FDF6FF]">
        <Image
          src={img}
          alt="avatar"
          fill
          layout="fill"
          className="rounded-full"
          style={{ objectFit: "contain", padding: "1rem" }}
        />
      </div>

      <p className="text-xl text-[#8D36DF] font-semibold mt-3">Lorem Ipsum</p>
      <p className="text-xs text-[#626F7E] mt-1">CREATIVE DESIGNER</p>

      <div className="w-[5rem] h-[1.5rem] flex justify-around items-center bg-[#F1F1F1] mt-3">
        <Image src="/assets/icons/fb.png" alt="avatar" width={8} height={8} />
        <Image
          src="/assets/icons/twitter.png"
          alt="avatar"
          width={12}
          height={12}
        />
      </div>
    </div>
  );
};

export default PhotoCard;
