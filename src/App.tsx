import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./screens/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./screens/Contact";
import Checkout from "./screens/Checkout";
import ProductDetails from "./screens/ProductDetails";
import Products from "./screens/Products";
import Admin from "./screens/Admin";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const role = useSelector((state: any) => state.auth.role);
  return (
    <div className="App">
      {!isAuth || role == "USER" ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
