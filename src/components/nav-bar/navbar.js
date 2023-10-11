import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import logoJordan from '../images/logos/air-jordan-logo-png-transparent.png';

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="left-nav">

                <div className="nav-link-wrapper">
                    <NavLink to="/" >
                        <img src={logoJordan} />
                    </NavLink>

                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/products">
                        products
                    </NavLink>

                </div>



            </div>


            <div className="right-nav">


                <div className="nav-link-wrapper">
                    <NavLink to="/login">
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </NavLink>


                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </NavLink>

                </div>

            </div>
        </div>


    )
}


export default NavBar;