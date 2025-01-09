import { NextResponse } from "next/server";
import { data } from "@/data/cartItems";

// const GET = async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {

//     const slug = (await params).slug;

//     const isDevelopment = process.env.NODE_ENV === "development";
//     const baseURL = isDevelopment ? "http://localhost:3000" : "";
//     const res = await fetch(`${baseURL}/api/cart`);
//     const allCartItems = await res.json();
//     const filteredItem = allCartItems.find((item: Data) => item.slug === slug);
//     return NextResponse.json(filteredItem);
// };

export const DELETE: (
  req: Request,
  context: { params: Promise<{ slug: string }> }
) => Promise<Response> = async (req, { params }) => {
  const slug = (await params).slug;
  if (slug) {
    const index = data.findIndex((item) => item.slug === slug);
    if (index >= 0) {
      data.splice(index, 1);
    }
  }
  return NextResponse.json(data);
};
