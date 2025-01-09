"use client";
import React, { useState, useEffect, useRef } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import CartItem from "@/components/cart_item";
import { Button_01 } from "@/components/button";
import type { Data } from "@/data/cartItems"; 

function Cart() {
  const [items, setItems] = useState<Data[] | string>([]);

  useEffect(() => {
    const getCartItems = async () => {
      const isDevelopment = process.env.NODE_ENV === "development";
      const baseURL = isDevelopment ? "http://localhost:3000" : "";
      const res = await fetch(`${baseURL}/api/cart`);
      const data = await res.json();
      setItems(data);
    };
    getCartItems();
  }, [items]);

  const cartItems = useRef<HTMLDivElement>(null);
  const [subTotal, setSubTotal] = useState<number[]>([]);

  const handleSubTotal = (index: number, singleItemTotalPrice: number) => {
    setSubTotal((prevSubTotal) => {
      const updatedSubTotal = [...prevSubTotal];
      updatedSubTotal[index] = singleItemTotalPrice;
      return updatedSubTotal;
    });
  };
  console.log(subTotal);
  return (
    <>
      <Header />
      <div className="bg-[#F9F9F9] text-[#2A254B] px-6 md:py-16 py-9 w-full">
        <div className="flex flex-col justify-start items-stretch gap-4 md:gap-12 max-w-[1064px] mx-auto">
          <p className="text-2xl md:text-[36px] md:leading-[50.6px] leading-[33.6px] font-montserrat">
            Your shopping cart
          </p>

          <div className="flex flex-col justify-start items-stretch gap-5">
            <div className="hidden md:flex items-center font-montserrat text-sm leading-[19.6px] text-[#2A254B] pb-3 border-b border-[#EBE8F4]">
              <div className="basis-1/2">
                <p>Products</p>
              </div>
              <div className="basis-1/2 flex justify-between items-center">
                <p className="basis-1/2">Quantity</p>
                <p className="basis-1/2 text-end">Total</p>
              </div>
            </div>

            <div
              className="flex flex-col justify-start items-stretch gap-5 pb-8 border-b border-[#EBE8F4]"
              ref={cartItems}
            >
              {items.length > 0 && typeof items !== "string" ? (
                items.map((item, index) => (
                  <CartItem
                    key={item.slug}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    slug={item.slug}
                    description={item.description}
                    itemPrice={item.price}
                    quantity={item.quantity}
                    getTotal={(total) => handleSubTotal(index, total)}
                  />
                ))
              ) : (
                <p className="font-montserrat text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] text-[#2A254B]">
                  {typeof items === "string" && items ? items : ""}
                </p>
              )}
            </div>
            <div className="flex flex-col justify-start items-end gap-[7px]">
              <p className="font-montserrat text-[20px] leading-[28px] text-[#4E4D93]">
                Subtotal
                <span className="ml-4 text-[24px] leading-[33.6px] text-[#2A254B]">
                  &pound;
                  {subTotal.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
                </span>
              </p>
              <p className="text-inter text-sm leading-[21px] text-[#4E4D93]">
                Taxes and shipping are calculated at checkout
              </p>
              <div className="flex flex-col items-stretch mt-7 text-[#f9f9f9] self-stretch md:self-auto">
                <Button_01
                  bgColor="#2A254B"
                  textColor="#F9F9F9"
                  btnText="Go to checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
