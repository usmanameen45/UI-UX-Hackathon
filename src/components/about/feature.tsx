import React from "react";
import Image from "next/image";
import { Button_01 } from "@/components/button";
import Link from "next/link";

export function Feature_3() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch">
      <div className="flex flex-col md:basis-1/2 justify-start items-stretch self-stretch py-12 lg:py-[72px] px-6 lg:px-[84px] bg-[#F9F9F9]">
        <h4 className="font-montserrat text-[20px] md:text-[24px] leading-[28px] md:leading-[33.6px] text-[#2A254B]">
          Our service isn{"’"}t just personal, it{"’"}s actually hyper
          personally exquisite
        </h4>
        <p className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] mt-[14px] text-[#505977]">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] mt-[14px] text-[#505977] mb-[62px]">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
        <Link className="flex flex-col justify-center items-stretch md:items-start md:mt-auto bg-white md:self-start" href="/about">
          <Button_01
            btnText="Get in touch"
            textColor="#2A254B"
            bgColor="#ffffff"
          />
        </Link>
      </div>
      <div className="relative aspect-[80/67] md:aspect-auto lg:aspect-[80/67] md:basis-1/2 -order-1">
        <Image
          src="/images/about_1.jpeg"
          alt="home_2"
          fill={true}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
export function Feature_4() {
  return (
    <div className="text-white flex flex-col  md:flex-row justify-between items-stretch px-8 py-6 gap-4 lg:py-[60px] lg:px-20">
        <div className="bg-[#2A254B] py-9 px-8 font-inter text-sm leading-[21px] gap-4 flex flex-col items-start justify-start md:basis-1/2 lg:p-16">
          <p className="font-montserrat text-[20px] md:text-[32px] leading-[28px] md:leading-[39.36px]">It started with a small idea</p>
          <p className="mb-10 font-inter text-sm md:text-lg leading-[21px] md:leading-[24.3px]">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
          <Link href="/shop">
            <button className="mt-auto bg-[#f9f9f9] bg-opacity-15 py-4 px-8 font-inter text-base leading-[24px] self-stretch md:self-start">
              View Collection
            </button>
          </Link>
        </div>
        <div className="relative w-full aspect-[342/259] md:basis-1/2">
          <Image src={"/images/about_2.jpeg"} alt="about_2" fill={true}/>
        </div>
      </div>
  )
}


