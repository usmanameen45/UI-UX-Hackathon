import React from 'react'
import {Card_01, Card_02} from "@/components/card";
import { Button_01 } from "@/components/button";

export function Listing_01() {
  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
            <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">New ceramics</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">

              <Card_01
                src="/images/products/product_01.png"
                alt="new ceramics"
                title="Rustic Vase Set"
                price="155"
              />

              <Card_01
                src="/images/products/product_02.png"
                alt="Lucky lamp"
                title="The Lucky Lamp"
                price="399"
              />

              <Card_01 
                src="/images/products/product_03.png"
                alt="Silky vase"
                title="The Silky Vase"
                price="125"
              />

              <Card_01
                src="/images/products/product_04.png"
                alt="Dandy chair"
                title="The Dandy Chair"
                price="155"
              />
            </div>
            <div className="flex flex-col justify-center items-stretch md:items-center mt-[30px] md:mt-9">
              <Button_01 btnText="View Collection" textColor="#2A254B" bgColor="#f9f9f9"/>
            </div>
          </div>
  )
}

export function Listing_02() {
  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
            <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">Our popular products</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">

              <div className="col-start-1 col-end-3 hidden md:block">
                <Card_02
                  src="/images/products/product_05.jpg"
                  alt="Silky vase"
                  title="The Silky Vase"
                  price="125"
                />
              </div>

              <Card_01
                src="/images/products/product_01.png"
                alt="new ceramics"
                title="Rustic Vase Set"
                price="155"
              />

              <Card_01
                src="/images/products/product_02.png"
                alt="Lucky lamp"
                title="The Lucky Lamp"
                price="399"
              />
            </div>
            <div className="flex flex-col justify-center items-stretch md:items-center mt-[30px] md:mt-9">
              <Button_01 btnText="View Collection" textColor="#2A254B" bgColor="#f9f9f9"/>
            </div>
          </div>
  )
}