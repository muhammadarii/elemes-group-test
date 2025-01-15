import React from "react";
import Logo from "@/assets/images/Logo-Elemes.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { LuMail } from "react-icons/lu";

const footer = () => {
  return (
    <div className="flex flex-col justify-center items-center font-rubik">
      <div className="flex flex-row w-[1239px] h-[359px] bg-[#F9FFF6] rounded-[20px]  mt-[250px] mb-[48px]">
        <div className="flex flex-col justify-start mt-[79px] ml-[62px] w-[506px]">
          <Image src={Logo} alt="logo" className="w-[207px] h-[50px]" />
          <p className="text-[14px] mt-[16px] text-[#757575] w-[335px]">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex flex-row gap-[12.5px] mt-[32px]">
            <div className="flex justify-center items-center w-[40px] h-[40px] text-primary-300 hover:text-white hover:bg-primary-300 rounded-full">
              <LuMail className="w-[14.95px] h-[14.95px]" />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] text-primary-300 hover:text-white hover:bg-primary-300 rounded-full">
              <HiOutlinePhone className="w-[14.95px] h-[14.95px]" />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] text-primary-300 hover:text-white hover:bg-primary-300 rounded-full">
              <FaInstagram className="w-[14.95px] h-[14.95px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start mt-[79px] mr-[115px]">
          <p className="text-[18px] text-[#333333] font-medium mb-[33px]">
            Categories
          </p>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            Cupcake
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            Pizza
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            Kebab
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            Salmon
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            Dougnut
          </Link>
        </div>
        <div className="flex flex-col justify-start mt-[79px] mr-[115px]">
          <p className="text-[18px] text-[#333333] font-medium mb-[33px]">
            About Us
          </p>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575]"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="text-[14px] font-normal mb-[19px] text-[#757575] w-[102px]"
          >
            Report Problem
          </Link>
        </div>
        <div className="flex flex-col justify-start mt-[79px] mr-[67px]">
          <p className="text-[18px] text-[#333333] font-medium mb-[33px]">
            Newsletter
          </p>
          <p className="w-[245px] font-normal text-[#757575]">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="flex flex-row relative w-[250px] h-[40px] rounded-[8px] border-[1px] border-[#757575] bg-transparent pl-2 pr-[60px] mt-[18px]">
            <input className="w-full h-full outline-none bg-transparent text-black" />
            <button className="absolute top-[0px] right-[0px] bg-[#8BAC3E] w-[60px] h-[40px] rounded-r-[8px]">
              SEND
            </button>
          </div>
          <div className="flex-col flex gap-[12.5px] mt-[32px]">
            <div className="flex flex-row items-center gap-[6.17px]">
              <LuMail className="w-[15px] h-[15px] text-primary-300" />
              <p className="text-[14px] text-black">elemesid@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-[6.17px]">
              <HiOutlinePhone className="w-[15px] h-[15px] text-primary-300" />
              <p className="text-[14px] text-black"> 0888 1111 2222 </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <p className="text-[#757575] font-medium mb-[32px] text-[12px]">
        © 2021 Elemes id. All rights reserved
      </p>
    </div>
  );
};

export default footer;
