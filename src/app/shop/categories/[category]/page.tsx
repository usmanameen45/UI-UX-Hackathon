import Footer from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Card_01 } from "@/components/card";
import { Button_01 } from "@/components/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { Product } from "@/data/productType";
import { productsFetchQuery } from "@/data/fetchProductsQuery";

async function Category({ params }: { params: Promise<{ category: string }> }) {
  const data = await client.fetch(productsFetchQuery);
  const slug = (await params).category;
  const filteredProducts = data.filter(
    (item: Product) =>
      item.category.name.toLowerCase() === slug.replace("-", " ")
  );

  return (
    <>
      <Header />
      <div className='pt-16 md:pt-[123px] pb-8 md:pb-9 px-[92px] lg:px-0 bg-[url("/images/shop_hero_bg.jpeg")] bg-cover bg-center'>
        <h1 className="max-w-[1280px] mx-auto text-4xl leading-[50.6px] text-white font-montserrat text-center lg:text-start lg:pl-20">
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto flex justify-between items-stretch py-5 px-6 md:px-20 lg:px-6 lg:py-2">
        <ul className="hidden lg:flex justify-start items-stretch gap-3 font-inter leading-normal">
          <li className="flex justify-center items-center gap-2 py-3 px-6">
            Category
            <IoMdArrowDropdown />
          </li>
          <li className="flex justify-center items-center gap-2 py-3 px-6">
            Product type
            <IoMdArrowDropdown />
          </li>
          <li className="flex justify-center items-center gap-2 py-3 px-6">
            Price
            <IoMdArrowDropdown />
          </li>
          <li className="flex justify-center items-center gap-2 py-3 px-6">
            Brand
            <IoMdArrowDropdown />
          </li>
        </ul>
        <div className="hidden lg:flex justify-end items-center gap-4 font-inter leading-normal">
          <span className="text-sm">Sorting by:</span>
          <span className="flex justify-center items-center gap-2 py-3 px-6">
            Date added
            <IoMdArrowDropdown />
          </span>
        </div>
        <div className="lg:hidden flex justify-start items-stretch gap-4 flex-wrap">
          <button className="flex justify-center items-center gap-3 px-6 py-4 bg-[#F9F9F9] text-[#2A254B]">
            Filters
            <IoMdArrowDropdown />
          </button>
          <button className="flex justify-center items-center gap-3 px-6 py-4 bg-[#F9F9F9] text-[#2A254B]">
            Sorting
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col justify-start items-stretch py-[28px] px-6 md:px-20 gap-9">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-5 md:gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => {
              return (
                <Link href={`/shop/${product.slug.current}`} key={product._id}>
                  <Card_01
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    title={product.name}
                    price={product.price}
                  />
                </Link>
              );
            })
          ) : (
            <h3 className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px] text-[#2A254B] font-montserrat text-nowrap">
              Products not found
            </h3>
          )}
        </div>
        <div className="flex flex-col justify-center items-stretch md:items-center md:mb-5">
          <Button_01
            btnText="View collection"
            textColor="#2A254B"
            bgColor="#F9F9F9"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
