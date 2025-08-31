import React, { useState, useCallback, useMemo, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/CartPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const handleAddToCart = useCallback((prodId, quantity) => {
    const prevQuantity = cart[prodId] || 0;
    const newCart = {
      ...cart,
      [prodId]: Number(prevQuantity) + Number(quantity), // ✅ safer update
    };
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }, [cart]);

  const handleUpdateCart = useCallback((newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }, []);

  const totalQuantity = useMemo(
    () =>
      Object.keys(cart).reduce(
        (prev, curr) => prev + Number(cart[curr]),
        0
      ),
    [cart]
  );

  const [bgColor, setBgColor] = useState("bg-gray-100");
  const updateBgColor = useCallback((color) => {
    setBgColor(color);
  }, []);

  return (

    <div className={`min-h-screen w-full ${bgColor} flex flex-col justify-center items-center gap-18`}>

      <Router>
        <CartContext.Provider value={{ cart, setCart, handleAddToCart, handleUpdateCart }}>
          <Navbar totalQuantity={totalQuantity} />

          <div className="grow flex justify-center items-center w-full h-full">

            <Routes>
              <Route path="/signIn" element={<SignIn updateBgColor={updateBgColor} />} />
              <Route path="/signUp" element={<SignUp updateBgColor={updateBgColor} />} />
              <Route path="/forgotpassword" element={<ForgotPassword updateBgColor={updateBgColor} />} />

              <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
              <Route index element={<Home />} />
              <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />

            </Routes>
          </div>

          <Footer />
        </CartContext.Provider>

      </Router>
    </div>

  );
}

export default App;
