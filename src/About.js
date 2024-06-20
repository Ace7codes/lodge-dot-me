import './About.css';
import Logo from './logo.png'

const About = () => {
    return (
        <section className="about">
            <h1>About Us</h1>
            <section className="about-hero">
            <h2>Explore accommodations befiting royalty</h2>
            </section>
            <section className="about-text">
            <img src={Logo} alt="Our logo" width={300} height='auto'/>
                <p>At lodge.me, we have carefully curated over 100 lodgings, accomodations, resorts and event venues. A search by state returns 3 top rated locations in every state in Nigeria. Our recommendation metric takes into account the security, comfort and comments of users across several platforms and search engines.</p>
                <p>Our philosophy is simple: If you want to travel Nigeria, why not experience something befiting Nigerian royalty?</p>
                <p>In our own not-so-little way, let's make your stay that bit more enjoyable... You'll thank us later!</p>
            </section>
        </section>
    );
}
 
export default About;