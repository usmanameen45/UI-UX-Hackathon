"use client";
import { useQuantityContext } from "@/contexts/itemQuantity";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function Quantity() {

  const { itemQuantity, setItemQuantity } = useQuantityContext() ?? {};

  const increaseQuantity = () => {
    if (itemQuantity && itemQuantity < 10 && setItemQuantity) {
      setItemQuantity((prev) => prev + 1);
    }
  };
  const decreaseQuantity = () => {
    if (itemQuantity && itemQuantity > 1 && setItemQuantity) {
      setItemQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="py-3 px-12 font-inter leading-[21.6px] relative">
      <div
        className="flex justify-center items-center absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#CAC6DA]"
        onClick={decreaseQuantity}
      >
        <FiMinus size={16} />
      </div>
      <p className="w-10 text-center">{itemQuantity}</p>
      <div
        className="flex justify-center items-center absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#CAC6DA]"
        onClick={increaseQuantity}
      >
        <FiPlus size={16} />
      </div>
    </div>
  );
}

export default Quantity;
