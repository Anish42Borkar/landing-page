import React from "react";
import TimeCard from "../timeCard";
import Image from "next/image";
import useCountdownTimer from "@/hooks/useCountdownTimer";

const FooterSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);
  return (
    <div
      className="footer-section  flex flex-col items-center py-10"
      id="contact-us"
    >
      <div className=" flex flex-col lg:flex-row justify-around  items-center w-[80rem] mt-10">
        <p className="text-4xl">
          COUNT EVERY <br />{" "}
          <span className="text-[#8D36DF]">SECOND UNTIL EVENT</span>
        </p>

        <div className="flex items-center gap-5 ">
          <TimeCard transparent label="DAYS" value={days} />

          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />

          <TimeCard transparent label="HOURS" value={hours} />
          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />
          <TimeCard transparent label="MINUTES" value={minutes} />
          <Image
            width={8}
            height={5}
            src="/assets/icons/colun.png"
            alt="icon"
          />
          <TimeCard transparent label="SECONDS" value={seconds} />
        </div>
      </div>
      <div className="bottom mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="w-60">
            <Image width={100} height={50} src="/assets/logo.png" alt="logo" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="  w-60  ">
            <p className="h-10 items-center flex text-[#8D36DF]">QUICK LINKS</p>
            <div className="flex flex-col gap-1 ">
              <p className="text-xs">Home</p>

              <p className="text-xs">Speakers</p>

              <p className="text-xs">Sponsorship</p>

              <p className="text-xs">Travel</p>
              <p className="text-xs">FAQ</p>
            </div>
          </div>
          <div className=" w-60 ">
            <p className="h-10 items-center flex text-[#8D36DF]">CONTACT US</p>
            <div className="text-xs">
              <p className="">27 Division St, San Francisco, SF 94016, USA</p>
              <p className="mt-5">+1 800 123 456 789</p>
            </div>

            <div className="flex gap-5 mt-5">
              <Image
                src="/assets/icons/fbWhite.png"
                alt="icon"
                width={8}
                height={8}
              />
              <Image
                src="/assets/icons/TwitterWhite.png"
                alt="icon"
                width={10}
                height={10}
              />
              <Image
                src="/assets/icons/linkedInWhite.png"
                alt="icon"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="w-52 ">
            <p className="h-10 items-center flex text-[#8D36DF]">SUBSCRIBE</p>

            <div className="flex justify-between">
              <p className="text-xs">Get news & updates</p>
              <Image
                src="/assets/icons/at-sign.png"
                alt="icon"
                width={10}
                height={10}
              />
            </div>
            <div className="mt-1 bg-white h-[1px] w-full"></div>

            <p className="text-[0.65rem] mt-3">
              Our expertise, as well as our passion for web design, sets us
              apart from other agencies.
            </p>
          </div>
        </div>
        <div className="mt-3 hidden md:block">
          <div className="my-1 bg-white h-[1px] w-full"></div>
          <div className="flex justify-between text-xs">
            <p className="">
              © 2023 San Francisco AI Conference LLC. All Rights Reserved.
            </p>
            <p className="">Made w/ Savior</p>
            <p className="">Terms of Use Proposal Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
