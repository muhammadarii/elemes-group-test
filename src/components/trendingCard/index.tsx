import React from "react";
import bgImage from "@/assets/images/bgImage.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import StarRating from "../starRating";

interface trendingCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  bgColor?: string;
  totalStars?: number;
  initialRating?: number;
}

const TrendingCard: React.FC<trendingCardProps> = ({
  image,
  title,
  description,
  bgColor,
  totalStars,
  initialRating,
}) => {
  return (
    <>
      {/* Card */}
      <div
        className="relative group w-[402px] h-[292px] md:w-[287.5px] md:h-[306px] rounded-[17px] transition-all duration-300 overflow-hidden font-rubik"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute flex flex-col justify-center items-start ml-[20.68px] mt-[33px]">
          <Image src={image} alt="cupcake" className="w-[118.15px] h-[120px]" />
          <p className="text-[26px] mt-[19px] text-black font-medium">
            {title}
          </p>
          <p className="text-[18px] mt-[4px] text-primary-300">{description}</p>
          <div className="mt-[19px]">
            <StarRating totalStars={totalStars} initialRating={initialRating} />
          </div>
        </div>
        <div
          className="w-full h-full bg-center hidden group-hover:block bg-cover opacity-10 transition-all duration-300 object-scale-down"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
};

export default TrendingCard;
