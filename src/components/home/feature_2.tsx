import React from 'react'
import Image from "next/image";
import { Button_01 } from "@/components/button";
export default function Feature_2() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch">
            <div className="flex flex-col md:basis-1/2 justify-start items-stretch self-stretch py-12 lg:py-[72px] px-6 lg:px-[84px]">
              <h4 className="font-montserrat text-[20px] md:text-[24px] leading-[28px] md:leading-[33.6px] text-[#2A254B]">
                From a studio in London to a global brand with over 400 outlets
              </h4>
              <p className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] mt-[14px] text-[#505977]">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </p>
              <p className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] mt-[14px] text-[#505977]">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
              <div className="flex flex-col justify-center items-stretch md:items-start mt-[62px]">
                <Button_01 btnText="Get in touch" textColor="#2A254B" bgColor="#F9F9F9" />
              </div>
            </div>
            <div className="relative aspect-[80/67] md:aspect-auto lg:aspect-[80/67] md:basis-1/2">
              <Image
                src="/images/home_2.jpeg"
                alt="home_2"
                fill={true}
                className="object-cover object-center"
              />
            </div>
          </section>
  )
}

