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

export async function NewCeramics() {
  const products = await getProducts();
  const newCeramics = products.filter((product: Product) =>
    product.tags?.includes("new ceramics")
  );

  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
      <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">
        New ceramics
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">
        {newCeramics.map((product: Product, index: number) => {
          if (index >= 4) return null;
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

export async function PopularProducts() {
  const products = await getProducts();
  const popularProducts = products.filter((product: Product) =>
    product.tags?.includes("popular products")
  );
  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
      <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">
        Our popular products
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">
        <div className="col-start-1 col-end-3 hidden md:block">
          {popularProducts.map((product: Product) => {
            if (product._id !== "product-1") return null;
            return (
              <Link href={`/shop/${product.slug.current}`} key={product._id}>
                <Card_02
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  title={product.name}
                  price={product.price}
                />
              </Link>
            );
          })}
        </div>

        {popularProducts
          .filter((product: Product) => product._id !== "product-1")
          .map((product: Product, index: number) => {
            return index < 2 ? (
              <Link href={`/shop/${product.slug.current}`} key={product._id}>
                <Card_01
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  title={product.name}
                  price={product.price}
                />
              </Link>
            ) : null;
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

export async function RelatedProducts({ relatedProducts }: { relatedProducts: Product[] }) {
  const products = relatedProducts

  return (
    <div className="max-w-[1280px] mx-auto px-[26px] py-12 xl:py-20 text-[#2A254B] font-montserrat">
      <p className="text-[20px] md:text-[32px] leading-[24.6px] md:leading-[39.36px]">
        {products.length > 0 ? "You might also like" : "No related products found"}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 md:mt-8">
        {products.map((product: Product, index: number) => {
          if (index >= 4) return null;
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
        })}
      </div>
    </div>
  );
}
