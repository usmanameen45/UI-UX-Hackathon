"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

interface cartItemProps {
  src: string;
  alt: string;
  title: string;
  slug: string;
  description?: string;
  itemPrice: number;
  quantity: number;
  getTotal: (total: number) => void;
}

function CartItem({
  src,
  alt,
  title,
  slug,
  description,
  itemPrice,
  quantity,
  getTotal,
}: cartItemProps) {

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(itemPrice * itemQuantity);
  const increaseQuantity = () => {
    if (itemQuantity < 10) {
      setItemQuantity(itemQuantity + 1);
      setTotalPrice(totalPrice + itemPrice);
    }
  };
  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setTotalPrice(totalPrice - itemPrice);
    }
  };
  
  const removeItem = async () => {
    const isDevelopment = process.env.NODE_ENV === "development";
    const baseURL = isDevelopment ? "http://localhost:3000" : "";
    await fetch(`${baseURL}/api/cart/${slug}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    getTotal(0);
  };

  useEffect(() => {
    getTotal(totalPrice);
  }, [totalPrice]);


  return (
    <div className="md:flex">
      <div className="md:basis-1/2 md:flex">
        <div className="flex justify-start items-stretch gap-[22px] md:basis-2/3">
          <div className="aspect-[61/75] relative basis-2/5 self-start">
            <Image
              src={src}
              alt={alt}
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 md:py-3 basis-3/5">
            <h5 className="font-montserrat leading-[22.4px]">{title}</h5>
            <p className="text-sm font-inter leading-[21px]">
              {description
                ? description
                : "A timeless ceramic vase with a tri color grey glaze."}
            </p>
            <p className="font-inter text-base leading-6">&pound;{itemPrice}</p>
            <button
              className="text-red-500 text-xs md:text-sm font-inter"
              onClick={removeItem}
            >
              Remove
            </button>
            <div className="py-3 px-8 inline-block font-inter leading-[21.6px] relative md:hidden mt-auto">
              <div
                className="flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={decreaseQuantity}
              >
                <FiMinus size={16} />
              </div>
              <p className="w-10 text-center">{itemQuantity}</p>
              <div
                className="flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={increaseQuantity}
              >
                <FiPlus size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex basis-1/2">
        <div className="basis-1/2">
          <div className="py-3 px-4 inline-block font-inter leading-[21.6px] relative">
            <div
              className="flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={decreaseQuantity}
            >
              <FiMinus size={16} />
            </div>
            <p className="w-10 text-center">{itemQuantity}</p>
            <div
              className="flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={increaseQuantity}
            >
              <FiPlus size={16} />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="font-inter text-lg leading-[27px] py-3 text-end">
            &pound;{totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
