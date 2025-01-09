import React from "react";
import { Card_01, Card_02 } from "@/components/card";
import { Button_01 } from "@/components/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { Product } from "@/data/productType";
import { productsFetchQuery } from "@/data/fetchProductsQuery";

async function getProducts() {
  const data = await client.fetch(productsFetchQuery);
  return data;
}

export async function Listing_01({
  sectionHeading,
}: {
  sectionHeading: string;
}) {
  const products = await getProducts();

  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
      <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">
        {sectionHeading}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">
        {products.map((product: Product, index: number) => {
          if (index >= 4) return null;
          return (
            <Link
              href={`/shop/${product.slug.current}`}
              key={product.slug.current}
            >
              <Card_01
                src={urlFor(product.src).url()}
                alt={product.src.alt}
                title={product.title}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
      <Link
        className="flex flex-col justify-center items-stretch md:items-center mt-[30px] md:mt-9"
        href="/shop"
      >
        <Button_01
          btnText="View Collection"
          textColor="#2A254B"
          bgColor="#f9f9f9"
        />
      </Link>
    </div>
  );
}

export async function Listing_02() {
  const products = await getProducts();
  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
      <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">
        Our popular products
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">
        <div className="col-start-1 col-end-3 hidden md:block">
          {products.map((product: Product) => {
            if (product.slug.current !== "the-popular-suede-sofa-66368501")
              return null;
            return (
              <Link
                href={`/shop/${product.slug.current}`}
                key={product.slug.current}
              >
                <Card_02
                  src={urlFor(product.src).url()}
                  alt={product.src.alt}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            );
          })}
        </div>

        {products.map((product: Product, index: number) => {
          if (
            product.slug.current !== "the-popular-suede-sofa-66368501" &&
            index < 2
          ) {
            return (
              <Link
                href={`/shop/${product.slug.current}`}
                key={product.slug.current}
              >
                <Card_01
                  src={urlFor(product.src).url()}
                  alt={product.src.alt}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            );
          }
        })}
      </div>
      <Link
        className="flex flex-col justify-center items-stretch md:items-center mt-[30px] md:mt-9"
        href="/shop"
      >
        <Button_01
          btnText="View Collection"
          textColor="#2A254B"
          bgColor="#f9f9f9"
        />
      </Link>
    </div>
  );
}
