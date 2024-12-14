import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
        <header className="px-6 w-full flex flex-col justify-center items-center bg-white">
            <div className="py-5 flex justify-between items-center w-full">
              <h1 className="text-2xl leading-[29.52px] text-[#22202e] font-montserrat">
                Avion
              </h1>
              <div className="flex justify-between items-center gap-5 md:order-[-1]">
                <IoSearchOutline size={16} stroke="#22202e" />
                <FiMenu size={16} stroke="#22202e" className="md:hidden"/>
              </div>
              <div className="hidden md:flex justify-between items-center gap-5">
              <IoCartOutline size={16} stroke="#22202e"/>
              <CgProfile size={16} stroke="#22202e"/>
              </div>
            </div>

            <hr className="border-0 w-full border-b border-black opacity-10 hidden md:block"/>

            <nav className="hidden md:block w-full py-5">
              <ul className="flex justify-center items-center gap-11 w-full text-[#726e8d] font-inter">
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Plant pots</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Ceramics</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Tables</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Chairs</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Crockery</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Tableware</li>
                <li className="hover:text-[#22202e] transition-colors duration-300 cursor-pointer">Cutlery</li>
              </ul>
            </nav>
          </header>
    )
}

export default Header;