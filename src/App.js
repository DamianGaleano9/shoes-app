import React from "react";
import { NavBar } from "./components/nav-bar/navbar";
import { Checkout } from "./components/checkout/checkout";

import {Cart} from "./components/cart/cart";

import "font-awesome/css/font-awesome.min.css";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Products/>
      <Pages/>
      <Cart/>
      <Checkout/>
    </div>
  );
}

export default App;
