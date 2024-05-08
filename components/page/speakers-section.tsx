import Image from "next/image";
import React from "react";
import PhotoCard from "../photo-card";

const data = [
  "/assets/avatar/avatarImg-1.png",
  "/assets/avatar/avatarImg-2.png",
  "/assets/avatar/avatarImg-3.png",
  "/assets/avatar/avatarImg-4.png",
  "/assets/avatar/avatarImg-5.png",
  "/assets/avatar/avatarImg-6.png",
];

const SpeakersSection = () => {
  return (
    <div className="bg-white" id="speakers">
      <div className="speakers relative overflow-hidden w-full h-96 clip-polygon">
        <Image
          alt="curv"
          fill
          // sizes="400rem"
          layout="fill"
          style={{ objectFit: "cover" }}
          src="/assets/curv.png"
        />

        <div className="absolute left-1/2 top-10 -translate-x-1/2 ">
          <p className="ethnocentric-font text-center">LEARDERS AND EXPERTS</p>
          <p className="text-4xl text-center mt-7">
            FEATURED <span className="font-semibold ">SPEAKERS</span>
          </p>
          <p className="text-center mt-5">
            Anticipate a dynamic assembly of visionary thinkers and seasoned
            specialists, who will generously impart their wisdom, perspectives,
            and prognostications in the field.
          </p>
        </div>
      </div>
      <div className="curved  md:-mt-20 lg:-mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center md:py-16 md:px-40 lg:px-52">
        {data.map((img) => (
          <div className="flex  justify-center" key={img}>
            <PhotoCard img={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;
