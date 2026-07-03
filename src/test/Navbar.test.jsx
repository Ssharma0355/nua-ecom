import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/layout/Navbar"
import CartProvider from "../context/CartProvider";
import { vi } from "vitest";

vi.mock("../hooks/useCart", () => ({
  useCart: () => ({
    cart: [],
    dispatch: vi.fn(),
  }),
}));

test("renders Home link", () => {
  render(
    <BrowserRouter>
      <CartProvider>
      <Navbar openCart={() => {}} />
      </CartProvider>
    </BrowserRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
});