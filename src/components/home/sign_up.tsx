import React from 'react'

export default function Sign_up() {
  return (
    <div className="bg-[#F9F9F9] sm:py-[52px] sm:px-6">
            <div className="max-w-[1280px] mx-auto bg-white py-12 px-6 flex flex-col justify-center items-stretch md:items-center gap-16 md:gap-[72px]">
              <div className="flex flex-col justify-between items-stretch gap-4 text-[#2A254B]">
                <p className="text-[20px] md:text-4xl md:leading-[50.4px] md:text-center leading-7 font-montserrat ">Join the club and get the benefits</p>
                <p className="font-inter md:text-center md:max-w-[470px] md:mx-auto text-sm md:text-base md:leading-6 leading-[21px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
              </div>
              <div className="flex flex-row justify-start items-stretch">
                <input type="email" name="email" placeholder="Your@email.com" className="w-[80px] md:w-[354px] bg-[#F9F9F9] focus:outline-none py-4 px-8 font-inter text-base leading-[21.6px] grow" />
                <button className="bg-[#2A254B] text-white py-4 px-8 font-inter text-base leading-[24px] text-nowrap">Sign up</button>
              </div>
            </div>
          </div>
  )
}