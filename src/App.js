import React, { useState } from "react";
import Navbar from "../src/components/home/Navbar";
import "./App.css";
import Data from "./components/pages/data/Data";

function App() {
  const [categoryName, setCategoryName] = useState("all");
  return (
    <div className="App">
      <Navbar setCategoryName={setCategoryName} />
      <Data categoryName={categoryName} />
    </div>
  );
}

export default App;
