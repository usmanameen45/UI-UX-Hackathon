"use client"
import QuantityContext from "./itemQuantity";
import { useState } from "react";

const QuantityProvider = ({ children }: { children: React.ReactNode }) => {
    const [itemQuantity, setItemQuantity] = useState(1);
    return (
        <QuantityContext.Provider value={{ itemQuantity, setItemQuantity }}>
            {children}
        </QuantityContext.Provider>
    );
};

export default QuantityProvider;