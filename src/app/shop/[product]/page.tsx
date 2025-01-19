import Footer from "@/components/footer";
import { Header_product } from "@/components/header";
import Feature_2 from "@/components/home/feature";
import { RelatedProducts } from "@/components/home/listing";
import Sign_up from "@/components/home/sign_up";
import React from "react";
import Image from "next/image";
import Quantity from "@/components/quantity";
import { Button_02 } from "@/components/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import QuantityProvider from "@/contexts/itemQuantityProvider";
import type { Product as productType } from "@/data/productType";
import { productsFetchQuery } from "@/data/fetchProductsQuery";

interface ProductProps {
  params: Promise<{ product: string }>;
}

async function Product({ params }: ProductProps) {
  const products = await client.fetch(productsFetchQuery);
  console.log(products);

  const slug = (await params).product;

  const product = products.find(
    (product: productType) => product.slug.current === slug
  );

  if (!product) {
    return (
      <div className="h-screen bg-[#f9f9f9] flex justify-center items-center">
        <h1 className="font-montserrat text-[24px] md:text-4xl leading-[33.6px] md:leading-[44.48px] text-[#2A254B]">
          Product not found
        </h1>
      </div>
    );
  }

  // const [productCategory] = product.category._ref.split("-");

  const similarProducts = products.filter(
    (singleProduct: productType) => {
      // const [singleProductCategory] = singleProduct.category._ref.split("-");
      const isTagIncluded = singleProduct.tags?.some(
        (tag: string) => product.tags?.includes(tag)
      )
      return (
        (singleProduct.category.name === product.category.name || isTagIncluded) && 
        singleProduct._id !== product._id
      )
    }
  );

  const cartItemData = {
    src: urlFor(product.image).url(),
    alt: product.name,
    title: product.name,
    slug: product.slug.current,
    description: product?.description,
    price: product.price,
    quantity: 1
  }

  return (
    <QuantityProvider>
      <Header_product />
      <section className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-start items-stretch">
        <div className="relative aspect-[390/380] bg-[#f9f9f9] md:basis-1/2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            fill={true}
            className={`object-contain object-center`}
          />
        </div>
        <div className="pt-7 px-6 pb-12 lg:p-[60px] xl:p-[100px] flex flex-col justify-start items-stretch gap-7 md:gap-[51px] md:basis-1/2">
          <div className="flex flex-col justify-start items-start gap-3">
            <h2 className="font-montserrat text-[24px] md:text-4xl leading-[33.6px] md:leading-[44.48px] text-[#2A254B]">
              {product.name}
            </h2>
            <p className="font-montserrat text-[20px] md:text-2xl leading-[28px] md:leading-[32.4px] text-[#2A254B]">
              &pound;{product.price}
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 md:gap-4">
            <p className="font-monteserrat leading-[21.4px] md:leading-[19.68px] text-[#2A254B]">
              Product description
            </p>
            <p className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] text-[#2A254B] md:text-[#505977]">
              {product.description
                ? product.description
                : `A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.`}
            </p>
            <ul className="font-inter text-sm md:text-base leading-[21px] md:leading-[21.6px] text-[#2A254B] md:text-[#505977] list-disc list-inside">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-start items-stretch md:items-start gap-4">
            <p className="font-montserrat leading-[22.4px] md:leading-[19.68px] text-[#2A254B]">
              Dimensions
            </p>
            <div className="flex justify-start items-stretch pr-3 md:w-2/3">
              <div className="basis-1/3 border-r border-[#EBE8F4] flex flex-col justify-start items-start gap-[15px]">
                <p className="font-montserrat text-sm leading-[19.6px] md:leading-[17.22px] text-[#2A254B]">
                  Height
                </p>
                <p className="font-inter text-sm leading-[21px] md:leading-[21.6px] text-[#2A254B] md:text-[#505977]">
                  {product.dimensions.height}
                </p>
              </div>
              <div className="basis-1/3 border-r border-[#EBE8F4] flex flex-col justify-start items-center gap-[15px]">
                <p className="font-montserrat text-sm leading-[19.6px] md:leading-[17.22px] text-[#2A254B]">
                  Width
                </p>
                <p className="font-inter text-sm leading-[21px] md:leading-[21.6px] text-[#2A254B] md:text-[#505977]">
                  {product.dimensions.width}
                </p>
              </div>
              <div className="basis-1/3 flex flex-col justify-start items-end gap-[15px]">
                <p className="font-montserrat text-sm leading-[19.6px] md:leading-[17.22px] text-[#2A254B]">
                  Depth
                </p>
                <p className="font-inter text-sm leading-[21px] md:leading-[21.6px] text-[#2A254B] md:text-[#505977]">
                  {product.dimensions.depth}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start md:justify-between items-stretch md:items-start gap-3">
            <div className="flex flex-col md:flex-row justify-start items-stretch md:items-center gap-3 md:gap-[22px]">
              <p className="font-montserrat leading-[22.4px] md:leading-[19.68px] text-[#2A254B]">
                Quantity
              </p>
              <div className="flex flex-col justify-center items-center bg-[#F9F9F9]">
                <Quantity />
              </div>
            </div>
            <div className="text-white flex flex-col justify-start items-stretch">
              <Button_02
                btnText="Add to cart"
                textColor="#fff"
                bgColor="#2A254B"
                cartItem={cartItemData}
              />
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts relatedProducts={similarProducts} />
      <Feature_2 />
      <Sign_up />
      <Footer />
    </QuantityProvider>
  );
}

export default Product;
