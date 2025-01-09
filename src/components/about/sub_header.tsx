import React from 'react'
import { Button_01 } from "@/components/button";
import Link from 'next/link';
function Sub_header() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 py-[48px] md:py-[60px] px-6 text-[#2A254B] md:px-14  lg:px-32 lg:py-[88px]">
        <p className="font-montserrat text-[32px] leading-[44.8px] lg:leading-[50.4px] lg:text-4xl">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </p>
        <Link className="flex flex-col md:justify-center lg:justify-start self-stretch items-stretch text-nowrap" href="/shop">
          <Button_01
            btnText="View our products"
            textColor="#2A254B"
            bgColor="#F9F9F9"
          />
        </Link>
      </div>
  )
}

export default Sub_header