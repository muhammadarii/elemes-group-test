import React from "react";
import { FaBars } from "react-icons/fa6";

const bottomBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between md:hidden px-[35px] py-[13px] text-[#757575] items-center fixed bottom-0 w-full h-[89px] bg-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center gap-[6.45px]">
          <FaBars className="w-[39px] h-[39px] text-[14px]" />
          <p>Home</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[6.45px]">
          <FaBars className="w-[39px] h-[39px] text-[14px]" />
          <p>Promotions</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[6.45px]">
          <FaBars className="w-[39px] h-[39px] text-[14px]" />
          <p>Others</p>
        </div>
      </div>
    </>
  );
};

export default bottomBar;
