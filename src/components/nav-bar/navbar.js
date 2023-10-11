import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import logoJordan from '../images/logos/logoMain.png';


const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="left-nav">

                <div className="nav-link-jordan rotating">
                    <NavLink to="/" >
                        <img src={logoJordan} />

                    </NavLink>

                </div>

                <div className="nav-link-products">
                    <NavLink to="/products">
                        products
                    </NavLink>

                </div>



            </div>


            <div className="right-nav">


                <div className="nav-link-wrapper">
                    <NavLink to="/login">
                        <FontAwesomeIcon icon={faRightToBracket} className='icon'/>
                    </NavLink>


                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                    </NavLink>

                </div>

            </div>
        </div>


    )
}


export default NavBar;