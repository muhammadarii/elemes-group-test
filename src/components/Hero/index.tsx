import React from "react";
import Button from "../Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-[96px] font-rubik">
      <div className="flex flex-row justify-between mx-[120px]">
        <div className="">
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
        <div className="">2</div>
      </div>
    </div>
  );
};

export default Hero;
