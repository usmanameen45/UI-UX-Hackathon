"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useCartLength } from "@/hooks/cartCount";

export function Header() {
  return (
    <header className="px-6 w-full flex flex-col justify-center items-center bg-white">
      <div className="py-5 flex justify-between items-center w-full">
        <h1 className="text-2xl leading-[29.52px] text-[#22202e] font-montserrat">
          <Link href={"/"}>Avion</Link>
        </h1>
        <div className="flex justify-between items-center gap-5 md:order-[-1]">
          <IoSearchOutline size={16} stroke="#22202e" />
          <FiMenu size={16} stroke="#22202e" className="md:hidden" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-5">
          <Link href={"/cart"} className="relative">
            <IoCartOutline size={16} stroke="#22202e" />
            <span
              className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 py-[2px] px-[3px] rounded-[50%] text-white bg-red-500 font-semibold text-center text-[10px] leading-none ${useCartLength() ? "block" : "hidden"}`}
            >
              {useCartLength()}
            </span>
          </Link>
          <CgProfile size={16} stroke="#22202e" />
        </div>
      </div>

      <hr className="border-0 w-full border-b border-black opacity-10 hidden md:block" />

      <nav className="hidden md:block w-full py-5">
        <ul className="flex justify-center items-center gap-11 w-full text-[#726e8d] font-inter">
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Plant pots</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Ceramics</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Tables</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Chairs</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Crockery</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Tableware</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Cutlery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Header_about() {
  const headline = useRef<HTMLDivElement>(null);
  const [headlineVisibility, setHeadlineVisibility] = useState(true);
  const closeHeadline = () => {
    if (headline.current) {
      headline.current.style.display = "none";
      setHeadlineVisibility((prev) => !prev);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (headline.current) headline.current.style.display = "flex";
    }, 60000);
  }, [headlineVisibility]);

  return (
    <header className="w-full flex flex-col justify-center items-stretch bg-white">
      <div
        className="py-2 px-4 flex justify-between items-center text-white bg-[#2A254B]"
        ref={headline}
      >
        <div className="hidden md:inline-block"></div>
        <div className="flex justify-between items-center gap-5">
          <TbTruckDelivery />
          <p className="font-inter text-sm leading-[18.9px]">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>
        <div>
          <IoClose onClick={closeHeadline} className="cursor-pointer" />
        </div>
      </div>
      <div className="py-5 px-6 flex justify-between items-center w-full bg-[#f9f9f9] xs:bg-white">
        <h1 className="text-2xl leading-[29.52px] text-[#22202e] font-montserrat">
          <Link href={"/"}>Avion</Link>
        </h1>
        <div className="flex justify-between items-center gap-5 md:order-[-1] md:hidden">
          <FiMenu size={16} stroke="#22202e" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-8">
          <ul className="flex justify-between items-center gap-8 leading-[21.6px] text-[#726E8D] font-inter">
            <Link href="/about">About us</Link>
            <Link href="/about">Contact</Link>
            <Link href="/shop">Blog</Link>
          </ul>
          <div className="flex justify-between items-center gap-5">
            <IoSearchOutline size={16} stroke="#22202e" />
            <Link href="/cart" className="relative">
              <IoCartOutline size={16} stroke="#22202e" />
              <span
                className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 py-[2px] px-[3px] rounded-[50%] text-white bg-red-500 font-semibold text-center text-[10px] leading-none ${useCartLength() ? "block" : "hidden"}`}
              >
                {useCartLength()}
              </span>
            </Link>
            <CgProfile size={16} stroke="#22202e" />
          </div>
        </div>
      </div>

      <nav className="w-full py-5 hidden xs:flex flex-col justify-center items-stretch bg-[#F9F9F9]">
        <Carousel className="relative text-[#726e8d] font-inter px-[66px] hidden lg:block">
          <CarouselContent className="p-0">
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                All products
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Plant pots
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Ceramics
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Tables
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Chairs
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Crockery
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Tableware
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Cutlery
              </Link>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <Carousel
          className="relative text-[#726e8d] font-inter px-[66px] hidden sm:block lg:hidden"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="p-0">
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                All products
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Plant pots
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Ceramics
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300"
              >
                Tables
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300 cursor-pointer"
              >
                Chairs
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300 cursor-pointer"
              >
                Crockery
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300 cursor-pointer"
              >
                Tableware
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#22202e] transition-all duration-300 cursor-pointer"
              >
                Cutlery
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 top-1/2 -translate-x-1/2 lg:hidden" />
          <CarouselNext className="absolute right-6 top-1/2 -translate-x-1/2 lg:hidden" />
        </Carousel>

        <Carousel
          className="relative text-[#726e8d] font-inter px-[66px] sm:hidden"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="p-0">
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link href="/shop">All products</Link>
              <Link href="/shop">Plant pots</Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link href="/shop">Ceramics</Link>
              <Link href="/shop">Tables</Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link href="/shop">Chairs</Link>
              <Link href="/shop">Crockery</Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center gap-11 p-0">
              <Link href="/shop">Tableware</Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 top-1/2 -translate-x-1/2 lg:hidden" />
          <CarouselNext className="absolute right-6 top-1/2 -translate-x-1/2 lg:hidden" />
        </Carousel>
      </nav>
    </header>
  );
}

export function Header_product() {
  const headline = useRef<HTMLDivElement>(null);
  const [headlineVisibility, setHeadlineVisibility] = useState(true);
  const closeHeadline = () => {
    if (headline.current) {
      headline.current.style.display = "none";
      setHeadlineVisibility((prev) => !prev);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (headline.current) headline.current.style.display = "flex";
    }, 60000);
  }, [headlineVisibility]);

  return (
    <header className="w-full flex flex-col justify-center items-stretch bg-white">
      <div
        className="py-2 px-4 flex justify-between items-center text-white bg-[#2A254B]"
        ref={headline}
      >
        <div className="hidden md:inline-block"></div>
        <div className="flex justify-between items-center gap-5">
          <TbTruckDelivery />
          <p className="font-inter text-sm leading-[18.9px]">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>
        <div>
          <IoClose onClick={closeHeadline} className="cursor-pointer" />
        </div>
      </div>
      <div className="py-5 px-6 flex justify-between items-center w-full bg-white">
        <h1 className="text-2xl leading-[29.52px] text-[#22202e] font-montserrat">
          <Link href={"/"}>Avion</Link>
        </h1>
        <ul className="lg:flex justify-center items-center gap-11 w-full text-[#726e8d] font-inter hidden">
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Plant pots</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Ceramics</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Tables</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Chairs</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Crockery</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Tableware</Link>
          </li>
          <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">
            <Link href="/shop">Cutlery</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-5">
          <IoSearchOutline size={16} stroke="#22202e" />
          <Link href={"/cart"} className="relative">
            <IoCartOutline size={16} stroke="#22202e" />
            <span
              className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 py-[2px] px-[3px] rounded-[50%] text-white bg-red-500 font-semibold text-center text-[10px] leading-none ${useCartLength() ? "block" : "hidden"}`}
            >
              {useCartLength()}
            </span>
          </Link>
          <CgProfile size={16} stroke="#22202e" />
          <FiMenu size={16} stroke="#22202e" className="lg:hidden" />
        </div>
      </div>
    </header>
  );
}
