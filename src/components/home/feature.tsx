import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiWallet } from "react-icons/pi";
import { PiFlowerTulipDuotone } from "react-icons/pi";

export default function Feature() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-start md:items-center gap-9 py-[48px] xl:py-[60px] px-6 text-[#2A254B]">
      <p className="text-[20px] md:text-[24px] leading-[28px] md:leading-[33.6px] font-montserrat">
        What makes our brand different
      </p>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col justify-start items-start gap-4">
          <TbTruckDelivery size={24} />
          <p className="text-[16px] md:text-[20px] leading-[22.4px] md:leading-7">Next day as standard</p>
          <p className="text-[14px] md:text-base leading-[21px] md:leading-6 font-inter">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <FaRegCheckCircle size={24} />
          <p className="text-[16px] md:text-[20px] leading-[22.4px] md:leading-7">Made by true artisans</p>
          <p className="text-[14px] md:text-base leading-[21px] md:leading-6 font-inter">
            Handmade crafted goods made with real passion and craftmanship
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <PiWallet size={24} />
          <p className="text-[16px] md:text-[20px] leading-[22.4px] md:leading-7">Unbeatable prices</p>
          <p className="text-[14px] md:text-base leading-[21px] md:leading-6 font-inter">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <PiFlowerTulipDuotone size={24} />
          <p className="text-[16px] md:text-[20px] leading-[22.4px] md:leading-7">Recycled packaging</p>
          <p className="text-[14px] md:text-base leading-[21px] md:leading-6 font-inter">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}
