import './Header.css';
import Logo from './logo.png';
import Twitter from './twitter-logo.png';
import Instagram from './instagram-logo.png';
import Menu from './hamburger-icon.png';
import Close from './cancel-icon.png';
import {useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
const [showMenu, setShowMenu] = useState(false);
    const toggleDropDown = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <nav className="full-screen">
                <img src={Logo} alt="Logo for lodge.me" width='100px' height='50px'/>
                <section className="nav-links">
                    <ul>
                        <li onClick={toggleDropDown}><Link to="/">Home</Link></li>
                        <li onClick={toggleDropDown}><Link to="/about">About</Link></li>
                        <li onClick={toggleDropDown}><Link to="/contact">Contact</Link></li>
                    </ul>
                </section>
                <section className="nav-icons">
                    <img src={Twitter} alt="Twitter logo" width={16} height={16} />
                    <img src={Instagram} alt="Twitter logo" />
                </section>

                {!showMenu && <button className='burger-btn' onClick={toggleDropDown}><img src={Menu} alt="Hamburger menu icon" /></button>
                }
                {showMenu && <button className='close-burger-btn' onClick={toggleDropDown}><img src={Close} alt="Close Hamburger menu icon" width='48px' /></button>}
            </nav>
            {showMenu && <nav className="dropdown-links">
                    <ul>
                        <li onClick={toggleDropDown}><Link to="/">Home</Link></li>
                        <li onClick={toggleDropDown}><Link to="/about">About</Link></li>
                        <li onClick={toggleDropDown}><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>}
        </header>
    );
}
 
export default Header;