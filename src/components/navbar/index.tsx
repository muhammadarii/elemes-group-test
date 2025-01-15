import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo-Elemes.png";
import Link from "next/link";
import Button from "../Button";

const url = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "About",
  },
  {
    link: "#",
    label: "Promotions",
    badge: "HOT",
  },
  {
    link: "#",
    label: "Blogs",
  },
  {
    link: "#",
    label: "Contact Us",
  },
];
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 font-rubik text-[14px] font-medium bg-white z-50">
      <div className="flex-row flex justify-between items-center mx-[33px] mt-[28px] mb-[19px] md:mt-[19px] md:mb-[27px] md:mx-[116px]">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            priority
            className="w-[150px] h-[36px] md:w-[207px] md:h-[50px]"
          />
        </Link>
        <div className="flex-row flex gap-[32px] text-[#757575]">
          {url.map(({ link, label, badge }) => (
            <Link key={label} href={link} className="relative hidden md:block">
              {badge && (
                <span className="absolute top-[-18px] left-[58.5px] flex justify-center items-center text-[#FFFFFF] bg-[#E7462D] w-[36px] h-[19px] rounded-[8px] text-[8px]">
                  {badge}
                </span>
              )}
              {label}
            </Link>
          ))}
        </div>
        <div className="flex-row flex items-center gap-[24px]">
          <Link href="/login" className="text-[#333333] hidden md:flex">
            Masuk
          </Link>
          <Button href="/" label="Daftar Sekarang" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
