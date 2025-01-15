"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (starValue: number) => {
    setRating(starValue);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleRating(starValue)}
            onMouseOver={() => setRating(starValue)}
            onMouseOut={() => setRating(initialRating)}
            className="focus:outline-none"
          >
            <FaStar
              className={`w-[10.5px] h-[10.5px] transition-colors duration-300 ${
                starValue <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
