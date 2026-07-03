import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import CartProvider from "../context/CartProvider";
import { vi } from "vitest";

vi.mock("../hooks/useCart", () => ({
  useCart: () => ({
    cart: [],
    dispatch: vi.fn(),
  }),
}));

test("renders product title", () => {
  render(
    <BrowserRouter>
    <CartProvider>
    <ProductCard
        id={1}
        title="iPhone"
        prodImg="/image.png"
        category="Phones"
        rating={4.5}
        discount={10}
        price={999}
      />
    </CartProvider>
    </BrowserRouter>
  );

  expect(screen.getByText("iPhone")).toBeInTheDocument();
});