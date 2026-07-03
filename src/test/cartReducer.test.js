import { describe, expect, it } from "vitest";
import { cartReducer } from "../context/CartReducer"

describe("Cart Reducer", () => {
  it("should add item to cart", () => {
    const state = [];

    const action = {
      type: "ADD_TO_CART",
      payload: {
        id: 1,
        title: "Product",
        price: 10,
      },
    };

    const result = cartReducer(state, action);

    expect(result).toHaveLength(1);
    expect(result[0].quantity).toBe(1);
  });

  it("should increment quantity", () => {
    const state = [
      {
        id: 1,
        quantity: 1,
      },
    ];

    const result = cartReducer(state, {
      type: "INCREMENT",
      payload: 1,
    });

    expect(result[0].quantity).toBe(2);
  });
});