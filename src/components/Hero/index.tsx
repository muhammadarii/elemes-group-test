import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/images/Hero.png";
import BackgroundImage from "@/assets/images/bgImage.png";
import StarRating from "@/components/starRating";

const Hero = () => {
  return (
    <div className="mt-[96px]">
      <Image
        src={BackgroundImage}
        alt="Background"
        className="absolute z-10 w-screen h-[500px] opacity-5 bg-transparent backdrop-blur-3xl"
      />
      <div className="flex-col flex md:grid md:grid-cols-2 mt-[150px] md:mt-[96px] text-black ml-10 md:mx-[120px] font-rubik ">
        <div className="flex flex-col justify-center items-start z-10">
          <p className="text-[48px] w-[380px] md:text-[64px] font-medium md:w-[482px] leading-[64px] text-primary-300">
            Good Food Us Good Mood
          </p>
          <p className="text-[18px] font-normal w-[482px] text-[#757575] leading-[29px] mt-[32px] hidden md:block">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex-row gap-[16px] font-medium hidden md:flex">
            <Button href="/" label="Daftar Sekarang" />
            <button className="bg-[#F2F2F2] text-[#333333] py-[10px] px-[18px] rounded-[100px]">
              <Link href="/">About</Link>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col justify-start md:justify-center items-start mt-10">
          <div className="flex justify-center md:justify-center items-center relative bg-[#f5f5f5] w-[250px] h-[250px] md:w-[518.71px] md:h-[518.46] rounded-full">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-[200px] h-[200px] md:w-[412.9px] md:h-[414.75px] z-20 absolute"
            />
          </div>
          <div>
            <div className="absolute bg-[#F2F2F2] bottom-[240px] right-[20px] md:bottom-[37.88px] md:right-[447px] z-30 w-[292px] h-[93px] rounded-[17px] opacity-80 backdrop-blur-[500px] shadow-md"></div>
            <div className="absolute flex flex-row justify-start items-center bottom-[240px] right-[20px] md:bottom-[37.88px] md:right-[447px] z-30 w-[292px] h-[93px]">
              <Image
                src={heroImage}
                alt="image"
                className="w-[53px] h-[53px] ml-[23px]"
              />
              <div className="flex flex-col ml-[19px]">
                <p className="text-[14px] font-medium">Green Salad Tomato</p>
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
