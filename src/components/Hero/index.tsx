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
      <div className="flex flex-col md:flex-row justify-between mx-[12px] md:mx-[120px]">
        <div className="mt-[86.49px] z-20">
          <h1 className="text-primary-300 text-[48px] md:text-[64px] w-[400px] md:w-[482px] font-semibold leading-[64px]">
            Good Food Us Good Mood
          </h1>
          <p className="text-[18px] w-[482px] mt-[24px] text-[#757575] hidden md:block">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="hidden md:flex flex-row mt-[32px] gap-[16px]">
            <Button href="/" label="Daftar Sekarang" />
            <button className="bg-[#F2F2F2] text-[#333333] py-[10px] px-[18px] rounded-[100px] font-medium">
              <Link href="/">About Us</Link>
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-[300px] h-[300px] md:w-[518.71px] md:h-[518.46px] bg-[#F2F2F2] rounded-full">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-[220px] h-[220px] md:w-[412.9px] md:h-[414.75px] rounded-full z-20"
            />
          </div>
          <div className="relative">
            <div className="absolute bg-[#F2F2F2] bottom-[8px] right-[10px] md:bottom-[30px] md:right-[297px] z-30 w-[292px] h-[93px] rounded-[17px] opacity-80 backdrop-blur-[500px] shadow-md"></div>
            <div className="absolute flex flex-row justify-start items-center bottom-[8px] right-[10px] md:bottom-[30px] md:right-[297px] z-30 w-[292px] h-[93px]">
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
          <div className="mt-10 md:hidden">
            <p className="text-[18px] font-normal w-[420px] text-[#757575] leading-[29px] mt-[32px]">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div className="flex flex-row gap-[16px] font-medium mt-8">
              <Button href="/" label="Daftar Sekarang" />
              <button className="bg-[#F2F2F2] text-[#333333] py-[10px] px-[18px] rounded-[100px]">
                <Link href="/">About</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
