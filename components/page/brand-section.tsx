import Image from "next/image";
import React from "react";

const brands = [
  "/assets/brands/tech.png",
  "/assets/brands/vision.png",
  "/assets/brands/nilla.png",
  "/assets/brands/consult.png",
  "/assets/brands/mogna.png",
  "/assets/brands/n.png",
  "/assets/brands/mollit.png",
];

const BrandSection = () => {
  return (
    <div
      className="h-24 flex gap-8 justify-center items-center bg-[#000014]"
      id="sponsorship"
    >
      {brands.map((img) => (
        <div className="w-20 h-12 relative" key={img}>
          <Image
            src={img}
            alt="brand"
            fill
            sizes="100%"
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandSection;
