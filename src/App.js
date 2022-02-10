import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/home/Home";
import "./App.css";
import ProductDetails from "./components/ProductsList/ProductDetails";
import Navbar from "./components/home/navbar/Navbar";

function App(){ 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetails/>} />
    </Routes>
    </div>
  );
}
export default App;
