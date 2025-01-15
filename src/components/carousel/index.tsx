"use client";
import { useRef } from "react";
import CategoriesCard from "@/components/categoriesCard";
import CupCake from "@/assets/icons/cupcake.svg";
import Pizza from "@/assets/icons/pizza.svg";
import Kebab from "@/assets/icons/kebab.svg";
import Salmon from "@/assets/icons/salmon.svg";
import Doughnut from "@/assets/icons/doughnut.svg";
import ArrowBack from "@/assets/icons/ArrowBack.svg";
import ArrowForward from "@/assets/icons/ArrowForward.svg";
import Image from "next/image";

const data = [
  {
    image: CupCake,
    title: "Cupcake",
    description: "22 Items",
    bgColor: "#F0FEEB",
  },
  { image: Pizza, title: "Pizza", description: "25 Items", bgColor: "#E6F3F5" },
  { image: Kebab, title: "Kebab", description: "12 Items", bgColor: "#EAEEFA" },
  {
    image: Salmon,
    title: "Salmon",
    description: "22 Items",
    bgColor: "#F9EEF3",
  },
  {
    image: Doughnut,
    title: "Doughnut",
    description: "25 Items",
    bgColor: "#F3F7D9",
  },
  { image: Kebab, title: "Kebab", description: "12 Items", bgColor: "#EAEEFA" },
  {
    image: Salmon,
    title: "Salmon",
    description: "22 Items",
    bgColor: "#F9EEF3",
  },
  {
    image: Doughnut,
    title: "Doughnut",
    description: "25 Items",
    bgColor: "#F3F7D9",
  },
  { image: Kebab, title: "Kebab", description: "12 Items", bgColor: "#EAEEFA" },
  {
    image: Salmon,
    title: "Salmon",
    description: "22 Items",
    bgColor: "#F9EEF3",
  },
];

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full md:h-[573px] font-rubik">
      <div className="pt-[64.22px] pl-[30px] md:pl-[116px]">
        <p className="text-[38px] font-medium text-[#333333]">
          Browse Our Category
        </p>
        <p className="text-[38px] font-medium text-[#8BAC3E] mt-[-10px]">
          Receipt
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex flex-col justify-start items-start overflow-x-scroll scrollbar-hide"
      >
        <div className="flex flex-row mt-[32.78px] gap-[10px] pl-[30px] md:pl-[116px]">
          {data.map((item, index) => (
            <div key={index}>
              <CategoriesCard
                image={item.image}
                title={item.title}
                description={item.description}
                bgColor={item.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
      {/* arrow */}
      <div className="absolute bottom-[50px] right-[133px] flex-row gap-[10px] text-black hidden md:flex">
        <button
          onClick={scrollLeft}
          className="flex justify-start items-center w-[113px] h-[50px] rounded-full bg-primary-300"
        >
          <Image src={ArrowBack} alt="ArrowBack" className="ml-[13px]" />
          <p className="text-[16px] font-medium ml-[7px] text-white">PREV</p>
        </button>
        <button
          onClick={scrollRight}
          className="flex justify-end items-center w-[113px] h-[50px] rounded-full bg-primary-300"
        >
          <p className="text-[16px] font-medium mr-[7px] text-white">NEXT</p>
          <Image src={ArrowForward} alt="ArrowForward" className="mr-[13px]" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
