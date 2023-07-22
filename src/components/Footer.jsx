//
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                        doloremque assumenda, ullam ex modi culpa eius repellat voluptate voluptatem
                        labore?
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                            <AiFillInstagram />
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/gallery">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
