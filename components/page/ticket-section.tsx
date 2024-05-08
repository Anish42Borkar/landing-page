import React from "react";
import Button from "../button";
import PriceCard from "../priceCard";

const TicketSection = () => {
  return (
    <div className="bg-white flex text-black justify-center px-5 md:py-28">
      <div className="  w-[60rem] ">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <p className=" text-2xl md:text-4xl font-medium">
            CHOOSE YOUR{" "}
            <span className="text-[#8D36DF] font-semibold">TICKET</span>{" "}
          </p>
          <div className="">
            <Button
              rounded={false}
              gray
              label="VIEW ALL TICKETS"
              icon="/assets/icons/arrow2.png"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 ">
          <p className="ethnocentric-font text-xs text-[#8D36DF]">
            PRICING PLANS
          </p>
          <div className="w-10/12 h-[1px] bg-black"></div>
        </div>

        <p className="mt-5 text-base">
          Attending such an event can expose you to different ways of thinking
          about economic issues and help you broaden your understanding of the
          field.
        </p>

        <div className="flex justify-center xl:justify-between flex-wrap gap-4 mt-14">
          <PriceCard
            icon="/assets/icons/standard.png"
            type="STANDARD"
            title="Main Conference"
            price="$850"
            desc="Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food."
          />
          <PriceCard
            icon="/assets/icons/premium.png"
            gradient
            btnColor="#fff"
            btnIcon="/assets/icons/arrow3.png"
            type="PREMIUM"
            title="Conference & Workshop"
            price="$950"
            desc="Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops."
          />
          <PriceCard
            icon="/assets/icons/premiumTicket.png"
            type="PREMIUM+TICKET"
            title="Superpass
            Conference + 1"
            price="$1250"
            desc="Everything from General Admission and you get full, exclusive access for a year."
          />
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
