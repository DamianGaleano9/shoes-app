import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/nav-bar/navbar";
import Checkout from "./components/checkout/checkout";
import CheckoutPage from "./components/pages/checkout-page";
import Cart from "./components/cart/cart";
import CartPage from "./components/pages/cart-page";
import Home from "./components/pages/home";
import LoginPage from "./components/pages/login-page";
import RegisterPage from "./components/pages/register-page";
import Products from "./components/products/products";

function App() {
  return (
    <div className="container">
      <Router>
        <div>

          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/checkout-page" component={CheckoutPage} />
            <Route path="/cart-page" component={CartPage} />

            <Route path="/registerpage" component={RegisterPage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/products" component={Products} />

          </Switch>

        </div>
      </Router>

    </div>
  );
}

export default App;
