import React, { useState } from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/home/Home";
import "./App.css";
import Api from "./components/routes/API";

function App(){ 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Api/>} />
    </Routes>
    </div>
  );
}
export default App;
