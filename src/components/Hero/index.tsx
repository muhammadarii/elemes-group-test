import React from "react";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/assets/images/bgImage.png";
import heroImage from "@/assets/images/Hero.png";
// import StarRating from "../starRating";

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
        <div className="">
          <div className="flex justify-center items-center w-[518.71px] h-[518.46px] bg-[#F2F2F2] rounded-full">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-[412.9px] h-[414.75px] rounded-full z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
