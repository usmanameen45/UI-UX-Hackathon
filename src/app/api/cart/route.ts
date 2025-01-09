import { NextResponse } from "next/server";
import { data, Data } from "@/data/cartItems";

export const GET: () => Promise<Response> = async () => {
  return NextResponse.json(data.length > 0 ? data : "Your cart is empty");
}

export const POST: (req: Request) => Promise<Response> = async (req: Request) => {
  const body: Data = await req.json();
  data.push(body);

  return NextResponse.json(data);
}