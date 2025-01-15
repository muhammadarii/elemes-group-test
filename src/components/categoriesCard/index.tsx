import React from "react";
import bgImage from "@/assets/images/bgImage.png";
import Image from "next/image";

interface categoriesCardProps {
  image: string;
  title: string;
  description: string;
  bgColor?: string;
}

const CategoriesCard: React.FC<categoriesCardProps> = ({
  image,
  title,
  description,
  bgColor,
}) => {
  return (
    <>
      {/* Card */}
      <div
        className="relative group w-[230px] h-[175px] rounded-[8px] transition-all duration-300 hover:h-[195px] overflow-hidden font-rubik"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <Image src={image} alt="cupcake" className="w-[50px] h-[50px]" />
          <p className="text-[16px] mt-[21px] text-black font-medium">
            {title}
          </p>
          <p className="text-[14px] mt-[4px] text-black">{description}</p>
        </div>
        <div
          className="w-full h-full bg-center hidden group-hover:block bg-cover transition-all duration-300 object-scale-down"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
};

export default CategoriesCard;
