import React from "react";
import { NavBar } from "./components/nav-bar/navbar";
import { Checkout } from "./components/checkout/checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CheckoutPage } from "./components/checkout/checkout-page";
import {Cart} from "./components/cart/cart";
import CartPage from "./components/pages/cart-page";





function App() {
  return (
    <div className="App">
      <NavBar />
    <Router>
      <Switch>
        <Route path="/cart"><CartPage/></Route>
        <Route path="/checkout"><CheckoutPage/></Route>


      </Switch>


    </Router> 

      <Products/>
      <Cart/>
      <Checkout/>
    </div>
  );
}

export default App;
