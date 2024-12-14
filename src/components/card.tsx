import React from "react";
import Image from "next/image";

export function Card_01({
  src,
  alt,
  title,
  price,
}: {
  src: string;
  alt: string;
  title: string;
  price: string;
}) {
  return (
    <div className="flex flex-col justify-start items-stretch gap-6">
      <div className="aspect-[61/75] relative">
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h4 className="text-[20px] leading-7">{title}</h4>
        <p className="text-lg leading-[27px] font-inter">&pound;{price}</p>
      </div>
    </div>
  );
}

export function Card_02({
  src,
  alt,
  title,
  price,
}: {
  src: string;
  alt: string;
  title: string;
  price: string;
}) {
  return (
    <div className="flex flex-col justify-start items-stretch gap-6">
      <div className="aspect-[42/25] relative">
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h4 className="text-[20px] leading-7">{title}</h4>
        <p className="text-lg leading-[27px] font-inter">&pound;{price}</p>
      </div>
    </div>
  );
}
