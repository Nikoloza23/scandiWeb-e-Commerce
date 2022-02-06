import React from 'react'
import './App.css'
import Navbar from './components/home/Navbar'
import {Routes, Route} from 'react-router-dom'
import Products from './components/products/Products';
import Product from './components/products/Product';
import Cart from './components/cart/Cart';


function App() {
   return (
     <div className="App">
    {/* <Navbar />
     <Routes>
      <Route path='/products' element={<Products/>} /> 
      <Route path='/products/:id' element={<Product/>} /> 
      <Route path='/cart' element={<Cart/>} /> 
     </Routes> */}

     
    </div>
  );
}


export default App;

