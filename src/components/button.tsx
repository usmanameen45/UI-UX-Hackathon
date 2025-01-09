"use client";
import { useQuantityContext } from "@/contexts/itemQuantity";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import type { Data } from "@/data/cartItems";

export function Button_01({
  btnText,
  textColor,
  bgColor,
}: {
  btnText: string;
  textColor: string;
  bgColor: string;
}) {
  return (
    <button
      className={`bg-[${bgColor}] text-[${textColor}] py-4 px-8 font-inter text-base leading-[24px]`}
    >
      {btnText}
    </button>
  );
}

// Add to cart button Component

export function Button_02({
  btnText,
  textColor,
  bgColor,
  cartItem,
}: {
  btnText: string;
  textColor: string;
  bgColor: string;
  cartItem: Data;
}) {
  const { itemQuantity } = useQuantityContext() ?? {};
  if (typeof itemQuantity === "number"){
    cartItem.quantity = itemQuantity
  }

  const [isLoading, setIsLoading] = React.useState(false);

  const addToCart = async () => {
    setIsLoading(true);
    const isDevelopment = process.env.NODE_ENV === "development";
    const baseURL = isDevelopment ? "http://localhost:3000" : "";
    const getRes = await fetch(`${baseURL}/api/cart`);
    const allCartItems = await getRes.json();
    const existingItem =
      typeof allCartItems !== "string"
        ? allCartItems.find((item: Data) => item.slug === cartItem.slug)
        : null;

    if (!existingItem) {
      await fetch(`${baseURL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
    }
    setIsLoading(false);
  };
  return (
    <button
      className={`bg-[${bgColor}] text-[${textColor}] py-4 px-8 font-inter text-base leading-[24px]`}
      onClick={addToCart}
    >
      {isLoading ? (
        <TailSpin
          visible={true}
          height="24"
          width="24"
          color="#fff"
          ariaLabel="Adding to cart"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        btnText
      )}
    </button>
  );
}
