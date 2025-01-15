import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/assets/images/bgImage.png";
import heroImage from "@/assets/images/Hero.png";
import StarRating from "../starRating";

const Hero = () => {
  return (
    <div className="mt-[96px] font-rubik">
      <Image
        src={BackgroundImage}
        alt="Background"
        className="absolute w-screen z-10 h-[500px] opacity-5 bg-transparent backdrop-blur-3xl"
      />
      <div className="flex flex-row justify-between mx-[120px]">
        <div className="mt-[86.49px] z-20">
          <h1 className="text-primary-300 text-[64px] w-[482px] font-semibold leading-[64px]">
            Good Food Us Good Mood
          </h1>
          <p className="text-[18px] w-[482px] mt-[24px] text-[#757575]">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex flex-row mt-[32px] gap-[16px]">
            <Button href="/" label="Daftar Sekarang" />
            <button className="bg-[#F2F2F2] text-[#333333] py-[10px] px-[18px] rounded-[100px] font-medium">
              <Link href="/">About Us</Link>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col justify-start md:justify-center items-start">
          <div className="flex justify-center md:justify-center items-center relative bg-[#f5f5f5] w-[250px] h-[250px] md:w-[518.71px] md:h-[518.46] rounded-full">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-[200px] h-[200px] md:w-[412.9px] md:h-[414.75px] z-20 absolute"
            />
          </div>
          <div className="relative">
            <div className="absolute bg-[#F2F2F2] bottom-[240px] right-[20px] md:top-[400px] md:right-[297px] z-30 w-[292px] h-[93px] rounded-[17px] opacity-80 backdrop-blur-[500px] shadow-md"></div>
            <div className="absolute flex flex-row justify-start items-center bottom-[240px] right-[20px] md:top-[400px] md:right-[297px] z-30 w-[292px] h-[93px]">
              <Image
                src={heroImage}
                alt="image"
                className="w-[53px] h-[53px] ml-[23px]"
              />
              <div className="flex flex-col ml-[19px]">
                <p className="text-[14px] font-medium text-black">
                  Green Salad Tomato
                </p>
                <p className="text-[12px] font-normal text-[#757575]">Tomato</p>
                <StarRating totalStars={5} initialRating={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
