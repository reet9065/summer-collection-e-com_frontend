// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import AppOutet from "./pages/AppOutet";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import Singup from "./pages/Singup";
import Login from "./pages/Login"

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
            <div className="">
              <Routes>
                <Route path="/" element={<AppOutet />}>
                  <Route  index={true} element={<Home/>} />
                  <Route path="cart" element={<Cart/>} />
                  <Route path="store" element={<Store/>} />
                  <Route path="signup" element={<Singup/>} />
                  <Route path="login" element={<Login/>} />
                </Route>
              </Routes>
            </div>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
