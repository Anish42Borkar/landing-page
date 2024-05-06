import Image from "next/image";
import React from "react";
import Button from "../button";

const DontMissSection = () => {
  return (
    <div className=" w-full  xl:h-fit">
      <div className="dont-miss relative overflow-hidden w-full h-[40rem] md:h-[30rem] xl:h-96 clip-polygon">
        <Image
          alt="curv"
          fill
          // sizes="400rem"
          layout="fill"
          style={{ objectFit: "cover" }}
          src="/assets/dont-miss.png"
        />

        <div className="absolute left-1/2 top-10 -translate-x-1/2 ">
          <p className="text-4xl text-center mt-7">
            DON&apos;T MISS OUT ON <br />
            <span className="font-semibold ">THIS EXTRAORDINARY EVENT!</span>
          </p>
          <p className="text-center mt-5">
            Register now to secure your spot at the San Francisco AI Conference.
            Experience the thrill of being part of a groundbreaking conference
            that pushes the boundaries of AI exploration. Together, let&apos;s
            unlock the limitless possibilities of artificial intelligence.
          </p>

          <div className="mt-10 flex justify-center">
            <Button label="REGISTER NOW" icon="/assets/icons/arrow 2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMissSection;
