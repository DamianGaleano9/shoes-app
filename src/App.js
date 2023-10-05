import React from "react";
import { NavBar } from "./components/nav-bar/navbar";
import { Checkout } from "./components/checkout/checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CheckoutPage } from "./components/pages/checkout-page";
import {Cart} from "./components/cart/cart";
import {CartPage} from "./components/pages/cart-page";
import {Home} from "./components/pages/home";
import {Login} from "./components/pages/login";
import {RegisterPage} from "./components/register/register";
import {Products} from "./components/products/products";

function App() {
  return (
    <div className="App">
      <NavBar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout"component={Checkout}/>
        <Route path="/checkout-page"component={CheckoutPage}/>
        <Route path="/cart-page"component={CartPage}/>

        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/products" component={Products}/>


      </Switch>


    </Router> 

    </div>
  );
}

export default App;
