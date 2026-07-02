import { useReducer, useEffect } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

const initialState =
  JSON.parse(localStorage.getItem("cart")) || [];

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}