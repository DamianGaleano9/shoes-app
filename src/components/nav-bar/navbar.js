import React from "react";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="left-nav">

                <div className="nav-link-wrapper">
                    <NavLink to="/">
                        <img src="public/statics/assets/images/logo.jpg" alt="jordan"/>
                    </NavLink>

                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/products">
                        products
                    </NavLink>

                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/login">
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </NavLink>


                </div>

            </div>
            <div className="right-nav">
                <NavLink to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
            </div>
        </div>


    )
}


export default NavBar;