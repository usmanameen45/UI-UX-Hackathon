import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full lg:py-[60px]">
      <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-stretch bg-[#2A254B] text-white pt-10 pb-6 px-6 md:p-0">
        <div className="flex flex-col justify-between items-start md:items-center lg:items-start basis-full lg:basis-1/2 xl:basis-2/3 md:p-[60px]">
          <h2 className="font-montserrat text-[32px] md:text-center lg:text-start leading-[44.8px]">
            The furniture brand for the future, with timeless designs
          </h2>
          <Link href="/shop">
            <button className="hidden md:inline-block mt-[41px] bg-[#f9f9f9] bg-opacity-15 py-4 px-8 text-white font-inter text-base leading-[24px]">
              View Collection
            </button>
          </Link>
          <div className="font-inter flex flex-col justify-between items-start gap-8 mt-20">
            <p className="text-lg leading-[27px] md:text-center lg:text-start md:w-[80%] lg:w-full md:mx-auto">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <Link href="/shop">
              <button className="md:hidden bg-[#f9f9f9] bg-opacity-15 w-full py-4 text-white font-inter text-base leading-[24px]">
                View Collection
              </button>
            </Link>
          </div>
        </div>

        <div className="basis-1/2 xl:basis-1/3 hidden lg:block relative grow">
          <Image
            src={"/images/hero_image.jpg"}
            alt="hero"
            fill={true}
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
