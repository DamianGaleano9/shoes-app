import React from "react";
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>


                <li>
                    <Link to="/login">Login</Link>
                </li>


                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}