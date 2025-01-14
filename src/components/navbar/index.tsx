import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo-Elemes.png";
import Link from "next/link";

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
    <div className="mx-auto container fixed top-0 left-0 right-0 justify-between flex font-rubik text-[14px] items-center py-[32px] px-[116px] font-medium">
      <Link href="/">
        <Image src={Logo} alt="logo" width={207} height={50} priority />
      </Link>
      <div className="flex-row flex gap-[32px] text-[#757575]">
        {url.map(({ link, label, badge }) => (
          <Link key={label} href={link} className="relative">
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
        <Link href="/login" className="text-[#333333]">
          Masuk
        </Link>
        <Link
          href="/signin"
          className="bg-[#8BAC3E] text-[#FFFFFF] py-[10px] px-[18px] rounded-[100px]"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
