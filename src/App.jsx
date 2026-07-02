import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/Routes";
import Cart from "./pages/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
    <Navbar openCart={() => setIsCartOpen(true)} />
     <AppRoutes />
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
}

export default App;
