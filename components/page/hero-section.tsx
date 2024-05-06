import Image from "next/image";
import React from "react";
import TimeCard from "../timeCard";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import Button from "../button";

const HeroSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);
  return (
    <section className="hero flex justify-center items-center xl:pt-24   relative">
      <div className="">
        <p className="ethnocentric-font hero-font text-4xl xl:text-[70px]">
          San Francisco
        </p>
        <p className="ethnocentric-font hero-font glow text-4xl xl:text-[70px]">
          AI Conference!
        </p>
        <p className="w-full md:w-2/4 text-base mt-7">
          Join us for an extraordinary event at the forefront of artificial
          intelligence innovation.
        </p>

        <div className="avatar flex gap-5 mt-7">
          <div className="avatar-holder flex">
            <Image
              width={40}
              height={40}
              src="/assets/avatar/Ellipse 5.png"
              alt="ellipse"
            />

            <Image
              width={40}
              height={40}
              src="/assets/avatar/Ellipse 6.png"
              alt="ellipse"
            />
            <Image
              width={40}
              height={40}
              src="/assets/avatar/Ellipse 7.png"
              alt="ellipse"
            />
          </div>
          <p className="flex gap-2 items-center">
            Skilled Speakers{" "}
            <span>
              <Image
                width={15}
                height={15}
                alt="arrow"
                src="/assets/icons/Arrow 2.png"
              />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-5 mt-7">
          <TimeCard label="DAYS" value={days} />

          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />

          <TimeCard label="HOURS" value={hours} />
          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />
          <TimeCard label="MINUTES" value={minutes} />
          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />
          <TimeCard label="SECONDS" value={seconds} />
        </div>
        <div className="flex gap-5 mt-7">
          <Button label="BUY TICKETS" icon="/assets/icons/arrow 2.png" />
          <Button
            gradient
            label="READ  MORE"
            icon="/assets/icons/arrow 3.png"
          />
        </div>

        <div className="join flex flex-col md:flex-row justify-center items-center mt-7">
          <p className="font-semibold">
            Join us at 7th San Francisco AI Conference! July 5-9 2018. &nbsp;
          </p>
          <Button
            gradient
            label="READ  MORE"
            icon="/assets/icons/arrow 3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
