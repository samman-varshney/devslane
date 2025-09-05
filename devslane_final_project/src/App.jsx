import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/CartPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Authenticated from "./components/Authenticated";
import Unauthenticated from "./components/Unauthenticated";
import Alert from "./components/Alert";
import UserProvider from "./components/Provider/UserProvider";
import AlertProvider from "./components/Provider/AlertProvider";
import CartProvider from "./components/Provider/CartProvider";
import BgColorProvider from "./components/Provider/BgColorProvider";
import { BgColorContext } from "./components/Context";

function AppLayout() {
  const { bgColor } = useContext(BgColorContext);

  return (
    <div
      className={`min-h-screen w-full ${bgColor} flex flex-col justify-center items-center gap-18`}
    >
      <Router>
        <UserProvider>
          <AlertProvider>
            <CartProvider>
              <Alert />
              <Navbar />
              <div className="grow flex justify-center items-center w-full h-full">
                <Routes>
                  <Route
                    path="/signIn"
                    element={
                      <Unauthenticated>
                        <SignIn />
                      </Unauthenticated>
                    }
                  />
                  <Route
                    path="/signUp"
                    element={
                      <Unauthenticated>
                        <SignUp />
                      </Unauthenticated>
                    }
                  />
                  <Route
                    path="/forgotpassword"
                    element={
                      <Unauthenticated>
                        <ForgotPassword />
                      </Unauthenticated>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <Authenticated>
                        <Cart />
                      </Authenticated>
                    }
                  />
                  <Route
                    index
                    element={
                      <Authenticated>
                        <Home />
                      </Authenticated>
                    }
                  />
                  <Route
                    path="/products/:id"
                    element={
                      <Authenticated>
                        <ProductDetail />
                      </Authenticated>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </CartProvider>
          </AlertProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

function App() {
  return (
    <BgColorProvider>
      <AppLayout />
    </BgColorProvider>
  );
}

export default App;
