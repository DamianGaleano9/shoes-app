import React from "react";
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            shoes
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>

                </ul>

                <div className="cart">

                </div>
            </nav>
        </div>


    )
}