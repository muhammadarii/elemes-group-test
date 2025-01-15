import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return (
    <button className="bg-[#8BAC3E] text-[#FFFFFF] py-[10px] px-[18px] rounded-[100px] font-rubik">
      <Link href={href}>{label}</Link>
    </button>
  );
};

export default Button;
