import React from "react";
import { NavBar } from "./components/nav-bar/navbar";
import { Products } from "./components/products";
import {Pages} from "./components/pages/home";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Products/>
      <Pages/>
    </div>
  );
}

export default App;
