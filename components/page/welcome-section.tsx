import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className=" py-28 w-full bg-white text-black flex justify-center items-center">
      <div className=" w-[60rem] flex flex-wrap md:flex-nowrap justify-center  gap-8">
        <div className="left">
          <p className="text-sm text-[#C7C0B6] ethnocentric-font">WELCOME TO</p>
          <p className="text-4xl font-semibold mt-2">SAN FRANCISCO</p>
          <p className="text-[#8d36df] text-4xl font-semibold">
            AI CONFERENCE!
          </p>

          <div className="relative h-80 w-80">
            <Image
              fill
              objectFit="contain"
              src="/assets/confrence.png"
              alt="confrence"
            />
          </div>
        </div>
        <div className="right">
          <p className="text-[0.93rem] px-4">
            Join us for an extraordinary event at the forefront of artificial
            intelligence innovation. Founded by a passionate group of
            technologists and engineers, the San Francisco AI Conference is the
            ultimate gathering for those eager to explore the limitless
            potential of AI. Prepare to be captivated by thought-provoking
            discussions, enlightening presentations, and unrivaled networking
            opportunities.
            <br />
            <br />
            At the San Francisco AI Conference, we go beyond the ordinary. Our
            mission is to delve into AI topics that have yet to be thoroughly
            explored. Join us as we uncover the groundbreaking impacts of AI
            across various industries and sectors. From technical innovation to
            the realms of art, music, criminal justice, immigration, and
            countless others, we&apos;ll shed light on the limitless
            possibilities that AI holds for the future.
            <br />
            <br />
            <span className="font-semibold">
              What sets us apart are the prestigious and world-renowned speakers
              who will grace our stage. These luminaries, experts in their
              respective fields, will share their insights, experiences, and
              visions for the future of AI. Be prepared to be inspired,
              challenged, and enlightened as they take you on an extraordinary
              journey.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
