import './nav.css';
import Logo from '../asset/logo.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div className = 'Nav'>
            <div id = 'logo-nav-holder'>
                <div id = 'logo-holder'>
                    <img id = 'logo' src = { Logo } alt = 'The logo' />  
                    <h5>FE Engineer Test 1</h5>

                </div>
                <NavLink to = "/" className = 'Nav-item'><i id = 'home-icon' className = 'fas fa-home' ></i>Home</NavLink>
            </div>
            <div id = 'user-info-holder'>
                <i id = 'bell-icon' className = 'fas fa-bell'></i>
                {/* <img id = 'user-photo' src = { } alt = 'User photo' /> */}
                <i id = 'down-arrow-icon' className = 'fas fa-chevron-down'></i>
            </div>
        </div>
    )
}

export default Nav;