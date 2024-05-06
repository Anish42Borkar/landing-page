import React from "react";
import DetailsCard from "../detailsCard";

const data = [
  {
    img: "/assets/offer1.png",
    subImg: "/assets/icons/offerIcon1.png",
    title: "Unparalleled Knowledge",
    desc: "Gain a comprehensive understanding of AI's latest trends, advancements, and challenges. Our diverse sessions will cover cutting-edge topics beyond the conventional, ensuring you stay one step ahead in this rapidly evolving field.",
  },
  {
    img: "/assets/offer2.png",
    subImg: "/assets/icons/offerIcon2.png",
    title: "Networking Opportunities",
    desc: "Connect with industry leaders, influential professionals, and fellow AI enthusiasts. Forge meaningful connections that can shape your career and open doors to new collaborations and partnerships.",
  },
  {
    img: "/assets/offer3.png",
    subImg: "/assets/icons/offerIcon3.png",
    title: "Career Development",
    desc: "Discover exciting career opportunities in the realm of AI. Whether you're a seasoned professional or just starting your journey, our conference offers valuable insights and guidance to navigate the AI landscape and accelerate your professional growth.",
  },
  {
    img: "/assets/offer4.png",
    subImg: "/assets/icons/offerIcon4.png",
    title: "Engaging Discussions",
    desc: "Engage in dynamic conversations and thought-provoking discussions with like-minded individuals who share your passion for AI. Explore new perspectives, exchange ideas, and contribute to shaping the future of this transformative technology.",
  },
];

const WhatWeOfferSection = () => {
  return (
    <div className="we-offer w-full">
      <div className="flex flex-col flex-wrap items-center justify-center mt-24 ">
        <p className="ethnocentric-font text-[#727271] text-sm">
          WHAT WE OFFER
        </p>
        <p className="text-4xl text-center mt-8">
          WHY ATTEND THE SAN FRANCISCO <br />{" "}
          <span className="text-[#8D36DF] font-semibold">AI CONFERENCE?</span>
        </p>
      </div>

      <div className="grid justify-center  grid-cols-1 xl:grid-cols-2 gap-8 px-2 md:px-16 xl:px-80 mt-16">
        {data.map((item) => (
          <div className="flex justify-center" key={item.img}>
            <DetailsCard
              desc={item.desc}
              img={item.img}
              subImg={item.subImg}
              title={item.title}
              key={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
