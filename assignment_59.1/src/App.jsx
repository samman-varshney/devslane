import React, { useState, useCallback, useMemo } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/CartPage";

function App() {
  const [cart, setCart] = useState({});

  const handleAddToCart = useCallback((prodId, quantity) => {
    const prevQuantity = cart[prodId] || 0;
    setCart({
      ...cart,
      [prodId]: Number(prevQuantity) + Number(quantity), // ✅ safer update
    });
  }, [cart]);

  const totalQuantity = useMemo(
    () =>
      Object.keys(cart).reduce(
        (prev, curr) => prev + Number(cart[curr]),
        0
      ),
    [cart]
  );

  return (

    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center gap-18">
      <Router>
        <Navbar totalQuantity={totalQuantity} />
        <div className="grow flex justify-center items-center w-full">

          <Routes>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          </Routes>

        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
