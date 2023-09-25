import React from "react";
import { NavBar } from "./components/nav-bar";
import { Products } from "./components/products";
import {Pages} from "./components/pages";


function App() {
  return (
    <div className="App">
      <h1>Shoes App</h1>
      <NavBar />
      <Products/>
      <Pages/>
    </div>
  );
}

export default App;
