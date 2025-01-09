import { Data } from "@/data/cartItems";
import { useEffect, useState } from "react";

export const useCartLength = () => {
  const [cartItems, setCartItems] = useState<Data[] | string>([]);
  const [cartLength, setCartLength] = useState<number | null>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      const isDevelopment = process.env.NODE_ENV === "development";
      const baseURL = isDevelopment ? "http://localhost:3000" : "";
      const response = await fetch(`${baseURL}/api/cart`);
      const data = await response.json();
      setCartItems(data);
      if (typeof cartItems === "object" && cartItems.length > 0) {
        setCartLength(cartItems.length);
      } else {
        setCartLength(null);
      }
    };
    fetchCartItems();
  }, [cartItems]);

  return cartLength;
};
