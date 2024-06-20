import './Footer.css'
import Twitter from './twitter-logo.png';
import Instagram from './instagram-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date();

    return (
        <footer>
            <section className="footer-logo">
                <img src={Twitter} alt="X logo" width={16} height={16} />
                <img src={Instagram} alt="Instagram logo" />
            </section>
            <section className="copyright">
                <p>&copy;{year.getFullYear()} Lodge.me</p>
                <p>All Rights Reserved</p>
                <p>Terms and Conditions</p>
            </section>
            <section className="footer-links">
                <h4>Lodge.me</h4>
                <p><Link to="/about">About us</Link></p>
                <p><Link to="/contact">Contact us</Link></p>
            </section>
        </footer>
    );
}
 
export default Footer;