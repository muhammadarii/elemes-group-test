import React from "react";
import Pizza from "@/assets/images/Pizza.png";
import PizzaMeat from "@/assets/images/PizzaMeat.png";
import DonerKebab from "@/assets/images/DonerKebab.png";
import SalmonRoll from "@/assets/images/SalmonRoll.png";
import CupcakeChoco from "@/assets/images/CupcakeChoco.png";
import DoughnutMilk from "@/assets/images/DoughnutMilk.png";
import DoughnutUnicorn from "@/assets/images/DoughnutUnicorn.png";
import KathiKebab from "@/assets/images/KathiKebab.png";
import TrendingCard from "../trendingCard";
import Button from "../Button";

const data = [
  {
    image: Pizza,
    title: "Pizza Paperoni",
    description: "Pizza",
    bgColor: "#E6F3F5",
    totalStars: 5,
    initialRating: 4,
  },
  {
    image: PizzaMeat,
    title: "Pizza Meat",
    description: "Pizza Meat",
    bgColor: "#E6F3F5",
    totalStars: 5,
    initialRating: 3,
  },
  {
    image: DonerKebab,
    title: "Donner Kebab",
    description: "Donner Kebab",
    bgColor: "#EAEEFA",
    totalStars: 5,
    initialRating: 4,
  },
  {
    image: SalmonRoll,
    title: "Salmon Roll",
    description: "Salmon Roll",
    bgColor: "#F9EEF3",
    totalStars: 5,
    initialRating: 5,
  },
  {
    image: CupcakeChoco,
    title: "Cupcake Choco",
    description: "Cupcake Choco",
    bgColor: "#F0FEEB",
    totalStars: 5,
    initialRating: 3,
  },
  {
    image: DoughnutMilk,
    title: "Doughnut Milk",
    description: "Doughnut Milk",
    bgColor: "#F3F7D9",
    totalStars: 5,
    initialRating: 4,
  },
  {
    image: DoughnutUnicorn,
    title: "Doughnut Unicorn",
    description: "Doughnut Unicorn",
    bgColor: "#F3F7D9",
    totalStars: 5,
    initialRating: 5,
  },
  {
    image: KathiKebab,
    title: "Kathi Kebab",
    description: "Kathi Kebab",
    bgColor: "#EAEEFA",
    totalStars: 5,
    initialRating: 4,
  },
];

const trending = () => {
  return (
    <div className="mx-auto container font-rubik">
      <div className="pt-[64.22px] pl-[30px] md:pl-[116px] mb-[55.78px]">
        <p className="text-[38px] font-medium text-[#333333]">
          Browse Our Trending
        </p>
        <p className="text-[38px] font-medium text-[#8BAC3E] mt-[-10px]">
          Receipt
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-[20px] w-full md:h-[642px] pl-[30px] md:pl-[120px] pr-[130px]">
          {data.map((item, index) => (
            <TrendingCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              totalStars={item.totalStars}
              initialRating={item.initialRating}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[68px]">
        <Button href="/" label="ALL Receipt" />
      </div>
    </div>
  );
};

export default trending;
