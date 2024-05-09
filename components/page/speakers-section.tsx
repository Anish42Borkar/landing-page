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
      <div className="speakers curve-parent relative overflow-hidden w-full h-96 ">
        <Image
          alt="curv"
          fill
          // sizes="400rem"
          layout="fill"
          style={{ objectFit: "cover" }}
          src="/assets/curv.png"
        />

        <div className="absolute left-1/2 w-96 top-20 -translate-x-1/2 ">
          <p className="ethnocentric-font text-center">LEARDERS AND EXPERTS</p>
          <p className="text-4xl text-center mt-4 md:mt-7">
            FEATURED <span className="font-semibold ">SPEAKERS</span>
          </p>
          <p className="text-center mt-5">
            Anticipate a dynamic assembly of visionary thinkers and seasoned
            specialists, who will generously impart their wisdom, perspectives,
            and prognostications in the field.
          </p>
        </div>

        <div className="hidden md:block custom-shape-divider-bottom-1715246983">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 119"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="md:hidden custom-shape-divider-bottom-1715247561">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 119"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/* md:-mt-20 lg:-mt-24 */}
      <div className="curved   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center md:py-16 md:px-40 lg:px-52">
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
