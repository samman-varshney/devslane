import React, { useState, useCallback, useMemo, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/CartPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import { getUserDetails } from "./api";
import { UserContext, CartContext, AlertContext } from "./components/Context";
import Authenticated from "./components/Authenticated";
import Unauthenticated from "./components/Unauthenticated";
import Loader from "./components/Loader";
import Alert from "./components/Alert";

function App() {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setUserLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      getUserDetails(token).then(setUser).catch(() => setUser(null)).finally(() => setUserLoading(false));
    } else {
      setUserLoading(false);
    }

  }, []);


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
  }, [cart]);

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

  if (userLoading) {
    return <Loader />
  }

  return (

    <div className={`min-h-screen w-full ${bgColor} flex flex-col justify-center items-center gap-18`}>

      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <AlertContext.Provider value={{ alert, setAlert }} >
            <CartContext.Provider value={{ cart, setCart, handleAddToCart, handleUpdateCart }}>
              <Alert />
              <Navbar totalQuantity={totalQuantity} />

              <div className="grow flex justify-center items-center w-full h-full">

                <Routes>

                  <Route path="/signIn" element={<Unauthenticated><SignIn updateBgColor={updateBgColor} setUser={setUser} setAlert={setAlert} /></Unauthenticated>} />
                  <Route path="/signUp" element={<Unauthenticated><SignUp updateBgColor={updateBgColor} setuser={setUser}  setAlert={setAlert} /></Unauthenticated>} />
                  <Route path="/forgotpassword" element={<Unauthenticated><ForgotPassword updateBgColor={updateBgColor}  /></Unauthenticated>} />

                  <Route path="/cart" element={<Authenticated><Cart cart={cart} setCart={setCart} /></Authenticated>} />
                  <Route index element={<Authenticated><Home /></Authenticated>} />
                  <Route path="/products/:id" element={<Authenticated><ProductDetail onAddToCart={handleAddToCart} /></Authenticated>} />

                </Routes>
              </div>

              <Footer />
            </CartContext.Provider>
          </AlertContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>

  );
}

export default App;
