import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import logoJordan from '../images/logos/logoMain.png';
import ball from '../images/backgrounds/1000_F_152089943_5BqxIJgemQ8TG79pbmYsRFV0vsAlTEqO.jpg';
import background from '../images/backgrounds/Logo.png';
const NavBar = () => {
    return (
        <div className="navbar-wrapper ball" style={{ backgroundImage: `url(${background})`}}>

            
            <div className="left-nav">

                <div className="nav-link-jordan ">
                    <NavLink to="/" >
                        <img src={logoJordan} className='rotating' style={{ boxShadow: '0 2px 0px -1px rgba(0, 0, 0, 0.1'}}/>

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