"use client";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface QuantityContextType {
  itemQuantity: number;
  setItemQuantity: Dispatch<SetStateAction<number>>;
}

const QuantityContext = createContext<QuantityContextType | null>(null);

export const useQuantityContext = () => useContext(QuantityContext);

export default QuantityContext;
