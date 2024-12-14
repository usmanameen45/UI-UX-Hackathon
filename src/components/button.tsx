import React from "react";

export function Button_01({btnText , textColor, bgColor}:{btnText: string, textColor: string , bgColor: string}) {
  return (
    <button className={`bg-[${bgColor}] text-[${textColor}] py-4 px-8 font-inter text-base leading-[24px]`}>
      {btnText}
    </button>
  );
}
