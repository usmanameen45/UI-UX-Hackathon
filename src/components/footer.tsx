import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <section className="max-w-[1280px] mx-auto flex flex-col justify-between items-stretch gap-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch pt-10 px-[25px] gap-10 lg:gap-28">
          <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-10 md:basis-1/2 font-light">
            <ul className="flex flex-col gap-3 font-inter text-sm leading-[18.9px]">
              <li className="font-montserrat text-base leading-[19.68px] font-normal">
                Menu
              </li>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
            <ul className="flex flex-col gap-3 font-inter text-sm leading-[18.9px]">
              <li className="font-montserrat text-base leading-[19.68px] font-normal">
                Catogries
              </li>
              <Link href="/shop" >
                Crockey
              </Link>
              <Link href="/shop">
                Furniture
              </Link>
              <Link href="/shop">
                Home ware
              </Link>
              <Link href="/shop">
                Plant pots
              </Link>
              <Link href="/shop">
                Chairs
              </Link>
            </ul>
            <ul className="flex flex-col gap-3 font-inter text-sm leading-[18.9px]">
              <li className="font-montserrat text-base leading-[19.68px] font-normal">
                Our company
              </li>
              <Link href="/about">About us</Link>
              <li>Vacancies</li>
              <Link href="/about">Contact us</Link>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
          <div className="md:basis-1/2">
            <p className="font-montserrat text-base leading-[19.68px] mb-4">
              Join our mailing list
            </p>
            <div className="flex flex-row justify-start items-stretch flex-wrap">
              <input
                type="email"
                name="email"
                placeholder="Your@email.com"
                className="w-[100px] bg-white bg-opacity-15 text-white focus:outline-none py-4 px-8 font-inter text-base leading-[21.6px] grow-[999]"
              />
              <button className="bg-white text-[#2A254B] py-4 px-8 font-inter text-base leading-[24px] text-nowrap grow">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4E4D93] py-5 px-[25px] flex justify-center sm:justify-between items-center">
          <p className="font-inter text-sm leading-[18.9px] font-light">
            Copyright 2022 Avion LTD
          </p>
          <div className="hidden sm:flex justify-between items-center gap-6">
            <FaLinkedin size={24} />
            <FaFacebookSquare size={24} />
            <IoLogoInstagram size={24} />
            <FaSkype size={24} />
            <FaTwitter size={24} />
            <FaPinterest size={24} />
          </div>
        </div>
      </section>
    </footer>
  );
}
