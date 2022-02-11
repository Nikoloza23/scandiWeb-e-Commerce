import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import ProductDetails from "./components/ProductsList/details/ProductDetails";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  const [categoryName, setCategoryName] = useState("all");

  return (
    <div className="App">
      <Navbar setCategoryName={setCategoryName} />
      <Routes>
        <Route path="/" element={<Home categoryName={categoryName} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;
