import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      
        <Navbar />
        <div className="h-full min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center my-10 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
